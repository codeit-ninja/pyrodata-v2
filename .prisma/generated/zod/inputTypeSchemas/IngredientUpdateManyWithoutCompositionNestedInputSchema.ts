import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IngredientCreateWithoutCompositionInputSchema } from './IngredientCreateWithoutCompositionInputSchema';
import { IngredientUncheckedCreateWithoutCompositionInputSchema } from './IngredientUncheckedCreateWithoutCompositionInputSchema';
import { IngredientCreateOrConnectWithoutCompositionInputSchema } from './IngredientCreateOrConnectWithoutCompositionInputSchema';
import { IngredientUpsertWithWhereUniqueWithoutCompositionInputSchema } from './IngredientUpsertWithWhereUniqueWithoutCompositionInputSchema';
import { IngredientCreateManyCompositionInputEnvelopeSchema } from './IngredientCreateManyCompositionInputEnvelopeSchema';
import { IngredientWhereUniqueInputSchema } from './IngredientWhereUniqueInputSchema';
import { IngredientUpdateWithWhereUniqueWithoutCompositionInputSchema } from './IngredientUpdateWithWhereUniqueWithoutCompositionInputSchema';
import { IngredientUpdateManyWithWhereWithoutCompositionInputSchema } from './IngredientUpdateManyWithWhereWithoutCompositionInputSchema';
import { IngredientScalarWhereInputSchema } from './IngredientScalarWhereInputSchema';

export const IngredientUpdateManyWithoutCompositionNestedInputSchema: z.ZodType<Prisma.IngredientUpdateManyWithoutCompositionNestedInput> = z.object({
  create: z.union([ z.lazy(() => IngredientCreateWithoutCompositionInputSchema),z.lazy(() => IngredientCreateWithoutCompositionInputSchema).array(),z.lazy(() => IngredientUncheckedCreateWithoutCompositionInputSchema),z.lazy(() => IngredientUncheckedCreateWithoutCompositionInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => IngredientCreateOrConnectWithoutCompositionInputSchema),z.lazy(() => IngredientCreateOrConnectWithoutCompositionInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => IngredientUpsertWithWhereUniqueWithoutCompositionInputSchema),z.lazy(() => IngredientUpsertWithWhereUniqueWithoutCompositionInputSchema).array() ]).optional(),
  createMany: z.lazy(() => IngredientCreateManyCompositionInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => IngredientWhereUniqueInputSchema),z.lazy(() => IngredientWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => IngredientWhereUniqueInputSchema),z.lazy(() => IngredientWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => IngredientWhereUniqueInputSchema),z.lazy(() => IngredientWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => IngredientWhereUniqueInputSchema),z.lazy(() => IngredientWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => IngredientUpdateWithWhereUniqueWithoutCompositionInputSchema),z.lazy(() => IngredientUpdateWithWhereUniqueWithoutCompositionInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => IngredientUpdateManyWithWhereWithoutCompositionInputSchema),z.lazy(() => IngredientUpdateManyWithWhereWithoutCompositionInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => IngredientScalarWhereInputSchema),z.lazy(() => IngredientScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default IngredientUpdateManyWithoutCompositionNestedInputSchema;
