import { FC, useEffect } from "react";
import { useStore } from "@nanostores/react";
import { useClient } from "@logux/client/react";
import { useNavigate } from "react-router-dom";

import {authStore} from "../../../shared/store/auth";
import {AuthForm, Credentials} from "../../../shared/components/AuthForm";
import { Route } from "../../../shared/config/routes";

import { login } from "../lib/login";


interface SignIn {
    className?: string;
}

const SignIn: FC<SignIn> = ({ className }) => {
    const client = useClient();
    const navigation = useNavigate();

    const { user, error } = useStore(authStore);

    const handleSubmit = (creds: Credentials) => {
       login(client, creds);
    }

    useEffect(() => {
        if (user) {
            navigation('/chat')
        }
    },[user])

    return (
        <div className={className}>
            <AuthForm
                error={error}
                onSubmit={handleSubmit}
                title="Sign In"
                navLink={{ title: 'Don`t have an account? Sign up', to: Route.SIGN_UP}}
            />
        </div>
    )
}

export default SignIn;