import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';

export const WidgetUncheckedUpdateManyWithoutPageContentInputSchema: z.ZodType<Prisma.WidgetUncheckedUpdateManyWithoutPageContentInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export default WidgetUncheckedUpdateManyWithoutPageContentInputSchema;
