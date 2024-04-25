import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ImageWidgetCreateNestedOneWithoutWidgetsInputSchema } from './ImageWidgetCreateNestedOneWithoutWidgetsInputSchema';

export const WidgetCreateWithoutPageContentInputSchema: z.ZodType<Prisma.WidgetCreateWithoutPageContentInput> = z.object({
  id: z.string().cuid().optional(),
  imageWidget: z.lazy(() => ImageWidgetCreateNestedOneWithoutWidgetsInputSchema).optional()
}).strict();

export default WidgetCreateWithoutPageContentInputSchema;
