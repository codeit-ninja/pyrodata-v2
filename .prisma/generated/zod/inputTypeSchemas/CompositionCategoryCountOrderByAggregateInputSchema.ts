import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const CompositionCategoryCountOrderByAggregateInputSchema: z.ZodType<Prisma.CompositionCategoryCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  slug: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default CompositionCategoryCountOrderByAggregateInputSchema;
