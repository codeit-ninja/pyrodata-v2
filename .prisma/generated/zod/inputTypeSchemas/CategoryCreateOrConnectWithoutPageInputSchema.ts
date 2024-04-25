import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CategoryWhereUniqueInputSchema } from './CategoryWhereUniqueInputSchema';
import { CategoryCreateWithoutPageInputSchema } from './CategoryCreateWithoutPageInputSchema';
import { CategoryUncheckedCreateWithoutPageInputSchema } from './CategoryUncheckedCreateWithoutPageInputSchema';

export const CategoryCreateOrConnectWithoutPageInputSchema: z.ZodType<Prisma.CategoryCreateOrConnectWithoutPageInput> = z.object({
  where: z.lazy(() => CategoryWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => CategoryCreateWithoutPageInputSchema),z.lazy(() => CategoryUncheckedCreateWithoutPageInputSchema) ]),
}).strict();

export default CategoryCreateOrConnectWithoutPageInputSchema;
