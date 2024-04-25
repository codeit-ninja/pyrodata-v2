import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const CompositionCategoryOrderByRelationAggregateInputSchema: z.ZodType<Prisma.CompositionCategoryOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default CompositionCategoryOrderByRelationAggregateInputSchema;
