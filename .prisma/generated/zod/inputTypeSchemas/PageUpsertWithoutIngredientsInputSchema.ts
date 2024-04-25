import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PageUpdateWithoutIngredientsInputSchema } from './PageUpdateWithoutIngredientsInputSchema';
import { PageUncheckedUpdateWithoutIngredientsInputSchema } from './PageUncheckedUpdateWithoutIngredientsInputSchema';
import { PageCreateWithoutIngredientsInputSchema } from './PageCreateWithoutIngredientsInputSchema';
import { PageUncheckedCreateWithoutIngredientsInputSchema } from './PageUncheckedCreateWithoutIngredientsInputSchema';
import { PageWhereInputSchema } from './PageWhereInputSchema';

export const PageUpsertWithoutIngredientsInputSchema: z.ZodType<Prisma.PageUpsertWithoutIngredientsInput> = z.object({
  update: z.union([ z.lazy(() => PageUpdateWithoutIngredientsInputSchema),z.lazy(() => PageUncheckedUpdateWithoutIngredientsInputSchema) ]),
  create: z.union([ z.lazy(() => PageCreateWithoutIngredientsInputSchema),z.lazy(() => PageUncheckedCreateWithoutIngredientsInputSchema) ]),
  where: z.lazy(() => PageWhereInputSchema).optional()
}).strict();

export default PageUpsertWithoutIngredientsInputSchema;
