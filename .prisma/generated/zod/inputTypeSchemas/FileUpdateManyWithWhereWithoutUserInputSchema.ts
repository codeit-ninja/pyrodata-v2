import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { FileScalarWhereInputSchema } from './FileScalarWhereInputSchema';
import { FileUpdateManyMutationInputSchema } from './FileUpdateManyMutationInputSchema';
import { FileUncheckedUpdateManyWithoutUserInputSchema } from './FileUncheckedUpdateManyWithoutUserInputSchema';

export const FileUpdateManyWithWhereWithoutUserInputSchema: z.ZodType<Prisma.FileUpdateManyWithWhereWithoutUserInput> = z.object({
  where: z.lazy(() => FileScalarWhereInputSchema),
  data: z.union([ z.lazy(() => FileUpdateManyMutationInputSchema),z.lazy(() => FileUncheckedUpdateManyWithoutUserInputSchema) ]),
}).strict();

export default FileUpdateManyWithWhereWithoutUserInputSchema;
