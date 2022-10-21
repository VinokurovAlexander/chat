import { PropsWithChildren } from "react";

import classes from './Button.module.css';

interface Button {
    onClick?: () => void;
    className?: string;
}

export default ({ children, onClick, className }: PropsWithChildren<Button>) => (
    <button
        className={`${classes.button} ${className}`}
        onClick={onClick}>
        {children}
    </button>
)