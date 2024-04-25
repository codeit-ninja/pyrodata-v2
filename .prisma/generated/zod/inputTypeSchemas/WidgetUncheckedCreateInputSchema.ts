import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ImageWidgetUncheckedCreateNestedOneWithoutWidgetsInputSchema } from './ImageWidgetUncheckedCreateNestedOneWithoutWidgetsInputSchema';

export const WidgetUncheckedCreateInputSchema: z.ZodType<Prisma.WidgetUncheckedCreateInput> = z.object({
  id: z.string().cuid().optional(),
  pageContentId: z.string(),
  imageWidget: z.lazy(() => ImageWidgetUncheckedCreateNestedOneWithoutWidgetsInputSchema).optional()
}).strict();

export default WidgetUncheckedCreateInputSchema;
