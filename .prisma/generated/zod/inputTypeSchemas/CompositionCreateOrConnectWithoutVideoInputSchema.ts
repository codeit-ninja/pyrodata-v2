import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CompositionWhereUniqueInputSchema } from './CompositionWhereUniqueInputSchema';
import { CompositionCreateWithoutVideoInputSchema } from './CompositionCreateWithoutVideoInputSchema';
import { CompositionUncheckedCreateWithoutVideoInputSchema } from './CompositionUncheckedCreateWithoutVideoInputSchema';

export const CompositionCreateOrConnectWithoutVideoInputSchema: z.ZodType<Prisma.CompositionCreateOrConnectWithoutVideoInput> = z.object({
  where: z.lazy(() => CompositionWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => CompositionCreateWithoutVideoInputSchema),z.lazy(() => CompositionUncheckedCreateWithoutVideoInputSchema) ]),
}).strict();

export default CompositionCreateOrConnectWithoutVideoInputSchema;
