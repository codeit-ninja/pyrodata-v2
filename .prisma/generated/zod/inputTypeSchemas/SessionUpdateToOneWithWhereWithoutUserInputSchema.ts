import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SessionWhereInputSchema } from './SessionWhereInputSchema';
import { SessionUpdateWithoutUserInputSchema } from './SessionUpdateWithoutUserInputSchema';
import { SessionUncheckedUpdateWithoutUserInputSchema } from './SessionUncheckedUpdateWithoutUserInputSchema';

export const SessionUpdateToOneWithWhereWithoutUserInputSchema: z.ZodType<Prisma.SessionUpdateToOneWithWhereWithoutUserInput> = z.object({
  where: z.lazy(() => SessionWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => SessionUpdateWithoutUserInputSchema),z.lazy(() => SessionUncheckedUpdateWithoutUserInputSchema) ]),
}).strict();

export default SessionUpdateToOneWithWhereWithoutUserInputSchema;
