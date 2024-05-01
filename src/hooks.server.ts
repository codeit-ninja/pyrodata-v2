import { auth } from '$lib/middleware/auth';
import { sequence } from '@sveltejs/kit/hooks';

export const handle = sequence(auth)