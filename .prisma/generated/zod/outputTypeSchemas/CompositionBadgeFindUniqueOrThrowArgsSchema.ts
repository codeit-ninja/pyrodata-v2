import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CompositionBadgeWhereUniqueInputSchema } from '../inputTypeSchemas/CompositionBadgeWhereUniqueInputSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const CompositionBadgeSelectSchema: z.ZodType<Prisma.CompositionBadgeSelect> = z.object({
  id: z.boolean().optional(),
}).strict()

export const CompositionBadgeFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.CompositionBadgeFindUniqueOrThrowArgs> = z.object({
  select: CompositionBadgeSelectSchema.optional(),
  where: CompositionBadgeWhereUniqueInputSchema,
}).strict() ;

export default CompositionBadgeFindUniqueOrThrowArgsSchema;
