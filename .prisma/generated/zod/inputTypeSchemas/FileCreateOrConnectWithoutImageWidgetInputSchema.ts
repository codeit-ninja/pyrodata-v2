import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { FileWhereUniqueInputSchema } from './FileWhereUniqueInputSchema';
import { FileCreateWithoutImageWidgetInputSchema } from './FileCreateWithoutImageWidgetInputSchema';
import { FileUncheckedCreateWithoutImageWidgetInputSchema } from './FileUncheckedCreateWithoutImageWidgetInputSchema';

export const FileCreateOrConnectWithoutImageWidgetInputSchema: z.ZodType<Prisma.FileCreateOrConnectWithoutImageWidgetInput> = z.object({
  where: z.lazy(() => FileWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => FileCreateWithoutImageWidgetInputSchema),z.lazy(() => FileUncheckedCreateWithoutImageWidgetInputSchema) ]),
}).strict();

export default FileCreateOrConnectWithoutImageWidgetInputSchema;
