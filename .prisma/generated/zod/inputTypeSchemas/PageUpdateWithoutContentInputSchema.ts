import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { FileUpdateOneWithoutPageNestedInputSchema } from './FileUpdateOneWithoutPageNestedInputSchema';
import { CategoryUpdateOneWithoutPageNestedInputSchema } from './CategoryUpdateOneWithoutPageNestedInputSchema';
import { ChemicalUpdateOneWithoutPageNestedInputSchema } from './ChemicalUpdateOneWithoutPageNestedInputSchema';
import { IngredientUpdateManyWithoutPageNestedInputSchema } from './IngredientUpdateManyWithoutPageNestedInputSchema';
import { UserUpdateOneWithoutPagesNestedInputSchema } from './UserUpdateOneWithoutPagesNestedInputSchema';

export const PageUpdateWithoutContentInputSchema: z.ZodType<Prisma.PageUpdateWithoutContentInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  slug: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  featuredImage: z.lazy(() => FileUpdateOneWithoutPageNestedInputSchema).optional(),
  category: z.lazy(() => CategoryUpdateOneWithoutPageNestedInputSchema).optional(),
  chemical: z.lazy(() => ChemicalUpdateOneWithoutPageNestedInputSchema).optional(),
  ingredients: z.lazy(() => IngredientUpdateManyWithoutPageNestedInputSchema).optional(),
  user: z.lazy(() => UserUpdateOneWithoutPagesNestedInputSchema).optional()
}).strict();

export default PageUpdateWithoutContentInputSchema;
