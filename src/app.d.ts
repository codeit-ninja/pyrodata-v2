import type { Session, User } from '$prisma/zod';
import type { File } from '@prisma/client';

type UploadingProgress = { status: 202, data: { loaded: number, size: number } }
type UploadingReady = { status: 201, data: File; }

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
        interface Settings {
            drives: 's3' | 'local';
        }
        interface ApiReturnTypes {
            upload: UploadingProgress | UploadingReady;
        }
	}
}

export {};
