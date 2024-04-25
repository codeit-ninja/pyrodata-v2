import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CompositionCreateManyInputSchema } from '../inputTypeSchemas/CompositionCreateManyInputSchema'

export const CompositionCreateManyArgsSchema: z.ZodType<Prisma.CompositionCreateManyArgs> = z.object({
  data: z.union([ CompositionCreateManyInputSchema,CompositionCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default CompositionCreateManyArgsSchema;
