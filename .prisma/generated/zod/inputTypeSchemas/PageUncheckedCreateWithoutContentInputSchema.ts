import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ChemicalUncheckedCreateNestedOneWithoutPageInputSchema } from './ChemicalUncheckedCreateNestedOneWithoutPageInputSchema';
import { IngredientUncheckedCreateNestedManyWithoutPageInputSchema } from './IngredientUncheckedCreateNestedManyWithoutPageInputSchema';

export const PageUncheckedCreateWithoutContentInputSchema: z.ZodType<Prisma.PageUncheckedCreateWithoutContentInput> = z.object({
  id: z.string().cuid().optional(),
  title: z.string(),
  slug: z.string(),
  featuredImageId: z.string().optional().nullable(),
  categorySlug: z.string().optional().nullable(),
  userId: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  chemical: z.lazy(() => ChemicalUncheckedCreateNestedOneWithoutPageInputSchema).optional(),
  ingredients: z.lazy(() => IngredientUncheckedCreateNestedManyWithoutPageInputSchema).optional()
}).strict();

export default PageUncheckedCreateWithoutContentInputSchema;
