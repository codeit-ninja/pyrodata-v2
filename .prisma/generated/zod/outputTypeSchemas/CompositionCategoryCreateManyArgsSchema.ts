import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CompositionCategoryCreateManyInputSchema } from '../inputTypeSchemas/CompositionCategoryCreateManyInputSchema'

export const CompositionCategoryCreateManyArgsSchema: z.ZodType<Prisma.CompositionCategoryCreateManyArgs> = z.object({
  data: z.union([ CompositionCategoryCreateManyInputSchema,CompositionCategoryCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default CompositionCategoryCreateManyArgsSchema;
