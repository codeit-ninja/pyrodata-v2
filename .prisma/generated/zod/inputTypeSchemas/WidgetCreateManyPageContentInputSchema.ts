import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const WidgetCreateManyPageContentInputSchema: z.ZodType<Prisma.WidgetCreateManyPageContentInput> = z.object({
  id: z.string().cuid().optional()
}).strict();

export default WidgetCreateManyPageContentInputSchema;
