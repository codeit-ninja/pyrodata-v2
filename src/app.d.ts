import type { Session, User } from '$prisma/zod';

// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		interface Locals {
            session: Session & { user: User } | undefined;
        }
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
}

export {};
