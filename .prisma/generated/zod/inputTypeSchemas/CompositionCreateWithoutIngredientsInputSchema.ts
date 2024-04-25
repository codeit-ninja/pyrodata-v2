import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CompositionCreatebadgesInputSchema } from './CompositionCreatebadgesInputSchema';
import { CompositionBadgesSchema } from './CompositionBadgesSchema';
import { FileCreateNestedOneWithoutCompositionInputSchema } from './FileCreateNestedOneWithoutCompositionInputSchema';
import { CompositionCategoryCreateNestedManyWithoutCompositionsInputSchema } from './CompositionCategoryCreateNestedManyWithoutCompositionsInputSchema';

export const CompositionCreateWithoutIngredientsInputSchema: z.ZodType<Prisma.CompositionCreateWithoutIngredientsInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  description: z.string().optional().nullable(),
  badges: z.union([ z.lazy(() => CompositionCreatebadgesInputSchema),z.lazy(() => CompositionBadgesSchema).array() ]).optional(),
  video: z.lazy(() => FileCreateNestedOneWithoutCompositionInputSchema).optional(),
  categories: z.lazy(() => CompositionCategoryCreateNestedManyWithoutCompositionsInputSchema).optional()
}).strict();

export default CompositionCreateWithoutIngredientsInputSchema;
