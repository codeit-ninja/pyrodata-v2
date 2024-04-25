import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CompositionCreatebadgesInputSchema } from './CompositionCreatebadgesInputSchema';
import { CompositionBadgesSchema } from './CompositionBadgesSchema';
import { CompositionCategoryUncheckedCreateNestedManyWithoutCompositionsInputSchema } from './CompositionCategoryUncheckedCreateNestedManyWithoutCompositionsInputSchema';

export const CompositionUncheckedCreateWithoutIngredientsInputSchema: z.ZodType<Prisma.CompositionUncheckedCreateWithoutIngredientsInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  description: z.string().optional().nullable(),
  videoId: z.string().optional().nullable(),
  badges: z.union([ z.lazy(() => CompositionCreatebadgesInputSchema),z.lazy(() => CompositionBadgesSchema).array() ]).optional(),
  categories: z.lazy(() => CompositionCategoryUncheckedCreateNestedManyWithoutCompositionsInputSchema).optional()
}).strict();

export default CompositionUncheckedCreateWithoutIngredientsInputSchema;
