import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CompositionCreatebadgesInputSchema } from './CompositionCreatebadgesInputSchema';
import { CompositionBadgesSchema } from './CompositionBadgesSchema';
import { FileCreateNestedOneWithoutCompositionInputSchema } from './FileCreateNestedOneWithoutCompositionInputSchema';
import { IngredientCreateNestedManyWithoutCompositionInputSchema } from './IngredientCreateNestedManyWithoutCompositionInputSchema';
import { UserCreateNestedOneWithoutCompositionsInputSchema } from './UserCreateNestedOneWithoutCompositionsInputSchema';

export const CompositionCreateWithoutCategoriesInputSchema: z.ZodType<Prisma.CompositionCreateWithoutCategoriesInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  description: z.string().optional().nullable(),
  badges: z.union([ z.lazy(() => CompositionCreatebadgesInputSchema),z.lazy(() => CompositionBadgesSchema).array() ]).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  video: z.lazy(() => FileCreateNestedOneWithoutCompositionInputSchema).optional(),
  ingredients: z.lazy(() => IngredientCreateNestedManyWithoutCompositionInputSchema).optional(),
  submittedBy: z.lazy(() => UserCreateNestedOneWithoutCompositionsInputSchema).optional()
}).strict();

export default CompositionCreateWithoutCategoriesInputSchema;
