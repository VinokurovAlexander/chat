import { useFilter, useClient } from "@logux/client/react";
import { createSyncMap } from '@logux/client'
import { FC } from "react";
import { nanoid } from "nanoid";

import { MessageForm } from "../MessageForm";
import { Message } from "../Message";
import { MessageTemplate } from "../../store/message";
import { useScrollToBottom } from "./useScrollToBottom";
import classes from './Chat.module.css';

interface Chat {
    className?: string;
}

const Chat: FC<Chat> = ({ className }) => {
    const client = useClient();
    const { list, isLoading } = useFilter(MessageTemplate);
    const scrollNode = useScrollToBottom(list);

    const handleSubmit = (text: string) => {
        createSyncMap(client, MessageTemplate, {
            id: nanoid(4),
            text,
            name: 'Alex'
        })
    }

    return (
        <div className={`${classes.chat} ${className}`}>
            <div className={classes.messages}>
                {isLoading ? <p>loading...</p> : list.map(message => <Message data={message} key={message.id} />)}
                {scrollNode}
            </div>
            <MessageForm onSubmit={handleSubmit} />
        </div>
    )
}


export default Chat;