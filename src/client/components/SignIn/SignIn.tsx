import { FC, FormEventHandler, useState } from "react";
import { useStore } from "@nanostores/react";

import { Button } from "../Button";
import { Field } from "../Field";
import { Alert } from "../Alert";
import { getAuthError } from "../../store/auth";

import { login } from "./login";
import classes from './SignIn.module.css';

interface SignIn {
    className?: string;
}

const SignIn: FC<SignIn> = ({ className }) => {
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const error = useStore(getAuthError);

    const handleSubmit: FormEventHandler = e => {
        e.preventDefault();

       login(email, password);
    }

    return (
        <div className={`${classes.container} ${className}`}>
            <h1 className={classes.title}>Sign In</h1>
            <form className={classes.form} onSubmit={handleSubmit}>
                <Field label='Email address' name="email" id="email" required onChange={setEmail} />
                <Field label="Password" name="password" id="password" type="password" required onChange={setPassword} />
                {error && (
                    <Alert>
                        {error}
                    </Alert>
                )}
                <Button>
                    Sign In
                </Button>
            </form>
        </div>
    )
}

export default SignIn;