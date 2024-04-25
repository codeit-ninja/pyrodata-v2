import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { CompositionOrderByWithRelationInputSchema } from './CompositionOrderByWithRelationInputSchema';
import { PageOrderByWithRelationInputSchema } from './PageOrderByWithRelationInputSchema';

export const IngredientOrderByWithRelationInputSchema: z.ZodType<Prisma.IngredientOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  amount: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  note: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  compositionId: z.lazy(() => SortOrderSchema).optional(),
  pageId: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  composition: z.lazy(() => CompositionOrderByWithRelationInputSchema).optional(),
  page: z.lazy(() => PageOrderByWithRelationInputSchema).optional()
}).strict();

export default IngredientOrderByWithRelationInputSchema;
