import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CompositionBadgeCreateManyInputSchema } from '../inputTypeSchemas/CompositionBadgeCreateManyInputSchema'

export const CompositionBadgeCreateManyArgsSchema: z.ZodType<Prisma.CompositionBadgeCreateManyArgs> = z.object({
  data: z.union([ CompositionBadgeCreateManyInputSchema,CompositionBadgeCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default CompositionBadgeCreateManyArgsSchema;
