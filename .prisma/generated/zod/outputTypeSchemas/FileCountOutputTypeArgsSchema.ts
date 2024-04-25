import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { FileCountOutputTypeSelectSchema } from './FileCountOutputTypeSelectSchema';

export const FileCountOutputTypeArgsSchema: z.ZodType<Prisma.FileCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => FileCountOutputTypeSelectSchema).nullish(),
}).strict();

export default FileCountOutputTypeSelectSchema;
