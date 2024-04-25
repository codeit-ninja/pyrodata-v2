import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CompositionWhereUniqueInputSchema } from './CompositionWhereUniqueInputSchema';
import { CompositionUpdateWithoutCategoriesInputSchema } from './CompositionUpdateWithoutCategoriesInputSchema';
import { CompositionUncheckedUpdateWithoutCategoriesInputSchema } from './CompositionUncheckedUpdateWithoutCategoriesInputSchema';

export const CompositionUpdateWithWhereUniqueWithoutCategoriesInputSchema: z.ZodType<Prisma.CompositionUpdateWithWhereUniqueWithoutCategoriesInput> = z.object({
  where: z.lazy(() => CompositionWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => CompositionUpdateWithoutCategoriesInputSchema),z.lazy(() => CompositionUncheckedUpdateWithoutCategoriesInputSchema) ]),
}).strict();

export default CompositionUpdateWithWhereUniqueWithoutCategoriesInputSchema;
