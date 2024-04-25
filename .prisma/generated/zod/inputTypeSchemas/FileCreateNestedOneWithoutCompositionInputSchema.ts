import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { FileCreateWithoutCompositionInputSchema } from './FileCreateWithoutCompositionInputSchema';
import { FileUncheckedCreateWithoutCompositionInputSchema } from './FileUncheckedCreateWithoutCompositionInputSchema';
import { FileCreateOrConnectWithoutCompositionInputSchema } from './FileCreateOrConnectWithoutCompositionInputSchema';
import { FileWhereUniqueInputSchema } from './FileWhereUniqueInputSchema';

export const FileCreateNestedOneWithoutCompositionInputSchema: z.ZodType<Prisma.FileCreateNestedOneWithoutCompositionInput> = z.object({
  create: z.union([ z.lazy(() => FileCreateWithoutCompositionInputSchema),z.lazy(() => FileUncheckedCreateWithoutCompositionInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => FileCreateOrConnectWithoutCompositionInputSchema).optional(),
  connect: z.lazy(() => FileWhereUniqueInputSchema).optional()
}).strict();

export default FileCreateNestedOneWithoutCompositionInputSchema;
