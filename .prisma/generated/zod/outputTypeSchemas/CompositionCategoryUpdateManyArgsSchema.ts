import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CompositionCategoryUpdateManyMutationInputSchema } from '../inputTypeSchemas/CompositionCategoryUpdateManyMutationInputSchema'
import { CompositionCategoryUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/CompositionCategoryUncheckedUpdateManyInputSchema'
import { CompositionCategoryWhereInputSchema } from '../inputTypeSchemas/CompositionCategoryWhereInputSchema'

export const CompositionCategoryUpdateManyArgsSchema: z.ZodType<Prisma.CompositionCategoryUpdateManyArgs> = z.object({
  data: z.union([ CompositionCategoryUpdateManyMutationInputSchema,CompositionCategoryUncheckedUpdateManyInputSchema ]),
  where: CompositionCategoryWhereInputSchema.optional(),
}).strict() ;

export default CompositionCategoryUpdateManyArgsSchema;
