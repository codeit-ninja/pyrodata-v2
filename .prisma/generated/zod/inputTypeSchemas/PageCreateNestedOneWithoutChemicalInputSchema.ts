import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PageCreateWithoutChemicalInputSchema } from './PageCreateWithoutChemicalInputSchema';
import { PageUncheckedCreateWithoutChemicalInputSchema } from './PageUncheckedCreateWithoutChemicalInputSchema';
import { PageCreateOrConnectWithoutChemicalInputSchema } from './PageCreateOrConnectWithoutChemicalInputSchema';
import { PageWhereUniqueInputSchema } from './PageWhereUniqueInputSchema';

export const PageCreateNestedOneWithoutChemicalInputSchema: z.ZodType<Prisma.PageCreateNestedOneWithoutChemicalInput> = z.object({
  create: z.union([ z.lazy(() => PageCreateWithoutChemicalInputSchema),z.lazy(() => PageUncheckedCreateWithoutChemicalInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => PageCreateOrConnectWithoutChemicalInputSchema).optional(),
  connect: z.lazy(() => PageWhereUniqueInputSchema).optional()
}).strict();

export default PageCreateNestedOneWithoutChemicalInputSchema;
