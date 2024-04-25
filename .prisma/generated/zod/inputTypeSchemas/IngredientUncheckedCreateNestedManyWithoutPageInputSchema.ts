import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IngredientCreateWithoutPageInputSchema } from './IngredientCreateWithoutPageInputSchema';
import { IngredientUncheckedCreateWithoutPageInputSchema } from './IngredientUncheckedCreateWithoutPageInputSchema';
import { IngredientCreateOrConnectWithoutPageInputSchema } from './IngredientCreateOrConnectWithoutPageInputSchema';
import { IngredientCreateManyPageInputEnvelopeSchema } from './IngredientCreateManyPageInputEnvelopeSchema';
import { IngredientWhereUniqueInputSchema } from './IngredientWhereUniqueInputSchema';

export const IngredientUncheckedCreateNestedManyWithoutPageInputSchema: z.ZodType<Prisma.IngredientUncheckedCreateNestedManyWithoutPageInput> = z.object({
  create: z.union([ z.lazy(() => IngredientCreateWithoutPageInputSchema),z.lazy(() => IngredientCreateWithoutPageInputSchema).array(),z.lazy(() => IngredientUncheckedCreateWithoutPageInputSchema),z.lazy(() => IngredientUncheckedCreateWithoutPageInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => IngredientCreateOrConnectWithoutPageInputSchema),z.lazy(() => IngredientCreateOrConnectWithoutPageInputSchema).array() ]).optional(),
  createMany: z.lazy(() => IngredientCreateManyPageInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => IngredientWhereUniqueInputSchema),z.lazy(() => IngredientWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default IngredientUncheckedCreateNestedManyWithoutPageInputSchema;
