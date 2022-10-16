import {FormEventHandler, useState} from "react";
import {NavLink} from "react-router-dom";

import {Field} from "../Field";
import {Alert} from "../Alert";
import {Button} from "../Button";
import { Route } from "../../config/routes";

import classes from './AuthForm.module.css';

export interface Credentials {
    email: string;
    password: string;
}

interface AuthForm {
    onSubmit?: (credentials: Credentials) => void;
    error: string | null;
    title: string;
    navLink?: {
        title: string;
        to: Route;
    }
    className?: string;
}

export default ({ onSubmit, error, className, title, navLink }: AuthForm) => {
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit: FormEventHandler = e => {
        e.preventDefault();

        onSubmit?.({ email, password })
    }

    return (
        <div className={`${classes.container} ${className}`}>
            <h1 className={classes.title}>{title}</h1>
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
                {navLink && (
                    <NavLink to={navLink.to} className={classes.link}>
                        {navLink.title}
                    </NavLink>
                )}
            </form>
        </div>
    )
}