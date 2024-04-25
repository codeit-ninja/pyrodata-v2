import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { FileWhereInputSchema } from './FileWhereInputSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { ImageWidgetListRelationFilterSchema } from './ImageWidgetListRelationFilterSchema';
import { PageListRelationFilterSchema } from './PageListRelationFilterSchema';
import { CompositionListRelationFilterSchema } from './CompositionListRelationFilterSchema';
import { UserNullableRelationFilterSchema } from './UserNullableRelationFilterSchema';
import { UserWhereInputSchema } from './UserWhereInputSchema';

export const FileWhereUniqueInputSchema: z.ZodType<Prisma.FileWhereUniqueInput> = z.union([
  z.object({
    id: z.string().cuid(),
    name: z.string()
  }),
  z.object({
    id: z.string().cuid(),
  }),
  z.object({
    name: z.string(),
  }),
])
.and(z.object({
  id: z.string().cuid().optional(),
  name: z.string().optional(),
  AND: z.union([ z.lazy(() => FileWhereInputSchema),z.lazy(() => FileWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => FileWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => FileWhereInputSchema),z.lazy(() => FileWhereInputSchema).array() ]).optional(),
  title: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  description: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  mimeType: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  userId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  imageWidget: z.lazy(() => ImageWidgetListRelationFilterSchema).optional(),
  page: z.lazy(() => PageListRelationFilterSchema).optional(),
  composition: z.lazy(() => CompositionListRelationFilterSchema).optional(),
  user: z.union([ z.lazy(() => UserNullableRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional().nullable(),
}).strict());

export default FileWhereUniqueInputSchema;
