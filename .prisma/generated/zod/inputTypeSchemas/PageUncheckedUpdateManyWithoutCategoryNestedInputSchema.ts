import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PageCreateWithoutCategoryInputSchema } from './PageCreateWithoutCategoryInputSchema';
import { PageUncheckedCreateWithoutCategoryInputSchema } from './PageUncheckedCreateWithoutCategoryInputSchema';
import { PageCreateOrConnectWithoutCategoryInputSchema } from './PageCreateOrConnectWithoutCategoryInputSchema';
import { PageUpsertWithWhereUniqueWithoutCategoryInputSchema } from './PageUpsertWithWhereUniqueWithoutCategoryInputSchema';
import { PageCreateManyCategoryInputEnvelopeSchema } from './PageCreateManyCategoryInputEnvelopeSchema';
import { PageWhereUniqueInputSchema } from './PageWhereUniqueInputSchema';
import { PageUpdateWithWhereUniqueWithoutCategoryInputSchema } from './PageUpdateWithWhereUniqueWithoutCategoryInputSchema';
import { PageUpdateManyWithWhereWithoutCategoryInputSchema } from './PageUpdateManyWithWhereWithoutCategoryInputSchema';
import { PageScalarWhereInputSchema } from './PageScalarWhereInputSchema';

export const PageUncheckedUpdateManyWithoutCategoryNestedInputSchema: z.ZodType<Prisma.PageUncheckedUpdateManyWithoutCategoryNestedInput> = z.object({
  create: z.union([ z.lazy(() => PageCreateWithoutCategoryInputSchema),z.lazy(() => PageCreateWithoutCategoryInputSchema).array(),z.lazy(() => PageUncheckedCreateWithoutCategoryInputSchema),z.lazy(() => PageUncheckedCreateWithoutCategoryInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PageCreateOrConnectWithoutCategoryInputSchema),z.lazy(() => PageCreateOrConnectWithoutCategoryInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => PageUpsertWithWhereUniqueWithoutCategoryInputSchema),z.lazy(() => PageUpsertWithWhereUniqueWithoutCategoryInputSchema).array() ]).optional(),
  createMany: z.lazy(() => PageCreateManyCategoryInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => PageWhereUniqueInputSchema),z.lazy(() => PageWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => PageWhereUniqueInputSchema),z.lazy(() => PageWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => PageWhereUniqueInputSchema),z.lazy(() => PageWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => PageWhereUniqueInputSchema),z.lazy(() => PageWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => PageUpdateWithWhereUniqueWithoutCategoryInputSchema),z.lazy(() => PageUpdateWithWhereUniqueWithoutCategoryInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => PageUpdateManyWithWhereWithoutCategoryInputSchema),z.lazy(() => PageUpdateManyWithWhereWithoutCategoryInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => PageScalarWhereInputSchema),z.lazy(() => PageScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default PageUncheckedUpdateManyWithoutCategoryNestedInputSchema;
