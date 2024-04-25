import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IngredientWhereUniqueInputSchema } from './IngredientWhereUniqueInputSchema';
import { IngredientUpdateWithoutCompositionInputSchema } from './IngredientUpdateWithoutCompositionInputSchema';
import { IngredientUncheckedUpdateWithoutCompositionInputSchema } from './IngredientUncheckedUpdateWithoutCompositionInputSchema';

export const IngredientUpdateWithWhereUniqueWithoutCompositionInputSchema: z.ZodType<Prisma.IngredientUpdateWithWhereUniqueWithoutCompositionInput> = z.object({
  where: z.lazy(() => IngredientWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => IngredientUpdateWithoutCompositionInputSchema),z.lazy(() => IngredientUncheckedUpdateWithoutCompositionInputSchema) ]),
}).strict();

export default IngredientUpdateWithWhereUniqueWithoutCompositionInputSchema;
