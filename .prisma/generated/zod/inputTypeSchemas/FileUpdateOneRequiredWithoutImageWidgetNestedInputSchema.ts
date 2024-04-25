import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { FileCreateWithoutImageWidgetInputSchema } from './FileCreateWithoutImageWidgetInputSchema';
import { FileUncheckedCreateWithoutImageWidgetInputSchema } from './FileUncheckedCreateWithoutImageWidgetInputSchema';
import { FileCreateOrConnectWithoutImageWidgetInputSchema } from './FileCreateOrConnectWithoutImageWidgetInputSchema';
import { FileUpsertWithoutImageWidgetInputSchema } from './FileUpsertWithoutImageWidgetInputSchema';
import { FileWhereUniqueInputSchema } from './FileWhereUniqueInputSchema';
import { FileUpdateToOneWithWhereWithoutImageWidgetInputSchema } from './FileUpdateToOneWithWhereWithoutImageWidgetInputSchema';
import { FileUpdateWithoutImageWidgetInputSchema } from './FileUpdateWithoutImageWidgetInputSchema';
import { FileUncheckedUpdateWithoutImageWidgetInputSchema } from './FileUncheckedUpdateWithoutImageWidgetInputSchema';

export const FileUpdateOneRequiredWithoutImageWidgetNestedInputSchema: z.ZodType<Prisma.FileUpdateOneRequiredWithoutImageWidgetNestedInput> = z.object({
  create: z.union([ z.lazy(() => FileCreateWithoutImageWidgetInputSchema),z.lazy(() => FileUncheckedCreateWithoutImageWidgetInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => FileCreateOrConnectWithoutImageWidgetInputSchema).optional(),
  upsert: z.lazy(() => FileUpsertWithoutImageWidgetInputSchema).optional(),
  connect: z.lazy(() => FileWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => FileUpdateToOneWithWhereWithoutImageWidgetInputSchema),z.lazy(() => FileUpdateWithoutImageWidgetInputSchema),z.lazy(() => FileUncheckedUpdateWithoutImageWidgetInputSchema) ]).optional(),
}).strict();

export default FileUpdateOneRequiredWithoutImageWidgetNestedInputSchema;
