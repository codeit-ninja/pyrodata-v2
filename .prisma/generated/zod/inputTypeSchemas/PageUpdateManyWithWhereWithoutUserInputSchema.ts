import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PageScalarWhereInputSchema } from './PageScalarWhereInputSchema';
import { PageUpdateManyMutationInputSchema } from './PageUpdateManyMutationInputSchema';
import { PageUncheckedUpdateManyWithoutUserInputSchema } from './PageUncheckedUpdateManyWithoutUserInputSchema';

export const PageUpdateManyWithWhereWithoutUserInputSchema: z.ZodType<Prisma.PageUpdateManyWithWhereWithoutUserInput> = z.object({
  where: z.lazy(() => PageScalarWhereInputSchema),
  data: z.union([ z.lazy(() => PageUpdateManyMutationInputSchema),z.lazy(() => PageUncheckedUpdateManyWithoutUserInputSchema) ]),
}).strict();

export default PageUpdateManyWithWhereWithoutUserInputSchema;
