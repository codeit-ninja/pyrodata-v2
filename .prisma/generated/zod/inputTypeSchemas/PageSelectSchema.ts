import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { FileArgsSchema } from "../outputTypeSchemas/FileArgsSchema"
import { PageContentArgsSchema } from "../outputTypeSchemas/PageContentArgsSchema"
import { CategoryArgsSchema } from "../outputTypeSchemas/CategoryArgsSchema"
import { ChemicalArgsSchema } from "../outputTypeSchemas/ChemicalArgsSchema"
import { IngredientFindManyArgsSchema } from "../outputTypeSchemas/IngredientFindManyArgsSchema"
import { UserArgsSchema } from "../outputTypeSchemas/UserArgsSchema"
import { PageCountOutputTypeArgsSchema } from "../outputTypeSchemas/PageCountOutputTypeArgsSchema"

export const PageSelectSchema: z.ZodType<Prisma.PageSelect> = z.object({
  id: z.boolean().optional(),
  title: z.boolean().optional(),
  slug: z.boolean().optional(),
  featuredImageId: z.boolean().optional(),
  pageContentId: z.boolean().optional(),
  categorySlug: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  userId: z.boolean().optional(),
  featuredImage: z.union([z.boolean(),z.lazy(() => FileArgsSchema)]).optional(),
  content: z.union([z.boolean(),z.lazy(() => PageContentArgsSchema)]).optional(),
  category: z.union([z.boolean(),z.lazy(() => CategoryArgsSchema)]).optional(),
  chemical: z.union([z.boolean(),z.lazy(() => ChemicalArgsSchema)]).optional(),
  ingredients: z.union([z.boolean(),z.lazy(() => IngredientFindManyArgsSchema)]).optional(),
  user: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => PageCountOutputTypeArgsSchema)]).optional(),
}).strict()

export default PageSelectSchema;
