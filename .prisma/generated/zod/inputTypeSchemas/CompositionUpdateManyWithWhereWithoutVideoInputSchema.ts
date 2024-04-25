import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CompositionScalarWhereInputSchema } from './CompositionScalarWhereInputSchema';
import { CompositionUpdateManyMutationInputSchema } from './CompositionUpdateManyMutationInputSchema';
import { CompositionUncheckedUpdateManyWithoutVideoInputSchema } from './CompositionUncheckedUpdateManyWithoutVideoInputSchema';

export const CompositionUpdateManyWithWhereWithoutVideoInputSchema: z.ZodType<Prisma.CompositionUpdateManyWithWhereWithoutVideoInput> = z.object({
  where: z.lazy(() => CompositionScalarWhereInputSchema),
  data: z.union([ z.lazy(() => CompositionUpdateManyMutationInputSchema),z.lazy(() => CompositionUncheckedUpdateManyWithoutVideoInputSchema) ]),
}).strict();

export default CompositionUpdateManyWithWhereWithoutVideoInputSchema;
