import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const WidgetOrderByRelationAggregateInputSchema: z.ZodType<Prisma.WidgetOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default WidgetOrderByRelationAggregateInputSchema;
