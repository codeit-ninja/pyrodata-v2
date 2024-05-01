import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { EnumCompositionBadgesNullableListFilterSchema } from './EnumCompositionBadgesNullableListFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { FileNullableRelationFilterSchema } from './FileNullableRelationFilterSchema';
import { FileWhereInputSchema } from './FileWhereInputSchema';
import { IngredientListRelationFilterSchema } from './IngredientListRelationFilterSchema';
import { CompositionCategoryListRelationFilterSchema } from './CompositionCategoryListRelationFilterSchema';
import { UserNullableRelationFilterSchema } from './UserNullableRelationFilterSchema';
import { UserWhereInputSchema } from './UserWhereInputSchema';

export const CompositionWhereInputSchema: z.ZodType<Prisma.CompositionWhereInput> = z.object({
  AND: z.union([ z.lazy(() => CompositionWhereInputSchema),z.lazy(() => CompositionWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => CompositionWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => CompositionWhereInputSchema),z.lazy(() => CompositionWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  description: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  videoId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  badges: z.lazy(() => EnumCompositionBadgesNullableListFilterSchema).optional(),
  userId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  video: z.union([ z.lazy(() => FileNullableRelationFilterSchema),z.lazy(() => FileWhereInputSchema) ]).optional().nullable(),
  ingredients: z.lazy(() => IngredientListRelationFilterSchema).optional(),
  categories: z.lazy(() => CompositionCategoryListRelationFilterSchema).optional(),
  submittedBy: z.union([ z.lazy(() => UserNullableRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional().nullable(),
}).strict();

export default CompositionWhereInputSchema;
