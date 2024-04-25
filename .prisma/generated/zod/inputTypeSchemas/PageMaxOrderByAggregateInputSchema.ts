import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const PageMaxOrderByAggregateInputSchema: z.ZodType<Prisma.PageMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  slug: z.lazy(() => SortOrderSchema).optional(),
  featuredImageId: z.lazy(() => SortOrderSchema).optional(),
  pageContentId: z.lazy(() => SortOrderSchema).optional(),
  categorySlug: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default PageMaxOrderByAggregateInputSchema;
