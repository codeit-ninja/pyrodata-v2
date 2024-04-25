import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CompositionWhereUniqueInputSchema } from './CompositionWhereUniqueInputSchema';
import { CompositionCreateWithoutIngredientsInputSchema } from './CompositionCreateWithoutIngredientsInputSchema';
import { CompositionUncheckedCreateWithoutIngredientsInputSchema } from './CompositionUncheckedCreateWithoutIngredientsInputSchema';

export const CompositionCreateOrConnectWithoutIngredientsInputSchema: z.ZodType<Prisma.CompositionCreateOrConnectWithoutIngredientsInput> = z.object({
  where: z.lazy(() => CompositionWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => CompositionCreateWithoutIngredientsInputSchema),z.lazy(() => CompositionUncheckedCreateWithoutIngredientsInputSchema) ]),
}).strict();

export default CompositionCreateOrConnectWithoutIngredientsInputSchema;
