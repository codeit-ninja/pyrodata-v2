import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PageCreateWithoutUserInputSchema } from './PageCreateWithoutUserInputSchema';
import { PageUncheckedCreateWithoutUserInputSchema } from './PageUncheckedCreateWithoutUserInputSchema';
import { PageCreateOrConnectWithoutUserInputSchema } from './PageCreateOrConnectWithoutUserInputSchema';
import { PageCreateManyUserInputEnvelopeSchema } from './PageCreateManyUserInputEnvelopeSchema';
import { PageWhereUniqueInputSchema } from './PageWhereUniqueInputSchema';

export const PageCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.PageCreateNestedManyWithoutUserInput> = z.object({
  create: z.union([ z.lazy(() => PageCreateWithoutUserInputSchema),z.lazy(() => PageCreateWithoutUserInputSchema).array(),z.lazy(() => PageUncheckedCreateWithoutUserInputSchema),z.lazy(() => PageUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PageCreateOrConnectWithoutUserInputSchema),z.lazy(() => PageCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => PageCreateManyUserInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => PageWhereUniqueInputSchema),z.lazy(() => PageWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default PageCreateNestedManyWithoutUserInputSchema;
