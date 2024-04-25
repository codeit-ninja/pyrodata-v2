import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { FileCreateWithoutPageInputSchema } from './FileCreateWithoutPageInputSchema';
import { FileUncheckedCreateWithoutPageInputSchema } from './FileUncheckedCreateWithoutPageInputSchema';
import { FileCreateOrConnectWithoutPageInputSchema } from './FileCreateOrConnectWithoutPageInputSchema';
import { FileUpsertWithoutPageInputSchema } from './FileUpsertWithoutPageInputSchema';
import { FileWhereInputSchema } from './FileWhereInputSchema';
import { FileWhereUniqueInputSchema } from './FileWhereUniqueInputSchema';
import { FileUpdateToOneWithWhereWithoutPageInputSchema } from './FileUpdateToOneWithWhereWithoutPageInputSchema';
import { FileUpdateWithoutPageInputSchema } from './FileUpdateWithoutPageInputSchema';
import { FileUncheckedUpdateWithoutPageInputSchema } from './FileUncheckedUpdateWithoutPageInputSchema';

export const FileUpdateOneWithoutPageNestedInputSchema: z.ZodType<Prisma.FileUpdateOneWithoutPageNestedInput> = z.object({
  create: z.union([ z.lazy(() => FileCreateWithoutPageInputSchema),z.lazy(() => FileUncheckedCreateWithoutPageInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => FileCreateOrConnectWithoutPageInputSchema).optional(),
  upsert: z.lazy(() => FileUpsertWithoutPageInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => FileWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => FileWhereInputSchema) ]).optional(),
  connect: z.lazy(() => FileWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => FileUpdateToOneWithWhereWithoutPageInputSchema),z.lazy(() => FileUpdateWithoutPageInputSchema),z.lazy(() => FileUncheckedUpdateWithoutPageInputSchema) ]).optional(),
}).strict();

export default FileUpdateOneWithoutPageNestedInputSchema;
