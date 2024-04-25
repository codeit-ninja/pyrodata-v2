import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { FileUpdateWithoutCompositionInputSchema } from './FileUpdateWithoutCompositionInputSchema';
import { FileUncheckedUpdateWithoutCompositionInputSchema } from './FileUncheckedUpdateWithoutCompositionInputSchema';
import { FileCreateWithoutCompositionInputSchema } from './FileCreateWithoutCompositionInputSchema';
import { FileUncheckedCreateWithoutCompositionInputSchema } from './FileUncheckedCreateWithoutCompositionInputSchema';
import { FileWhereInputSchema } from './FileWhereInputSchema';

export const FileUpsertWithoutCompositionInputSchema: z.ZodType<Prisma.FileUpsertWithoutCompositionInput> = z.object({
  update: z.union([ z.lazy(() => FileUpdateWithoutCompositionInputSchema),z.lazy(() => FileUncheckedUpdateWithoutCompositionInputSchema) ]),
  create: z.union([ z.lazy(() => FileCreateWithoutCompositionInputSchema),z.lazy(() => FileUncheckedCreateWithoutCompositionInputSchema) ]),
  where: z.lazy(() => FileWhereInputSchema).optional()
}).strict();

export default FileUpsertWithoutCompositionInputSchema;
