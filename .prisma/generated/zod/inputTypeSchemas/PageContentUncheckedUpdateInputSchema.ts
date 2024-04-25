import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { BoolFieldUpdateOperationsInputSchema } from './BoolFieldUpdateOperationsInputSchema';
import { PageUncheckedUpdateManyWithoutContentNestedInputSchema } from './PageUncheckedUpdateManyWithoutContentNestedInputSchema';
import { WidgetUncheckedUpdateManyWithoutPageContentNestedInputSchema } from './WidgetUncheckedUpdateManyWithoutPageContentNestedInputSchema';

export const PageContentUncheckedUpdateInputSchema: z.ZodType<Prisma.PageContentUncheckedUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  html: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  sidebar: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  page: z.lazy(() => PageUncheckedUpdateManyWithoutContentNestedInputSchema).optional(),
  widgets: z.lazy(() => WidgetUncheckedUpdateManyWithoutPageContentNestedInputSchema).optional()
}).strict();

export default PageContentUncheckedUpdateInputSchema;
