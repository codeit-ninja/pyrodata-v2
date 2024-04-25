import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CategoryUpdateWithoutPageInputSchema } from './CategoryUpdateWithoutPageInputSchema';
import { CategoryUncheckedUpdateWithoutPageInputSchema } from './CategoryUncheckedUpdateWithoutPageInputSchema';
import { CategoryCreateWithoutPageInputSchema } from './CategoryCreateWithoutPageInputSchema';
import { CategoryUncheckedCreateWithoutPageInputSchema } from './CategoryUncheckedCreateWithoutPageInputSchema';
import { CategoryWhereInputSchema } from './CategoryWhereInputSchema';

export const CategoryUpsertWithoutPageInputSchema: z.ZodType<Prisma.CategoryUpsertWithoutPageInput> = z.object({
  update: z.union([ z.lazy(() => CategoryUpdateWithoutPageInputSchema),z.lazy(() => CategoryUncheckedUpdateWithoutPageInputSchema) ]),
  create: z.union([ z.lazy(() => CategoryCreateWithoutPageInputSchema),z.lazy(() => CategoryUncheckedCreateWithoutPageInputSchema) ]),
  where: z.lazy(() => CategoryWhereInputSchema).optional()
}).strict();

export default CategoryUpsertWithoutPageInputSchema;
