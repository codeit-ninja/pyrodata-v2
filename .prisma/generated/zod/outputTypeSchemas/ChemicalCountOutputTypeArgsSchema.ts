import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ChemicalCountOutputTypeSelectSchema } from './ChemicalCountOutputTypeSelectSchema';

export const ChemicalCountOutputTypeArgsSchema: z.ZodType<Prisma.ChemicalCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => ChemicalCountOutputTypeSelectSchema).nullish(),
}).strict();

export default ChemicalCountOutputTypeSelectSchema;
