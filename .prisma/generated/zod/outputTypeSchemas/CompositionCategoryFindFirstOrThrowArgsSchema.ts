import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CompositionCategoryIncludeSchema } from '../inputTypeSchemas/CompositionCategoryIncludeSchema'
import { CompositionCategoryWhereInputSchema } from '../inputTypeSchemas/CompositionCategoryWhereInputSchema'
import { CompositionCategoryOrderByWithRelationInputSchema } from '../inputTypeSchemas/CompositionCategoryOrderByWithRelationInputSchema'
import { CompositionCategoryWhereUniqueInputSchema } from '../inputTypeSchemas/CompositionCategoryWhereUniqueInputSchema'
import { CompositionCategoryScalarFieldEnumSchema } from '../inputTypeSchemas/CompositionCategoryScalarFieldEnumSchema'
import { CompositionFindManyArgsSchema } from "../outputTypeSchemas/CompositionFindManyArgsSchema"
import { CompositionCategoryCountOutputTypeArgsSchema } from "../outputTypeSchemas/CompositionCategoryCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const CompositionCategorySelectSchema: z.ZodType<Prisma.CompositionCategorySelect> = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  slug: z.boolean().optional(),
  compositions: z.union([z.boolean(),z.lazy(() => CompositionFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => CompositionCategoryCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const CompositionCategoryFindFirstOrThrowArgsSchema: z.ZodType<Prisma.CompositionCategoryFindFirstOrThrowArgs> = z.object({
  select: CompositionCategorySelectSchema.optional(),
  include: CompositionCategoryIncludeSchema.optional(),
  where: CompositionCategoryWhereInputSchema.optional(),
  orderBy: z.union([ CompositionCategoryOrderByWithRelationInputSchema.array(),CompositionCategoryOrderByWithRelationInputSchema ]).optional(),
  cursor: CompositionCategoryWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ CompositionCategoryScalarFieldEnumSchema,CompositionCategoryScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export default CompositionCategoryFindFirstOrThrowArgsSchema;
