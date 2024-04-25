import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CompositionWhereInputSchema } from '../inputTypeSchemas/CompositionWhereInputSchema'

export const CompositionDeleteManyArgsSchema: z.ZodType<Prisma.CompositionDeleteManyArgs> = z.object({
  where: CompositionWhereInputSchema.optional(),
}).strict() ;

export default CompositionDeleteManyArgsSchema;
