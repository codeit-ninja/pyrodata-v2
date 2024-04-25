import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { ImageWidgetOrderByRelationAggregateInputSchema } from './ImageWidgetOrderByRelationAggregateInputSchema';
import { PageOrderByRelationAggregateInputSchema } from './PageOrderByRelationAggregateInputSchema';
import { CompositionOrderByRelationAggregateInputSchema } from './CompositionOrderByRelationAggregateInputSchema';
import { UserOrderByWithRelationInputSchema } from './UserOrderByWithRelationInputSchema';

export const FileOrderByWithRelationInputSchema: z.ZodType<Prisma.FileOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  description: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  mimeType: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  userId: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  imageWidget: z.lazy(() => ImageWidgetOrderByRelationAggregateInputSchema).optional(),
  page: z.lazy(() => PageOrderByRelationAggregateInputSchema).optional(),
  composition: z.lazy(() => CompositionOrderByRelationAggregateInputSchema).optional(),
  user: z.lazy(() => UserOrderByWithRelationInputSchema).optional()
}).strict();

export default FileOrderByWithRelationInputSchema;
