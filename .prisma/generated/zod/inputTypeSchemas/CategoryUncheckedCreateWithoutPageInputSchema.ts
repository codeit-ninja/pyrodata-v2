import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const CategoryUncheckedCreateWithoutPageInputSchema: z.ZodType<Prisma.CategoryUncheckedCreateWithoutPageInput> = z.object({
  title: z.string(),
  slug: z.string()
}).strict();

export default CategoryUncheckedCreateWithoutPageInputSchema;
