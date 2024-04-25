import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ImageWidgetUncheckedCreateNestedOneWithoutWidgetsInputSchema } from './ImageWidgetUncheckedCreateNestedOneWithoutWidgetsInputSchema';

export const WidgetUncheckedCreateWithoutPageContentInputSchema: z.ZodType<Prisma.WidgetUncheckedCreateWithoutPageContentInput> = z.object({
  id: z.string().cuid().optional(),
  imageWidget: z.lazy(() => ImageWidgetUncheckedCreateNestedOneWithoutWidgetsInputSchema).optional()
}).strict();

export default WidgetUncheckedCreateWithoutPageContentInputSchema;
