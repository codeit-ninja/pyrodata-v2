import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PageCreateWithoutContentInputSchema } from './PageCreateWithoutContentInputSchema';
import { PageUncheckedCreateWithoutContentInputSchema } from './PageUncheckedCreateWithoutContentInputSchema';
import { PageCreateOrConnectWithoutContentInputSchema } from './PageCreateOrConnectWithoutContentInputSchema';
import { PageUpsertWithWhereUniqueWithoutContentInputSchema } from './PageUpsertWithWhereUniqueWithoutContentInputSchema';
import { PageCreateManyContentInputEnvelopeSchema } from './PageCreateManyContentInputEnvelopeSchema';
import { PageWhereUniqueInputSchema } from './PageWhereUniqueInputSchema';
import { PageUpdateWithWhereUniqueWithoutContentInputSchema } from './PageUpdateWithWhereUniqueWithoutContentInputSchema';
import { PageUpdateManyWithWhereWithoutContentInputSchema } from './PageUpdateManyWithWhereWithoutContentInputSchema';
import { PageScalarWhereInputSchema } from './PageScalarWhereInputSchema';

export const PageUncheckedUpdateManyWithoutContentNestedInputSchema: z.ZodType<Prisma.PageUncheckedUpdateManyWithoutContentNestedInput> = z.object({
  create: z.union([ z.lazy(() => PageCreateWithoutContentInputSchema),z.lazy(() => PageCreateWithoutContentInputSchema).array(),z.lazy(() => PageUncheckedCreateWithoutContentInputSchema),z.lazy(() => PageUncheckedCreateWithoutContentInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PageCreateOrConnectWithoutContentInputSchema),z.lazy(() => PageCreateOrConnectWithoutContentInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => PageUpsertWithWhereUniqueWithoutContentInputSchema),z.lazy(() => PageUpsertWithWhereUniqueWithoutContentInputSchema).array() ]).optional(),
  createMany: z.lazy(() => PageCreateManyContentInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => PageWhereUniqueInputSchema),z.lazy(() => PageWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => PageWhereUniqueInputSchema),z.lazy(() => PageWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => PageWhereUniqueInputSchema),z.lazy(() => PageWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => PageWhereUniqueInputSchema),z.lazy(() => PageWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => PageUpdateWithWhereUniqueWithoutContentInputSchema),z.lazy(() => PageUpdateWithWhereUniqueWithoutContentInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => PageUpdateManyWithWhereWithoutContentInputSchema),z.lazy(() => PageUpdateManyWithWhereWithoutContentInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => PageScalarWhereInputSchema),z.lazy(() => PageScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default PageUncheckedUpdateManyWithoutContentNestedInputSchema;
