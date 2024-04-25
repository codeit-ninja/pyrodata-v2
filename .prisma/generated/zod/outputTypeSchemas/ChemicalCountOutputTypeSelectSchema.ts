import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const ChemicalCountOutputTypeSelectSchema: z.ZodType<Prisma.ChemicalCountOutputTypeSelect> = z.object({
  hazards: z.boolean().optional(),
}).strict();

export default ChemicalCountOutputTypeSelectSchema;
