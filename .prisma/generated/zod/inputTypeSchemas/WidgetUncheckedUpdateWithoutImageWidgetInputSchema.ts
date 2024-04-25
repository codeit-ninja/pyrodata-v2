import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';

export const WidgetUncheckedUpdateWithoutImageWidgetInputSchema: z.ZodType<Prisma.WidgetUncheckedUpdateWithoutImageWidgetInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  pageContentId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export default WidgetUncheckedUpdateWithoutImageWidgetInputSchema;
