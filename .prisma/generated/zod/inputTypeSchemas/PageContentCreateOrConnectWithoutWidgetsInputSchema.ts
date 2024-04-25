import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PageContentWhereUniqueInputSchema } from './PageContentWhereUniqueInputSchema';
import { PageContentCreateWithoutWidgetsInputSchema } from './PageContentCreateWithoutWidgetsInputSchema';
import { PageContentUncheckedCreateWithoutWidgetsInputSchema } from './PageContentUncheckedCreateWithoutWidgetsInputSchema';

export const PageContentCreateOrConnectWithoutWidgetsInputSchema: z.ZodType<Prisma.PageContentCreateOrConnectWithoutWidgetsInput> = z.object({
  where: z.lazy(() => PageContentWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => PageContentCreateWithoutWidgetsInputSchema),z.lazy(() => PageContentUncheckedCreateWithoutWidgetsInputSchema) ]),
}).strict();

export default PageContentCreateOrConnectWithoutWidgetsInputSchema;
