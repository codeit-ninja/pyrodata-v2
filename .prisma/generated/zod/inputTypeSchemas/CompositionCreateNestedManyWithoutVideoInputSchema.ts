import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CompositionCreateWithoutVideoInputSchema } from './CompositionCreateWithoutVideoInputSchema';
import { CompositionUncheckedCreateWithoutVideoInputSchema } from './CompositionUncheckedCreateWithoutVideoInputSchema';
import { CompositionCreateOrConnectWithoutVideoInputSchema } from './CompositionCreateOrConnectWithoutVideoInputSchema';
import { CompositionCreateManyVideoInputEnvelopeSchema } from './CompositionCreateManyVideoInputEnvelopeSchema';
import { CompositionWhereUniqueInputSchema } from './CompositionWhereUniqueInputSchema';

export const CompositionCreateNestedManyWithoutVideoInputSchema: z.ZodType<Prisma.CompositionCreateNestedManyWithoutVideoInput> = z.object({
  create: z.union([ z.lazy(() => CompositionCreateWithoutVideoInputSchema),z.lazy(() => CompositionCreateWithoutVideoInputSchema).array(),z.lazy(() => CompositionUncheckedCreateWithoutVideoInputSchema),z.lazy(() => CompositionUncheckedCreateWithoutVideoInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => CompositionCreateOrConnectWithoutVideoInputSchema),z.lazy(() => CompositionCreateOrConnectWithoutVideoInputSchema).array() ]).optional(),
  createMany: z.lazy(() => CompositionCreateManyVideoInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => CompositionWhereUniqueInputSchema),z.lazy(() => CompositionWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default CompositionCreateNestedManyWithoutVideoInputSchema;
