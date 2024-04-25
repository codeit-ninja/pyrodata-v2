import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const PageContentCountOrderByAggregateInputSchema: z.ZodType<Prisma.PageContentCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  html: z.lazy(() => SortOrderSchema).optional(),
  sidebar: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default PageContentCountOrderByAggregateInputSchema;
