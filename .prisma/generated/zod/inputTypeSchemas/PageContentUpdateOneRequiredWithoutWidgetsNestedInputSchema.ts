import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PageContentCreateWithoutWidgetsInputSchema } from './PageContentCreateWithoutWidgetsInputSchema';
import { PageContentUncheckedCreateWithoutWidgetsInputSchema } from './PageContentUncheckedCreateWithoutWidgetsInputSchema';
import { PageContentCreateOrConnectWithoutWidgetsInputSchema } from './PageContentCreateOrConnectWithoutWidgetsInputSchema';
import { PageContentUpsertWithoutWidgetsInputSchema } from './PageContentUpsertWithoutWidgetsInputSchema';
import { PageContentWhereUniqueInputSchema } from './PageContentWhereUniqueInputSchema';
import { PageContentUpdateToOneWithWhereWithoutWidgetsInputSchema } from './PageContentUpdateToOneWithWhereWithoutWidgetsInputSchema';
import { PageContentUpdateWithoutWidgetsInputSchema } from './PageContentUpdateWithoutWidgetsInputSchema';
import { PageContentUncheckedUpdateWithoutWidgetsInputSchema } from './PageContentUncheckedUpdateWithoutWidgetsInputSchema';

export const PageContentUpdateOneRequiredWithoutWidgetsNestedInputSchema: z.ZodType<Prisma.PageContentUpdateOneRequiredWithoutWidgetsNestedInput> = z.object({
  create: z.union([ z.lazy(() => PageContentCreateWithoutWidgetsInputSchema),z.lazy(() => PageContentUncheckedCreateWithoutWidgetsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => PageContentCreateOrConnectWithoutWidgetsInputSchema).optional(),
  upsert: z.lazy(() => PageContentUpsertWithoutWidgetsInputSchema).optional(),
  connect: z.lazy(() => PageContentWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => PageContentUpdateToOneWithWhereWithoutWidgetsInputSchema),z.lazy(() => PageContentUpdateWithoutWidgetsInputSchema),z.lazy(() => PageContentUncheckedUpdateWithoutWidgetsInputSchema) ]).optional(),
}).strict();

export default PageContentUpdateOneRequiredWithoutWidgetsNestedInputSchema;
