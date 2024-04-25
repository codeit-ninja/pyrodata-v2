import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { FileUpdateWithoutImageWidgetInputSchema } from './FileUpdateWithoutImageWidgetInputSchema';
import { FileUncheckedUpdateWithoutImageWidgetInputSchema } from './FileUncheckedUpdateWithoutImageWidgetInputSchema';
import { FileCreateWithoutImageWidgetInputSchema } from './FileCreateWithoutImageWidgetInputSchema';
import { FileUncheckedCreateWithoutImageWidgetInputSchema } from './FileUncheckedCreateWithoutImageWidgetInputSchema';
import { FileWhereInputSchema } from './FileWhereInputSchema';

export const FileUpsertWithoutImageWidgetInputSchema: z.ZodType<Prisma.FileUpsertWithoutImageWidgetInput> = z.object({
  update: z.union([ z.lazy(() => FileUpdateWithoutImageWidgetInputSchema),z.lazy(() => FileUncheckedUpdateWithoutImageWidgetInputSchema) ]),
  create: z.union([ z.lazy(() => FileCreateWithoutImageWidgetInputSchema),z.lazy(() => FileUncheckedCreateWithoutImageWidgetInputSchema) ]),
  where: z.lazy(() => FileWhereInputSchema).optional()
}).strict();

export default FileUpsertWithoutImageWidgetInputSchema;
