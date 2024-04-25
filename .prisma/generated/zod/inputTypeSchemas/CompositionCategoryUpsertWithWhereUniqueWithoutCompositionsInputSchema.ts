import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CompositionCategoryWhereUniqueInputSchema } from './CompositionCategoryWhereUniqueInputSchema';
import { CompositionCategoryUpdateWithoutCompositionsInputSchema } from './CompositionCategoryUpdateWithoutCompositionsInputSchema';
import { CompositionCategoryUncheckedUpdateWithoutCompositionsInputSchema } from './CompositionCategoryUncheckedUpdateWithoutCompositionsInputSchema';
import { CompositionCategoryCreateWithoutCompositionsInputSchema } from './CompositionCategoryCreateWithoutCompositionsInputSchema';
import { CompositionCategoryUncheckedCreateWithoutCompositionsInputSchema } from './CompositionCategoryUncheckedCreateWithoutCompositionsInputSchema';

export const CompositionCategoryUpsertWithWhereUniqueWithoutCompositionsInputSchema: z.ZodType<Prisma.CompositionCategoryUpsertWithWhereUniqueWithoutCompositionsInput> = z.object({
  where: z.lazy(() => CompositionCategoryWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => CompositionCategoryUpdateWithoutCompositionsInputSchema),z.lazy(() => CompositionCategoryUncheckedUpdateWithoutCompositionsInputSchema) ]),
  create: z.union([ z.lazy(() => CompositionCategoryCreateWithoutCompositionsInputSchema),z.lazy(() => CompositionCategoryUncheckedCreateWithoutCompositionsInputSchema) ]),
}).strict();

export default CompositionCategoryUpsertWithWhereUniqueWithoutCompositionsInputSchema;
