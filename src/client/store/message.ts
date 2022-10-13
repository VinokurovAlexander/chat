import { syncMapTemplate } from '@logux/client';

type Message = {
    text: string
    name: string
}

export const MessageTemplate = syncMapTemplate<Message>('messages');