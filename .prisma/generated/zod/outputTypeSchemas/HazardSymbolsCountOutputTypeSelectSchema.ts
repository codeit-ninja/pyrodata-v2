import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const HazardSymbolsCountOutputTypeSelectSchema: z.ZodType<Prisma.HazardSymbolsCountOutputTypeSelect> = z.object({
  chemicals: z.boolean().optional(),
}).strict();

export default HazardSymbolsCountOutputTypeSelectSchema;
