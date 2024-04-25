import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const ImageWidgetUncheckedCreateWithoutFileInputSchema: z.ZodType<Prisma.ImageWidgetUncheckedCreateWithoutFileInput> = z.object({
  id: z.string().cuid().optional(),
  widgetId: z.string()
}).strict();

export default ImageWidgetUncheckedCreateWithoutFileInputSchema;
