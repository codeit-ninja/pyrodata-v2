import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { FileWhereInputSchema } from './FileWhereInputSchema';

export const FileRelationFilterSchema: z.ZodType<Prisma.FileRelationFilter> = z.object({
  is: z.lazy(() => FileWhereInputSchema).optional(),
  isNot: z.lazy(() => FileWhereInputSchema).optional()
}).strict();

export default FileRelationFilterSchema;
