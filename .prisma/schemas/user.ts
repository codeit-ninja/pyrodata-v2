import vine from '@vinejs/vine';

export const RoleSchema = vine.enum(['USER','EDITOR','ADMIN']);

export const UserSchema = vine.object({
    username: vine.string(),
    password: vine.string(),
    email: vine.string().email(),
    role: RoleSchema.clone(),
})