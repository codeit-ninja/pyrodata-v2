import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ChemicalUpdateManyMutationInputSchema } from '../inputTypeSchemas/ChemicalUpdateManyMutationInputSchema'
import { ChemicalUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/ChemicalUncheckedUpdateManyInputSchema'
import { ChemicalWhereInputSchema } from '../inputTypeSchemas/ChemicalWhereInputSchema'

export const ChemicalUpdateManyArgsSchema: z.ZodType<Prisma.ChemicalUpdateManyArgs> = z.object({
  data: z.union([ ChemicalUpdateManyMutationInputSchema,ChemicalUncheckedUpdateManyInputSchema ]),
  where: ChemicalWhereInputSchema.optional(),
}).strict() ;

export default ChemicalUpdateManyArgsSchema;
