import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TokenCreateManyUserInputSchema } from './TokenCreateManyUserInputSchema';

export const TokenCreateManyUserInputEnvelopeSchema: z.ZodType<Prisma.TokenCreateManyUserInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => TokenCreateManyUserInputSchema),z.lazy(() => TokenCreateManyUserInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default TokenCreateManyUserInputEnvelopeSchema;
