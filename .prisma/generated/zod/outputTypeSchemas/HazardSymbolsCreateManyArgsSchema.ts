import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { HazardSymbolsCreateManyInputSchema } from '../inputTypeSchemas/HazardSymbolsCreateManyInputSchema'

export const HazardSymbolsCreateManyArgsSchema: z.ZodType<Prisma.HazardSymbolsCreateManyArgs> = z.object({
  data: z.union([ HazardSymbolsCreateManyInputSchema,HazardSymbolsCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default HazardSymbolsCreateManyArgsSchema;
