import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { HazardSymbolsWhereInputSchema } from '../inputTypeSchemas/HazardSymbolsWhereInputSchema'
import { HazardSymbolsOrderByWithAggregationInputSchema } from '../inputTypeSchemas/HazardSymbolsOrderByWithAggregationInputSchema'
import { HazardSymbolsScalarFieldEnumSchema } from '../inputTypeSchemas/HazardSymbolsScalarFieldEnumSchema'
import { HazardSymbolsScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/HazardSymbolsScalarWhereWithAggregatesInputSchema'

export const HazardSymbolsGroupByArgsSchema: z.ZodType<Prisma.HazardSymbolsGroupByArgs> = z.object({
  where: HazardSymbolsWhereInputSchema.optional(),
  orderBy: z.union([ HazardSymbolsOrderByWithAggregationInputSchema.array(),HazardSymbolsOrderByWithAggregationInputSchema ]).optional(),
  by: HazardSymbolsScalarFieldEnumSchema.array(),
  having: HazardSymbolsScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default HazardSymbolsGroupByArgsSchema;
