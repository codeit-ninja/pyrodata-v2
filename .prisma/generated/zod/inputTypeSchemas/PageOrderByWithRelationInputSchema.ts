import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { FileOrderByWithRelationInputSchema } from './FileOrderByWithRelationInputSchema';
import { PageContentOrderByWithRelationInputSchema } from './PageContentOrderByWithRelationInputSchema';
import { CategoryOrderByWithRelationInputSchema } from './CategoryOrderByWithRelationInputSchema';
import { ChemicalOrderByWithRelationInputSchema } from './ChemicalOrderByWithRelationInputSchema';
import { IngredientOrderByRelationAggregateInputSchema } from './IngredientOrderByRelationAggregateInputSchema';
import { UserOrderByWithRelationInputSchema } from './UserOrderByWithRelationInputSchema';

export const PageOrderByWithRelationInputSchema: z.ZodType<Prisma.PageOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  slug: z.lazy(() => SortOrderSchema).optional(),
  featuredImageId: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  pageContentId: z.lazy(() => SortOrderSchema).optional(),
  categorySlug: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  userId: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  featuredImage: z.lazy(() => FileOrderByWithRelationInputSchema).optional(),
  content: z.lazy(() => PageContentOrderByWithRelationInputSchema).optional(),
  category: z.lazy(() => CategoryOrderByWithRelationInputSchema).optional(),
  chemical: z.lazy(() => ChemicalOrderByWithRelationInputSchema).optional(),
  ingredients: z.lazy(() => IngredientOrderByRelationAggregateInputSchema).optional(),
  user: z.lazy(() => UserOrderByWithRelationInputSchema).optional()
}).strict();

export default PageOrderByWithRelationInputSchema;
