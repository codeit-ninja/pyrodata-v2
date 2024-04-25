import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const EditorWidgetSelectSchema: z.ZodType<Prisma.EditorWidgetSelect> = z.object({
  id: z.boolean().optional(),
}).strict()

export default EditorWidgetSelectSchema;
