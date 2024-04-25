import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PageContentWhereInputSchema } from './PageContentWhereInputSchema';
import { PageContentUpdateWithoutPageInputSchema } from './PageContentUpdateWithoutPageInputSchema';
import { PageContentUncheckedUpdateWithoutPageInputSchema } from './PageContentUncheckedUpdateWithoutPageInputSchema';

export const PageContentUpdateToOneWithWhereWithoutPageInputSchema: z.ZodType<Prisma.PageContentUpdateToOneWithWhereWithoutPageInput> = z.object({
  where: z.lazy(() => PageContentWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => PageContentUpdateWithoutPageInputSchema),z.lazy(() => PageContentUncheckedUpdateWithoutPageInputSchema) ]),
}).strict();

export default PageContentUpdateToOneWithWhereWithoutPageInputSchema;
