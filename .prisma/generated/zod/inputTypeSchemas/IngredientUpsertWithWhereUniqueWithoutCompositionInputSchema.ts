import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IngredientWhereUniqueInputSchema } from './IngredientWhereUniqueInputSchema';
import { IngredientUpdateWithoutCompositionInputSchema } from './IngredientUpdateWithoutCompositionInputSchema';
import { IngredientUncheckedUpdateWithoutCompositionInputSchema } from './IngredientUncheckedUpdateWithoutCompositionInputSchema';
import { IngredientCreateWithoutCompositionInputSchema } from './IngredientCreateWithoutCompositionInputSchema';
import { IngredientUncheckedCreateWithoutCompositionInputSchema } from './IngredientUncheckedCreateWithoutCompositionInputSchema';

export const IngredientUpsertWithWhereUniqueWithoutCompositionInputSchema: z.ZodType<Prisma.IngredientUpsertWithWhereUniqueWithoutCompositionInput> = z.object({
  where: z.lazy(() => IngredientWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => IngredientUpdateWithoutCompositionInputSchema),z.lazy(() => IngredientUncheckedUpdateWithoutCompositionInputSchema) ]),
  create: z.union([ z.lazy(() => IngredientCreateWithoutCompositionInputSchema),z.lazy(() => IngredientUncheckedCreateWithoutCompositionInputSchema) ]),
}).strict();

export default IngredientUpsertWithWhereUniqueWithoutCompositionInputSchema;
