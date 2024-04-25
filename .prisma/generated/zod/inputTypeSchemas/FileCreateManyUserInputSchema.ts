import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const FileCreateManyUserInputSchema: z.ZodType<Prisma.FileCreateManyUserInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  title: z.string(),
  description: z.string().optional().nullable(),
  mimeType: z.string().optional().nullable()
}).strict();

export default FileCreateManyUserInputSchema;
