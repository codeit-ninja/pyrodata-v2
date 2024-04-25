import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { FileOrderByWithRelationInputSchema } from './FileOrderByWithRelationInputSchema';
import { IngredientOrderByRelationAggregateInputSchema } from './IngredientOrderByRelationAggregateInputSchema';
import { CompositionCategoryOrderByRelationAggregateInputSchema } from './CompositionCategoryOrderByRelationAggregateInputSchema';

export const CompositionOrderByWithRelationInputSchema: z.ZodType<Prisma.CompositionOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  description: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  videoId: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  badges: z.lazy(() => SortOrderSchema).optional(),
  video: z.lazy(() => FileOrderByWithRelationInputSchema).optional(),
  ingredients: z.lazy(() => IngredientOrderByRelationAggregateInputSchema).optional(),
  categories: z.lazy(() => CompositionCategoryOrderByRelationAggregateInputSchema).optional()
}).strict();

export default CompositionOrderByWithRelationInputSchema;
