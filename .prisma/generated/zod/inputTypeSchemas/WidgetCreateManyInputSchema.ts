import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const WidgetCreateManyInputSchema: z.ZodType<Prisma.WidgetCreateManyInput> = z.object({
  id: z.string().cuid().optional(),
  pageContentId: z.string()
}).strict();

export default WidgetCreateManyInputSchema;
