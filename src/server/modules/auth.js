const users = [
    {
        id: 'aabb',
        email: 'admin@mail.com',
        password: 'admin',
        name: 'Admin'
    },
    {
        id: 'sfEf',
        email: 'alex@mail.com',
        password: 'pass',
        name: 'Alex'
    }
]

export default (server) => {
    server.auth(user => {
        const { userId } = user;

        if (userId === 'anonymous') {
            return true
        } else {
            return users.find(user => user.id === userId)
        }
    })


    server.type('login', {
        access(ctx) {
            return ctx.userId === 'anonymous'
        },

        process(ctx, action ,meta) {
            const { password, email } = action;

            const user = users.find(user => user.password === password && user.email === email)

            if (user) {
                ctx.sendBack({ type: 'login/done', name: user.name, id: user.id })
            } else {
                server.undo(action, meta, 'Not valid credentials');
            }
        }
    })
}