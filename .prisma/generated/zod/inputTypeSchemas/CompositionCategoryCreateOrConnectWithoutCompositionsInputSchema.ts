import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CompositionCategoryWhereUniqueInputSchema } from './CompositionCategoryWhereUniqueInputSchema';
import { CompositionCategoryCreateWithoutCompositionsInputSchema } from './CompositionCategoryCreateWithoutCompositionsInputSchema';
import { CompositionCategoryUncheckedCreateWithoutCompositionsInputSchema } from './CompositionCategoryUncheckedCreateWithoutCompositionsInputSchema';

export const CompositionCategoryCreateOrConnectWithoutCompositionsInputSchema: z.ZodType<Prisma.CompositionCategoryCreateOrConnectWithoutCompositionsInput> = z.object({
  where: z.lazy(() => CompositionCategoryWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => CompositionCategoryCreateWithoutCompositionsInputSchema),z.lazy(() => CompositionCategoryUncheckedCreateWithoutCompositionsInputSchema) ]),
}).strict();

export default CompositionCategoryCreateOrConnectWithoutCompositionsInputSchema;
