import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const EditorWidgetMinOrderByAggregateInputSchema: z.ZodType<Prisma.EditorWidgetMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default EditorWidgetMinOrderByAggregateInputSchema;
