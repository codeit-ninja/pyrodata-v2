import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const HazardSymbolsCreateManyInputSchema: z.ZodType<Prisma.HazardSymbolsCreateManyInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  symbol: z.string()
}).strict();

export default HazardSymbolsCreateManyInputSchema;
