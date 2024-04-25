import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PageWhereUniqueInputSchema } from './PageWhereUniqueInputSchema';
import { PageUpdateWithoutContentInputSchema } from './PageUpdateWithoutContentInputSchema';
import { PageUncheckedUpdateWithoutContentInputSchema } from './PageUncheckedUpdateWithoutContentInputSchema';

export const PageUpdateWithWhereUniqueWithoutContentInputSchema: z.ZodType<Prisma.PageUpdateWithWhereUniqueWithoutContentInput> = z.object({
  where: z.lazy(() => PageWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => PageUpdateWithoutContentInputSchema),z.lazy(() => PageUncheckedUpdateWithoutContentInputSchema) ]),
}).strict();

export default PageUpdateWithWhereUniqueWithoutContentInputSchema;
