import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TokenCreateWithoutUserInputSchema } from './TokenCreateWithoutUserInputSchema';
import { TokenUncheckedCreateWithoutUserInputSchema } from './TokenUncheckedCreateWithoutUserInputSchema';
import { TokenCreateOrConnectWithoutUserInputSchema } from './TokenCreateOrConnectWithoutUserInputSchema';
import { TokenCreateManyUserInputEnvelopeSchema } from './TokenCreateManyUserInputEnvelopeSchema';
import { TokenWhereUniqueInputSchema } from './TokenWhereUniqueInputSchema';

export const TokenUncheckedCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.TokenUncheckedCreateNestedManyWithoutUserInput> = z.object({
  create: z.union([ z.lazy(() => TokenCreateWithoutUserInputSchema),z.lazy(() => TokenCreateWithoutUserInputSchema).array(),z.lazy(() => TokenUncheckedCreateWithoutUserInputSchema),z.lazy(() => TokenUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TokenCreateOrConnectWithoutUserInputSchema),z.lazy(() => TokenCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TokenCreateManyUserInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => TokenWhereUniqueInputSchema),z.lazy(() => TokenWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default TokenUncheckedCreateNestedManyWithoutUserInputSchema;
