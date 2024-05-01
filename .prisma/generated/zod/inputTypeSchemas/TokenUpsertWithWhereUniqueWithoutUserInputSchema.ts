import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TokenWhereUniqueInputSchema } from './TokenWhereUniqueInputSchema';
import { TokenUpdateWithoutUserInputSchema } from './TokenUpdateWithoutUserInputSchema';
import { TokenUncheckedUpdateWithoutUserInputSchema } from './TokenUncheckedUpdateWithoutUserInputSchema';
import { TokenCreateWithoutUserInputSchema } from './TokenCreateWithoutUserInputSchema';
import { TokenUncheckedCreateWithoutUserInputSchema } from './TokenUncheckedCreateWithoutUserInputSchema';

export const TokenUpsertWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.TokenUpsertWithWhereUniqueWithoutUserInput> = z.object({
  where: z.lazy(() => TokenWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => TokenUpdateWithoutUserInputSchema),z.lazy(() => TokenUncheckedUpdateWithoutUserInputSchema) ]),
  create: z.union([ z.lazy(() => TokenCreateWithoutUserInputSchema),z.lazy(() => TokenUncheckedCreateWithoutUserInputSchema) ]),
}).strict();

export default TokenUpsertWithWhereUniqueWithoutUserInputSchema;
