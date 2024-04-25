import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CompositionCreateWithoutVideoInputSchema } from './CompositionCreateWithoutVideoInputSchema';
import { CompositionUncheckedCreateWithoutVideoInputSchema } from './CompositionUncheckedCreateWithoutVideoInputSchema';
import { CompositionCreateOrConnectWithoutVideoInputSchema } from './CompositionCreateOrConnectWithoutVideoInputSchema';
import { CompositionUpsertWithWhereUniqueWithoutVideoInputSchema } from './CompositionUpsertWithWhereUniqueWithoutVideoInputSchema';
import { CompositionCreateManyVideoInputEnvelopeSchema } from './CompositionCreateManyVideoInputEnvelopeSchema';
import { CompositionWhereUniqueInputSchema } from './CompositionWhereUniqueInputSchema';
import { CompositionUpdateWithWhereUniqueWithoutVideoInputSchema } from './CompositionUpdateWithWhereUniqueWithoutVideoInputSchema';
import { CompositionUpdateManyWithWhereWithoutVideoInputSchema } from './CompositionUpdateManyWithWhereWithoutVideoInputSchema';
import { CompositionScalarWhereInputSchema } from './CompositionScalarWhereInputSchema';

export const CompositionUncheckedUpdateManyWithoutVideoNestedInputSchema: z.ZodType<Prisma.CompositionUncheckedUpdateManyWithoutVideoNestedInput> = z.object({
  create: z.union([ z.lazy(() => CompositionCreateWithoutVideoInputSchema),z.lazy(() => CompositionCreateWithoutVideoInputSchema).array(),z.lazy(() => CompositionUncheckedCreateWithoutVideoInputSchema),z.lazy(() => CompositionUncheckedCreateWithoutVideoInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => CompositionCreateOrConnectWithoutVideoInputSchema),z.lazy(() => CompositionCreateOrConnectWithoutVideoInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => CompositionUpsertWithWhereUniqueWithoutVideoInputSchema),z.lazy(() => CompositionUpsertWithWhereUniqueWithoutVideoInputSchema).array() ]).optional(),
  createMany: z.lazy(() => CompositionCreateManyVideoInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => CompositionWhereUniqueInputSchema),z.lazy(() => CompositionWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => CompositionWhereUniqueInputSchema),z.lazy(() => CompositionWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => CompositionWhereUniqueInputSchema),z.lazy(() => CompositionWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => CompositionWhereUniqueInputSchema),z.lazy(() => CompositionWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => CompositionUpdateWithWhereUniqueWithoutVideoInputSchema),z.lazy(() => CompositionUpdateWithWhereUniqueWithoutVideoInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => CompositionUpdateManyWithWhereWithoutVideoInputSchema),z.lazy(() => CompositionUpdateManyWithWhereWithoutVideoInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => CompositionScalarWhereInputSchema),z.lazy(() => CompositionScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default CompositionUncheckedUpdateManyWithoutVideoNestedInputSchema;
