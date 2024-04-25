import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { FileWhereInputSchema } from './FileWhereInputSchema';

export const FileNullableRelationFilterSchema: z.ZodType<Prisma.FileNullableRelationFilter> = z.object({
  is: z.lazy(() => FileWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => FileWhereInputSchema).optional().nullable()
}).strict();

export default FileNullableRelationFilterSchema;
