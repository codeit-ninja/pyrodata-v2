import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { CompositionOrderByRelationAggregateInputSchema } from './CompositionOrderByRelationAggregateInputSchema';

export const CompositionCategoryOrderByWithRelationInputSchema: z.ZodType<Prisma.CompositionCategoryOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  slug: z.lazy(() => SortOrderSchema).optional(),
  compositions: z.lazy(() => CompositionOrderByRelationAggregateInputSchema).optional()
}).strict();

export default CompositionCategoryOrderByWithRelationInputSchema;
