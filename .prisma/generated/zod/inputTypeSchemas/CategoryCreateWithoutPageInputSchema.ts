import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const CategoryCreateWithoutPageInputSchema: z.ZodType<Prisma.CategoryCreateWithoutPageInput> = z.object({
  title: z.string(),
  slug: z.string()
}).strict();

export default CategoryCreateWithoutPageInputSchema;
