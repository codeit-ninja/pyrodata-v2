import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';

export const FileScalarWhereInputSchema: z.ZodType<Prisma.FileScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => FileScalarWhereInputSchema),z.lazy(() => FileScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => FileScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => FileScalarWhereInputSchema),z.lazy(() => FileScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  title: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  description: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  mimeType: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  userId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export default FileScalarWhereInputSchema;
