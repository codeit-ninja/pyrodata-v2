import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PageContentCreateWithoutPageInputSchema } from './PageContentCreateWithoutPageInputSchema';
import { PageContentUncheckedCreateWithoutPageInputSchema } from './PageContentUncheckedCreateWithoutPageInputSchema';
import { PageContentCreateOrConnectWithoutPageInputSchema } from './PageContentCreateOrConnectWithoutPageInputSchema';
import { PageContentUpsertWithoutPageInputSchema } from './PageContentUpsertWithoutPageInputSchema';
import { PageContentWhereUniqueInputSchema } from './PageContentWhereUniqueInputSchema';
import { PageContentUpdateToOneWithWhereWithoutPageInputSchema } from './PageContentUpdateToOneWithWhereWithoutPageInputSchema';
import { PageContentUpdateWithoutPageInputSchema } from './PageContentUpdateWithoutPageInputSchema';
import { PageContentUncheckedUpdateWithoutPageInputSchema } from './PageContentUncheckedUpdateWithoutPageInputSchema';

export const PageContentUpdateOneRequiredWithoutPageNestedInputSchema: z.ZodType<Prisma.PageContentUpdateOneRequiredWithoutPageNestedInput> = z.object({
  create: z.union([ z.lazy(() => PageContentCreateWithoutPageInputSchema),z.lazy(() => PageContentUncheckedCreateWithoutPageInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => PageContentCreateOrConnectWithoutPageInputSchema).optional(),
  upsert: z.lazy(() => PageContentUpsertWithoutPageInputSchema).optional(),
  connect: z.lazy(() => PageContentWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => PageContentUpdateToOneWithWhereWithoutPageInputSchema),z.lazy(() => PageContentUpdateWithoutPageInputSchema),z.lazy(() => PageContentUncheckedUpdateWithoutPageInputSchema) ]).optional(),
}).strict();

export default PageContentUpdateOneRequiredWithoutPageNestedInputSchema;
