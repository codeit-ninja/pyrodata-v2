import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CompositionWhereUniqueInputSchema } from './CompositionWhereUniqueInputSchema';
import { CompositionUpdateWithoutSubmittedByInputSchema } from './CompositionUpdateWithoutSubmittedByInputSchema';
import { CompositionUncheckedUpdateWithoutSubmittedByInputSchema } from './CompositionUncheckedUpdateWithoutSubmittedByInputSchema';

export const CompositionUpdateWithWhereUniqueWithoutSubmittedByInputSchema: z.ZodType<Prisma.CompositionUpdateWithWhereUniqueWithoutSubmittedByInput> = z.object({
  where: z.lazy(() => CompositionWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => CompositionUpdateWithoutSubmittedByInputSchema),z.lazy(() => CompositionUncheckedUpdateWithoutSubmittedByInputSchema) ]),
}).strict();

export default CompositionUpdateWithWhereUniqueWithoutSubmittedByInputSchema;
