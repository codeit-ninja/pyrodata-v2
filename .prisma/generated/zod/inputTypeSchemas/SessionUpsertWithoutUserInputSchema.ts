import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SessionUpdateWithoutUserInputSchema } from './SessionUpdateWithoutUserInputSchema';
import { SessionUncheckedUpdateWithoutUserInputSchema } from './SessionUncheckedUpdateWithoutUserInputSchema';
import { SessionCreateWithoutUserInputSchema } from './SessionCreateWithoutUserInputSchema';
import { SessionUncheckedCreateWithoutUserInputSchema } from './SessionUncheckedCreateWithoutUserInputSchema';
import { SessionWhereInputSchema } from './SessionWhereInputSchema';

export const SessionUpsertWithoutUserInputSchema: z.ZodType<Prisma.SessionUpsertWithoutUserInput> = z.object({
  update: z.union([ z.lazy(() => SessionUpdateWithoutUserInputSchema),z.lazy(() => SessionUncheckedUpdateWithoutUserInputSchema) ]),
  create: z.union([ z.lazy(() => SessionCreateWithoutUserInputSchema),z.lazy(() => SessionUncheckedCreateWithoutUserInputSchema) ]),
  where: z.lazy(() => SessionWhereInputSchema).optional()
}).strict();

export default SessionUpsertWithoutUserInputSchema;
