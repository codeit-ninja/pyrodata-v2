import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserCreateNestedOneWithoutTokensInputSchema } from './UserCreateNestedOneWithoutTokensInputSchema';

export const TokenCreateInputSchema: z.ZodType<Prisma.TokenCreateInput> = z.object({
  token: z.string(),
  user: z.lazy(() => UserCreateNestedOneWithoutTokensInputSchema)
}).strict();

export default TokenCreateInputSchema;
