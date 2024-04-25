import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PageCreateWithoutContentInputSchema } from './PageCreateWithoutContentInputSchema';
import { PageUncheckedCreateWithoutContentInputSchema } from './PageUncheckedCreateWithoutContentInputSchema';
import { PageCreateOrConnectWithoutContentInputSchema } from './PageCreateOrConnectWithoutContentInputSchema';
import { PageCreateManyContentInputEnvelopeSchema } from './PageCreateManyContentInputEnvelopeSchema';
import { PageWhereUniqueInputSchema } from './PageWhereUniqueInputSchema';

export const PageUncheckedCreateNestedManyWithoutContentInputSchema: z.ZodType<Prisma.PageUncheckedCreateNestedManyWithoutContentInput> = z.object({
  create: z.union([ z.lazy(() => PageCreateWithoutContentInputSchema),z.lazy(() => PageCreateWithoutContentInputSchema).array(),z.lazy(() => PageUncheckedCreateWithoutContentInputSchema),z.lazy(() => PageUncheckedCreateWithoutContentInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PageCreateOrConnectWithoutContentInputSchema),z.lazy(() => PageCreateOrConnectWithoutContentInputSchema).array() ]).optional(),
  createMany: z.lazy(() => PageCreateManyContentInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => PageWhereUniqueInputSchema),z.lazy(() => PageWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default PageUncheckedCreateNestedManyWithoutContentInputSchema;
