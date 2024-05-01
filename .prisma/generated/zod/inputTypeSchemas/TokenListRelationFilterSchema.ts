import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TokenWhereInputSchema } from './TokenWhereInputSchema';

export const TokenListRelationFilterSchema: z.ZodType<Prisma.TokenListRelationFilter> = z.object({
  every: z.lazy(() => TokenWhereInputSchema).optional(),
  some: z.lazy(() => TokenWhereInputSchema).optional(),
  none: z.lazy(() => TokenWhereInputSchema).optional()
}).strict();

export default TokenListRelationFilterSchema;
