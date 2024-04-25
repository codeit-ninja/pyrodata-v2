import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const CompositionBadgeMaxOrderByAggregateInputSchema: z.ZodType<Prisma.CompositionBadgeMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default CompositionBadgeMaxOrderByAggregateInputSchema;
