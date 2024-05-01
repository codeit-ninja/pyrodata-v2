import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { BoolFieldUpdateOperationsInputSchema } from './BoolFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { PageUpdateManyWithoutContentNestedInputSchema } from './PageUpdateManyWithoutContentNestedInputSchema';
import { WidgetUpdateManyWithoutPageContentNestedInputSchema } from './WidgetUpdateManyWithoutPageContentNestedInputSchema';

export const PageContentUpdateInputSchema: z.ZodType<Prisma.PageContentUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  html: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  sidebar: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  page: z.lazy(() => PageUpdateManyWithoutContentNestedInputSchema).optional(),
  widgets: z.lazy(() => WidgetUpdateManyWithoutPageContentNestedInputSchema).optional()
}).strict();

export default PageContentUpdateInputSchema;
