import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const EditorWidgetUncheckedCreateInputSchema: z.ZodType<Prisma.EditorWidgetUncheckedCreateInput> = z.object({
  id: z.number().int().optional()
}).strict();

export default EditorWidgetUncheckedCreateInputSchema;
