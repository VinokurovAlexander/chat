import { map, computed } from 'nanostores';

type Error = string;

export interface User {
    name: string;
    id: string;
    isVerified: boolean;
    verificationId: string;
    token: string;
}

interface Auth {
    error: string | null,
    user: User | null
}

export const authStore = map<Auth>({ error: null, user: null });

export const setUser = (user: User) => {
    localStorage.setItem('userId', user.id)
    localStorage.setItem('token', user.token)

    authStore.set({
        error: null,
        user
    })
}

export const setError = (payload: Error) => {
    authStore.set({
        error: payload,
        user: null
    })
}

export const resetError = () => {
    authStore.setKey('error', null)
}

export const getUser = computed(authStore, state => state.user);
