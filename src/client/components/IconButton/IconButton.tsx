import { ReactNode, FC } from "react";
import classes from './IconButton.module.css';

interface IconButton {
    disabled?: boolean
    icon: ReactNode
    className?: string;
}

const IconButton: FC<IconButton> = ({ icon, disabled = false, className }) => (
    <button disabled={disabled} className={`${classes.button} ${className}`}>
        {icon}
    </button>
)

export default IconButton;