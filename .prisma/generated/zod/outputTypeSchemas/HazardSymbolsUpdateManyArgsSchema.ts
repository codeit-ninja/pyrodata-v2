import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { HazardSymbolsUpdateManyMutationInputSchema } from '../inputTypeSchemas/HazardSymbolsUpdateManyMutationInputSchema'
import { HazardSymbolsUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/HazardSymbolsUncheckedUpdateManyInputSchema'
import { HazardSymbolsWhereInputSchema } from '../inputTypeSchemas/HazardSymbolsWhereInputSchema'

export const HazardSymbolsUpdateManyArgsSchema: z.ZodType<Prisma.HazardSymbolsUpdateManyArgs> = z.object({
  data: z.union([ HazardSymbolsUpdateManyMutationInputSchema,HazardSymbolsUncheckedUpdateManyInputSchema ]),
  where: HazardSymbolsWhereInputSchema.optional(),
}).strict() ;

export default HazardSymbolsUpdateManyArgsSchema;
