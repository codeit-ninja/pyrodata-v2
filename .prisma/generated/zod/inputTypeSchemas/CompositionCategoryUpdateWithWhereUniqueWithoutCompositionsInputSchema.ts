import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CompositionCategoryWhereUniqueInputSchema } from './CompositionCategoryWhereUniqueInputSchema';
import { CompositionCategoryUpdateWithoutCompositionsInputSchema } from './CompositionCategoryUpdateWithoutCompositionsInputSchema';
import { CompositionCategoryUncheckedUpdateWithoutCompositionsInputSchema } from './CompositionCategoryUncheckedUpdateWithoutCompositionsInputSchema';

export const CompositionCategoryUpdateWithWhereUniqueWithoutCompositionsInputSchema: z.ZodType<Prisma.CompositionCategoryUpdateWithWhereUniqueWithoutCompositionsInput> = z.object({
  where: z.lazy(() => CompositionCategoryWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => CompositionCategoryUpdateWithoutCompositionsInputSchema),z.lazy(() => CompositionCategoryUncheckedUpdateWithoutCompositionsInputSchema) ]),
}).strict();

export default CompositionCategoryUpdateWithWhereUniqueWithoutCompositionsInputSchema;
