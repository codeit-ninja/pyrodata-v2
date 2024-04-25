import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CategoryCreateWithoutPageInputSchema } from './CategoryCreateWithoutPageInputSchema';
import { CategoryUncheckedCreateWithoutPageInputSchema } from './CategoryUncheckedCreateWithoutPageInputSchema';
import { CategoryCreateOrConnectWithoutPageInputSchema } from './CategoryCreateOrConnectWithoutPageInputSchema';
import { CategoryWhereUniqueInputSchema } from './CategoryWhereUniqueInputSchema';

export const CategoryCreateNestedOneWithoutPageInputSchema: z.ZodType<Prisma.CategoryCreateNestedOneWithoutPageInput> = z.object({
  create: z.union([ z.lazy(() => CategoryCreateWithoutPageInputSchema),z.lazy(() => CategoryUncheckedCreateWithoutPageInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => CategoryCreateOrConnectWithoutPageInputSchema).optional(),
  connect: z.lazy(() => CategoryWhereUniqueInputSchema).optional()
}).strict();

export default CategoryCreateNestedOneWithoutPageInputSchema;
