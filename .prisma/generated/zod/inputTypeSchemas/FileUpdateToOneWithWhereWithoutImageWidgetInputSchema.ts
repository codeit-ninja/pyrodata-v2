import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { FileWhereInputSchema } from './FileWhereInputSchema';
import { FileUpdateWithoutImageWidgetInputSchema } from './FileUpdateWithoutImageWidgetInputSchema';
import { FileUncheckedUpdateWithoutImageWidgetInputSchema } from './FileUncheckedUpdateWithoutImageWidgetInputSchema';

export const FileUpdateToOneWithWhereWithoutImageWidgetInputSchema: z.ZodType<Prisma.FileUpdateToOneWithWhereWithoutImageWidgetInput> = z.object({
  where: z.lazy(() => FileWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => FileUpdateWithoutImageWidgetInputSchema),z.lazy(() => FileUncheckedUpdateWithoutImageWidgetInputSchema) ]),
}).strict();

export default FileUpdateToOneWithWhereWithoutImageWidgetInputSchema;
