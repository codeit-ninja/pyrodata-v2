import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IngredientCreateWithoutCompositionInputSchema } from './IngredientCreateWithoutCompositionInputSchema';
import { IngredientUncheckedCreateWithoutCompositionInputSchema } from './IngredientUncheckedCreateWithoutCompositionInputSchema';
import { IngredientCreateOrConnectWithoutCompositionInputSchema } from './IngredientCreateOrConnectWithoutCompositionInputSchema';
import { IngredientCreateManyCompositionInputEnvelopeSchema } from './IngredientCreateManyCompositionInputEnvelopeSchema';
import { IngredientWhereUniqueInputSchema } from './IngredientWhereUniqueInputSchema';

export const IngredientUncheckedCreateNestedManyWithoutCompositionInputSchema: z.ZodType<Prisma.IngredientUncheckedCreateNestedManyWithoutCompositionInput> = z.object({
  create: z.union([ z.lazy(() => IngredientCreateWithoutCompositionInputSchema),z.lazy(() => IngredientCreateWithoutCompositionInputSchema).array(),z.lazy(() => IngredientUncheckedCreateWithoutCompositionInputSchema),z.lazy(() => IngredientUncheckedCreateWithoutCompositionInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => IngredientCreateOrConnectWithoutCompositionInputSchema),z.lazy(() => IngredientCreateOrConnectWithoutCompositionInputSchema).array() ]).optional(),
  createMany: z.lazy(() => IngredientCreateManyCompositionInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => IngredientWhereUniqueInputSchema),z.lazy(() => IngredientWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default IngredientUncheckedCreateNestedManyWithoutCompositionInputSchema;
