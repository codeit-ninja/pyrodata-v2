import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const CompositionBadgeMinOrderByAggregateInputSchema: z.ZodType<Prisma.CompositionBadgeMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default CompositionBadgeMinOrderByAggregateInputSchema;
