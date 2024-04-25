import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { FileWhereInputSchema } from './FileWhereInputSchema';
import { FileUpdateWithoutCompositionInputSchema } from './FileUpdateWithoutCompositionInputSchema';
import { FileUncheckedUpdateWithoutCompositionInputSchema } from './FileUncheckedUpdateWithoutCompositionInputSchema';

export const FileUpdateToOneWithWhereWithoutCompositionInputSchema: z.ZodType<Prisma.FileUpdateToOneWithWhereWithoutCompositionInput> = z.object({
  where: z.lazy(() => FileWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => FileUpdateWithoutCompositionInputSchema),z.lazy(() => FileUncheckedUpdateWithoutCompositionInputSchema) ]),
}).strict();

export default FileUpdateToOneWithWhereWithoutCompositionInputSchema;
