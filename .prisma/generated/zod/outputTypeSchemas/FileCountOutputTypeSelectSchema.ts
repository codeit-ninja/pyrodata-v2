import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const FileCountOutputTypeSelectSchema: z.ZodType<Prisma.FileCountOutputTypeSelect> = z.object({
  imageWidget: z.boolean().optional(),
  page: z.boolean().optional(),
  composition: z.boolean().optional(),
}).strict();

export default FileCountOutputTypeSelectSchema;
