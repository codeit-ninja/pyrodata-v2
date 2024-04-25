import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { UserUpdateOneRequiredWithoutSessionNestedInputSchema } from './UserUpdateOneRequiredWithoutSessionNestedInputSchema';

export const SessionUpdateInputSchema: z.ZodType<Prisma.SessionUpdateInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  user: z.lazy(() => UserUpdateOneRequiredWithoutSessionNestedInputSchema).optional()
}).strict();

export default SessionUpdateInputSchema;
