import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CompositionBadgeUpdateInputSchema } from '../inputTypeSchemas/CompositionBadgeUpdateInputSchema'
import { CompositionBadgeUncheckedUpdateInputSchema } from '../inputTypeSchemas/CompositionBadgeUncheckedUpdateInputSchema'
import { CompositionBadgeWhereUniqueInputSchema } from '../inputTypeSchemas/CompositionBadgeWhereUniqueInputSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const CompositionBadgeSelectSchema: z.ZodType<Prisma.CompositionBadgeSelect> = z.object({
  id: z.boolean().optional(),
}).strict()

export const CompositionBadgeUpdateArgsSchema: z.ZodType<Prisma.CompositionBadgeUpdateArgs> = z.object({
  select: CompositionBadgeSelectSchema.optional(),
  data: z.union([ CompositionBadgeUpdateInputSchema,CompositionBadgeUncheckedUpdateInputSchema ]),
  where: CompositionBadgeWhereUniqueInputSchema,
}).strict() ;

export default CompositionBadgeUpdateArgsSchema;
