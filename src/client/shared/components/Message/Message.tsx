import { FC } from "react";
import classes from './Message.module.css';

interface Message {
    data: {
        text: string;
        name: string;
    },
    theme?: 'default' | 'blue';
    hideName?: boolean;
    className?: string;
}

const Message: FC<Message> = ({ data, theme = 'default', hideName = false, className }) => {
    const { text, name }  = data;

    return (
        <div className={`${classes.message} ${classes[theme]} ${className}`}>
            {!hideName && (
                <span className={classes.name}>{name}</span>
            )}
            <span className={classes.text}>{text}</span>
        </div>
    )
}


export default Message;