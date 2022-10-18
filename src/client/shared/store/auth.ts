import { map, computed } from 'nanostores';

type Error = string;

export interface User {
    name: string;
    id: string
}

interface Auth {
    error: string | null,
    user: User | null
}

export const authStore = map<Auth>({ error: null, user: null });

export const successAuth = (payload: User) => {
    authStore.set({
        error: null,
        user: {...payload}
    })
}

export const unsuccessAuth = (payload: Error) => {
    authStore.set({
        error: payload,
        user: null
    })
}

export const resetError = () => {
    authStore.setKey('error', null)
}

export const getUser = computed(authStore, state => state.user);
export const getUserId = computed(authStore, state => state.user?.id);
