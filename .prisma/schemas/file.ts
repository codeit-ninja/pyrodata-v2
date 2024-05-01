import vine from '@vinejs/vine';
import { UserSchema } from './user';

export const FileSchema = vine.object({
    location: vine.string(),
    title: vine.string(),
    description: vine.string().optional(),
    mimeType: vine.string().optional(),
    userId: vine.string().optional(),
    user: UserSchema.clone().optional()
})