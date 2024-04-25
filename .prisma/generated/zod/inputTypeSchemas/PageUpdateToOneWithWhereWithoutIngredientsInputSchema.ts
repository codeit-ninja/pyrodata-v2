import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PageWhereInputSchema } from './PageWhereInputSchema';
import { PageUpdateWithoutIngredientsInputSchema } from './PageUpdateWithoutIngredientsInputSchema';
import { PageUncheckedUpdateWithoutIngredientsInputSchema } from './PageUncheckedUpdateWithoutIngredientsInputSchema';

export const PageUpdateToOneWithWhereWithoutIngredientsInputSchema: z.ZodType<Prisma.PageUpdateToOneWithWhereWithoutIngredientsInput> = z.object({
  where: z.lazy(() => PageWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => PageUpdateWithoutIngredientsInputSchema),z.lazy(() => PageUncheckedUpdateWithoutIngredientsInputSchema) ]),
}).strict();

export default PageUpdateToOneWithWhereWithoutIngredientsInputSchema;
