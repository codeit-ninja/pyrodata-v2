import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PageWhereUniqueInputSchema } from './PageWhereUniqueInputSchema';
import { PageUpdateWithoutFeaturedImageInputSchema } from './PageUpdateWithoutFeaturedImageInputSchema';
import { PageUncheckedUpdateWithoutFeaturedImageInputSchema } from './PageUncheckedUpdateWithoutFeaturedImageInputSchema';
import { PageCreateWithoutFeaturedImageInputSchema } from './PageCreateWithoutFeaturedImageInputSchema';
import { PageUncheckedCreateWithoutFeaturedImageInputSchema } from './PageUncheckedCreateWithoutFeaturedImageInputSchema';

export const PageUpsertWithWhereUniqueWithoutFeaturedImageInputSchema: z.ZodType<Prisma.PageUpsertWithWhereUniqueWithoutFeaturedImageInput> = z.object({
  where: z.lazy(() => PageWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => PageUpdateWithoutFeaturedImageInputSchema),z.lazy(() => PageUncheckedUpdateWithoutFeaturedImageInputSchema) ]),
  create: z.union([ z.lazy(() => PageCreateWithoutFeaturedImageInputSchema),z.lazy(() => PageUncheckedCreateWithoutFeaturedImageInputSchema) ]),
}).strict();

export default PageUpsertWithWhereUniqueWithoutFeaturedImageInputSchema;
