import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PageWhereUniqueInputSchema } from './PageWhereUniqueInputSchema';
import { PageCreateWithoutIngredientsInputSchema } from './PageCreateWithoutIngredientsInputSchema';
import { PageUncheckedCreateWithoutIngredientsInputSchema } from './PageUncheckedCreateWithoutIngredientsInputSchema';

export const PageCreateOrConnectWithoutIngredientsInputSchema: z.ZodType<Prisma.PageCreateOrConnectWithoutIngredientsInput> = z.object({
  where: z.lazy(() => PageWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => PageCreateWithoutIngredientsInputSchema),z.lazy(() => PageUncheckedCreateWithoutIngredientsInputSchema) ]),
}).strict();

export default PageCreateOrConnectWithoutIngredientsInputSchema;
