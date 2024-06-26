import { z } from 'zod';

export const RoleSchema = z.enum(['USER','EDITOR','ADMIN']);

export type RoleType = `${z.infer<typeof RoleSchema>}`

export default RoleSchema;
