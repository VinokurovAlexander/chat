import { FC, ReactNode } from "react";
import classes from './Button.module.css';


interface Button {
    children?: ReactNode;
    onClick?: () => void;
}

const Button: FC<Button> = ({ children, onClick }) => (
    <button className={classes.button} onClick={onClick}>{children}</button>
)

export default Button;