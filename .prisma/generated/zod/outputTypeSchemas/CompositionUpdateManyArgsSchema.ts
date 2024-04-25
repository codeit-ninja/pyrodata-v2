import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CompositionUpdateManyMutationInputSchema } from '../inputTypeSchemas/CompositionUpdateManyMutationInputSchema'
import { CompositionUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/CompositionUncheckedUpdateManyInputSchema'
import { CompositionWhereInputSchema } from '../inputTypeSchemas/CompositionWhereInputSchema'

export const CompositionUpdateManyArgsSchema: z.ZodType<Prisma.CompositionUpdateManyArgs> = z.object({
  data: z.union([ CompositionUpdateManyMutationInputSchema,CompositionUncheckedUpdateManyInputSchema ]),
  where: CompositionWhereInputSchema.optional(),
}).strict() ;

export default CompositionUpdateManyArgsSchema;
