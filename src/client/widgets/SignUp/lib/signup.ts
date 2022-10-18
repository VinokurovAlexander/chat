import { Client } from "@logux/client";

import { successAuth, unsuccessAuth } from "../../../shared/store/auth";


export interface Credentials {
    email: string;
    password: string;
    name: string;
}

export const signup = (client: Client, { email, password, name }: Credentials) => {
    client.type('signup/done', action => {
        successAuth({ name: action.name, id: action.id })
    })

    client.type('logux/undo', action => {
        unsuccessAuth(action.reason)
    })

    client.log.add({ type: 'signup', email, password, name }, { sync: true })
}