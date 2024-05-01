import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CompositionIncludeSchema } from '../inputTypeSchemas/CompositionIncludeSchema'
import { CompositionCreateInputSchema } from '../inputTypeSchemas/CompositionCreateInputSchema'
import { CompositionUncheckedCreateInputSchema } from '../inputTypeSchemas/CompositionUncheckedCreateInputSchema'
import { FileArgsSchema } from "../outputTypeSchemas/FileArgsSchema"
import { IngredientFindManyArgsSchema } from "../outputTypeSchemas/IngredientFindManyArgsSchema"
import { CompositionCategoryFindManyArgsSchema } from "../outputTypeSchemas/CompositionCategoryFindManyArgsSchema"
import { UserArgsSchema } from "../outputTypeSchemas/UserArgsSchema"
import { CompositionCountOutputTypeArgsSchema } from "../outputTypeSchemas/CompositionCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const CompositionSelectSchema: z.ZodType<Prisma.CompositionSelect> = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  description: z.boolean().optional(),
  videoId: z.boolean().optional(),
  badges: z.boolean().optional(),
  userId: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  video: z.union([z.boolean(),z.lazy(() => FileArgsSchema)]).optional(),
  ingredients: z.union([z.boolean(),z.lazy(() => IngredientFindManyArgsSchema)]).optional(),
  categories: z.union([z.boolean(),z.lazy(() => CompositionCategoryFindManyArgsSchema)]).optional(),
  submittedBy: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => CompositionCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const CompositionCreateArgsSchema: z.ZodType<Prisma.CompositionCreateArgs> = z.object({
  select: CompositionSelectSchema.optional(),
  include: CompositionIncludeSchema.optional(),
  data: z.union([ CompositionCreateInputSchema,CompositionUncheckedCreateInputSchema ]),
}).strict() ;

export default CompositionCreateArgsSchema;
