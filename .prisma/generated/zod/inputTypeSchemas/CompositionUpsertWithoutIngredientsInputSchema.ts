import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CompositionUpdateWithoutIngredientsInputSchema } from './CompositionUpdateWithoutIngredientsInputSchema';
import { CompositionUncheckedUpdateWithoutIngredientsInputSchema } from './CompositionUncheckedUpdateWithoutIngredientsInputSchema';
import { CompositionCreateWithoutIngredientsInputSchema } from './CompositionCreateWithoutIngredientsInputSchema';
import { CompositionUncheckedCreateWithoutIngredientsInputSchema } from './CompositionUncheckedCreateWithoutIngredientsInputSchema';
import { CompositionWhereInputSchema } from './CompositionWhereInputSchema';

export const CompositionUpsertWithoutIngredientsInputSchema: z.ZodType<Prisma.CompositionUpsertWithoutIngredientsInput> = z.object({
  update: z.union([ z.lazy(() => CompositionUpdateWithoutIngredientsInputSchema),z.lazy(() => CompositionUncheckedUpdateWithoutIngredientsInputSchema) ]),
  create: z.union([ z.lazy(() => CompositionCreateWithoutIngredientsInputSchema),z.lazy(() => CompositionUncheckedCreateWithoutIngredientsInputSchema) ]),
  where: z.lazy(() => CompositionWhereInputSchema).optional()
}).strict();

export default CompositionUpsertWithoutIngredientsInputSchema;
