import { Client } from "@logux/client";

import { setUser, setError } from "../../../shared/store/auth";


export interface Credentials {
    email: string;
    password: string;
    name: string;
}

export const signup = (client: Client, { email, password, name }: Credentials) => {
    client.type('signup/done', action => {
        const { user } = action;

        setUser(user)
    })

    client.type('logux/undo', action => {
        setError(action.reason)
    })

    client.log.add({ type: 'signup', email, password, name }, { sync: true })
}