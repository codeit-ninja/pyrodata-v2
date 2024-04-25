import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CategoryWhereInputSchema } from './CategoryWhereInputSchema';
import { CategoryUpdateWithoutPageInputSchema } from './CategoryUpdateWithoutPageInputSchema';
import { CategoryUncheckedUpdateWithoutPageInputSchema } from './CategoryUncheckedUpdateWithoutPageInputSchema';

export const CategoryUpdateToOneWithWhereWithoutPageInputSchema: z.ZodType<Prisma.CategoryUpdateToOneWithWhereWithoutPageInput> = z.object({
  where: z.lazy(() => CategoryWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => CategoryUpdateWithoutPageInputSchema),z.lazy(() => CategoryUncheckedUpdateWithoutPageInputSchema) ]),
}).strict();

export default CategoryUpdateToOneWithWhereWithoutPageInputSchema;
