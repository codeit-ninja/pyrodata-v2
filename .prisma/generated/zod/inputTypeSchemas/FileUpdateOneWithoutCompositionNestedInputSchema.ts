import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { FileCreateWithoutCompositionInputSchema } from './FileCreateWithoutCompositionInputSchema';
import { FileUncheckedCreateWithoutCompositionInputSchema } from './FileUncheckedCreateWithoutCompositionInputSchema';
import { FileCreateOrConnectWithoutCompositionInputSchema } from './FileCreateOrConnectWithoutCompositionInputSchema';
import { FileUpsertWithoutCompositionInputSchema } from './FileUpsertWithoutCompositionInputSchema';
import { FileWhereInputSchema } from './FileWhereInputSchema';
import { FileWhereUniqueInputSchema } from './FileWhereUniqueInputSchema';
import { FileUpdateToOneWithWhereWithoutCompositionInputSchema } from './FileUpdateToOneWithWhereWithoutCompositionInputSchema';
import { FileUpdateWithoutCompositionInputSchema } from './FileUpdateWithoutCompositionInputSchema';
import { FileUncheckedUpdateWithoutCompositionInputSchema } from './FileUncheckedUpdateWithoutCompositionInputSchema';

export const FileUpdateOneWithoutCompositionNestedInputSchema: z.ZodType<Prisma.FileUpdateOneWithoutCompositionNestedInput> = z.object({
  create: z.union([ z.lazy(() => FileCreateWithoutCompositionInputSchema),z.lazy(() => FileUncheckedCreateWithoutCompositionInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => FileCreateOrConnectWithoutCompositionInputSchema).optional(),
  upsert: z.lazy(() => FileUpsertWithoutCompositionInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => FileWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => FileWhereInputSchema) ]).optional(),
  connect: z.lazy(() => FileWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => FileUpdateToOneWithWhereWithoutCompositionInputSchema),z.lazy(() => FileUpdateWithoutCompositionInputSchema),z.lazy(() => FileUncheckedUpdateWithoutCompositionInputSchema) ]).optional(),
}).strict();

export default FileUpdateOneWithoutCompositionNestedInputSchema;
