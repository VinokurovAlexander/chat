import { nanoid } from "nanoid";
import bcrypt from "bcrypt";
import jwt from 'jwt-simple';

import {TokenModel, UserModel} from "../db/index.js";

const users = [];

const { JWT_SECRET } = process.env;

export default (server) => {
    server.auth(user => {
        const { userId, token } = user;

        if (userId === 'anonymous') {
            return true
        } else {
            const data = jwt.decode(token, JWT_SECRET);

            return data.sub === userId;
        }
    })

    server.type('signin', {
        access(ctx) {
            return ctx.userId === 'anonymous'
        },

        async process(ctx, action ,meta) {
            const { password, email } = action;

            const user = await UserModel.findOne({ email }).exec();

            if (!user) {
                server.undo(action, meta, 'User no find');
            } else if (await bcrypt.compare(password, user.password)) {
                const { token } = await TokenModel.findOne({ userId: user._id }).exec();

                ctx.sendBack({
                    type: 'signin/done',
                    user: {
                        name: user.name,
                        id: user.id,
                        token,
                        // might be unnecessary data
                        isVerified: user.isVerified ,
                        verificationId: user.verificationId,
                    }
                })
            } else {
                server.undo(action, meta, 'Not valid password');
            }
        }
    })

    server.type('signup', {
        access(ctx) {
            return ctx.userId === 'anonymous'
        },

        async process(ctx, action, meta) {
            const { password, email, name } = action;

            const user = await UserModel.findOne({ email }).exec();

            if (user) {
                server.undo(action, meta, 'User is already exists')
            } else {
                const passwordHash = await bcrypt.hash(password, 5);

                const newUser = {
                    email,
                    password: passwordHash,
                    name: name,
                    isVerified: false,
                    verificationId: nanoid(6),
                };

                const { id } = await UserModel.create(newUser);

                const token = jwt.encode({ sub: id }, JWT_SECRET);

                await TokenModel.create({ userId: id, token })

                ctx.sendBack({ type: 'signup/done', user: { ...newUser, token, id } })
            }
        }
    })

    server.type('verify', {
        access(ctx) {
            return users.find(user => user.id === ctx.userId)
        },

        async process(ctx, action, meta) {
            const { verificationId, userId } = action;

            const user = users.find(user => user.id === userId);

            if (user.verificationId === verificationId) {
                user.isVerified = true;

                ctx.sendBack({ type: 'verify/done', user })
            } else {
                server.undo(action, meta, 'Not correct verified id')
            }
        }
    })

    server.type('user', {
        access(ctx) {
            return ctx.userId === 'anonymous'
        },

        async process(ctx, action, meta) {
            const { userId, token } = action;

            const user = await UserModel.findById(userId).exec();

            if (!user) {
                server.undo(action, meta, 'User not find')

                return
            }

            const data = jwt.decode(token, JWT_SECRET);
            const isTokenValid = data.sub === userId;

            if (isTokenValid) {
                ctx.sendBack({
                    type: 'user/done',
                    user: {
                        id: user._id,
                        name: user.name,
                        isVerified: user.isVerified,
                        verificationId: user.verificationId,
                        token
                    }
                })
            } else {
                server.undo(action, meta, 'Token no valid')
            }
        }
    })
}