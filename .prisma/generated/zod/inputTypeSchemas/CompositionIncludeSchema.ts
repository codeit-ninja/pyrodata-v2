import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { FileArgsSchema } from "../outputTypeSchemas/FileArgsSchema"
import { IngredientFindManyArgsSchema } from "../outputTypeSchemas/IngredientFindManyArgsSchema"
import { CompositionCategoryFindManyArgsSchema } from "../outputTypeSchemas/CompositionCategoryFindManyArgsSchema"
import { UserArgsSchema } from "../outputTypeSchemas/UserArgsSchema"
import { CompositionCountOutputTypeArgsSchema } from "../outputTypeSchemas/CompositionCountOutputTypeArgsSchema"

export const CompositionIncludeSchema: z.ZodType<Prisma.CompositionInclude> = z.object({
  video: z.union([z.boolean(),z.lazy(() => FileArgsSchema)]).optional(),
  ingredients: z.union([z.boolean(),z.lazy(() => IngredientFindManyArgsSchema)]).optional(),
  categories: z.union([z.boolean(),z.lazy(() => CompositionCategoryFindManyArgsSchema)]).optional(),
  submittedBy: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => CompositionCountOutputTypeArgsSchema)]).optional(),
}).strict()

export default CompositionIncludeSchema;
