import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { PageUncheckedUpdateManyWithoutCategoryNestedInputSchema } from './PageUncheckedUpdateManyWithoutCategoryNestedInputSchema';

export const CategoryUncheckedUpdateInputSchema: z.ZodType<Prisma.CategoryUncheckedUpdateInput> = z.object({
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  slug: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  page: z.lazy(() => PageUncheckedUpdateManyWithoutCategoryNestedInputSchema).optional()
}).strict();

export default CategoryUncheckedUpdateInputSchema;
