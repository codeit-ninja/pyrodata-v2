import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';

export const ChemicalScalarWhereInputSchema: z.ZodType<Prisma.ChemicalScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => ChemicalScalarWhereInputSchema),z.lazy(() => ChemicalScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ChemicalScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ChemicalScalarWhereInputSchema),z.lazy(() => ChemicalScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  formula: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  pageId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
}).strict();

export default ChemicalScalarWhereInputSchema;
