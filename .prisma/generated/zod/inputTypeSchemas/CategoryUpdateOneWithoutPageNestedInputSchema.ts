import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CategoryCreateWithoutPageInputSchema } from './CategoryCreateWithoutPageInputSchema';
import { CategoryUncheckedCreateWithoutPageInputSchema } from './CategoryUncheckedCreateWithoutPageInputSchema';
import { CategoryCreateOrConnectWithoutPageInputSchema } from './CategoryCreateOrConnectWithoutPageInputSchema';
import { CategoryUpsertWithoutPageInputSchema } from './CategoryUpsertWithoutPageInputSchema';
import { CategoryWhereInputSchema } from './CategoryWhereInputSchema';
import { CategoryWhereUniqueInputSchema } from './CategoryWhereUniqueInputSchema';
import { CategoryUpdateToOneWithWhereWithoutPageInputSchema } from './CategoryUpdateToOneWithWhereWithoutPageInputSchema';
import { CategoryUpdateWithoutPageInputSchema } from './CategoryUpdateWithoutPageInputSchema';
import { CategoryUncheckedUpdateWithoutPageInputSchema } from './CategoryUncheckedUpdateWithoutPageInputSchema';

export const CategoryUpdateOneWithoutPageNestedInputSchema: z.ZodType<Prisma.CategoryUpdateOneWithoutPageNestedInput> = z.object({
  create: z.union([ z.lazy(() => CategoryCreateWithoutPageInputSchema),z.lazy(() => CategoryUncheckedCreateWithoutPageInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => CategoryCreateOrConnectWithoutPageInputSchema).optional(),
  upsert: z.lazy(() => CategoryUpsertWithoutPageInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => CategoryWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => CategoryWhereInputSchema) ]).optional(),
  connect: z.lazy(() => CategoryWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => CategoryUpdateToOneWithWhereWithoutPageInputSchema),z.lazy(() => CategoryUpdateWithoutPageInputSchema),z.lazy(() => CategoryUncheckedUpdateWithoutPageInputSchema) ]).optional(),
}).strict();

export default CategoryUpdateOneWithoutPageNestedInputSchema;
