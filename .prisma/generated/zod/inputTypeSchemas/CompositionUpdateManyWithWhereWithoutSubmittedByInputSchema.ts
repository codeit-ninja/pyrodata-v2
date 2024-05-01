import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CompositionScalarWhereInputSchema } from './CompositionScalarWhereInputSchema';
import { CompositionUpdateManyMutationInputSchema } from './CompositionUpdateManyMutationInputSchema';
import { CompositionUncheckedUpdateManyWithoutSubmittedByInputSchema } from './CompositionUncheckedUpdateManyWithoutSubmittedByInputSchema';

export const CompositionUpdateManyWithWhereWithoutSubmittedByInputSchema: z.ZodType<Prisma.CompositionUpdateManyWithWhereWithoutSubmittedByInput> = z.object({
  where: z.lazy(() => CompositionScalarWhereInputSchema),
  data: z.union([ z.lazy(() => CompositionUpdateManyMutationInputSchema),z.lazy(() => CompositionUncheckedUpdateManyWithoutSubmittedByInputSchema) ]),
}).strict();

export default CompositionUpdateManyWithWhereWithoutSubmittedByInputSchema;
