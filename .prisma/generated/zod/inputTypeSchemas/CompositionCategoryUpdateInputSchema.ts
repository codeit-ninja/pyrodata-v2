import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { CompositionUpdateManyWithoutCategoriesNestedInputSchema } from './CompositionUpdateManyWithoutCategoriesNestedInputSchema';

export const CompositionCategoryUpdateInputSchema: z.ZodType<Prisma.CompositionCategoryUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  slug: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  compositions: z.lazy(() => CompositionUpdateManyWithoutCategoriesNestedInputSchema).optional()
}).strict();

export default CompositionCategoryUpdateInputSchema;
