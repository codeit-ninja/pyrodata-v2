import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CompositionWhereUniqueInputSchema } from './CompositionWhereUniqueInputSchema';
import { CompositionUpdateWithoutVideoInputSchema } from './CompositionUpdateWithoutVideoInputSchema';
import { CompositionUncheckedUpdateWithoutVideoInputSchema } from './CompositionUncheckedUpdateWithoutVideoInputSchema';
import { CompositionCreateWithoutVideoInputSchema } from './CompositionCreateWithoutVideoInputSchema';
import { CompositionUncheckedCreateWithoutVideoInputSchema } from './CompositionUncheckedCreateWithoutVideoInputSchema';

export const CompositionUpsertWithWhereUniqueWithoutVideoInputSchema: z.ZodType<Prisma.CompositionUpsertWithWhereUniqueWithoutVideoInput> = z.object({
  where: z.lazy(() => CompositionWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => CompositionUpdateWithoutVideoInputSchema),z.lazy(() => CompositionUncheckedUpdateWithoutVideoInputSchema) ]),
  create: z.union([ z.lazy(() => CompositionCreateWithoutVideoInputSchema),z.lazy(() => CompositionUncheckedCreateWithoutVideoInputSchema) ]),
}).strict();

export default CompositionUpsertWithWhereUniqueWithoutVideoInputSchema;
