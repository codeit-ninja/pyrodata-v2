import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PageCreateWithoutCategoryInputSchema } from './PageCreateWithoutCategoryInputSchema';
import { PageUncheckedCreateWithoutCategoryInputSchema } from './PageUncheckedCreateWithoutCategoryInputSchema';
import { PageCreateOrConnectWithoutCategoryInputSchema } from './PageCreateOrConnectWithoutCategoryInputSchema';
import { PageCreateManyCategoryInputEnvelopeSchema } from './PageCreateManyCategoryInputEnvelopeSchema';
import { PageWhereUniqueInputSchema } from './PageWhereUniqueInputSchema';

export const PageUncheckedCreateNestedManyWithoutCategoryInputSchema: z.ZodType<Prisma.PageUncheckedCreateNestedManyWithoutCategoryInput> = z.object({
  create: z.union([ z.lazy(() => PageCreateWithoutCategoryInputSchema),z.lazy(() => PageCreateWithoutCategoryInputSchema).array(),z.lazy(() => PageUncheckedCreateWithoutCategoryInputSchema),z.lazy(() => PageUncheckedCreateWithoutCategoryInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PageCreateOrConnectWithoutCategoryInputSchema),z.lazy(() => PageCreateOrConnectWithoutCategoryInputSchema).array() ]).optional(),
  createMany: z.lazy(() => PageCreateManyCategoryInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => PageWhereUniqueInputSchema),z.lazy(() => PageWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default PageUncheckedCreateNestedManyWithoutCategoryInputSchema;
