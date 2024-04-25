import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IngredientUncheckedCreateNestedManyWithoutPageInputSchema } from './IngredientUncheckedCreateNestedManyWithoutPageInputSchema';

export const PageUncheckedCreateWithoutChemicalInputSchema: z.ZodType<Prisma.PageUncheckedCreateWithoutChemicalInput> = z.object({
  id: z.string().cuid().optional(),
  title: z.string(),
  slug: z.string(),
  featuredImageId: z.string().optional().nullable(),
  pageContentId: z.string(),
  categorySlug: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  userId: z.string().optional().nullable(),
  ingredients: z.lazy(() => IngredientUncheckedCreateNestedManyWithoutPageInputSchema).optional()
}).strict();

export default PageUncheckedCreateWithoutChemicalInputSchema;
