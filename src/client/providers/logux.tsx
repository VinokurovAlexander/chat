import { ChannelErrors, ClientContext, ReactErrorHandlers } from "@logux/client/react";
import { ReactNode, FC } from "react";
import { CrossTabClient, log } from "@logux/client";

const errorPages: ReactErrorHandlers = {
    NotFound: () => <p>404</p>,
    AccessDenied: () => <p>403</p>,
    Error: () => <p>500</p>
}

const client = new CrossTabClient({
    server: 'ws://localhost:31337',
    subprotocol: '1.0.0',
    userId: '1'
})

client.start();
log(client);

interface LoguxProvider {
    children?: ReactNode;
}

const LoguxProvider: FC<LoguxProvider> = ({ children }) => (
    <ClientContext.Provider value={client}>
        <ChannelErrors {...errorPages}>
            {children}
        </ChannelErrors>
    </ClientContext.Provider>
)

export default LoguxProvider;