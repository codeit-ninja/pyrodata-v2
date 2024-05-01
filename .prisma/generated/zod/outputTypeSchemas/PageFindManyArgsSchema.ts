import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PageIncludeSchema } from '../inputTypeSchemas/PageIncludeSchema'
import { PageWhereInputSchema } from '../inputTypeSchemas/PageWhereInputSchema'
import { PageOrderByWithRelationInputSchema } from '../inputTypeSchemas/PageOrderByWithRelationInputSchema'
import { PageWhereUniqueInputSchema } from '../inputTypeSchemas/PageWhereUniqueInputSchema'
import { PageScalarFieldEnumSchema } from '../inputTypeSchemas/PageScalarFieldEnumSchema'
import { FileArgsSchema } from "../outputTypeSchemas/FileArgsSchema"
import { PageContentArgsSchema } from "../outputTypeSchemas/PageContentArgsSchema"
import { CategoryArgsSchema } from "../outputTypeSchemas/CategoryArgsSchema"
import { ChemicalArgsSchema } from "../outputTypeSchemas/ChemicalArgsSchema"
import { IngredientFindManyArgsSchema } from "../outputTypeSchemas/IngredientFindManyArgsSchema"
import { UserArgsSchema } from "../outputTypeSchemas/UserArgsSchema"
import { PageCountOutputTypeArgsSchema } from "../outputTypeSchemas/PageCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const PageSelectSchema: z.ZodType<Prisma.PageSelect> = z.object({
  id: z.boolean().optional(),
  title: z.boolean().optional(),
  slug: z.boolean().optional(),
  featuredImageId: z.boolean().optional(),
  pageContentId: z.boolean().optional(),
  categorySlug: z.boolean().optional(),
  userId: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  featuredImage: z.union([z.boolean(),z.lazy(() => FileArgsSchema)]).optional(),
  content: z.union([z.boolean(),z.lazy(() => PageContentArgsSchema)]).optional(),
  category: z.union([z.boolean(),z.lazy(() => CategoryArgsSchema)]).optional(),
  chemical: z.union([z.boolean(),z.lazy(() => ChemicalArgsSchema)]).optional(),
  ingredients: z.union([z.boolean(),z.lazy(() => IngredientFindManyArgsSchema)]).optional(),
  user: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => PageCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const PageFindManyArgsSchema: z.ZodType<Prisma.PageFindManyArgs> = z.object({
  select: PageSelectSchema.optional(),
  include: PageIncludeSchema.optional(),
  where: PageWhereInputSchema.optional(),
  orderBy: z.union([ PageOrderByWithRelationInputSchema.array(),PageOrderByWithRelationInputSchema ]).optional(),
  cursor: PageWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ PageScalarFieldEnumSchema,PageScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export default PageFindManyArgsSchema;
