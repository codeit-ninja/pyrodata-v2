import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CompositionCreateWithoutIngredientsInputSchema } from './CompositionCreateWithoutIngredientsInputSchema';
import { CompositionUncheckedCreateWithoutIngredientsInputSchema } from './CompositionUncheckedCreateWithoutIngredientsInputSchema';
import { CompositionCreateOrConnectWithoutIngredientsInputSchema } from './CompositionCreateOrConnectWithoutIngredientsInputSchema';
import { CompositionUpsertWithoutIngredientsInputSchema } from './CompositionUpsertWithoutIngredientsInputSchema';
import { CompositionWhereUniqueInputSchema } from './CompositionWhereUniqueInputSchema';
import { CompositionUpdateToOneWithWhereWithoutIngredientsInputSchema } from './CompositionUpdateToOneWithWhereWithoutIngredientsInputSchema';
import { CompositionUpdateWithoutIngredientsInputSchema } from './CompositionUpdateWithoutIngredientsInputSchema';
import { CompositionUncheckedUpdateWithoutIngredientsInputSchema } from './CompositionUncheckedUpdateWithoutIngredientsInputSchema';

export const CompositionUpdateOneRequiredWithoutIngredientsNestedInputSchema: z.ZodType<Prisma.CompositionUpdateOneRequiredWithoutIngredientsNestedInput> = z.object({
  create: z.union([ z.lazy(() => CompositionCreateWithoutIngredientsInputSchema),z.lazy(() => CompositionUncheckedCreateWithoutIngredientsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => CompositionCreateOrConnectWithoutIngredientsInputSchema).optional(),
  upsert: z.lazy(() => CompositionUpsertWithoutIngredientsInputSchema).optional(),
  connect: z.lazy(() => CompositionWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => CompositionUpdateToOneWithWhereWithoutIngredientsInputSchema),z.lazy(() => CompositionUpdateWithoutIngredientsInputSchema),z.lazy(() => CompositionUncheckedUpdateWithoutIngredientsInputSchema) ]).optional(),
}).strict();

export default CompositionUpdateOneRequiredWithoutIngredientsNestedInputSchema;
