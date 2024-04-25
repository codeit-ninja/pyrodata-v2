import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CompositionIncludeSchema } from '../inputTypeSchemas/CompositionIncludeSchema'
import { CompositionWhereInputSchema } from '../inputTypeSchemas/CompositionWhereInputSchema'
import { CompositionOrderByWithRelationInputSchema } from '../inputTypeSchemas/CompositionOrderByWithRelationInputSchema'
import { CompositionWhereUniqueInputSchema } from '../inputTypeSchemas/CompositionWhereUniqueInputSchema'
import { CompositionScalarFieldEnumSchema } from '../inputTypeSchemas/CompositionScalarFieldEnumSchema'
import { FileArgsSchema } from "../outputTypeSchemas/FileArgsSchema"
import { IngredientFindManyArgsSchema } from "../outputTypeSchemas/IngredientFindManyArgsSchema"
import { CompositionCategoryFindManyArgsSchema } from "../outputTypeSchemas/CompositionCategoryFindManyArgsSchema"
import { CompositionCountOutputTypeArgsSchema } from "../outputTypeSchemas/CompositionCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const CompositionSelectSchema: z.ZodType<Prisma.CompositionSelect> = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  description: z.boolean().optional(),
  videoId: z.boolean().optional(),
  badges: z.boolean().optional(),
  video: z.union([z.boolean(),z.lazy(() => FileArgsSchema)]).optional(),
  ingredients: z.union([z.boolean(),z.lazy(() => IngredientFindManyArgsSchema)]).optional(),
  categories: z.union([z.boolean(),z.lazy(() => CompositionCategoryFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => CompositionCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const CompositionFindManyArgsSchema: z.ZodType<Prisma.CompositionFindManyArgs> = z.object({
  select: CompositionSelectSchema.optional(),
  include: CompositionIncludeSchema.optional(),
  where: CompositionWhereInputSchema.optional(),
  orderBy: z.union([ CompositionOrderByWithRelationInputSchema.array(),CompositionOrderByWithRelationInputSchema ]).optional(),
  cursor: CompositionWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ CompositionScalarFieldEnumSchema,CompositionScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export default CompositionFindManyArgsSchema;
