import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TokenWhereUniqueInputSchema } from './TokenWhereUniqueInputSchema';
import { TokenUpdateWithoutUserInputSchema } from './TokenUpdateWithoutUserInputSchema';
import { TokenUncheckedUpdateWithoutUserInputSchema } from './TokenUncheckedUpdateWithoutUserInputSchema';

export const TokenUpdateWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.TokenUpdateWithWhereUniqueWithoutUserInput> = z.object({
  where: z.lazy(() => TokenWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => TokenUpdateWithoutUserInputSchema),z.lazy(() => TokenUncheckedUpdateWithoutUserInputSchema) ]),
}).strict();

export default TokenUpdateWithWhereUniqueWithoutUserInputSchema;
