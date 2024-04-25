import { z } from 'zod';

export const CompositionBadgesSchema = z.enum(['VERIFIED','DANGEROUS','EXPERT','FAVORITE','BEGINNER_FRIENDLY']);

export type CompositionBadgesType = `${z.infer<typeof CompositionBadgesSchema>}`

export default CompositionBadgesSchema;
