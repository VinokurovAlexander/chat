import { ChannelErrors, ClientContext, ReactErrorHandlers } from "@logux/client/react";
import { FC, PropsWithChildren} from "react";
import { CrossTabClient, log } from "@logux/client";

const errorPages: ReactErrorHandlers = {
    NotFound: () => <p>404</p>,
    AccessDenied: () => <p>403</p>,
    Error: () => <p>500</p>
}

interface LoguxProvider {
    userId: string;
}


const getClient = (userId: string) => {
    const client = new CrossTabClient({
        server: 'ws://localhost:31337',
        subprotocol: '1.0.0',
        userId: userId
    })

    client.start();
    log(client);

    return client;
}


const LoguxProvider: FC<PropsWithChildren<LoguxProvider>> = ({ children, userId }) =>
    (
        <ClientContext.Provider value={getClient(userId)}>
            <ChannelErrors {...errorPages}>
                {children}
            </ChannelErrors>
        </ClientContext.Provider>
    )


export default LoguxProvider;