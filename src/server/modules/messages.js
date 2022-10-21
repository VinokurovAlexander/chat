import { addSyncMapFilter, NoConflictResolution, addSyncMap } from '@logux/server';
import { LoguxNotFoundError } from "@logux/actions";

const messages = [
    {
        id: 'ssEW',
        text: 'lol',
        name: 'Alex',
        userId: 'sfEf'
    },
    {
        id: 'weSf',
        text: 'kek',
        name: 'Alex',
        userId: 'sfEf'
    }
]

export default (server) => {
    addSyncMap(server, 'messages', {
        access() {
            return true
        },

        create(ctx, id, fields) {
            messages.push({
                id,
                ...fields
            });
        },

        load(ctx, id) {
            const message = messages.find(message => message.id === id);

            if (!message) {
                throw new LoguxNotFoundError()
            }

            return {
                id,
                text: NoConflictResolution(message.text),
                name: NoConflictResolution(message.name),
                userId: NoConflictResolution(message.userId)
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
                name: NoConflictResolution(message.name),
                userId: NoConflictResolution(message.userId)
            }));
        },
    })
}