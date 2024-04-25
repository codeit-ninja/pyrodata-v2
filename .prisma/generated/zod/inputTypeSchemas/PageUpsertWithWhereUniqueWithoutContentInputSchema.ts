import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PageWhereUniqueInputSchema } from './PageWhereUniqueInputSchema';
import { PageUpdateWithoutContentInputSchema } from './PageUpdateWithoutContentInputSchema';
import { PageUncheckedUpdateWithoutContentInputSchema } from './PageUncheckedUpdateWithoutContentInputSchema';
import { PageCreateWithoutContentInputSchema } from './PageCreateWithoutContentInputSchema';
import { PageUncheckedCreateWithoutContentInputSchema } from './PageUncheckedCreateWithoutContentInputSchema';

export const PageUpsertWithWhereUniqueWithoutContentInputSchema: z.ZodType<Prisma.PageUpsertWithWhereUniqueWithoutContentInput> = z.object({
  where: z.lazy(() => PageWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => PageUpdateWithoutContentInputSchema),z.lazy(() => PageUncheckedUpdateWithoutContentInputSchema) ]),
  create: z.union([ z.lazy(() => PageCreateWithoutContentInputSchema),z.lazy(() => PageUncheckedCreateWithoutContentInputSchema) ]),
}).strict();

export default PageUpsertWithWhereUniqueWithoutContentInputSchema;
