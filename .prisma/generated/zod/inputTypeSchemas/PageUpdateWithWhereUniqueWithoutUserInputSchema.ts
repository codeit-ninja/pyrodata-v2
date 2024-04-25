import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PageWhereUniqueInputSchema } from './PageWhereUniqueInputSchema';
import { PageUpdateWithoutUserInputSchema } from './PageUpdateWithoutUserInputSchema';
import { PageUncheckedUpdateWithoutUserInputSchema } from './PageUncheckedUpdateWithoutUserInputSchema';

export const PageUpdateWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.PageUpdateWithWhereUniqueWithoutUserInput> = z.object({
  where: z.lazy(() => PageWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => PageUpdateWithoutUserInputSchema),z.lazy(() => PageUncheckedUpdateWithoutUserInputSchema) ]),
}).strict();

export default PageUpdateWithWhereUniqueWithoutUserInputSchema;
