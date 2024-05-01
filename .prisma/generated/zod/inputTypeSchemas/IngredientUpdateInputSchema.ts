import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { FloatFieldUpdateOperationsInputSchema } from './FloatFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { PageUpdateOneWithoutIngredientsNestedInputSchema } from './PageUpdateOneWithoutIngredientsNestedInputSchema';
import { CompositionUpdateOneRequiredWithoutIngredientsNestedInputSchema } from './CompositionUpdateOneRequiredWithoutIngredientsNestedInputSchema';

export const IngredientUpdateInputSchema: z.ZodType<Prisma.IngredientUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  amount: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  note: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  page: z.lazy(() => PageUpdateOneWithoutIngredientsNestedInputSchema).optional(),
  composition: z.lazy(() => CompositionUpdateOneRequiredWithoutIngredientsNestedInputSchema).optional()
}).strict();

export default IngredientUpdateInputSchema;
