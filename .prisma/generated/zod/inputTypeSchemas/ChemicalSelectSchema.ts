import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { HazardSymbolsFindManyArgsSchema } from "../outputTypeSchemas/HazardSymbolsFindManyArgsSchema"
import { PageArgsSchema } from "../outputTypeSchemas/PageArgsSchema"
import { ChemicalCountOutputTypeArgsSchema } from "../outputTypeSchemas/ChemicalCountOutputTypeArgsSchema"

export const ChemicalSelectSchema: z.ZodType<Prisma.ChemicalSelect> = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  formula: z.boolean().optional(),
  pageId: z.boolean().optional(),
  hazards: z.union([z.boolean(),z.lazy(() => HazardSymbolsFindManyArgsSchema)]).optional(),
  page: z.union([z.boolean(),z.lazy(() => PageArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => ChemicalCountOutputTypeArgsSchema)]).optional(),
}).strict()

export default ChemicalSelectSchema;
