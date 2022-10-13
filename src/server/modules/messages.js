import { nanoid } from "nanoid";
import { addSyncMapFilter, NoConflictResolution, addSyncMap } from '@logux/server';
import {LoguxNotFoundError} from "@logux/actions";

const messages = [
    {
        id: nanoid(4),
        text: 'lol',
        name: 'Alex'
    },
    {
        id: nanoid(4),
        text: 'kek',
        name: 'Alex'
    }
]

export default (server) => {
    addSyncMap(server, 'messages', {
        access() {
            return true
        },

        create(ctx, id, fields, time, action, meta) {
            messages.push({
                id,
                ...fields
            });
        },

        load(ctx, id, since, action, meta) {
            const message = messages.find(message => message.id === id);

            if (!message) {
                throw new LoguxNotFoundError()
            }

            return {
                id,
                text: NoConflictResolution(message.text),
                name: NoConflictResolution(message.name)
            };
        }
    })


    addSyncMapFilter(server, 'messages', {
        access() {
            return true
        },

        initial() {
            return messages.map(message => ({
                id: message.id,
                text: NoConflictResolution(message.text),
                name: NoConflictResolution(message.name)
            }));
        },
    })
}