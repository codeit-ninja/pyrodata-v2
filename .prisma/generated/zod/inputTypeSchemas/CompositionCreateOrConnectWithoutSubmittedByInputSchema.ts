import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CompositionWhereUniqueInputSchema } from './CompositionWhereUniqueInputSchema';
import { CompositionCreateWithoutSubmittedByInputSchema } from './CompositionCreateWithoutSubmittedByInputSchema';
import { CompositionUncheckedCreateWithoutSubmittedByInputSchema } from './CompositionUncheckedCreateWithoutSubmittedByInputSchema';

export const CompositionCreateOrConnectWithoutSubmittedByInputSchema: z.ZodType<Prisma.CompositionCreateOrConnectWithoutSubmittedByInput> = z.object({
  where: z.lazy(() => CompositionWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => CompositionCreateWithoutSubmittedByInputSchema),z.lazy(() => CompositionUncheckedCreateWithoutSubmittedByInputSchema) ]),
}).strict();

export default CompositionCreateOrConnectWithoutSubmittedByInputSchema;
