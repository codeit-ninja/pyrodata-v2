import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PageWhereUniqueInputSchema } from './PageWhereUniqueInputSchema';
import { PageCreateWithoutChemicalInputSchema } from './PageCreateWithoutChemicalInputSchema';
import { PageUncheckedCreateWithoutChemicalInputSchema } from './PageUncheckedCreateWithoutChemicalInputSchema';

export const PageCreateOrConnectWithoutChemicalInputSchema: z.ZodType<Prisma.PageCreateOrConnectWithoutChemicalInput> = z.object({
  where: z.lazy(() => PageWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => PageCreateWithoutChemicalInputSchema),z.lazy(() => PageUncheckedCreateWithoutChemicalInputSchema) ]),
}).strict();

export default PageCreateOrConnectWithoutChemicalInputSchema;
