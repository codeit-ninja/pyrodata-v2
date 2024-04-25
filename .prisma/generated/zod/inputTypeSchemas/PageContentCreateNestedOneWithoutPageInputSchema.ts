import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PageContentCreateWithoutPageInputSchema } from './PageContentCreateWithoutPageInputSchema';
import { PageContentUncheckedCreateWithoutPageInputSchema } from './PageContentUncheckedCreateWithoutPageInputSchema';
import { PageContentCreateOrConnectWithoutPageInputSchema } from './PageContentCreateOrConnectWithoutPageInputSchema';
import { PageContentWhereUniqueInputSchema } from './PageContentWhereUniqueInputSchema';

export const PageContentCreateNestedOneWithoutPageInputSchema: z.ZodType<Prisma.PageContentCreateNestedOneWithoutPageInput> = z.object({
  create: z.union([ z.lazy(() => PageContentCreateWithoutPageInputSchema),z.lazy(() => PageContentUncheckedCreateWithoutPageInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => PageContentCreateOrConnectWithoutPageInputSchema).optional(),
  connect: z.lazy(() => PageContentWhereUniqueInputSchema).optional()
}).strict();

export default PageContentCreateNestedOneWithoutPageInputSchema;
