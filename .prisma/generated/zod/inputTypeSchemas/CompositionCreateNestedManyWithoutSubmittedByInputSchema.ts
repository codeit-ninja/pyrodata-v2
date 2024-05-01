import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CompositionCreateWithoutSubmittedByInputSchema } from './CompositionCreateWithoutSubmittedByInputSchema';
import { CompositionUncheckedCreateWithoutSubmittedByInputSchema } from './CompositionUncheckedCreateWithoutSubmittedByInputSchema';
import { CompositionCreateOrConnectWithoutSubmittedByInputSchema } from './CompositionCreateOrConnectWithoutSubmittedByInputSchema';
import { CompositionCreateManySubmittedByInputEnvelopeSchema } from './CompositionCreateManySubmittedByInputEnvelopeSchema';
import { CompositionWhereUniqueInputSchema } from './CompositionWhereUniqueInputSchema';

export const CompositionCreateNestedManyWithoutSubmittedByInputSchema: z.ZodType<Prisma.CompositionCreateNestedManyWithoutSubmittedByInput> = z.object({
  create: z.union([ z.lazy(() => CompositionCreateWithoutSubmittedByInputSchema),z.lazy(() => CompositionCreateWithoutSubmittedByInputSchema).array(),z.lazy(() => CompositionUncheckedCreateWithoutSubmittedByInputSchema),z.lazy(() => CompositionUncheckedCreateWithoutSubmittedByInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => CompositionCreateOrConnectWithoutSubmittedByInputSchema),z.lazy(() => CompositionCreateOrConnectWithoutSubmittedByInputSchema).array() ]).optional(),
  createMany: z.lazy(() => CompositionCreateManySubmittedByInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => CompositionWhereUniqueInputSchema),z.lazy(() => CompositionWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default CompositionCreateNestedManyWithoutSubmittedByInputSchema;
