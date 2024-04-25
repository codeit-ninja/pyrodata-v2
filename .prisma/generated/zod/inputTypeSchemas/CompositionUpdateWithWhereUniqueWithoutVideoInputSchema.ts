import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CompositionWhereUniqueInputSchema } from './CompositionWhereUniqueInputSchema';
import { CompositionUpdateWithoutVideoInputSchema } from './CompositionUpdateWithoutVideoInputSchema';
import { CompositionUncheckedUpdateWithoutVideoInputSchema } from './CompositionUncheckedUpdateWithoutVideoInputSchema';

export const CompositionUpdateWithWhereUniqueWithoutVideoInputSchema: z.ZodType<Prisma.CompositionUpdateWithWhereUniqueWithoutVideoInput> = z.object({
  where: z.lazy(() => CompositionWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => CompositionUpdateWithoutVideoInputSchema),z.lazy(() => CompositionUncheckedUpdateWithoutVideoInputSchema) ]),
}).strict();

export default CompositionUpdateWithWhereUniqueWithoutVideoInputSchema;
