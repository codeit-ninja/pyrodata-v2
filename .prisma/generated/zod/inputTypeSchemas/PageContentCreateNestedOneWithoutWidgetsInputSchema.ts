import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PageContentCreateWithoutWidgetsInputSchema } from './PageContentCreateWithoutWidgetsInputSchema';
import { PageContentUncheckedCreateWithoutWidgetsInputSchema } from './PageContentUncheckedCreateWithoutWidgetsInputSchema';
import { PageContentCreateOrConnectWithoutWidgetsInputSchema } from './PageContentCreateOrConnectWithoutWidgetsInputSchema';
import { PageContentWhereUniqueInputSchema } from './PageContentWhereUniqueInputSchema';

export const PageContentCreateNestedOneWithoutWidgetsInputSchema: z.ZodType<Prisma.PageContentCreateNestedOneWithoutWidgetsInput> = z.object({
  create: z.union([ z.lazy(() => PageContentCreateWithoutWidgetsInputSchema),z.lazy(() => PageContentUncheckedCreateWithoutWidgetsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => PageContentCreateOrConnectWithoutWidgetsInputSchema).optional(),
  connect: z.lazy(() => PageContentWhereUniqueInputSchema).optional()
}).strict();

export default PageContentCreateNestedOneWithoutWidgetsInputSchema;
