import { computed } from "nanostores";
import { Client, log } from "@logux/client";

import {getUser, setError, setUser} from "./auth";

const client = new Client({
    server: 'ws://localhost:31337',
    subprotocol: '1.0.0',
    userId: 'anonymous',
})

client.start();
log(client);

const userId = localStorage.getItem('userId');
const token = localStorage.getItem('token');

if (userId && token) {
    client.type('user/done', action => {
        setUser(action.user)
    })

    client.type('logux/undo', action => {
        setError(action.reason);
    })

    client.log.add({ type: 'user', userId, token }, { sync: true })
}

export const loguxClient = computed(getUser, user => {
    const userId = user?.id;
    const token = user?.token;

    console.log(user);

    if (userId) {
        client.changeUser(userId, token);
    }

    return client;
})

