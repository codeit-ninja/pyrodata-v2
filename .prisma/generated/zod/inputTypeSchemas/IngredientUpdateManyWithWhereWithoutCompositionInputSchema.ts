import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IngredientScalarWhereInputSchema } from './IngredientScalarWhereInputSchema';
import { IngredientUpdateManyMutationInputSchema } from './IngredientUpdateManyMutationInputSchema';
import { IngredientUncheckedUpdateManyWithoutCompositionInputSchema } from './IngredientUncheckedUpdateManyWithoutCompositionInputSchema';

export const IngredientUpdateManyWithWhereWithoutCompositionInputSchema: z.ZodType<Prisma.IngredientUpdateManyWithWhereWithoutCompositionInput> = z.object({
  where: z.lazy(() => IngredientScalarWhereInputSchema),
  data: z.union([ z.lazy(() => IngredientUpdateManyMutationInputSchema),z.lazy(() => IngredientUncheckedUpdateManyWithoutCompositionInputSchema) ]),
}).strict();

export default IngredientUpdateManyWithWhereWithoutCompositionInputSchema;
