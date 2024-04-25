import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SessionCreateWithoutUserInputSchema } from './SessionCreateWithoutUserInputSchema';
import { SessionUncheckedCreateWithoutUserInputSchema } from './SessionUncheckedCreateWithoutUserInputSchema';
import { SessionCreateOrConnectWithoutUserInputSchema } from './SessionCreateOrConnectWithoutUserInputSchema';
import { SessionUpsertWithoutUserInputSchema } from './SessionUpsertWithoutUserInputSchema';
import { SessionWhereInputSchema } from './SessionWhereInputSchema';
import { SessionWhereUniqueInputSchema } from './SessionWhereUniqueInputSchema';
import { SessionUpdateToOneWithWhereWithoutUserInputSchema } from './SessionUpdateToOneWithWhereWithoutUserInputSchema';
import { SessionUpdateWithoutUserInputSchema } from './SessionUpdateWithoutUserInputSchema';
import { SessionUncheckedUpdateWithoutUserInputSchema } from './SessionUncheckedUpdateWithoutUserInputSchema';

export const SessionUncheckedUpdateOneWithoutUserNestedInputSchema: z.ZodType<Prisma.SessionUncheckedUpdateOneWithoutUserNestedInput> = z.object({
  create: z.union([ z.lazy(() => SessionCreateWithoutUserInputSchema),z.lazy(() => SessionUncheckedCreateWithoutUserInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => SessionCreateOrConnectWithoutUserInputSchema).optional(),
  upsert: z.lazy(() => SessionUpsertWithoutUserInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => SessionWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => SessionWhereInputSchema) ]).optional(),
  connect: z.lazy(() => SessionWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => SessionUpdateToOneWithWhereWithoutUserInputSchema),z.lazy(() => SessionUpdateWithoutUserInputSchema),z.lazy(() => SessionUncheckedUpdateWithoutUserInputSchema) ]).optional(),
}).strict();

export default SessionUncheckedUpdateOneWithoutUserNestedInputSchema;
