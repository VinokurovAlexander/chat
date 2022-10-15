import { Client } from '@logux/client';
import { successAuth, unsuccessAuth } from "../../store/auth";

export const login = (email: string, password: string ) => {
    let client = new Client({
        subprotocol: '1.0.0',
        server: 'ws://localhost:31337',
        userId: 'anonymous'
    })

    client.type('login/done', action => {
        successAuth({ id: action.id, name: action.name})
    })

    client.type('logux/undo', action => {
        unsuccessAuth(action.reason);
    })

    client.start()
    client.log.add({ type: 'login', email, password }, { sync: true })
}