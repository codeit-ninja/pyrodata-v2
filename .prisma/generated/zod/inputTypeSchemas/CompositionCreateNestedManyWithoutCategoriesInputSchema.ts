import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CompositionCreateWithoutCategoriesInputSchema } from './CompositionCreateWithoutCategoriesInputSchema';
import { CompositionUncheckedCreateWithoutCategoriesInputSchema } from './CompositionUncheckedCreateWithoutCategoriesInputSchema';
import { CompositionCreateOrConnectWithoutCategoriesInputSchema } from './CompositionCreateOrConnectWithoutCategoriesInputSchema';
import { CompositionWhereUniqueInputSchema } from './CompositionWhereUniqueInputSchema';

export const CompositionCreateNestedManyWithoutCategoriesInputSchema: z.ZodType<Prisma.CompositionCreateNestedManyWithoutCategoriesInput> = z.object({
  create: z.union([ z.lazy(() => CompositionCreateWithoutCategoriesInputSchema),z.lazy(() => CompositionCreateWithoutCategoriesInputSchema).array(),z.lazy(() => CompositionUncheckedCreateWithoutCategoriesInputSchema),z.lazy(() => CompositionUncheckedCreateWithoutCategoriesInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => CompositionCreateOrConnectWithoutCategoriesInputSchema),z.lazy(() => CompositionCreateOrConnectWithoutCategoriesInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => CompositionWhereUniqueInputSchema),z.lazy(() => CompositionWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default CompositionCreateNestedManyWithoutCategoriesInputSchema;
