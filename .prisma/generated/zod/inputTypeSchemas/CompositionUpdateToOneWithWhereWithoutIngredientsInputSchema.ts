import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CompositionWhereInputSchema } from './CompositionWhereInputSchema';
import { CompositionUpdateWithoutIngredientsInputSchema } from './CompositionUpdateWithoutIngredientsInputSchema';
import { CompositionUncheckedUpdateWithoutIngredientsInputSchema } from './CompositionUncheckedUpdateWithoutIngredientsInputSchema';

export const CompositionUpdateToOneWithWhereWithoutIngredientsInputSchema: z.ZodType<Prisma.CompositionUpdateToOneWithWhereWithoutIngredientsInput> = z.object({
  where: z.lazy(() => CompositionWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => CompositionUpdateWithoutIngredientsInputSchema),z.lazy(() => CompositionUncheckedUpdateWithoutIngredientsInputSchema) ]),
}).strict();

export default CompositionUpdateToOneWithWhereWithoutIngredientsInputSchema;
