import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PageContentWhereUniqueInputSchema } from './PageContentWhereUniqueInputSchema';
import { PageContentCreateWithoutPageInputSchema } from './PageContentCreateWithoutPageInputSchema';
import { PageContentUncheckedCreateWithoutPageInputSchema } from './PageContentUncheckedCreateWithoutPageInputSchema';

export const PageContentCreateOrConnectWithoutPageInputSchema: z.ZodType<Prisma.PageContentCreateOrConnectWithoutPageInput> = z.object({
  where: z.lazy(() => PageContentWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => PageContentCreateWithoutPageInputSchema),z.lazy(() => PageContentUncheckedCreateWithoutPageInputSchema) ]),
}).strict();

export default PageContentCreateOrConnectWithoutPageInputSchema;
