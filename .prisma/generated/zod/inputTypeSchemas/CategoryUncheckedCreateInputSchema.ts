import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PageUncheckedCreateNestedManyWithoutCategoryInputSchema } from './PageUncheckedCreateNestedManyWithoutCategoryInputSchema';

export const CategoryUncheckedCreateInputSchema: z.ZodType<Prisma.CategoryUncheckedCreateInput> = z.object({
  title: z.string(),
  slug: z.string(),
  page: z.lazy(() => PageUncheckedCreateNestedManyWithoutCategoryInputSchema).optional()
}).strict();

export default CategoryUncheckedCreateInputSchema;
