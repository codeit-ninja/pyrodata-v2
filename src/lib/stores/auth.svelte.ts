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
        login: async (formData: FormData) => {
            return await post('/api/auth/login', formData)
        },
        logout: async () => {

        }
    }
}

export const useAuthStore = createAuthStore();