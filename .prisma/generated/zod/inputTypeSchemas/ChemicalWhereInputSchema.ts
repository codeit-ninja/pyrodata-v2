import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { HazardSymbolsListRelationFilterSchema } from './HazardSymbolsListRelationFilterSchema';
import { PageRelationFilterSchema } from './PageRelationFilterSchema';
import { PageWhereInputSchema } from './PageWhereInputSchema';

export const ChemicalWhereInputSchema: z.ZodType<Prisma.ChemicalWhereInput> = z.object({
  AND: z.union([ z.lazy(() => ChemicalWhereInputSchema),z.lazy(() => ChemicalWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ChemicalWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ChemicalWhereInputSchema),z.lazy(() => ChemicalWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  formula: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  pageId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  hazards: z.lazy(() => HazardSymbolsListRelationFilterSchema).optional(),
  page: z.union([ z.lazy(() => PageRelationFilterSchema),z.lazy(() => PageWhereInputSchema) ]).optional(),
}).strict();

export default ChemicalWhereInputSchema;
