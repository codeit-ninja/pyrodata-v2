import { validate } from '$lib/request';
import { login, loginSchema } from '$lib/server/schemas/auth';
import { json } from '@sveltejs/kit';

export const POST = async ({ request, cookies }) => {
    const [data, error] = await validate(loginSchema, request)

    if (error || !data) {
        return json(error, { status: 400 });
    }

    const session = await login(data);

    if (!session) {
        return json({ message: 'Username or password incorrect.' }, { status: 401 });
    }

    cookies.set('session', JSON.stringify( session ), { path: '/' })

    return Response.json(session);
}