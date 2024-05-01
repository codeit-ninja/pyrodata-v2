import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { CompositionUpdatebadgesInputSchema } from './CompositionUpdatebadgesInputSchema';
import { CompositionBadgesSchema } from './CompositionBadgesSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { IngredientUncheckedUpdateManyWithoutCompositionNestedInputSchema } from './IngredientUncheckedUpdateManyWithoutCompositionNestedInputSchema';
import { CompositionCategoryUncheckedUpdateManyWithoutCompositionsNestedInputSchema } from './CompositionCategoryUncheckedUpdateManyWithoutCompositionsNestedInputSchema';

export const CompositionUncheckedUpdateWithoutSubmittedByInputSchema: z.ZodType<Prisma.CompositionUncheckedUpdateWithoutSubmittedByInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  videoId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  badges: z.union([ z.lazy(() => CompositionUpdatebadgesInputSchema),z.lazy(() => CompositionBadgesSchema).array() ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  ingredients: z.lazy(() => IngredientUncheckedUpdateManyWithoutCompositionNestedInputSchema).optional(),
  categories: z.lazy(() => CompositionCategoryUncheckedUpdateManyWithoutCompositionsNestedInputSchema).optional()
}).strict();

export default CompositionUncheckedUpdateWithoutSubmittedByInputSchema;
