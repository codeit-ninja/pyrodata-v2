import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SessionWhereInputSchema } from './SessionWhereInputSchema';

export const SessionNullableRelationFilterSchema: z.ZodType<Prisma.SessionNullableRelationFilter> = z.object({
  is: z.lazy(() => SessionWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => SessionWhereInputSchema).optional().nullable()
}).strict();

export default SessionNullableRelationFilterSchema;
