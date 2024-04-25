import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PageWhereInputSchema } from './PageWhereInputSchema';
import { PageUpdateWithoutChemicalInputSchema } from './PageUpdateWithoutChemicalInputSchema';
import { PageUncheckedUpdateWithoutChemicalInputSchema } from './PageUncheckedUpdateWithoutChemicalInputSchema';

export const PageUpdateToOneWithWhereWithoutChemicalInputSchema: z.ZodType<Prisma.PageUpdateToOneWithWhereWithoutChemicalInput> = z.object({
  where: z.lazy(() => PageWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => PageUpdateWithoutChemicalInputSchema),z.lazy(() => PageUncheckedUpdateWithoutChemicalInputSchema) ]),
}).strict();

export default PageUpdateToOneWithWhereWithoutChemicalInputSchema;
