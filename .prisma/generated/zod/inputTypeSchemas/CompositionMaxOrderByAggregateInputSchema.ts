import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const CompositionMaxOrderByAggregateInputSchema: z.ZodType<Prisma.CompositionMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  videoId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default CompositionMaxOrderByAggregateInputSchema;
