import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { FileCreateWithoutImageWidgetInputSchema } from './FileCreateWithoutImageWidgetInputSchema';
import { FileUncheckedCreateWithoutImageWidgetInputSchema } from './FileUncheckedCreateWithoutImageWidgetInputSchema';
import { FileCreateOrConnectWithoutImageWidgetInputSchema } from './FileCreateOrConnectWithoutImageWidgetInputSchema';
import { FileWhereUniqueInputSchema } from './FileWhereUniqueInputSchema';

export const FileCreateNestedOneWithoutImageWidgetInputSchema: z.ZodType<Prisma.FileCreateNestedOneWithoutImageWidgetInput> = z.object({
  create: z.union([ z.lazy(() => FileCreateWithoutImageWidgetInputSchema),z.lazy(() => FileUncheckedCreateWithoutImageWidgetInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => FileCreateOrConnectWithoutImageWidgetInputSchema).optional(),
  connect: z.lazy(() => FileWhereUniqueInputSchema).optional()
}).strict();

export default FileCreateNestedOneWithoutImageWidgetInputSchema;
