import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CompositionScalarWhereInputSchema } from './CompositionScalarWhereInputSchema';
import { CompositionUpdateManyMutationInputSchema } from './CompositionUpdateManyMutationInputSchema';
import { CompositionUncheckedUpdateManyWithoutCategoriesInputSchema } from './CompositionUncheckedUpdateManyWithoutCategoriesInputSchema';

export const CompositionUpdateManyWithWhereWithoutCategoriesInputSchema: z.ZodType<Prisma.CompositionUpdateManyWithWhereWithoutCategoriesInput> = z.object({
  where: z.lazy(() => CompositionScalarWhereInputSchema),
  data: z.union([ z.lazy(() => CompositionUpdateManyMutationInputSchema),z.lazy(() => CompositionUncheckedUpdateManyWithoutCategoriesInputSchema) ]),
}).strict();

export default CompositionUpdateManyWithWhereWithoutCategoriesInputSchema;
