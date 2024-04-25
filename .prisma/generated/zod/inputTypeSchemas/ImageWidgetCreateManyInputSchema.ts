import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const ImageWidgetCreateManyInputSchema: z.ZodType<Prisma.ImageWidgetCreateManyInput> = z.object({
  id: z.string().cuid().optional(),
  widgetId: z.string(),
  fileId: z.string()
}).strict();

export default ImageWidgetCreateManyInputSchema;
