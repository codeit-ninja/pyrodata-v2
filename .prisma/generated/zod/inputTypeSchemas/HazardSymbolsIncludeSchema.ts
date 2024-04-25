import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ChemicalFindManyArgsSchema } from "../outputTypeSchemas/ChemicalFindManyArgsSchema"
import { HazardSymbolsCountOutputTypeArgsSchema } from "../outputTypeSchemas/HazardSymbolsCountOutputTypeArgsSchema"

export const HazardSymbolsIncludeSchema: z.ZodType<Prisma.HazardSymbolsInclude> = z.object({
  chemicals: z.union([z.boolean(),z.lazy(() => ChemicalFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => HazardSymbolsCountOutputTypeArgsSchema)]).optional(),
}).strict()

export default HazardSymbolsIncludeSchema;
