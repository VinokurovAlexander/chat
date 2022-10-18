import { nanoid } from "nanoid";
import bcrypt from "bcrypt";

const users = [];

export default (server) => {
    server.auth(user => {
        const { userId } = user;

        if (userId === 'anonymous') {
            return true
        } else {
            return users.find(user => user.id === userId)
        }
    })


    server.type('signin', {
        access(ctx) {
            return ctx.userId === 'anonymous'
        },

        async process(ctx, action ,meta) {
            const { password, email } = action;

            const user = users.find(user => user.email === email);

            if (!user) {
                server.undo(action, meta, 'User no find');
            } else if (await bcrypt.compare(password, user.password)) {
                ctx.sendBack({ type: 'signin/done', name: user.name, id: user.id })
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

            const user = users.find(user => user.email === email);

            if (user) {
                server.undo(action, meta, 'User is already exists')
            } else {
                const passwordHash = await bcrypt.hash(password, 5);
                const newUser = {
                    id: nanoid(4),
                    email,
                    password: passwordHash,
                    name: name
                };

                users.push(newUser)

                ctx.sendBack({ type: 'signup/done', id: newUser.id, name: newUser.name })
            }
        }
    })
}