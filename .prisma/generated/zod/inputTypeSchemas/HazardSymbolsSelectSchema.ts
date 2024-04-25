import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ChemicalFindManyArgsSchema } from "../outputTypeSchemas/ChemicalFindManyArgsSchema"
import { HazardSymbolsCountOutputTypeArgsSchema } from "../outputTypeSchemas/HazardSymbolsCountOutputTypeArgsSchema"

export const HazardSymbolsSelectSchema: z.ZodType<Prisma.HazardSymbolsSelect> = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  symbol: z.boolean().optional(),
  chemicals: z.union([z.boolean(),z.lazy(() => ChemicalFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => HazardSymbolsCountOutputTypeArgsSchema)]).optional(),
}).strict()

export default HazardSymbolsSelectSchema;
