import { syncMapTemplate } from '@logux/client';

type Message = {
    text: string
    name: string
    userId: string
}

export const MessageTemplate = syncMapTemplate<Message>('messages');