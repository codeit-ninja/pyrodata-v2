import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ChemicalUncheckedCreateNestedOneWithoutPageInputSchema } from './ChemicalUncheckedCreateNestedOneWithoutPageInputSchema';

export const PageUncheckedCreateWithoutIngredientsInputSchema: z.ZodType<Prisma.PageUncheckedCreateWithoutIngredientsInput> = z.object({
  id: z.string().cuid().optional(),
  title: z.string(),
  slug: z.string(),
  featuredImageId: z.string().optional().nullable(),
  pageContentId: z.string(),
  categorySlug: z.string().optional().nullable(),
  userId: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  chemical: z.lazy(() => ChemicalUncheckedCreateNestedOneWithoutPageInputSchema).optional()
}).strict();

export default PageUncheckedCreateWithoutIngredientsInputSchema;
