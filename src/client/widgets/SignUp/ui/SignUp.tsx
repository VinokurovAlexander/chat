import { useClient } from "@logux/client/react";
import {useState} from "react";

import { AuthForm, Credentials } from "../../../shared/components/AuthForm";
import { Route } from "../../../shared/config/routes";
import { Field } from "../../../shared/components/Field";

import { signup } from "../lib/signup";


export default () => {
    const client = useClient();

    const [name, setName] = useState('');

    const handleSubmit = (creds: Credentials) => {
        signup(client, { ...creds, name })
    }

    return (
        <div>
            <AuthForm
                title="Sign Up"
                navLink={{ title: 'Already have an account? Sign in', to: Route.SIGN_IN }}
                onSubmit={handleSubmit}
                fields={<Field label="Name" name="name" id="name" onChange={setName} required />}
            />
        </div>
    )
}
