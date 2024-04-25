import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { HazardSymbolsSelectSchema } from '../inputTypeSchemas/HazardSymbolsSelectSchema';
import { HazardSymbolsIncludeSchema } from '../inputTypeSchemas/HazardSymbolsIncludeSchema';

export const HazardSymbolsArgsSchema: z.ZodType<Prisma.HazardSymbolsDefaultArgs> = z.object({
  select: z.lazy(() => HazardSymbolsSelectSchema).optional(),
  include: z.lazy(() => HazardSymbolsIncludeSchema).optional(),
}).strict();

export default HazardSymbolsArgsSchema;
