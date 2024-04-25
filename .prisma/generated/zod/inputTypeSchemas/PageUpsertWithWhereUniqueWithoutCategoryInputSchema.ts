import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PageWhereUniqueInputSchema } from './PageWhereUniqueInputSchema';
import { PageUpdateWithoutCategoryInputSchema } from './PageUpdateWithoutCategoryInputSchema';
import { PageUncheckedUpdateWithoutCategoryInputSchema } from './PageUncheckedUpdateWithoutCategoryInputSchema';
import { PageCreateWithoutCategoryInputSchema } from './PageCreateWithoutCategoryInputSchema';
import { PageUncheckedCreateWithoutCategoryInputSchema } from './PageUncheckedCreateWithoutCategoryInputSchema';

export const PageUpsertWithWhereUniqueWithoutCategoryInputSchema: z.ZodType<Prisma.PageUpsertWithWhereUniqueWithoutCategoryInput> = z.object({
  where: z.lazy(() => PageWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => PageUpdateWithoutCategoryInputSchema),z.lazy(() => PageUncheckedUpdateWithoutCategoryInputSchema) ]),
  create: z.union([ z.lazy(() => PageCreateWithoutCategoryInputSchema),z.lazy(() => PageUncheckedCreateWithoutCategoryInputSchema) ]),
}).strict();

export default PageUpsertWithWhereUniqueWithoutCategoryInputSchema;
