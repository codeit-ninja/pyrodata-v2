import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const EditorWidgetCreateManyInputSchema: z.ZodType<Prisma.EditorWidgetCreateManyInput> = z.object({
  id: z.number().int().optional()
}).strict();

export default EditorWidgetCreateManyInputSchema;
