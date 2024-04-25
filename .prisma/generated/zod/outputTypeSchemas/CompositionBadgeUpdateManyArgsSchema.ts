import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CompositionBadgeUpdateManyMutationInputSchema } from '../inputTypeSchemas/CompositionBadgeUpdateManyMutationInputSchema'
import { CompositionBadgeUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/CompositionBadgeUncheckedUpdateManyInputSchema'
import { CompositionBadgeWhereInputSchema } from '../inputTypeSchemas/CompositionBadgeWhereInputSchema'

export const CompositionBadgeUpdateManyArgsSchema: z.ZodType<Prisma.CompositionBadgeUpdateManyArgs> = z.object({
  data: z.union([ CompositionBadgeUpdateManyMutationInputSchema,CompositionBadgeUncheckedUpdateManyInputSchema ]),
  where: CompositionBadgeWhereInputSchema.optional(),
}).strict() ;

export default CompositionBadgeUpdateManyArgsSchema;
