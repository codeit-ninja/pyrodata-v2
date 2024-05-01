import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TokenScalarWhereInputSchema } from './TokenScalarWhereInputSchema';
import { TokenUpdateManyMutationInputSchema } from './TokenUpdateManyMutationInputSchema';
import { TokenUncheckedUpdateManyWithoutUserInputSchema } from './TokenUncheckedUpdateManyWithoutUserInputSchema';

export const TokenUpdateManyWithWhereWithoutUserInputSchema: z.ZodType<Prisma.TokenUpdateManyWithWhereWithoutUserInput> = z.object({
  where: z.lazy(() => TokenScalarWhereInputSchema),
  data: z.union([ z.lazy(() => TokenUpdateManyMutationInputSchema),z.lazy(() => TokenUncheckedUpdateManyWithoutUserInputSchema) ]),
}).strict();

export default TokenUpdateManyWithWhereWithoutUserInputSchema;
