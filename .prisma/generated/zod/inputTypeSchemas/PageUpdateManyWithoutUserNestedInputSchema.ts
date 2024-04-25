import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PageCreateWithoutUserInputSchema } from './PageCreateWithoutUserInputSchema';
import { PageUncheckedCreateWithoutUserInputSchema } from './PageUncheckedCreateWithoutUserInputSchema';
import { PageCreateOrConnectWithoutUserInputSchema } from './PageCreateOrConnectWithoutUserInputSchema';
import { PageUpsertWithWhereUniqueWithoutUserInputSchema } from './PageUpsertWithWhereUniqueWithoutUserInputSchema';
import { PageCreateManyUserInputEnvelopeSchema } from './PageCreateManyUserInputEnvelopeSchema';
import { PageWhereUniqueInputSchema } from './PageWhereUniqueInputSchema';
import { PageUpdateWithWhereUniqueWithoutUserInputSchema } from './PageUpdateWithWhereUniqueWithoutUserInputSchema';
import { PageUpdateManyWithWhereWithoutUserInputSchema } from './PageUpdateManyWithWhereWithoutUserInputSchema';
import { PageScalarWhereInputSchema } from './PageScalarWhereInputSchema';

export const PageUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.PageUpdateManyWithoutUserNestedInput> = z.object({
  create: z.union([ z.lazy(() => PageCreateWithoutUserInputSchema),z.lazy(() => PageCreateWithoutUserInputSchema).array(),z.lazy(() => PageUncheckedCreateWithoutUserInputSchema),z.lazy(() => PageUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PageCreateOrConnectWithoutUserInputSchema),z.lazy(() => PageCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => PageUpsertWithWhereUniqueWithoutUserInputSchema),z.lazy(() => PageUpsertWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => PageCreateManyUserInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => PageWhereUniqueInputSchema),z.lazy(() => PageWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => PageWhereUniqueInputSchema),z.lazy(() => PageWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => PageWhereUniqueInputSchema),z.lazy(() => PageWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => PageWhereUniqueInputSchema),z.lazy(() => PageWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => PageUpdateWithWhereUniqueWithoutUserInputSchema),z.lazy(() => PageUpdateWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => PageUpdateManyWithWhereWithoutUserInputSchema),z.lazy(() => PageUpdateManyWithWhereWithoutUserInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => PageScalarWhereInputSchema),z.lazy(() => PageScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default PageUpdateManyWithoutUserNestedInputSchema;
