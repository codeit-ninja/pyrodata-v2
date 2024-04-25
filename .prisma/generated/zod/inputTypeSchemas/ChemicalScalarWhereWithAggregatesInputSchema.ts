import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';
import { StringNullableWithAggregatesFilterSchema } from './StringNullableWithAggregatesFilterSchema';

export const ChemicalScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.ChemicalScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => ChemicalScalarWhereWithAggregatesInputSchema),z.lazy(() => ChemicalScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => ChemicalScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ChemicalScalarWhereWithAggregatesInputSchema),z.lazy(() => ChemicalScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  formula: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  pageId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
}).strict();

export default ChemicalScalarWhereWithAggregatesInputSchema;
