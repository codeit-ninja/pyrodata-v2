import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CompositionWhereUniqueInputSchema } from './CompositionWhereUniqueInputSchema';
import { CompositionCreateWithoutCategoriesInputSchema } from './CompositionCreateWithoutCategoriesInputSchema';
import { CompositionUncheckedCreateWithoutCategoriesInputSchema } from './CompositionUncheckedCreateWithoutCategoriesInputSchema';

export const CompositionCreateOrConnectWithoutCategoriesInputSchema: z.ZodType<Prisma.CompositionCreateOrConnectWithoutCategoriesInput> = z.object({
  where: z.lazy(() => CompositionWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => CompositionCreateWithoutCategoriesInputSchema),z.lazy(() => CompositionUncheckedCreateWithoutCategoriesInputSchema) ]),
}).strict();

export default CompositionCreateOrConnectWithoutCategoriesInputSchema;
