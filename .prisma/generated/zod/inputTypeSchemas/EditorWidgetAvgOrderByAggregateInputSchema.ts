import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const EditorWidgetAvgOrderByAggregateInputSchema: z.ZodType<Prisma.EditorWidgetAvgOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default EditorWidgetAvgOrderByAggregateInputSchema;
