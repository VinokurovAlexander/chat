import { useFilter, useClient } from "@logux/client/react";
import { createSyncMap } from '@logux/client'
import { FC } from "react";
import { nanoid } from "nanoid";

import { MessageForm } from "../MessageForm";
import { Message } from "../Message";
import { MessageTemplate } from "../../store/message";
import { User } from "../../store/auth";

import { useScrollToBottom } from "./useScrollToBottom";
import classes from './Chat.module.css';

interface Chat {
    user: User;
    className?: string;
}

const Chat: FC<Chat> = ({ className, user }) => {
    const client = useClient();
    const { list, isLoading } = useFilter(MessageTemplate);
    const scrollNode = useScrollToBottom(list);

    const handleSubmit = (text: string) => {
        createSyncMap(client, MessageTemplate, {
            id: nanoid(4),
            text,
            name: user.name,
            userId: user.id
        })
    }

    const renderMessages = () =>
        list.map(message => {
            const isOwnMessage = user.id === message.userId;
            const theme = isOwnMessage ? 'blue' : 'default';

            return (
                <Message
                    data={message}
                    key={message.id}
                    theme={theme}
                    hideName={isOwnMessage}
                    className={isOwnMessage ? classes.own : ''}
                />
            )
        })

    return (
        <div className={`${classes.chat} ${className}`}>
            <div className={classes.messages}>
                {isLoading ? <p>loading...</p> : renderMessages()}
                {scrollNode}
            </div>
            <MessageForm onSubmit={handleSubmit} />
        </div>
    )
}

export default Chat;