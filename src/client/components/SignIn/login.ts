import { Client } from '@logux/client';
import { successAuth, unsuccessAuth } from "../../store/auth";

interface Credentials {
    email: string;
    password: string;
}

export const login = (client: Client, { password, email }: Credentials) => {
    client.type('login/done', action => {
        successAuth({ id: action.id, name: action.name})
    })

    client.type('logux/undo', action => {
        unsuccessAuth(action.reason);
    })

    client.start()
    client.log.add({ type: 'login', email, password }, { sync: true })
}