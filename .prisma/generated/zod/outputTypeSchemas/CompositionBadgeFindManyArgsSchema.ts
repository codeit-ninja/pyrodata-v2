import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CompositionBadgeWhereInputSchema } from '../inputTypeSchemas/CompositionBadgeWhereInputSchema'
import { CompositionBadgeOrderByWithRelationInputSchema } from '../inputTypeSchemas/CompositionBadgeOrderByWithRelationInputSchema'
import { CompositionBadgeWhereUniqueInputSchema } from '../inputTypeSchemas/CompositionBadgeWhereUniqueInputSchema'
import { CompositionBadgeScalarFieldEnumSchema } from '../inputTypeSchemas/CompositionBadgeScalarFieldEnumSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const CompositionBadgeSelectSchema: z.ZodType<Prisma.CompositionBadgeSelect> = z.object({
  id: z.boolean().optional(),
}).strict()

export const CompositionBadgeFindManyArgsSchema: z.ZodType<Prisma.CompositionBadgeFindManyArgs> = z.object({
  select: CompositionBadgeSelectSchema.optional(),
  where: CompositionBadgeWhereInputSchema.optional(),
  orderBy: z.union([ CompositionBadgeOrderByWithRelationInputSchema.array(),CompositionBadgeOrderByWithRelationInputSchema ]).optional(),
  cursor: CompositionBadgeWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ CompositionBadgeScalarFieldEnumSchema,CompositionBadgeScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export default CompositionBadgeFindManyArgsSchema;
