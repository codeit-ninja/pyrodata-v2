import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { PageUpdateManyWithoutCategoryNestedInputSchema } from './PageUpdateManyWithoutCategoryNestedInputSchema';

export const CategoryUpdateInputSchema: z.ZodType<Prisma.CategoryUpdateInput> = z.object({
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  slug: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  page: z.lazy(() => PageUpdateManyWithoutCategoryNestedInputSchema).optional()
}).strict();

export default CategoryUpdateInputSchema;
