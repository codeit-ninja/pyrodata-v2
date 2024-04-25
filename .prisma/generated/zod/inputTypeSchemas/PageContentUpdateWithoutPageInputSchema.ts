import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { BoolFieldUpdateOperationsInputSchema } from './BoolFieldUpdateOperationsInputSchema';
import { WidgetUpdateManyWithoutPageContentNestedInputSchema } from './WidgetUpdateManyWithoutPageContentNestedInputSchema';

export const PageContentUpdateWithoutPageInputSchema: z.ZodType<Prisma.PageContentUpdateWithoutPageInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  html: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  sidebar: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  widgets: z.lazy(() => WidgetUpdateManyWithoutPageContentNestedInputSchema).optional()
}).strict();

export default PageContentUpdateWithoutPageInputSchema;
