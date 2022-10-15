import { atom } from 'nanostores';

interface User {
    name: string | null;
    isAuth: boolean
}

export const userStore = atom<User>({ isAuth: false, name: null });

export const successAuth = () => {
    userStore.set({ isAuth: true, name: 'Alex' })
}