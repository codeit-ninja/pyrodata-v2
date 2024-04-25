import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PageContentWhereInputSchema } from './PageContentWhereInputSchema';
import { PageContentUpdateWithoutWidgetsInputSchema } from './PageContentUpdateWithoutWidgetsInputSchema';
import { PageContentUncheckedUpdateWithoutWidgetsInputSchema } from './PageContentUncheckedUpdateWithoutWidgetsInputSchema';

export const PageContentUpdateToOneWithWhereWithoutWidgetsInputSchema: z.ZodType<Prisma.PageContentUpdateToOneWithWhereWithoutWidgetsInput> = z.object({
  where: z.lazy(() => PageContentWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => PageContentUpdateWithoutWidgetsInputSchema),z.lazy(() => PageContentUncheckedUpdateWithoutWidgetsInputSchema) ]),
}).strict();

export default PageContentUpdateToOneWithWhereWithoutWidgetsInputSchema;
