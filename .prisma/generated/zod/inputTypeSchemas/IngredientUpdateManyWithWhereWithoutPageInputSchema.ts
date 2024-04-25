import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IngredientScalarWhereInputSchema } from './IngredientScalarWhereInputSchema';
import { IngredientUpdateManyMutationInputSchema } from './IngredientUpdateManyMutationInputSchema';
import { IngredientUncheckedUpdateManyWithoutPageInputSchema } from './IngredientUncheckedUpdateManyWithoutPageInputSchema';

export const IngredientUpdateManyWithWhereWithoutPageInputSchema: z.ZodType<Prisma.IngredientUpdateManyWithWhereWithoutPageInput> = z.object({
  where: z.lazy(() => IngredientScalarWhereInputSchema),
  data: z.union([ z.lazy(() => IngredientUpdateManyMutationInputSchema),z.lazy(() => IngredientUncheckedUpdateManyWithoutPageInputSchema) ]),
}).strict();

export default IngredientUpdateManyWithWhereWithoutPageInputSchema;
