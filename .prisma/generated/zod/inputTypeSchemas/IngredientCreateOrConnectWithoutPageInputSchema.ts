import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IngredientWhereUniqueInputSchema } from './IngredientWhereUniqueInputSchema';
import { IngredientCreateWithoutPageInputSchema } from './IngredientCreateWithoutPageInputSchema';
import { IngredientUncheckedCreateWithoutPageInputSchema } from './IngredientUncheckedCreateWithoutPageInputSchema';

export const IngredientCreateOrConnectWithoutPageInputSchema: z.ZodType<Prisma.IngredientCreateOrConnectWithoutPageInput> = z.object({
  where: z.lazy(() => IngredientWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => IngredientCreateWithoutPageInputSchema),z.lazy(() => IngredientUncheckedCreateWithoutPageInputSchema) ]),
}).strict();

export default IngredientCreateOrConnectWithoutPageInputSchema;
