import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
    const session = event.cookies.get('session');

    if( session ) {
        event.locals.session = JSON.parse(session);
    }
    
	const response = await resolve(event);
	return response;
};