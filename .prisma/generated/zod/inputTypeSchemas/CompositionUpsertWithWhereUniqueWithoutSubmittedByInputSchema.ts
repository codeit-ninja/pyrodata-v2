import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CompositionWhereUniqueInputSchema } from './CompositionWhereUniqueInputSchema';
import { CompositionUpdateWithoutSubmittedByInputSchema } from './CompositionUpdateWithoutSubmittedByInputSchema';
import { CompositionUncheckedUpdateWithoutSubmittedByInputSchema } from './CompositionUncheckedUpdateWithoutSubmittedByInputSchema';
import { CompositionCreateWithoutSubmittedByInputSchema } from './CompositionCreateWithoutSubmittedByInputSchema';
import { CompositionUncheckedCreateWithoutSubmittedByInputSchema } from './CompositionUncheckedCreateWithoutSubmittedByInputSchema';

export const CompositionUpsertWithWhereUniqueWithoutSubmittedByInputSchema: z.ZodType<Prisma.CompositionUpsertWithWhereUniqueWithoutSubmittedByInput> = z.object({
  where: z.lazy(() => CompositionWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => CompositionUpdateWithoutSubmittedByInputSchema),z.lazy(() => CompositionUncheckedUpdateWithoutSubmittedByInputSchema) ]),
  create: z.union([ z.lazy(() => CompositionCreateWithoutSubmittedByInputSchema),z.lazy(() => CompositionUncheckedCreateWithoutSubmittedByInputSchema) ]),
}).strict();

export default CompositionUpsertWithWhereUniqueWithoutSubmittedByInputSchema;
