import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PageContentUpdateWithoutPageInputSchema } from './PageContentUpdateWithoutPageInputSchema';
import { PageContentUncheckedUpdateWithoutPageInputSchema } from './PageContentUncheckedUpdateWithoutPageInputSchema';
import { PageContentCreateWithoutPageInputSchema } from './PageContentCreateWithoutPageInputSchema';
import { PageContentUncheckedCreateWithoutPageInputSchema } from './PageContentUncheckedCreateWithoutPageInputSchema';
import { PageContentWhereInputSchema } from './PageContentWhereInputSchema';

export const PageContentUpsertWithoutPageInputSchema: z.ZodType<Prisma.PageContentUpsertWithoutPageInput> = z.object({
  update: z.union([ z.lazy(() => PageContentUpdateWithoutPageInputSchema),z.lazy(() => PageContentUncheckedUpdateWithoutPageInputSchema) ]),
  create: z.union([ z.lazy(() => PageContentCreateWithoutPageInputSchema),z.lazy(() => PageContentUncheckedCreateWithoutPageInputSchema) ]),
  where: z.lazy(() => PageContentWhereInputSchema).optional()
}).strict();

export default PageContentUpsertWithoutPageInputSchema;
