import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CompositionUncheckedCreateNestedManyWithoutCategoriesInputSchema } from './CompositionUncheckedCreateNestedManyWithoutCategoriesInputSchema';

export const CompositionCategoryUncheckedCreateInputSchema: z.ZodType<Prisma.CompositionCategoryUncheckedCreateInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  slug: z.string(),
  compositions: z.lazy(() => CompositionUncheckedCreateNestedManyWithoutCategoriesInputSchema).optional()
}).strict();

export default CompositionCategoryUncheckedCreateInputSchema;
