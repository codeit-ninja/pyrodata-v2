import { fail } from '@sveltejs/kit';

export const actions = {
    default: async ({ request, fetch }) => {
        const response = await fetch('/api/compositions', request)

        if (!response.ok) {
            return fail(response.status, {
                success: false,
                error: await response.json()
            });
        }

        return {
            success: true,
            data: await response.json()
        }
    }
}