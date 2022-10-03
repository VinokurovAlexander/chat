import { FC, useState } from "react";
import { Field } from "../Field";
import { Message } from "../Message";
import classes from './Chat.module.css';

interface Chat {
    className?: string;
}

const defaultMessages = [
    {
        name: 'Alex',
        text: 'Hello world',
        timestamp: 1231232
    }
]

const Chat: FC<Chat> = ({ className }) => {
    const [messages, setMessages] = useState(defaultMessages);

    const addMessage = (text: string) => {
        setMessages([...messages, { name: 'Alex', text, timestamp:  Date.now() }])
    }

    return (
        <div className={`${classes.chat} ${className}`}>
            <div className={classes.messages}>
                {messages.map(message => <Message data={message} key={message.timestamp} />)}
            </div>
            <Field onSubmit={addMessage} />
        </div>
    )
}


export default Chat;