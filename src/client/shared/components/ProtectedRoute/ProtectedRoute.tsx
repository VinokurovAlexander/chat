import { useStore } from "@nanostores/react";
import { ReactElement, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { getUser, User } from "../../store/auth";
import { Route } from "../../config/routes";

export interface ProtectedChild {
    user: User
}

interface ProtectedRoute {
    needVerification?: boolean;
    render: ({ user }: ProtectedChild) => ReactElement
}

export default ({ render, needVerification = false }: ProtectedRoute ) => {
    const user = useStore(getUser);
    const navigate = useNavigate();

    useEffect(() => {
        // need loader
        if (!user) {
            navigate(Route.SIGN_IN);

            return
        }

        // maybe move this logic to VerifiedRoute
        if (needVerification && !user.isVerified) {
            navigate(Route.WARN)

            return
        }
    }, [user])

    return user && render({ user })
}