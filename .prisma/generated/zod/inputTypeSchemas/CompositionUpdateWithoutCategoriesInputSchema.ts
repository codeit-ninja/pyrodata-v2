import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { CompositionUpdatebadgesInputSchema } from './CompositionUpdatebadgesInputSchema';
import { CompositionBadgesSchema } from './CompositionBadgesSchema';
import { FileUpdateOneWithoutCompositionNestedInputSchema } from './FileUpdateOneWithoutCompositionNestedInputSchema';
import { IngredientUpdateManyWithoutCompositionNestedInputSchema } from './IngredientUpdateManyWithoutCompositionNestedInputSchema';

export const CompositionUpdateWithoutCategoriesInputSchema: z.ZodType<Prisma.CompositionUpdateWithoutCategoriesInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  badges: z.union([ z.lazy(() => CompositionUpdatebadgesInputSchema),z.lazy(() => CompositionBadgesSchema).array() ]).optional(),
  video: z.lazy(() => FileUpdateOneWithoutCompositionNestedInputSchema).optional(),
  ingredients: z.lazy(() => IngredientUpdateManyWithoutCompositionNestedInputSchema).optional()
}).strict();

export default CompositionUpdateWithoutCategoriesInputSchema;
