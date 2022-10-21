import { Client } from '@logux/client';

import { setUser, setError } from "../../../shared/store/auth";

interface Credentials {
    email: string;
    password: string;
}

export const signin = (client: Client, { password, email }: Credentials) => {
    client.type('signin/done', action => {
        const { user } = action;

        setUser(user)
    })

    client.type('logux/undo', action => {
        setError(action.reason);
    })

    client.log.add({ type: 'signin', email, password }, { sync: true })
}