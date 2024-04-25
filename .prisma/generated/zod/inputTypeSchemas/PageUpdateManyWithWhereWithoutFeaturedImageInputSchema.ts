import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PageScalarWhereInputSchema } from './PageScalarWhereInputSchema';
import { PageUpdateManyMutationInputSchema } from './PageUpdateManyMutationInputSchema';
import { PageUncheckedUpdateManyWithoutFeaturedImageInputSchema } from './PageUncheckedUpdateManyWithoutFeaturedImageInputSchema';

export const PageUpdateManyWithWhereWithoutFeaturedImageInputSchema: z.ZodType<Prisma.PageUpdateManyWithWhereWithoutFeaturedImageInput> = z.object({
  where: z.lazy(() => PageScalarWhereInputSchema),
  data: z.union([ z.lazy(() => PageUpdateManyMutationInputSchema),z.lazy(() => PageUncheckedUpdateManyWithoutFeaturedImageInputSchema) ]),
}).strict();

export default PageUpdateManyWithWhereWithoutFeaturedImageInputSchema;
