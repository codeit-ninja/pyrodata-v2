import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntFilterSchema } from './IntFilterSchema';
import { StringFilterSchema } from './StringFilterSchema';

export const TokenScalarWhereInputSchema: z.ZodType<Prisma.TokenScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => TokenScalarWhereInputSchema),z.lazy(() => TokenScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => TokenScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => TokenScalarWhereInputSchema),z.lazy(() => TokenScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  token: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  userId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
}).strict();

export default TokenScalarWhereInputSchema;
