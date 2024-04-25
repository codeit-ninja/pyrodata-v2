import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PageContentUpdateWithoutWidgetsInputSchema } from './PageContentUpdateWithoutWidgetsInputSchema';
import { PageContentUncheckedUpdateWithoutWidgetsInputSchema } from './PageContentUncheckedUpdateWithoutWidgetsInputSchema';
import { PageContentCreateWithoutWidgetsInputSchema } from './PageContentCreateWithoutWidgetsInputSchema';
import { PageContentUncheckedCreateWithoutWidgetsInputSchema } from './PageContentUncheckedCreateWithoutWidgetsInputSchema';
import { PageContentWhereInputSchema } from './PageContentWhereInputSchema';

export const PageContentUpsertWithoutWidgetsInputSchema: z.ZodType<Prisma.PageContentUpsertWithoutWidgetsInput> = z.object({
  update: z.union([ z.lazy(() => PageContentUpdateWithoutWidgetsInputSchema),z.lazy(() => PageContentUncheckedUpdateWithoutWidgetsInputSchema) ]),
  create: z.union([ z.lazy(() => PageContentCreateWithoutWidgetsInputSchema),z.lazy(() => PageContentUncheckedCreateWithoutWidgetsInputSchema) ]),
  where: z.lazy(() => PageContentWhereInputSchema).optional()
}).strict();

export default PageContentUpsertWithoutWidgetsInputSchema;
