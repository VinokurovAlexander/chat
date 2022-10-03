import { ReactNode, FC } from "react";
import classes from './Button.module.css';

interface Button {
    disabled?: boolean
    icon?: ReactNode
    className?: string;
}

const Button: FC<Button> = ({ icon, disabled = false, className }) => (
    <button disabled={disabled} className={`${classes.button} ${className}`}>
        {icon}
    </button>
)

export default Button;