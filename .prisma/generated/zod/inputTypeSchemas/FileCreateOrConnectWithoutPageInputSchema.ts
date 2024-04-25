import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { FileWhereUniqueInputSchema } from './FileWhereUniqueInputSchema';
import { FileCreateWithoutPageInputSchema } from './FileCreateWithoutPageInputSchema';
import { FileUncheckedCreateWithoutPageInputSchema } from './FileUncheckedCreateWithoutPageInputSchema';

export const FileCreateOrConnectWithoutPageInputSchema: z.ZodType<Prisma.FileCreateOrConnectWithoutPageInput> = z.object({
  where: z.lazy(() => FileWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => FileCreateWithoutPageInputSchema),z.lazy(() => FileUncheckedCreateWithoutPageInputSchema) ]),
}).strict();

export default FileCreateOrConnectWithoutPageInputSchema;
