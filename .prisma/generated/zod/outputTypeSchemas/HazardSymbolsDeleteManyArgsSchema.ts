import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { HazardSymbolsWhereInputSchema } from '../inputTypeSchemas/HazardSymbolsWhereInputSchema'

export const HazardSymbolsDeleteManyArgsSchema: z.ZodType<Prisma.HazardSymbolsDeleteManyArgs> = z.object({
  where: HazardSymbolsWhereInputSchema.optional(),
}).strict() ;

export default HazardSymbolsDeleteManyArgsSchema;
