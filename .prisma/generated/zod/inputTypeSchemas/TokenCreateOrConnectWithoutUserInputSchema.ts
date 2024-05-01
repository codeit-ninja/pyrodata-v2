import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TokenWhereUniqueInputSchema } from './TokenWhereUniqueInputSchema';
import { TokenCreateWithoutUserInputSchema } from './TokenCreateWithoutUserInputSchema';
import { TokenUncheckedCreateWithoutUserInputSchema } from './TokenUncheckedCreateWithoutUserInputSchema';

export const TokenCreateOrConnectWithoutUserInputSchema: z.ZodType<Prisma.TokenCreateOrConnectWithoutUserInput> = z.object({
  where: z.lazy(() => TokenWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TokenCreateWithoutUserInputSchema),z.lazy(() => TokenUncheckedCreateWithoutUserInputSchema) ]),
}).strict();

export default TokenCreateOrConnectWithoutUserInputSchema;
