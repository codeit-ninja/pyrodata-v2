import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';
import { StringNullableWithAggregatesFilterSchema } from './StringNullableWithAggregatesFilterSchema';
import { EnumCompositionBadgesNullableListFilterSchema } from './EnumCompositionBadgesNullableListFilterSchema';

export const CompositionScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.CompositionScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => CompositionScalarWhereWithAggregatesInputSchema),z.lazy(() => CompositionScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => CompositionScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => CompositionScalarWhereWithAggregatesInputSchema),z.lazy(() => CompositionScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  description: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  videoId: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  badges: z.lazy(() => EnumCompositionBadgesNullableListFilterSchema).optional()
}).strict();

export default CompositionScalarWhereWithAggregatesInputSchema;
