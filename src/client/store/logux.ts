import { computed } from "nanostores";
import { Client, log } from "@logux/client";

import { getUserId } from "./auth";

const client = new Client({
    server: 'ws://localhost:31337',
    subprotocol: '1.0.0',
    userId: 'anonymous'
})

client.start();
log(client);

export const loguxClient = computed(getUserId, id => {
    if (id) {
        client.changeUser(id)
    }

    return client;
})

