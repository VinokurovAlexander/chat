import { Client } from '@logux/client';

import { successAuth, unsuccessAuth } from "../../../shared/store/auth";

interface Credentials {
    email: string;
    password: string;
}

export const signin = (client: Client, { password, email }: Credentials) => {
    client.type('signin/done', action => {
        successAuth({ id: action.id, name: action.name})
    })

    client.type('logux/undo', action => {
        unsuccessAuth(action.reason);
    })

    client.log.add({ type: 'signin', email, password }, { sync: true })
}