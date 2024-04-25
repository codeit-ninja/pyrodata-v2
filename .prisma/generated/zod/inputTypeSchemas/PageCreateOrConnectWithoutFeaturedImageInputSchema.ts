import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PageWhereUniqueInputSchema } from './PageWhereUniqueInputSchema';
import { PageCreateWithoutFeaturedImageInputSchema } from './PageCreateWithoutFeaturedImageInputSchema';
import { PageUncheckedCreateWithoutFeaturedImageInputSchema } from './PageUncheckedCreateWithoutFeaturedImageInputSchema';

export const PageCreateOrConnectWithoutFeaturedImageInputSchema: z.ZodType<Prisma.PageCreateOrConnectWithoutFeaturedImageInput> = z.object({
  where: z.lazy(() => PageWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => PageCreateWithoutFeaturedImageInputSchema),z.lazy(() => PageUncheckedCreateWithoutFeaturedImageInputSchema) ]),
}).strict();

export default PageCreateOrConnectWithoutFeaturedImageInputSchema;
