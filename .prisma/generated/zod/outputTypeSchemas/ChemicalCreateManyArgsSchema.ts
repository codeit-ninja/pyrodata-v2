import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ChemicalCreateManyInputSchema } from '../inputTypeSchemas/ChemicalCreateManyInputSchema'

export const ChemicalCreateManyArgsSchema: z.ZodType<Prisma.ChemicalCreateManyArgs> = z.object({
  data: z.union([ ChemicalCreateManyInputSchema,ChemicalCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default ChemicalCreateManyArgsSchema;
