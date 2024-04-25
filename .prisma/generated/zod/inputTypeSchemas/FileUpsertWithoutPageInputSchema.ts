import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { FileUpdateWithoutPageInputSchema } from './FileUpdateWithoutPageInputSchema';
import { FileUncheckedUpdateWithoutPageInputSchema } from './FileUncheckedUpdateWithoutPageInputSchema';
import { FileCreateWithoutPageInputSchema } from './FileCreateWithoutPageInputSchema';
import { FileUncheckedCreateWithoutPageInputSchema } from './FileUncheckedCreateWithoutPageInputSchema';
import { FileWhereInputSchema } from './FileWhereInputSchema';

export const FileUpsertWithoutPageInputSchema: z.ZodType<Prisma.FileUpsertWithoutPageInput> = z.object({
  update: z.union([ z.lazy(() => FileUpdateWithoutPageInputSchema),z.lazy(() => FileUncheckedUpdateWithoutPageInputSchema) ]),
  create: z.union([ z.lazy(() => FileCreateWithoutPageInputSchema),z.lazy(() => FileUncheckedCreateWithoutPageInputSchema) ]),
  where: z.lazy(() => FileWhereInputSchema).optional()
}).strict();

export default FileUpsertWithoutPageInputSchema;
