import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CompositionBadgesSchema } from './CompositionBadgesSchema';

export const EnumCompositionBadgesNullableListFilterSchema: z.ZodType<Prisma.EnumCompositionBadgesNullableListFilter> = z.object({
  equals: z.lazy(() => CompositionBadgesSchema).array().optional().nullable(),
  has: z.lazy(() => CompositionBadgesSchema).optional().nullable(),
  hasEvery: z.lazy(() => CompositionBadgesSchema).array().optional(),
  hasSome: z.lazy(() => CompositionBadgesSchema).array().optional(),
  isEmpty: z.boolean().optional()
}).strict();

export default EnumCompositionBadgesNullableListFilterSchema;
