import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { HazardSymbolsCountOutputTypeSelectSchema } from './HazardSymbolsCountOutputTypeSelectSchema';

export const HazardSymbolsCountOutputTypeArgsSchema: z.ZodType<Prisma.HazardSymbolsCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => HazardSymbolsCountOutputTypeSelectSchema).nullish(),
}).strict();

export default HazardSymbolsCountOutputTypeSelectSchema;
