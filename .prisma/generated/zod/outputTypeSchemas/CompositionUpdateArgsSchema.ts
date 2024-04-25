import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CompositionIncludeSchema } from '../inputTypeSchemas/CompositionIncludeSchema'
import { CompositionUpdateInputSchema } from '../inputTypeSchemas/CompositionUpdateInputSchema'
import { CompositionUncheckedUpdateInputSchema } from '../inputTypeSchemas/CompositionUncheckedUpdateInputSchema'
import { CompositionWhereUniqueInputSchema } from '../inputTypeSchemas/CompositionWhereUniqueInputSchema'
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

export const CompositionUpdateArgsSchema: z.ZodType<Prisma.CompositionUpdateArgs> = z.object({
  select: CompositionSelectSchema.optional(),
  include: CompositionIncludeSchema.optional(),
  data: z.union([ CompositionUpdateInputSchema,CompositionUncheckedUpdateInputSchema ]),
  where: CompositionWhereUniqueInputSchema,
}).strict() ;

export default CompositionUpdateArgsSchema;
