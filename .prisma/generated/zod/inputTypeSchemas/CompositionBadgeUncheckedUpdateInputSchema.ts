import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';

export const CompositionBadgeUncheckedUpdateInputSchema: z.ZodType<Prisma.CompositionBadgeUncheckedUpdateInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export default CompositionBadgeUncheckedUpdateInputSchema;
