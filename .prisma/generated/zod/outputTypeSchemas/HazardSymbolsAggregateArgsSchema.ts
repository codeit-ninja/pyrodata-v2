import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { HazardSymbolsWhereInputSchema } from '../inputTypeSchemas/HazardSymbolsWhereInputSchema'
import { HazardSymbolsOrderByWithRelationInputSchema } from '../inputTypeSchemas/HazardSymbolsOrderByWithRelationInputSchema'
import { HazardSymbolsWhereUniqueInputSchema } from '../inputTypeSchemas/HazardSymbolsWhereUniqueInputSchema'

export const HazardSymbolsAggregateArgsSchema: z.ZodType<Prisma.HazardSymbolsAggregateArgs> = z.object({
  where: HazardSymbolsWhereInputSchema.optional(),
  orderBy: z.union([ HazardSymbolsOrderByWithRelationInputSchema.array(),HazardSymbolsOrderByWithRelationInputSchema ]).optional(),
  cursor: HazardSymbolsWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default HazardSymbolsAggregateArgsSchema;
