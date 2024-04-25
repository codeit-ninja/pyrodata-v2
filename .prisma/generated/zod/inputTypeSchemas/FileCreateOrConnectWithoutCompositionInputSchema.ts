import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { FileWhereUniqueInputSchema } from './FileWhereUniqueInputSchema';
import { FileCreateWithoutCompositionInputSchema } from './FileCreateWithoutCompositionInputSchema';
import { FileUncheckedCreateWithoutCompositionInputSchema } from './FileUncheckedCreateWithoutCompositionInputSchema';

export const FileCreateOrConnectWithoutCompositionInputSchema: z.ZodType<Prisma.FileCreateOrConnectWithoutCompositionInput> = z.object({
  where: z.lazy(() => FileWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => FileCreateWithoutCompositionInputSchema),z.lazy(() => FileUncheckedCreateWithoutCompositionInputSchema) ]),
}).strict();

export default FileCreateOrConnectWithoutCompositionInputSchema;
