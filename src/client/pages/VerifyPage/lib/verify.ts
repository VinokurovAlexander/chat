import {Client} from "@logux/client";

import {setError, setUser} from "../../../shared/store/auth";

interface Params {
    verificationId: string;
    userId: string;
}

export const verify = (client: Client, { verificationId, userId }: Params) => {
    client.type('verify/done', action => {
        setUser(action)
    })

    client.type('logux/undo', action => {
        setError(action.reason)
    })

    client.log.add({ type: 'verify', verificationId, userId })
}