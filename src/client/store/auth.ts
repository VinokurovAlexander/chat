import { atom, computed } from 'nanostores';

type Error = string;

interface User {
    name: string;
    id: string
}

interface Auth {
    error: string | null,
    user: User | null
}

export const authStore = atom<Auth>({ error: null, user: null });

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

export const getUserId = computed(authStore, state => state.user?.id);
export const getAuthError = computed(authStore, state => state.error);