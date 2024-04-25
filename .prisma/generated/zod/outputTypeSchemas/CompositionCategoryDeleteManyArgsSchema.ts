import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CompositionCategoryWhereInputSchema } from '../inputTypeSchemas/CompositionCategoryWhereInputSchema'

export const CompositionCategoryDeleteManyArgsSchema: z.ZodType<Prisma.CompositionCategoryDeleteManyArgs> = z.object({
  where: CompositionCategoryWhereInputSchema.optional(),
}).strict() ;

export default CompositionCategoryDeleteManyArgsSchema;
