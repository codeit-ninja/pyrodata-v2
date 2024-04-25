import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CompositionBadgeWhereUniqueInputSchema } from '../inputTypeSchemas/CompositionBadgeWhereUniqueInputSchema'
import { CompositionBadgeCreateInputSchema } from '../inputTypeSchemas/CompositionBadgeCreateInputSchema'
import { CompositionBadgeUncheckedCreateInputSchema } from '../inputTypeSchemas/CompositionBadgeUncheckedCreateInputSchema'
import { CompositionBadgeUpdateInputSchema } from '../inputTypeSchemas/CompositionBadgeUpdateInputSchema'
import { CompositionBadgeUncheckedUpdateInputSchema } from '../inputTypeSchemas/CompositionBadgeUncheckedUpdateInputSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const CompositionBadgeSelectSchema: z.ZodType<Prisma.CompositionBadgeSelect> = z.object({
  id: z.boolean().optional(),
}).strict()

export const CompositionBadgeUpsertArgsSchema: z.ZodType<Prisma.CompositionBadgeUpsertArgs> = z.object({
  select: CompositionBadgeSelectSchema.optional(),
  where: CompositionBadgeWhereUniqueInputSchema,
  create: z.union([ CompositionBadgeCreateInputSchema,CompositionBadgeUncheckedCreateInputSchema ]),
  update: z.union([ CompositionBadgeUpdateInputSchema,CompositionBadgeUncheckedUpdateInputSchema ]),
}).strict() ;

export default CompositionBadgeUpsertArgsSchema;
