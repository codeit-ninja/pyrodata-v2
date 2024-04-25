import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IngredientCreateWithoutPageInputSchema } from './IngredientCreateWithoutPageInputSchema';
import { IngredientUncheckedCreateWithoutPageInputSchema } from './IngredientUncheckedCreateWithoutPageInputSchema';
import { IngredientCreateOrConnectWithoutPageInputSchema } from './IngredientCreateOrConnectWithoutPageInputSchema';
import { IngredientUpsertWithWhereUniqueWithoutPageInputSchema } from './IngredientUpsertWithWhereUniqueWithoutPageInputSchema';
import { IngredientCreateManyPageInputEnvelopeSchema } from './IngredientCreateManyPageInputEnvelopeSchema';
import { IngredientWhereUniqueInputSchema } from './IngredientWhereUniqueInputSchema';
import { IngredientUpdateWithWhereUniqueWithoutPageInputSchema } from './IngredientUpdateWithWhereUniqueWithoutPageInputSchema';
import { IngredientUpdateManyWithWhereWithoutPageInputSchema } from './IngredientUpdateManyWithWhereWithoutPageInputSchema';
import { IngredientScalarWhereInputSchema } from './IngredientScalarWhereInputSchema';

export const IngredientUpdateManyWithoutPageNestedInputSchema: z.ZodType<Prisma.IngredientUpdateManyWithoutPageNestedInput> = z.object({
  create: z.union([ z.lazy(() => IngredientCreateWithoutPageInputSchema),z.lazy(() => IngredientCreateWithoutPageInputSchema).array(),z.lazy(() => IngredientUncheckedCreateWithoutPageInputSchema),z.lazy(() => IngredientUncheckedCreateWithoutPageInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => IngredientCreateOrConnectWithoutPageInputSchema),z.lazy(() => IngredientCreateOrConnectWithoutPageInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => IngredientUpsertWithWhereUniqueWithoutPageInputSchema),z.lazy(() => IngredientUpsertWithWhereUniqueWithoutPageInputSchema).array() ]).optional(),
  createMany: z.lazy(() => IngredientCreateManyPageInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => IngredientWhereUniqueInputSchema),z.lazy(() => IngredientWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => IngredientWhereUniqueInputSchema),z.lazy(() => IngredientWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => IngredientWhereUniqueInputSchema),z.lazy(() => IngredientWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => IngredientWhereUniqueInputSchema),z.lazy(() => IngredientWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => IngredientUpdateWithWhereUniqueWithoutPageInputSchema),z.lazy(() => IngredientUpdateWithWhereUniqueWithoutPageInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => IngredientUpdateManyWithWhereWithoutPageInputSchema),z.lazy(() => IngredientUpdateManyWithWhereWithoutPageInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => IngredientScalarWhereInputSchema),z.lazy(() => IngredientScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default IngredientUpdateManyWithoutPageNestedInputSchema;
