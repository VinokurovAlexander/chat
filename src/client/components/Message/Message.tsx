import { FC } from "react";
import classes from './Message.module.css';

interface Message {
    data: {
        text: string;
        name: string;
    }
}

const Message: FC<Message> = ({ data }) => {
    const { text, name }  = data;

    return (
        <div className={classes.message}>
            <span className={classes.name}>{name}</span>
            <span className={classes.text}>{text}</span>
        </div>
    )
}


export default Message;