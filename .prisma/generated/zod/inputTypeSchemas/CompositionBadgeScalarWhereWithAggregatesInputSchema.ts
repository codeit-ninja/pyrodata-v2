import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntWithAggregatesFilterSchema } from './IntWithAggregatesFilterSchema';

export const CompositionBadgeScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.CompositionBadgeScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => CompositionBadgeScalarWhereWithAggregatesInputSchema),z.lazy(() => CompositionBadgeScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => CompositionBadgeScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => CompositionBadgeScalarWhereWithAggregatesInputSchema),z.lazy(() => CompositionBadgeScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
}).strict();

export default CompositionBadgeScalarWhereWithAggregatesInputSchema;
