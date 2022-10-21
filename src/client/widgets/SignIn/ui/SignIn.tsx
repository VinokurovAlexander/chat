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

    const handleClick = () => {
        client.log.add(
            {
                type: 'user',
                userId: "63515e4d360dd8842b7432c1",
                token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI2MzUxNWU0ZDM2MGRkODg0MmI3NDMyYzEifQ.rvwoEOhLCJItAMPXDWxPwgtcN1DLtWiM2-zzXz5iSzs"
            }, { sync: true })
    }

    return (
        <div className={className}>
            <AuthForm
                onSubmit={handleSubmit}
                title="Sign In"
                navLink={{ title: 'Don`t have an account? Sign up', to: Route.SIGN_UP}}
            />
            <button onClick={handleClick}>click me</button>
        </div>
    )
}

export default SignIn;