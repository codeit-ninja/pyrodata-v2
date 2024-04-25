import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { FloatFieldUpdateOperationsInputSchema } from './FloatFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { CompositionUpdateOneRequiredWithoutIngredientsNestedInputSchema } from './CompositionUpdateOneRequiredWithoutIngredientsNestedInputSchema';

export const IngredientUpdateWithoutPageInputSchema: z.ZodType<Prisma.IngredientUpdateWithoutPageInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  amount: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  note: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  composition: z.lazy(() => CompositionUpdateOneRequiredWithoutIngredientsNestedInputSchema).optional()
}).strict();

export default IngredientUpdateWithoutPageInputSchema;
