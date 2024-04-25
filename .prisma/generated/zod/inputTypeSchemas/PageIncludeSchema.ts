import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { FileArgsSchema } from "../outputTypeSchemas/FileArgsSchema"
import { PageContentArgsSchema } from "../outputTypeSchemas/PageContentArgsSchema"
import { CategoryArgsSchema } from "../outputTypeSchemas/CategoryArgsSchema"
import { ChemicalArgsSchema } from "../outputTypeSchemas/ChemicalArgsSchema"
import { IngredientFindManyArgsSchema } from "../outputTypeSchemas/IngredientFindManyArgsSchema"
import { UserArgsSchema } from "../outputTypeSchemas/UserArgsSchema"
import { PageCountOutputTypeArgsSchema } from "../outputTypeSchemas/PageCountOutputTypeArgsSchema"

export const PageIncludeSchema: z.ZodType<Prisma.PageInclude> = z.object({
  featuredImage: z.union([z.boolean(),z.lazy(() => FileArgsSchema)]).optional(),
  content: z.union([z.boolean(),z.lazy(() => PageContentArgsSchema)]).optional(),
  category: z.union([z.boolean(),z.lazy(() => CategoryArgsSchema)]).optional(),
  chemical: z.union([z.boolean(),z.lazy(() => ChemicalArgsSchema)]).optional(),
  ingredients: z.union([z.boolean(),z.lazy(() => IngredientFindManyArgsSchema)]).optional(),
  user: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => PageCountOutputTypeArgsSchema)]).optional(),
}).strict()

export default PageIncludeSchema;
