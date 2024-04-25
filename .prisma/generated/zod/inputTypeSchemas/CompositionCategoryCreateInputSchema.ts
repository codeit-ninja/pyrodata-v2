import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CompositionCreateNestedManyWithoutCategoriesInputSchema } from './CompositionCreateNestedManyWithoutCategoriesInputSchema';

export const CompositionCategoryCreateInputSchema: z.ZodType<Prisma.CompositionCategoryCreateInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  slug: z.string(),
  compositions: z.lazy(() => CompositionCreateNestedManyWithoutCategoriesInputSchema).optional()
}).strict();

export default CompositionCategoryCreateInputSchema;
