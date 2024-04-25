import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const CategoryCreateManyInputSchema: z.ZodType<Prisma.CategoryCreateManyInput> = z.object({
  title: z.string(),
  slug: z.string()
}).strict();

export default CategoryCreateManyInputSchema;
