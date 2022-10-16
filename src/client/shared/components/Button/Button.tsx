import { FC, PropsWithChildren } from "react";
import classes from './Button.module.css';


interface Button {
    onClick?: () => void;
}

const Button: FC<PropsWithChildren<Button>> = ({ children, onClick }) => (
    <button className={classes.button} onClick={onClick}>{children}</button>
)

export default Button;