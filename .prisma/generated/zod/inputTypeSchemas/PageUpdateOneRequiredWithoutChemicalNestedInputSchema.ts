import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PageCreateWithoutChemicalInputSchema } from './PageCreateWithoutChemicalInputSchema';
import { PageUncheckedCreateWithoutChemicalInputSchema } from './PageUncheckedCreateWithoutChemicalInputSchema';
import { PageCreateOrConnectWithoutChemicalInputSchema } from './PageCreateOrConnectWithoutChemicalInputSchema';
import { PageUpsertWithoutChemicalInputSchema } from './PageUpsertWithoutChemicalInputSchema';
import { PageWhereUniqueInputSchema } from './PageWhereUniqueInputSchema';
import { PageUpdateToOneWithWhereWithoutChemicalInputSchema } from './PageUpdateToOneWithWhereWithoutChemicalInputSchema';
import { PageUpdateWithoutChemicalInputSchema } from './PageUpdateWithoutChemicalInputSchema';
import { PageUncheckedUpdateWithoutChemicalInputSchema } from './PageUncheckedUpdateWithoutChemicalInputSchema';

export const PageUpdateOneRequiredWithoutChemicalNestedInputSchema: z.ZodType<Prisma.PageUpdateOneRequiredWithoutChemicalNestedInput> = z.object({
  create: z.union([ z.lazy(() => PageCreateWithoutChemicalInputSchema),z.lazy(() => PageUncheckedCreateWithoutChemicalInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => PageCreateOrConnectWithoutChemicalInputSchema).optional(),
  upsert: z.lazy(() => PageUpsertWithoutChemicalInputSchema).optional(),
  connect: z.lazy(() => PageWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => PageUpdateToOneWithWhereWithoutChemicalInputSchema),z.lazy(() => PageUpdateWithoutChemicalInputSchema),z.lazy(() => PageUncheckedUpdateWithoutChemicalInputSchema) ]).optional(),
}).strict();

export default PageUpdateOneRequiredWithoutChemicalNestedInputSchema;
