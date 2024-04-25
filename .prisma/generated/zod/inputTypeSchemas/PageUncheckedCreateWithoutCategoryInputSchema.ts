import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ChemicalUncheckedCreateNestedOneWithoutPageInputSchema } from './ChemicalUncheckedCreateNestedOneWithoutPageInputSchema';
import { IngredientUncheckedCreateNestedManyWithoutPageInputSchema } from './IngredientUncheckedCreateNestedManyWithoutPageInputSchema';

export const PageUncheckedCreateWithoutCategoryInputSchema: z.ZodType<Prisma.PageUncheckedCreateWithoutCategoryInput> = z.object({
  id: z.string().cuid().optional(),
  title: z.string(),
  slug: z.string(),
  featuredImageId: z.string().optional().nullable(),
  pageContentId: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  userId: z.string().optional().nullable(),
  chemical: z.lazy(() => ChemicalUncheckedCreateNestedOneWithoutPageInputSchema).optional(),
  ingredients: z.lazy(() => IngredientUncheckedCreateNestedManyWithoutPageInputSchema).optional()
}).strict();

export default PageUncheckedCreateWithoutCategoryInputSchema;
