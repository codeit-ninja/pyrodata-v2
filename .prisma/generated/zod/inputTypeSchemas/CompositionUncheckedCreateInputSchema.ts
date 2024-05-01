import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CompositionCreatebadgesInputSchema } from './CompositionCreatebadgesInputSchema';
import { CompositionBadgesSchema } from './CompositionBadgesSchema';
import { IngredientUncheckedCreateNestedManyWithoutCompositionInputSchema } from './IngredientUncheckedCreateNestedManyWithoutCompositionInputSchema';
import { CompositionCategoryUncheckedCreateNestedManyWithoutCompositionsInputSchema } from './CompositionCategoryUncheckedCreateNestedManyWithoutCompositionsInputSchema';

export const CompositionUncheckedCreateInputSchema: z.ZodType<Prisma.CompositionUncheckedCreateInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  description: z.string().optional().nullable(),
  videoId: z.string().optional().nullable(),
  badges: z.union([ z.lazy(() => CompositionCreatebadgesInputSchema),z.lazy(() => CompositionBadgesSchema).array() ]).optional(),
  userId: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  ingredients: z.lazy(() => IngredientUncheckedCreateNestedManyWithoutCompositionInputSchema).optional(),
  categories: z.lazy(() => CompositionCategoryUncheckedCreateNestedManyWithoutCompositionsInputSchema).optional()
}).strict();

export default CompositionUncheckedCreateInputSchema;
