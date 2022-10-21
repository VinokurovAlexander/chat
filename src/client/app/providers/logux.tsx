import { ChannelErrors, ClientContext, ReactErrorHandlers } from "@logux/client/react";
import { FC, PropsWithChildren} from "react";
import { useStore } from "@nanostores/react";

import { loguxClient } from "../../shared/store/logux";

const errorPages: ReactErrorHandlers = {
    NotFound: () => <p>404</p>,
    AccessDenied: () => <p>403</p>,
    Error: () => <p>500</p>
}

const LoguxProvider: FC<PropsWithChildren> = ({ children }) => {
    const client = useStore(loguxClient);

    return (
        <ClientContext.Provider value={client}>
            <ChannelErrors {...errorPages}>
                {children}
            </ChannelErrors>
        </ClientContext.Provider>
    )
}


export default LoguxProvider;