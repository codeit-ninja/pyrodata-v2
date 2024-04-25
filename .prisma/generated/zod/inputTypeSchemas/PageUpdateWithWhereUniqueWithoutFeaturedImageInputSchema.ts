import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PageWhereUniqueInputSchema } from './PageWhereUniqueInputSchema';
import { PageUpdateWithoutFeaturedImageInputSchema } from './PageUpdateWithoutFeaturedImageInputSchema';
import { PageUncheckedUpdateWithoutFeaturedImageInputSchema } from './PageUncheckedUpdateWithoutFeaturedImageInputSchema';

export const PageUpdateWithWhereUniqueWithoutFeaturedImageInputSchema: z.ZodType<Prisma.PageUpdateWithWhereUniqueWithoutFeaturedImageInput> = z.object({
  where: z.lazy(() => PageWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => PageUpdateWithoutFeaturedImageInputSchema),z.lazy(() => PageUncheckedUpdateWithoutFeaturedImageInputSchema) ]),
}).strict();

export default PageUpdateWithWhereUniqueWithoutFeaturedImageInputSchema;
