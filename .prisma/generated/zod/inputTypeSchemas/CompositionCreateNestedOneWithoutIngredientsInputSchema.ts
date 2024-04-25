import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CompositionCreateWithoutIngredientsInputSchema } from './CompositionCreateWithoutIngredientsInputSchema';
import { CompositionUncheckedCreateWithoutIngredientsInputSchema } from './CompositionUncheckedCreateWithoutIngredientsInputSchema';
import { CompositionCreateOrConnectWithoutIngredientsInputSchema } from './CompositionCreateOrConnectWithoutIngredientsInputSchema';
import { CompositionWhereUniqueInputSchema } from './CompositionWhereUniqueInputSchema';

export const CompositionCreateNestedOneWithoutIngredientsInputSchema: z.ZodType<Prisma.CompositionCreateNestedOneWithoutIngredientsInput> = z.object({
  create: z.union([ z.lazy(() => CompositionCreateWithoutIngredientsInputSchema),z.lazy(() => CompositionUncheckedCreateWithoutIngredientsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => CompositionCreateOrConnectWithoutIngredientsInputSchema).optional(),
  connect: z.lazy(() => CompositionWhereUniqueInputSchema).optional()
}).strict();

export default CompositionCreateNestedOneWithoutIngredientsInputSchema;
