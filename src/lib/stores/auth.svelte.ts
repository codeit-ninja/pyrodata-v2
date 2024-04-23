import { post } from '$lib/fetch';

const createAuthStore = () => {
    let session = $state<App.Locals['session']>();

    return {
        get session() {
            return session;
        },
        set session(data: App.Locals['session']) {
            session = data;
        },
        login: async (username: string, password: string) => {
            return await post('/api/auth/login', { username, password })
        },
        logout: async () => {

        }
    }
}

export const useAuthStore = createAuthStore();