import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CompositionBadgeWhereInputSchema } from '../inputTypeSchemas/CompositionBadgeWhereInputSchema'

export const CompositionBadgeDeleteManyArgsSchema: z.ZodType<Prisma.CompositionBadgeDeleteManyArgs> = z.object({
  where: CompositionBadgeWhereInputSchema.optional(),
}).strict() ;

export default CompositionBadgeDeleteManyArgsSchema;
