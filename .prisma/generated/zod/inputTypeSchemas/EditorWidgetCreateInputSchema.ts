import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const EditorWidgetCreateInputSchema: z.ZodType<Prisma.EditorWidgetCreateInput> = z.object({
}).strict();

export default EditorWidgetCreateInputSchema;
