import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ChemicalWhereInputSchema } from './ChemicalWhereInputSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { HazardSymbolsListRelationFilterSchema } from './HazardSymbolsListRelationFilterSchema';
import { PageRelationFilterSchema } from './PageRelationFilterSchema';
import { PageWhereInputSchema } from './PageWhereInputSchema';

export const ChemicalWhereUniqueInputSchema: z.ZodType<Prisma.ChemicalWhereUniqueInput> = z.union([
  z.object({
    id: z.string().cuid(),
    name: z.string(),
    pageId: z.string()
  }),
  z.object({
    id: z.string().cuid(),
    name: z.string(),
  }),
  z.object({
    id: z.string().cuid(),
    pageId: z.string(),
  }),
  z.object({
    id: z.string().cuid(),
  }),
  z.object({
    name: z.string(),
    pageId: z.string(),
  }),
  z.object({
    name: z.string(),
  }),
  z.object({
    pageId: z.string(),
  }),
])
.and(z.object({
  id: z.string().cuid().optional(),
  name: z.string().optional(),
  pageId: z.string().optional(),
  AND: z.union([ z.lazy(() => ChemicalWhereInputSchema),z.lazy(() => ChemicalWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ChemicalWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ChemicalWhereInputSchema),z.lazy(() => ChemicalWhereInputSchema).array() ]).optional(),
  formula: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  hazards: z.lazy(() => HazardSymbolsListRelationFilterSchema).optional(),
  page: z.union([ z.lazy(() => PageRelationFilterSchema),z.lazy(() => PageWhereInputSchema) ]).optional(),
}).strict());

export default ChemicalWhereUniqueInputSchema;
