import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';

export const HazardSymbolsScalarWhereInputSchema: z.ZodType<Prisma.HazardSymbolsScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => HazardSymbolsScalarWhereInputSchema),z.lazy(() => HazardSymbolsScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => HazardSymbolsScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => HazardSymbolsScalarWhereInputSchema),z.lazy(() => HazardSymbolsScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  symbol: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
}).strict();

export default HazardSymbolsScalarWhereInputSchema;
