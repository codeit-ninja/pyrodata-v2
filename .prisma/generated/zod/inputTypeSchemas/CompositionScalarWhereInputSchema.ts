import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { EnumCompositionBadgesNullableListFilterSchema } from './EnumCompositionBadgesNullableListFilterSchema';

export const CompositionScalarWhereInputSchema: z.ZodType<Prisma.CompositionScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => CompositionScalarWhereInputSchema),z.lazy(() => CompositionScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => CompositionScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => CompositionScalarWhereInputSchema),z.lazy(() => CompositionScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  description: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  videoId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  badges: z.lazy(() => EnumCompositionBadgesNullableListFilterSchema).optional()
}).strict();

export default CompositionScalarWhereInputSchema;
