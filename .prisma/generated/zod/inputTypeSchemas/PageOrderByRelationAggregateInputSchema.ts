import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const PageOrderByRelationAggregateInputSchema: z.ZodType<Prisma.PageOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default PageOrderByRelationAggregateInputSchema;
