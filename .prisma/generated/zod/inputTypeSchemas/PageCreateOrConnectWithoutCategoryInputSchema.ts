import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PageWhereUniqueInputSchema } from './PageWhereUniqueInputSchema';
import { PageCreateWithoutCategoryInputSchema } from './PageCreateWithoutCategoryInputSchema';
import { PageUncheckedCreateWithoutCategoryInputSchema } from './PageUncheckedCreateWithoutCategoryInputSchema';

export const PageCreateOrConnectWithoutCategoryInputSchema: z.ZodType<Prisma.PageCreateOrConnectWithoutCategoryInput> = z.object({
  where: z.lazy(() => PageWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => PageCreateWithoutCategoryInputSchema),z.lazy(() => PageUncheckedCreateWithoutCategoryInputSchema) ]),
}).strict();

export default PageCreateOrConnectWithoutCategoryInputSchema;
