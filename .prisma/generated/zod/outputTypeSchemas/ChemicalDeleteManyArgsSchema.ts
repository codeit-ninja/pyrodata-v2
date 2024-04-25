import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ChemicalWhereInputSchema } from '../inputTypeSchemas/ChemicalWhereInputSchema'

export const ChemicalDeleteManyArgsSchema: z.ZodType<Prisma.ChemicalDeleteManyArgs> = z.object({
  where: ChemicalWhereInputSchema.optional(),
}).strict() ;

export default ChemicalDeleteManyArgsSchema;
