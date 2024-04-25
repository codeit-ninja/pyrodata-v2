import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { PageContentUpdateOneRequiredWithoutWidgetsNestedInputSchema } from './PageContentUpdateOneRequiredWithoutWidgetsNestedInputSchema';

export const WidgetUpdateWithoutImageWidgetInputSchema: z.ZodType<Prisma.WidgetUpdateWithoutImageWidgetInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  pageContent: z.lazy(() => PageContentUpdateOneRequiredWithoutWidgetsNestedInputSchema).optional()
}).strict();

export default WidgetUpdateWithoutImageWidgetInputSchema;
