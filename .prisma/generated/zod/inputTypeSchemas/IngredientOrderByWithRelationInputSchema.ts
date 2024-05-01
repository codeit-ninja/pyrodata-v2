import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { PageOrderByWithRelationInputSchema } from './PageOrderByWithRelationInputSchema';
import { CompositionOrderByWithRelationInputSchema } from './CompositionOrderByWithRelationInputSchema';

export const IngredientOrderByWithRelationInputSchema: z.ZodType<Prisma.IngredientOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  amount: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  note: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  pageId: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  compositionId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  page: z.lazy(() => PageOrderByWithRelationInputSchema).optional(),
  composition: z.lazy(() => CompositionOrderByWithRelationInputSchema).optional()
}).strict();

export default IngredientOrderByWithRelationInputSchema;
