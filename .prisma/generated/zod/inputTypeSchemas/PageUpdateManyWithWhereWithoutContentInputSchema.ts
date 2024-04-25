import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PageScalarWhereInputSchema } from './PageScalarWhereInputSchema';
import { PageUpdateManyMutationInputSchema } from './PageUpdateManyMutationInputSchema';
import { PageUncheckedUpdateManyWithoutContentInputSchema } from './PageUncheckedUpdateManyWithoutContentInputSchema';

export const PageUpdateManyWithWhereWithoutContentInputSchema: z.ZodType<Prisma.PageUpdateManyWithWhereWithoutContentInput> = z.object({
  where: z.lazy(() => PageScalarWhereInputSchema),
  data: z.union([ z.lazy(() => PageUpdateManyMutationInputSchema),z.lazy(() => PageUncheckedUpdateManyWithoutContentInputSchema) ]),
}).strict();

export default PageUpdateManyWithWhereWithoutContentInputSchema;
