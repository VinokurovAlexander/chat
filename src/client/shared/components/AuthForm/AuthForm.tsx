import {FormEventHandler, ReactNode, useEffect, useState} from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {useStore} from "@nanostores/react";

import {Field} from "../Field";
import {Alert} from "../Alert";
import {Button} from "../Button";
import { Route } from "../../config/routes";
import {authStore, resetError} from "../../store/auth";

import classes from './AuthForm.module.css';

export interface Credentials {
    email: string;
    password: string;
}

interface AuthForm {
    onSubmit?: (credentials: Credentials) => void;
    title: string;
    navLink?: {
        title: string;
        to: Route;
    }
    className?: string;
    fields?: ReactNode
}

export default ({ onSubmit, className, title, navLink, fields }: AuthForm) => {
    const navigation = useNavigate();
    const { user, error } = useStore(authStore);

    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit: FormEventHandler = e => {
        e.preventDefault();

        onSubmit?.({ email, password })
    }

    useEffect(() => {
        if (user) {
            navigation(Route.CHAT)
        }
    },[user])

    useEffect(() => {
        return () => {
            resetError();
        }
    } ,[])

    return (
        <div className={`${classes.container} ${className}`}>
            <h1 className={classes.title}>{title}</h1>
            <form className={classes.form} onSubmit={handleSubmit}>
                {fields}
                <Field label='Email address' name="email" id="email" required onChange={setEmail} />
                <Field label="Password" name="password" id="password" type="password" required onChange={setPassword} />
                {error && (
                    <Alert>
                        {error}
                    </Alert>
                )}
                <Button>
                    {title}
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