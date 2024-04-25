import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const CompositionBadgeSumOrderByAggregateInputSchema: z.ZodType<Prisma.CompositionBadgeSumOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default CompositionBadgeSumOrderByAggregateInputSchema;
