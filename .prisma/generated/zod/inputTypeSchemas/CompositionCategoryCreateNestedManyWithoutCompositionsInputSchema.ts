import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CompositionCategoryCreateWithoutCompositionsInputSchema } from './CompositionCategoryCreateWithoutCompositionsInputSchema';
import { CompositionCategoryUncheckedCreateWithoutCompositionsInputSchema } from './CompositionCategoryUncheckedCreateWithoutCompositionsInputSchema';
import { CompositionCategoryCreateOrConnectWithoutCompositionsInputSchema } from './CompositionCategoryCreateOrConnectWithoutCompositionsInputSchema';
import { CompositionCategoryWhereUniqueInputSchema } from './CompositionCategoryWhereUniqueInputSchema';

export const CompositionCategoryCreateNestedManyWithoutCompositionsInputSchema: z.ZodType<Prisma.CompositionCategoryCreateNestedManyWithoutCompositionsInput> = z.object({
  create: z.union([ z.lazy(() => CompositionCategoryCreateWithoutCompositionsInputSchema),z.lazy(() => CompositionCategoryCreateWithoutCompositionsInputSchema).array(),z.lazy(() => CompositionCategoryUncheckedCreateWithoutCompositionsInputSchema),z.lazy(() => CompositionCategoryUncheckedCreateWithoutCompositionsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => CompositionCategoryCreateOrConnectWithoutCompositionsInputSchema),z.lazy(() => CompositionCategoryCreateOrConnectWithoutCompositionsInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => CompositionCategoryWhereUniqueInputSchema),z.lazy(() => CompositionCategoryWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default CompositionCategoryCreateNestedManyWithoutCompositionsInputSchema;
