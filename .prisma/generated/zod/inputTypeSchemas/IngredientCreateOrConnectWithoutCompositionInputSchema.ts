import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IngredientWhereUniqueInputSchema } from './IngredientWhereUniqueInputSchema';
import { IngredientCreateWithoutCompositionInputSchema } from './IngredientCreateWithoutCompositionInputSchema';
import { IngredientUncheckedCreateWithoutCompositionInputSchema } from './IngredientUncheckedCreateWithoutCompositionInputSchema';

export const IngredientCreateOrConnectWithoutCompositionInputSchema: z.ZodType<Prisma.IngredientCreateOrConnectWithoutCompositionInput> = z.object({
  where: z.lazy(() => IngredientWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => IngredientCreateWithoutCompositionInputSchema),z.lazy(() => IngredientUncheckedCreateWithoutCompositionInputSchema) ]),
}).strict();

export default IngredientCreateOrConnectWithoutCompositionInputSchema;
