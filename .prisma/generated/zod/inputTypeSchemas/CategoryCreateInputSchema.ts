import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PageCreateNestedManyWithoutCategoryInputSchema } from './PageCreateNestedManyWithoutCategoryInputSchema';

export const CategoryCreateInputSchema: z.ZodType<Prisma.CategoryCreateInput> = z.object({
  title: z.string(),
  slug: z.string(),
  page: z.lazy(() => PageCreateNestedManyWithoutCategoryInputSchema).optional()
}).strict();

export default CategoryCreateInputSchema;
