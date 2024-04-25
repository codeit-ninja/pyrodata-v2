import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';

export const HazardSymbolsScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.HazardSymbolsScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => HazardSymbolsScalarWhereWithAggregatesInputSchema),z.lazy(() => HazardSymbolsScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => HazardSymbolsScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => HazardSymbolsScalarWhereWithAggregatesInputSchema),z.lazy(() => HazardSymbolsScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  symbol: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
}).strict();

export default HazardSymbolsScalarWhereWithAggregatesInputSchema;
