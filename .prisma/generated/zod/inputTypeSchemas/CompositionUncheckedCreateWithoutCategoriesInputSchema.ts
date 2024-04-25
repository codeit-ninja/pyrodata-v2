import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CompositionCreatebadgesInputSchema } from './CompositionCreatebadgesInputSchema';
import { CompositionBadgesSchema } from './CompositionBadgesSchema';
import { IngredientUncheckedCreateNestedManyWithoutCompositionInputSchema } from './IngredientUncheckedCreateNestedManyWithoutCompositionInputSchema';

export const CompositionUncheckedCreateWithoutCategoriesInputSchema: z.ZodType<Prisma.CompositionUncheckedCreateWithoutCategoriesInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  description: z.string().optional().nullable(),
  videoId: z.string().optional().nullable(),
  badges: z.union([ z.lazy(() => CompositionCreatebadgesInputSchema),z.lazy(() => CompositionBadgesSchema).array() ]).optional(),
  ingredients: z.lazy(() => IngredientUncheckedCreateNestedManyWithoutCompositionInputSchema).optional()
}).strict();

export default CompositionUncheckedCreateWithoutCategoriesInputSchema;
