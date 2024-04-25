import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const FileCreateManyInputSchema: z.ZodType<Prisma.FileCreateManyInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  title: z.string(),
  description: z.string().optional().nullable(),
  mimeType: z.string().optional().nullable(),
  userId: z.string().optional().nullable()
}).strict();

export default FileCreateManyInputSchema;
