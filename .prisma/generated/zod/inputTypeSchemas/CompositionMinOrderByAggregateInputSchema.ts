import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const CompositionMinOrderByAggregateInputSchema: z.ZodType<Prisma.CompositionMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  videoId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default CompositionMinOrderByAggregateInputSchema;
