import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SessionCreateWithoutUserInputSchema } from './SessionCreateWithoutUserInputSchema';
import { SessionUncheckedCreateWithoutUserInputSchema } from './SessionUncheckedCreateWithoutUserInputSchema';
import { SessionCreateOrConnectWithoutUserInputSchema } from './SessionCreateOrConnectWithoutUserInputSchema';
import { SessionWhereUniqueInputSchema } from './SessionWhereUniqueInputSchema';

export const SessionCreateNestedOneWithoutUserInputSchema: z.ZodType<Prisma.SessionCreateNestedOneWithoutUserInput> = z.object({
  create: z.union([ z.lazy(() => SessionCreateWithoutUserInputSchema),z.lazy(() => SessionUncheckedCreateWithoutUserInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => SessionCreateOrConnectWithoutUserInputSchema).optional(),
  connect: z.lazy(() => SessionWhereUniqueInputSchema).optional()
}).strict();

export default SessionCreateNestedOneWithoutUserInputSchema;
