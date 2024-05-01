import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { FileNullableRelationFilterSchema } from './FileNullableRelationFilterSchema';
import { FileWhereInputSchema } from './FileWhereInputSchema';
import { PageContentRelationFilterSchema } from './PageContentRelationFilterSchema';
import { PageContentWhereInputSchema } from './PageContentWhereInputSchema';
import { CategoryNullableRelationFilterSchema } from './CategoryNullableRelationFilterSchema';
import { CategoryWhereInputSchema } from './CategoryWhereInputSchema';
import { ChemicalNullableRelationFilterSchema } from './ChemicalNullableRelationFilterSchema';
import { ChemicalWhereInputSchema } from './ChemicalWhereInputSchema';
import { IngredientListRelationFilterSchema } from './IngredientListRelationFilterSchema';
import { UserNullableRelationFilterSchema } from './UserNullableRelationFilterSchema';
import { UserWhereInputSchema } from './UserWhereInputSchema';

export const PageWhereInputSchema: z.ZodType<Prisma.PageWhereInput> = z.object({
  AND: z.union([ z.lazy(() => PageWhereInputSchema),z.lazy(() => PageWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => PageWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => PageWhereInputSchema),z.lazy(() => PageWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  title: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  slug: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  featuredImageId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  pageContentId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  categorySlug: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  userId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  featuredImage: z.union([ z.lazy(() => FileNullableRelationFilterSchema),z.lazy(() => FileWhereInputSchema) ]).optional().nullable(),
  content: z.union([ z.lazy(() => PageContentRelationFilterSchema),z.lazy(() => PageContentWhereInputSchema) ]).optional(),
  category: z.union([ z.lazy(() => CategoryNullableRelationFilterSchema),z.lazy(() => CategoryWhereInputSchema) ]).optional().nullable(),
  chemical: z.union([ z.lazy(() => ChemicalNullableRelationFilterSchema),z.lazy(() => ChemicalWhereInputSchema) ]).optional().nullable(),
  ingredients: z.lazy(() => IngredientListRelationFilterSchema).optional(),
  user: z.union([ z.lazy(() => UserNullableRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional().nullable(),
}).strict();

export default PageWhereInputSchema;
