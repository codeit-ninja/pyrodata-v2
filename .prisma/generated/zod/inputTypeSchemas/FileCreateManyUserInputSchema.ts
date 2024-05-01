import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const FileCreateManyUserInputSchema: z.ZodType<Prisma.FileCreateManyUserInput> = z.object({
  id: z.string().cuid().optional(),
  location: z.string(),
  title: z.string(),
  description: z.string().optional().nullable(),
  mimeType: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export default FileCreateManyUserInputSchema;
