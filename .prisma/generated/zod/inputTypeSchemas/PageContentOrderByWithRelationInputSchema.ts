import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { PageOrderByRelationAggregateInputSchema } from './PageOrderByRelationAggregateInputSchema';
import { WidgetOrderByRelationAggregateInputSchema } from './WidgetOrderByRelationAggregateInputSchema';

export const PageContentOrderByWithRelationInputSchema: z.ZodType<Prisma.PageContentOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  html: z.lazy(() => SortOrderSchema).optional(),
  sidebar: z.lazy(() => SortOrderSchema).optional(),
  page: z.lazy(() => PageOrderByRelationAggregateInputSchema).optional(),
  widgets: z.lazy(() => WidgetOrderByRelationAggregateInputSchema).optional()
}).strict();

export default PageContentOrderByWithRelationInputSchema;
