import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CompositionBadgeCreateInputSchema } from '../inputTypeSchemas/CompositionBadgeCreateInputSchema'
import { CompositionBadgeUncheckedCreateInputSchema } from '../inputTypeSchemas/CompositionBadgeUncheckedCreateInputSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const CompositionBadgeSelectSchema: z.ZodType<Prisma.CompositionBadgeSelect> = z.object({
  id: z.boolean().optional(),
}).strict()

export const CompositionBadgeCreateArgsSchema: z.ZodType<Prisma.CompositionBadgeCreateArgs> = z.object({
  select: CompositionBadgeSelectSchema.optional(),
  data: z.union([ CompositionBadgeCreateInputSchema,CompositionBadgeUncheckedCreateInputSchema ]).optional(),
}).strict() ;

export default CompositionBadgeCreateArgsSchema;
