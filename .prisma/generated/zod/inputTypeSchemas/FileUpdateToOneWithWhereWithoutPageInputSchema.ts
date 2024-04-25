import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { FileWhereInputSchema } from './FileWhereInputSchema';
import { FileUpdateWithoutPageInputSchema } from './FileUpdateWithoutPageInputSchema';
import { FileUncheckedUpdateWithoutPageInputSchema } from './FileUncheckedUpdateWithoutPageInputSchema';

export const FileUpdateToOneWithWhereWithoutPageInputSchema: z.ZodType<Prisma.FileUpdateToOneWithWhereWithoutPageInput> = z.object({
  where: z.lazy(() => FileWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => FileUpdateWithoutPageInputSchema),z.lazy(() => FileUncheckedUpdateWithoutPageInputSchema) ]),
}).strict();

export default FileUpdateToOneWithWhereWithoutPageInputSchema;
