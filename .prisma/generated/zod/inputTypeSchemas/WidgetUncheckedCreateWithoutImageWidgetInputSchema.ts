import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const WidgetUncheckedCreateWithoutImageWidgetInputSchema: z.ZodType<Prisma.WidgetUncheckedCreateWithoutImageWidgetInput> = z.object({
  id: z.string().cuid().optional(),
  pageContentId: z.string()
}).strict();

export default WidgetUncheckedCreateWithoutImageWidgetInputSchema;
