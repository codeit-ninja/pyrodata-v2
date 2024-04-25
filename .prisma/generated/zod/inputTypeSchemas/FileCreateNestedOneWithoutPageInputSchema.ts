import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { FileCreateWithoutPageInputSchema } from './FileCreateWithoutPageInputSchema';
import { FileUncheckedCreateWithoutPageInputSchema } from './FileUncheckedCreateWithoutPageInputSchema';
import { FileCreateOrConnectWithoutPageInputSchema } from './FileCreateOrConnectWithoutPageInputSchema';
import { FileWhereUniqueInputSchema } from './FileWhereUniqueInputSchema';

export const FileCreateNestedOneWithoutPageInputSchema: z.ZodType<Prisma.FileCreateNestedOneWithoutPageInput> = z.object({
  create: z.union([ z.lazy(() => FileCreateWithoutPageInputSchema),z.lazy(() => FileUncheckedCreateWithoutPageInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => FileCreateOrConnectWithoutPageInputSchema).optional(),
  connect: z.lazy(() => FileWhereUniqueInputSchema).optional()
}).strict();

export default FileCreateNestedOneWithoutPageInputSchema;
