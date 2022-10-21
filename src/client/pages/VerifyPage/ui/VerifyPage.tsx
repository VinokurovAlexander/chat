import {useParams} from "react-router-dom";
import {useEffect} from "react";
import { useClient } from "@logux/client/react";
import { useStore } from "@nanostores/react";

import { ProtectedChild } from "../../../shared/components/ProtectedRoute";
import { Notice } from "../../../shared/components/Notice";
import { authStore } from "../../../shared/store/auth";

import { verify } from "../lib/verify";

export default ({ user }: ProtectedChild) => {
    const { id: verificationId } = useParams();
    const client = useClient();

    const { error } = useStore(authStore);

    const { isVerified, id: userId } = user;

    useEffect(() => {
        if (!isVerified) {
            verify(client, { verificationId, userId });
        }
    }, [isVerified])

    return (
        <div>
            {isVerified && (
                <Notice
                    title="Thank you!"
                    description={['Your email address is confirmed']}
                    button={{
                        title: `Let's rock!`
                    }}
                />
            )}
            {error && <p>{error}</p>}
        </div>
    )
}
