import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { CompositionUncheckedUpdateManyWithoutCategoriesNestedInputSchema } from './CompositionUncheckedUpdateManyWithoutCategoriesNestedInputSchema';

export const CompositionCategoryUncheckedUpdateInputSchema: z.ZodType<Prisma.CompositionCategoryUncheckedUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  slug: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  compositions: z.lazy(() => CompositionUncheckedUpdateManyWithoutCategoriesNestedInputSchema).optional()
}).strict();

export default CompositionCategoryUncheckedUpdateInputSchema;
