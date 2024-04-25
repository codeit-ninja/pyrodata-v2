import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PageWhereUniqueInputSchema } from './PageWhereUniqueInputSchema';
import { PageCreateWithoutContentInputSchema } from './PageCreateWithoutContentInputSchema';
import { PageUncheckedCreateWithoutContentInputSchema } from './PageUncheckedCreateWithoutContentInputSchema';

export const PageCreateOrConnectWithoutContentInputSchema: z.ZodType<Prisma.PageCreateOrConnectWithoutContentInput> = z.object({
  where: z.lazy(() => PageWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => PageCreateWithoutContentInputSchema),z.lazy(() => PageUncheckedCreateWithoutContentInputSchema) ]),
}).strict();

export default PageCreateOrConnectWithoutContentInputSchema;
