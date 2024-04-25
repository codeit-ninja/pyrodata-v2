import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const ImageWidgetOrderByRelationAggregateInputSchema: z.ZodType<Prisma.ImageWidgetOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default ImageWidgetOrderByRelationAggregateInputSchema;
