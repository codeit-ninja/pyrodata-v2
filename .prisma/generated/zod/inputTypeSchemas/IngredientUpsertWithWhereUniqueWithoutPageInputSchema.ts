import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IngredientWhereUniqueInputSchema } from './IngredientWhereUniqueInputSchema';
import { IngredientUpdateWithoutPageInputSchema } from './IngredientUpdateWithoutPageInputSchema';
import { IngredientUncheckedUpdateWithoutPageInputSchema } from './IngredientUncheckedUpdateWithoutPageInputSchema';
import { IngredientCreateWithoutPageInputSchema } from './IngredientCreateWithoutPageInputSchema';
import { IngredientUncheckedCreateWithoutPageInputSchema } from './IngredientUncheckedCreateWithoutPageInputSchema';

export const IngredientUpsertWithWhereUniqueWithoutPageInputSchema: z.ZodType<Prisma.IngredientUpsertWithWhereUniqueWithoutPageInput> = z.object({
  where: z.lazy(() => IngredientWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => IngredientUpdateWithoutPageInputSchema),z.lazy(() => IngredientUncheckedUpdateWithoutPageInputSchema) ]),
  create: z.union([ z.lazy(() => IngredientCreateWithoutPageInputSchema),z.lazy(() => IngredientUncheckedCreateWithoutPageInputSchema) ]),
}).strict();

export default IngredientUpsertWithWhereUniqueWithoutPageInputSchema;
