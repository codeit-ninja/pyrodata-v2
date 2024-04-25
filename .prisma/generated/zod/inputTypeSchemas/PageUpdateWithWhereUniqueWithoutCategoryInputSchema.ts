import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PageWhereUniqueInputSchema } from './PageWhereUniqueInputSchema';
import { PageUpdateWithoutCategoryInputSchema } from './PageUpdateWithoutCategoryInputSchema';
import { PageUncheckedUpdateWithoutCategoryInputSchema } from './PageUncheckedUpdateWithoutCategoryInputSchema';

export const PageUpdateWithWhereUniqueWithoutCategoryInputSchema: z.ZodType<Prisma.PageUpdateWithWhereUniqueWithoutCategoryInput> = z.object({
  where: z.lazy(() => PageWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => PageUpdateWithoutCategoryInputSchema),z.lazy(() => PageUncheckedUpdateWithoutCategoryInputSchema) ]),
}).strict();

export default PageUpdateWithWhereUniqueWithoutCategoryInputSchema;
