import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const EditorWidgetUpdateInputSchema: z.ZodType<Prisma.EditorWidgetUpdateInput> = z.object({
}).strict();

export default EditorWidgetUpdateInputSchema;
