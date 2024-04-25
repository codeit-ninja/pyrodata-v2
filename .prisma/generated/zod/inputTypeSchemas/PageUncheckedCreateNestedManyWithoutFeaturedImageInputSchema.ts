import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PageCreateWithoutFeaturedImageInputSchema } from './PageCreateWithoutFeaturedImageInputSchema';
import { PageUncheckedCreateWithoutFeaturedImageInputSchema } from './PageUncheckedCreateWithoutFeaturedImageInputSchema';
import { PageCreateOrConnectWithoutFeaturedImageInputSchema } from './PageCreateOrConnectWithoutFeaturedImageInputSchema';
import { PageCreateManyFeaturedImageInputEnvelopeSchema } from './PageCreateManyFeaturedImageInputEnvelopeSchema';
import { PageWhereUniqueInputSchema } from './PageWhereUniqueInputSchema';

export const PageUncheckedCreateNestedManyWithoutFeaturedImageInputSchema: z.ZodType<Prisma.PageUncheckedCreateNestedManyWithoutFeaturedImageInput> = z.object({
  create: z.union([ z.lazy(() => PageCreateWithoutFeaturedImageInputSchema),z.lazy(() => PageCreateWithoutFeaturedImageInputSchema).array(),z.lazy(() => PageUncheckedCreateWithoutFeaturedImageInputSchema),z.lazy(() => PageUncheckedCreateWithoutFeaturedImageInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PageCreateOrConnectWithoutFeaturedImageInputSchema),z.lazy(() => PageCreateOrConnectWithoutFeaturedImageInputSchema).array() ]).optional(),
  createMany: z.lazy(() => PageCreateManyFeaturedImageInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => PageWhereUniqueInputSchema),z.lazy(() => PageWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default PageUncheckedCreateNestedManyWithoutFeaturedImageInputSchema;
