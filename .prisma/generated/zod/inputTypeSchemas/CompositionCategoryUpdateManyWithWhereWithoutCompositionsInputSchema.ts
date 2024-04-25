import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CompositionCategoryScalarWhereInputSchema } from './CompositionCategoryScalarWhereInputSchema';
import { CompositionCategoryUpdateManyMutationInputSchema } from './CompositionCategoryUpdateManyMutationInputSchema';
import { CompositionCategoryUncheckedUpdateManyWithoutCompositionsInputSchema } from './CompositionCategoryUncheckedUpdateManyWithoutCompositionsInputSchema';

export const CompositionCategoryUpdateManyWithWhereWithoutCompositionsInputSchema: z.ZodType<Prisma.CompositionCategoryUpdateManyWithWhereWithoutCompositionsInput> = z.object({
  where: z.lazy(() => CompositionCategoryScalarWhereInputSchema),
  data: z.union([ z.lazy(() => CompositionCategoryUpdateManyMutationInputSchema),z.lazy(() => CompositionCategoryUncheckedUpdateManyWithoutCompositionsInputSchema) ]),
}).strict();

export default CompositionCategoryUpdateManyWithWhereWithoutCompositionsInputSchema;
