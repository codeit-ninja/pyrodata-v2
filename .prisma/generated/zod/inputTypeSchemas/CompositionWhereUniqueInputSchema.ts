import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CompositionWhereInputSchema } from './CompositionWhereInputSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { EnumCompositionBadgesNullableListFilterSchema } from './EnumCompositionBadgesNullableListFilterSchema';
import { FileNullableRelationFilterSchema } from './FileNullableRelationFilterSchema';
import { FileWhereInputSchema } from './FileWhereInputSchema';
import { IngredientListRelationFilterSchema } from './IngredientListRelationFilterSchema';
import { CompositionCategoryListRelationFilterSchema } from './CompositionCategoryListRelationFilterSchema';

export const CompositionWhereUniqueInputSchema: z.ZodType<Prisma.CompositionWhereUniqueInput> = z.union([
  z.object({
    id: z.string().cuid(),
    name: z.string()
  }),
  z.object({
    id: z.string().cuid(),
  }),
  z.object({
    name: z.string(),
  }),
])
.and(z.object({
  id: z.string().cuid().optional(),
  name: z.string().optional(),
  AND: z.union([ z.lazy(() => CompositionWhereInputSchema),z.lazy(() => CompositionWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => CompositionWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => CompositionWhereInputSchema),z.lazy(() => CompositionWhereInputSchema).array() ]).optional(),
  description: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  videoId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  badges: z.lazy(() => EnumCompositionBadgesNullableListFilterSchema).optional(),
  video: z.union([ z.lazy(() => FileNullableRelationFilterSchema),z.lazy(() => FileWhereInputSchema) ]).optional().nullable(),
  ingredients: z.lazy(() => IngredientListRelationFilterSchema).optional(),
  categories: z.lazy(() => CompositionCategoryListRelationFilterSchema).optional()
}).strict());

export default CompositionWhereUniqueInputSchema;
