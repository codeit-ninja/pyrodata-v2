import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { FloatFilterSchema } from './FloatFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { CompositionRelationFilterSchema } from './CompositionRelationFilterSchema';
import { CompositionWhereInputSchema } from './CompositionWhereInputSchema';
import { PageNullableRelationFilterSchema } from './PageNullableRelationFilterSchema';
import { PageWhereInputSchema } from './PageWhereInputSchema';

export const IngredientWhereInputSchema: z.ZodType<Prisma.IngredientWhereInput> = z.object({
  AND: z.union([ z.lazy(() => IngredientWhereInputSchema),z.lazy(() => IngredientWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => IngredientWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => IngredientWhereInputSchema),z.lazy(() => IngredientWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  amount: z.union([ z.lazy(() => FloatFilterSchema),z.number() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  note: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  compositionId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  pageId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  composition: z.union([ z.lazy(() => CompositionRelationFilterSchema),z.lazy(() => CompositionWhereInputSchema) ]).optional(),
  page: z.union([ z.lazy(() => PageNullableRelationFilterSchema),z.lazy(() => PageWhereInputSchema) ]).optional().nullable(),
}).strict();

export default IngredientWhereInputSchema;
