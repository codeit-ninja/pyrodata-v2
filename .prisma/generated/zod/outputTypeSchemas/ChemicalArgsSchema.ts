import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ChemicalSelectSchema } from '../inputTypeSchemas/ChemicalSelectSchema';
import { ChemicalIncludeSchema } from '../inputTypeSchemas/ChemicalIncludeSchema';

export const ChemicalArgsSchema: z.ZodType<Prisma.ChemicalDefaultArgs> = z.object({
  select: z.lazy(() => ChemicalSelectSchema).optional(),
  include: z.lazy(() => ChemicalIncludeSchema).optional(),
}).strict();

export default ChemicalArgsSchema;
