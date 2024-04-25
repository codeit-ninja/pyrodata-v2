import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const WidgetMinOrderByAggregateInputSchema: z.ZodType<Prisma.WidgetMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  pageContentId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default WidgetMinOrderByAggregateInputSchema;
