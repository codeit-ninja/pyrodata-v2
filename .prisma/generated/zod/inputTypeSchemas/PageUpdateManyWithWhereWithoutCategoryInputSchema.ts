import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PageScalarWhereInputSchema } from './PageScalarWhereInputSchema';
import { PageUpdateManyMutationInputSchema } from './PageUpdateManyMutationInputSchema';
import { PageUncheckedUpdateManyWithoutCategoryInputSchema } from './PageUncheckedUpdateManyWithoutCategoryInputSchema';

export const PageUpdateManyWithWhereWithoutCategoryInputSchema: z.ZodType<Prisma.PageUpdateManyWithWhereWithoutCategoryInput> = z.object({
  where: z.lazy(() => PageScalarWhereInputSchema),
  data: z.union([ z.lazy(() => PageUpdateManyMutationInputSchema),z.lazy(() => PageUncheckedUpdateManyWithoutCategoryInputSchema) ]),
}).strict();

export default PageUpdateManyWithWhereWithoutCategoryInputSchema;
