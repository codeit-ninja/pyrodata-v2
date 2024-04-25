import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { CompositionUpdatebadgesInputSchema } from './CompositionUpdatebadgesInputSchema';
import { CompositionBadgesSchema } from './CompositionBadgesSchema';
import { IngredientUncheckedUpdateManyWithoutCompositionNestedInputSchema } from './IngredientUncheckedUpdateManyWithoutCompositionNestedInputSchema';
import { CompositionCategoryUncheckedUpdateManyWithoutCompositionsNestedInputSchema } from './CompositionCategoryUncheckedUpdateManyWithoutCompositionsNestedInputSchema';

export const CompositionUncheckedUpdateWithoutVideoInputSchema: z.ZodType<Prisma.CompositionUncheckedUpdateWithoutVideoInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  badges: z.union([ z.lazy(() => CompositionUpdatebadgesInputSchema),z.lazy(() => CompositionBadgesSchema).array() ]).optional(),
  ingredients: z.lazy(() => IngredientUncheckedUpdateManyWithoutCompositionNestedInputSchema).optional(),
  categories: z.lazy(() => CompositionCategoryUncheckedUpdateManyWithoutCompositionsNestedInputSchema).optional()
}).strict();

export default CompositionUncheckedUpdateWithoutVideoInputSchema;
