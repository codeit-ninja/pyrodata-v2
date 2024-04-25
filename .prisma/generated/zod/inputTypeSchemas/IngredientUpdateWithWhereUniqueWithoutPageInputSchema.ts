import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IngredientWhereUniqueInputSchema } from './IngredientWhereUniqueInputSchema';
import { IngredientUpdateWithoutPageInputSchema } from './IngredientUpdateWithoutPageInputSchema';
import { IngredientUncheckedUpdateWithoutPageInputSchema } from './IngredientUncheckedUpdateWithoutPageInputSchema';

export const IngredientUpdateWithWhereUniqueWithoutPageInputSchema: z.ZodType<Prisma.IngredientUpdateWithWhereUniqueWithoutPageInput> = z.object({
  where: z.lazy(() => IngredientWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => IngredientUpdateWithoutPageInputSchema),z.lazy(() => IngredientUncheckedUpdateWithoutPageInputSchema) ]),
}).strict();

export default IngredientUpdateWithWhereUniqueWithoutPageInputSchema;
