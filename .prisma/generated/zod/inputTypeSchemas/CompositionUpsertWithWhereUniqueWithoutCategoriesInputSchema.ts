import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CompositionWhereUniqueInputSchema } from './CompositionWhereUniqueInputSchema';
import { CompositionUpdateWithoutCategoriesInputSchema } from './CompositionUpdateWithoutCategoriesInputSchema';
import { CompositionUncheckedUpdateWithoutCategoriesInputSchema } from './CompositionUncheckedUpdateWithoutCategoriesInputSchema';
import { CompositionCreateWithoutCategoriesInputSchema } from './CompositionCreateWithoutCategoriesInputSchema';
import { CompositionUncheckedCreateWithoutCategoriesInputSchema } from './CompositionUncheckedCreateWithoutCategoriesInputSchema';

export const CompositionUpsertWithWhereUniqueWithoutCategoriesInputSchema: z.ZodType<Prisma.CompositionUpsertWithWhereUniqueWithoutCategoriesInput> = z.object({
  where: z.lazy(() => CompositionWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => CompositionUpdateWithoutCategoriesInputSchema),z.lazy(() => CompositionUncheckedUpdateWithoutCategoriesInputSchema) ]),
  create: z.union([ z.lazy(() => CompositionCreateWithoutCategoriesInputSchema),z.lazy(() => CompositionUncheckedCreateWithoutCategoriesInputSchema) ]),
}).strict();

export default CompositionUpsertWithWhereUniqueWithoutCategoriesInputSchema;
