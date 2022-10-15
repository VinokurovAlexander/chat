import { FC, FormEventHandler } from "react";

import { successAuth } from "../../store/user";
import { Button } from "../Button";
import { Field } from "../Field";
import classes from './SignIn.module.css';

interface SignIn {
    className?: string;
}

const SignIn: FC<SignIn> = ({ className }) => {
    const handleSubmit: FormEventHandler = e => {
        e.preventDefault();

        successAuth();
    }

    return (
        <div className={`${classes.container} ${className}`}>
            <h1 className={classes.title}>Sign In</h1>
            <form className={classes.form} onSubmit={handleSubmit}>
                <Field label='Email address' name="email" id="email" required />
                <Field label="Password" name="password" id="password" required />
                <Button>
                    Sign In
                </Button>
            </form>
        </div>
    )
}

export default SignIn;