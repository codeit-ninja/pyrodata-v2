import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CompositionCreateWithoutSubmittedByInputSchema } from './CompositionCreateWithoutSubmittedByInputSchema';
import { CompositionUncheckedCreateWithoutSubmittedByInputSchema } from './CompositionUncheckedCreateWithoutSubmittedByInputSchema';
import { CompositionCreateOrConnectWithoutSubmittedByInputSchema } from './CompositionCreateOrConnectWithoutSubmittedByInputSchema';
import { CompositionUpsertWithWhereUniqueWithoutSubmittedByInputSchema } from './CompositionUpsertWithWhereUniqueWithoutSubmittedByInputSchema';
import { CompositionCreateManySubmittedByInputEnvelopeSchema } from './CompositionCreateManySubmittedByInputEnvelopeSchema';
import { CompositionWhereUniqueInputSchema } from './CompositionWhereUniqueInputSchema';
import { CompositionUpdateWithWhereUniqueWithoutSubmittedByInputSchema } from './CompositionUpdateWithWhereUniqueWithoutSubmittedByInputSchema';
import { CompositionUpdateManyWithWhereWithoutSubmittedByInputSchema } from './CompositionUpdateManyWithWhereWithoutSubmittedByInputSchema';
import { CompositionScalarWhereInputSchema } from './CompositionScalarWhereInputSchema';

export const CompositionUpdateManyWithoutSubmittedByNestedInputSchema: z.ZodType<Prisma.CompositionUpdateManyWithoutSubmittedByNestedInput> = z.object({
  create: z.union([ z.lazy(() => CompositionCreateWithoutSubmittedByInputSchema),z.lazy(() => CompositionCreateWithoutSubmittedByInputSchema).array(),z.lazy(() => CompositionUncheckedCreateWithoutSubmittedByInputSchema),z.lazy(() => CompositionUncheckedCreateWithoutSubmittedByInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => CompositionCreateOrConnectWithoutSubmittedByInputSchema),z.lazy(() => CompositionCreateOrConnectWithoutSubmittedByInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => CompositionUpsertWithWhereUniqueWithoutSubmittedByInputSchema),z.lazy(() => CompositionUpsertWithWhereUniqueWithoutSubmittedByInputSchema).array() ]).optional(),
  createMany: z.lazy(() => CompositionCreateManySubmittedByInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => CompositionWhereUniqueInputSchema),z.lazy(() => CompositionWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => CompositionWhereUniqueInputSchema),z.lazy(() => CompositionWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => CompositionWhereUniqueInputSchema),z.lazy(() => CompositionWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => CompositionWhereUniqueInputSchema),z.lazy(() => CompositionWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => CompositionUpdateWithWhereUniqueWithoutSubmittedByInputSchema),z.lazy(() => CompositionUpdateWithWhereUniqueWithoutSubmittedByInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => CompositionUpdateManyWithWhereWithoutSubmittedByInputSchema),z.lazy(() => CompositionUpdateManyWithWhereWithoutSubmittedByInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => CompositionScalarWhereInputSchema),z.lazy(() => CompositionScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default CompositionUpdateManyWithoutSubmittedByNestedInputSchema;
