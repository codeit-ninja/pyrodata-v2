import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { ChemicalUncheckedUpdateOneWithoutPageNestedInputSchema } from './ChemicalUncheckedUpdateOneWithoutPageNestedInputSchema';
import { IngredientUncheckedUpdateManyWithoutPageNestedInputSchema } from './IngredientUncheckedUpdateManyWithoutPageNestedInputSchema';

export const PageUncheckedUpdateWithoutFeaturedImageInputSchema: z.ZodType<Prisma.PageUncheckedUpdateWithoutFeaturedImageInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  slug: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  pageContentId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  categorySlug: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  chemical: z.lazy(() => ChemicalUncheckedUpdateOneWithoutPageNestedInputSchema).optional(),
  ingredients: z.lazy(() => IngredientUncheckedUpdateManyWithoutPageNestedInputSchema).optional()
}).strict();

export default PageUncheckedUpdateWithoutFeaturedImageInputSchema;
