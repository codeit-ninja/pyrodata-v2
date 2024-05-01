import { z } from 'zod';

export const CompositionBadgesSchema = z.enum(['VERIFIED','DANGEROUS','EXPERT','FAVORITE','BEGINNER_FRIENDLY']);

export const CompositionSchema = z.object({
    name: z.string(),
    badges: CompositionBadgesSchema.array(),
    
})