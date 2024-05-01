import { json, redirect, type Handle } from '@sveltejs/kit';

/**
 * Auth middleware
 * 
 * TODO: I think JWT based authentication is better
 */
export const auth: Handle = async ({ event, resolve }) => {
    const session = event.cookies.get('session');

    if( session ) {
        event.locals.session = JSON.parse(session);
    }

    /**
     * TODO: Implement
     */
    if (event.request.headers.has('Authorization')) {
       
    }

    /**
     * By default, all request methods that are meant to 
     * modify a resource are protected
     */
    blockModifications:
    if (event.request.method === 'PUT' || event.request.method === 'PATCH' || event.request.method === 'POST') {
        if (session) {
            break blockModifications;
        }

        if (event.url.pathname.startsWith('/api/auth')) {
            break blockModifications;
        }

        return json(
            { success: false,error: 'Unauthorized' },
            { status: 401, statusText: 'Unauthorized' }
        );
    }
    
	const response = await resolve(event);
	return response;
};