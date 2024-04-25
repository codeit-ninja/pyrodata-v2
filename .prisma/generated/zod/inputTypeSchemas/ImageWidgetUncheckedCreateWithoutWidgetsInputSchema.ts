import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const ImageWidgetUncheckedCreateWithoutWidgetsInputSchema: z.ZodType<Prisma.ImageWidgetUncheckedCreateWithoutWidgetsInput> = z.object({
  id: z.string().cuid().optional(),
  fileId: z.string()
}).strict();

export default ImageWidgetUncheckedCreateWithoutWidgetsInputSchema;
