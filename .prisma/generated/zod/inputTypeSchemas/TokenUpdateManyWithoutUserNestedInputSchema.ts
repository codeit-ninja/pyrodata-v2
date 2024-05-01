import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TokenCreateWithoutUserInputSchema } from './TokenCreateWithoutUserInputSchema';
import { TokenUncheckedCreateWithoutUserInputSchema } from './TokenUncheckedCreateWithoutUserInputSchema';
import { TokenCreateOrConnectWithoutUserInputSchema } from './TokenCreateOrConnectWithoutUserInputSchema';
import { TokenUpsertWithWhereUniqueWithoutUserInputSchema } from './TokenUpsertWithWhereUniqueWithoutUserInputSchema';
import { TokenCreateManyUserInputEnvelopeSchema } from './TokenCreateManyUserInputEnvelopeSchema';
import { TokenWhereUniqueInputSchema } from './TokenWhereUniqueInputSchema';
import { TokenUpdateWithWhereUniqueWithoutUserInputSchema } from './TokenUpdateWithWhereUniqueWithoutUserInputSchema';
import { TokenUpdateManyWithWhereWithoutUserInputSchema } from './TokenUpdateManyWithWhereWithoutUserInputSchema';
import { TokenScalarWhereInputSchema } from './TokenScalarWhereInputSchema';

export const TokenUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.TokenUpdateManyWithoutUserNestedInput> = z.object({
  create: z.union([ z.lazy(() => TokenCreateWithoutUserInputSchema),z.lazy(() => TokenCreateWithoutUserInputSchema).array(),z.lazy(() => TokenUncheckedCreateWithoutUserInputSchema),z.lazy(() => TokenUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TokenCreateOrConnectWithoutUserInputSchema),z.lazy(() => TokenCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => TokenUpsertWithWhereUniqueWithoutUserInputSchema),z.lazy(() => TokenUpsertWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TokenCreateManyUserInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => TokenWhereUniqueInputSchema),z.lazy(() => TokenWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => TokenWhereUniqueInputSchema),z.lazy(() => TokenWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => TokenWhereUniqueInputSchema),z.lazy(() => TokenWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => TokenWhereUniqueInputSchema),z.lazy(() => TokenWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => TokenUpdateWithWhereUniqueWithoutUserInputSchema),z.lazy(() => TokenUpdateWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => TokenUpdateManyWithWhereWithoutUserInputSchema),z.lazy(() => TokenUpdateManyWithWhereWithoutUserInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => TokenScalarWhereInputSchema),z.lazy(() => TokenScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default TokenUpdateManyWithoutUserNestedInputSchema;
