import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const ImageWidgetCreateManyFileInputSchema: z.ZodType<Prisma.ImageWidgetCreateManyFileInput> = z.object({
  id: z.string().cuid().optional(),
  widgetId: z.string()
}).strict();

export default ImageWidgetCreateManyFileInputSchema;
