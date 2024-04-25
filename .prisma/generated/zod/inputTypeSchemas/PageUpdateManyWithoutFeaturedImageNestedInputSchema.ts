import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PageCreateWithoutFeaturedImageInputSchema } from './PageCreateWithoutFeaturedImageInputSchema';
import { PageUncheckedCreateWithoutFeaturedImageInputSchema } from './PageUncheckedCreateWithoutFeaturedImageInputSchema';
import { PageCreateOrConnectWithoutFeaturedImageInputSchema } from './PageCreateOrConnectWithoutFeaturedImageInputSchema';
import { PageUpsertWithWhereUniqueWithoutFeaturedImageInputSchema } from './PageUpsertWithWhereUniqueWithoutFeaturedImageInputSchema';
import { PageCreateManyFeaturedImageInputEnvelopeSchema } from './PageCreateManyFeaturedImageInputEnvelopeSchema';
import { PageWhereUniqueInputSchema } from './PageWhereUniqueInputSchema';
import { PageUpdateWithWhereUniqueWithoutFeaturedImageInputSchema } from './PageUpdateWithWhereUniqueWithoutFeaturedImageInputSchema';
import { PageUpdateManyWithWhereWithoutFeaturedImageInputSchema } from './PageUpdateManyWithWhereWithoutFeaturedImageInputSchema';
import { PageScalarWhereInputSchema } from './PageScalarWhereInputSchema';

export const PageUpdateManyWithoutFeaturedImageNestedInputSchema: z.ZodType<Prisma.PageUpdateManyWithoutFeaturedImageNestedInput> = z.object({
  create: z.union([ z.lazy(() => PageCreateWithoutFeaturedImageInputSchema),z.lazy(() => PageCreateWithoutFeaturedImageInputSchema).array(),z.lazy(() => PageUncheckedCreateWithoutFeaturedImageInputSchema),z.lazy(() => PageUncheckedCreateWithoutFeaturedImageInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PageCreateOrConnectWithoutFeaturedImageInputSchema),z.lazy(() => PageCreateOrConnectWithoutFeaturedImageInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => PageUpsertWithWhereUniqueWithoutFeaturedImageInputSchema),z.lazy(() => PageUpsertWithWhereUniqueWithoutFeaturedImageInputSchema).array() ]).optional(),
  createMany: z.lazy(() => PageCreateManyFeaturedImageInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => PageWhereUniqueInputSchema),z.lazy(() => PageWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => PageWhereUniqueInputSchema),z.lazy(() => PageWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => PageWhereUniqueInputSchema),z.lazy(() => PageWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => PageWhereUniqueInputSchema),z.lazy(() => PageWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => PageUpdateWithWhereUniqueWithoutFeaturedImageInputSchema),z.lazy(() => PageUpdateWithWhereUniqueWithoutFeaturedImageInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => PageUpdateManyWithWhereWithoutFeaturedImageInputSchema),z.lazy(() => PageUpdateManyWithWhereWithoutFeaturedImageInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => PageScalarWhereInputSchema),z.lazy(() => PageScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default PageUpdateManyWithoutFeaturedImageNestedInputSchema;
