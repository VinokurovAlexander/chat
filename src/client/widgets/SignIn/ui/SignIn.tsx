import { FC } from "react";
import { useClient } from "@logux/client/react";

import { AuthForm, Credentials } from "../../../shared/components/AuthForm";
import { Route } from "../../../shared/config/routes";

import { signin } from "../lib/signin";


interface SignIn {
    className?: string;
}

const SignIn: FC<SignIn> = ({ className }) => {
    const client = useClient();

    const handleSubmit = (creds: Credentials) => {
        signin(client, creds);
    }

    return (
        <div className={className}>
            <AuthForm
                onSubmit={handleSubmit}
                title="Sign In"
                navLink={{ title: 'Don`t have an account? Sign up', to: Route.SIGN_UP}}
            />
        </div>
    )
}

export default SignIn;