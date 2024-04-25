import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const EditorWidgetSumOrderByAggregateInputSchema: z.ZodType<Prisma.EditorWidgetSumOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default EditorWidgetSumOrderByAggregateInputSchema;
