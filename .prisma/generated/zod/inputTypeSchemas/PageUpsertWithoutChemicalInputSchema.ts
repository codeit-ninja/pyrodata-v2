import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PageUpdateWithoutChemicalInputSchema } from './PageUpdateWithoutChemicalInputSchema';
import { PageUncheckedUpdateWithoutChemicalInputSchema } from './PageUncheckedUpdateWithoutChemicalInputSchema';
import { PageCreateWithoutChemicalInputSchema } from './PageCreateWithoutChemicalInputSchema';
import { PageUncheckedCreateWithoutChemicalInputSchema } from './PageUncheckedCreateWithoutChemicalInputSchema';
import { PageWhereInputSchema } from './PageWhereInputSchema';

export const PageUpsertWithoutChemicalInputSchema: z.ZodType<Prisma.PageUpsertWithoutChemicalInput> = z.object({
  update: z.union([ z.lazy(() => PageUpdateWithoutChemicalInputSchema),z.lazy(() => PageUncheckedUpdateWithoutChemicalInputSchema) ]),
  create: z.union([ z.lazy(() => PageCreateWithoutChemicalInputSchema),z.lazy(() => PageUncheckedCreateWithoutChemicalInputSchema) ]),
  where: z.lazy(() => PageWhereInputSchema).optional()
}).strict();

export default PageUpsertWithoutChemicalInputSchema;
