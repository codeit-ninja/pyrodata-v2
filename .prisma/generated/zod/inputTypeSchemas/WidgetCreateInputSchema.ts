import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PageContentCreateNestedOneWithoutWidgetsInputSchema } from './PageContentCreateNestedOneWithoutWidgetsInputSchema';
import { ImageWidgetCreateNestedOneWithoutWidgetsInputSchema } from './ImageWidgetCreateNestedOneWithoutWidgetsInputSchema';

export const WidgetCreateInputSchema: z.ZodType<Prisma.WidgetCreateInput> = z.object({
  id: z.string().cuid().optional(),
  pageContent: z.lazy(() => PageContentCreateNestedOneWithoutWidgetsInputSchema),
  imageWidget: z.lazy(() => ImageWidgetCreateNestedOneWithoutWidgetsInputSchema).optional()
}).strict();

export default WidgetCreateInputSchema;
