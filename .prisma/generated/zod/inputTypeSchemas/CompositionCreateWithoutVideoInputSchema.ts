import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CompositionCreatebadgesInputSchema } from './CompositionCreatebadgesInputSchema';
import { CompositionBadgesSchema } from './CompositionBadgesSchema';
import { IngredientCreateNestedManyWithoutCompositionInputSchema } from './IngredientCreateNestedManyWithoutCompositionInputSchema';
import { CompositionCategoryCreateNestedManyWithoutCompositionsInputSchema } from './CompositionCategoryCreateNestedManyWithoutCompositionsInputSchema';
import { UserCreateNestedOneWithoutCompositionsInputSchema } from './UserCreateNestedOneWithoutCompositionsInputSchema';

export const CompositionCreateWithoutVideoInputSchema: z.ZodType<Prisma.CompositionCreateWithoutVideoInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  description: z.string().optional().nullable(),
  badges: z.union([ z.lazy(() => CompositionCreatebadgesInputSchema),z.lazy(() => CompositionBadgesSchema).array() ]).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  ingredients: z.lazy(() => IngredientCreateNestedManyWithoutCompositionInputSchema).optional(),
  categories: z.lazy(() => CompositionCategoryCreateNestedManyWithoutCompositionsInputSchema).optional(),
  submittedBy: z.lazy(() => UserCreateNestedOneWithoutCompositionsInputSchema).optional()
}).strict();

export default CompositionCreateWithoutVideoInputSchema;
