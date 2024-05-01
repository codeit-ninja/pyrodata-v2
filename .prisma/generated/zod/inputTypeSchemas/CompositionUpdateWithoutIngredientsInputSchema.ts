import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { CompositionUpdatebadgesInputSchema } from './CompositionUpdatebadgesInputSchema';
import { CompositionBadgesSchema } from './CompositionBadgesSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { FileUpdateOneWithoutCompositionNestedInputSchema } from './FileUpdateOneWithoutCompositionNestedInputSchema';
import { CompositionCategoryUpdateManyWithoutCompositionsNestedInputSchema } from './CompositionCategoryUpdateManyWithoutCompositionsNestedInputSchema';
import { UserUpdateOneWithoutCompositionsNestedInputSchema } from './UserUpdateOneWithoutCompositionsNestedInputSchema';

export const CompositionUpdateWithoutIngredientsInputSchema: z.ZodType<Prisma.CompositionUpdateWithoutIngredientsInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  badges: z.union([ z.lazy(() => CompositionUpdatebadgesInputSchema),z.lazy(() => CompositionBadgesSchema).array() ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  video: z.lazy(() => FileUpdateOneWithoutCompositionNestedInputSchema).optional(),
  categories: z.lazy(() => CompositionCategoryUpdateManyWithoutCompositionsNestedInputSchema).optional(),
  submittedBy: z.lazy(() => UserUpdateOneWithoutCompositionsNestedInputSchema).optional()
}).strict();

export default CompositionUpdateWithoutIngredientsInputSchema;
