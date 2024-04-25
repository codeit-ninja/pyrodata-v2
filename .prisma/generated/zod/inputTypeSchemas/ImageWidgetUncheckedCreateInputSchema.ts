import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const ImageWidgetUncheckedCreateInputSchema: z.ZodType<Prisma.ImageWidgetUncheckedCreateInput> = z.object({
  id: z.string().cuid().optional(),
  widgetId: z.string(),
  fileId: z.string()
}).strict();

export default ImageWidgetUncheckedCreateInputSchema;
