import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PageWhereUniqueInputSchema } from './PageWhereUniqueInputSchema';
import { PageCreateWithoutUserInputSchema } from './PageCreateWithoutUserInputSchema';
import { PageUncheckedCreateWithoutUserInputSchema } from './PageUncheckedCreateWithoutUserInputSchema';

export const PageCreateOrConnectWithoutUserInputSchema: z.ZodType<Prisma.PageCreateOrConnectWithoutUserInput> = z.object({
  where: z.lazy(() => PageWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => PageCreateWithoutUserInputSchema),z.lazy(() => PageUncheckedCreateWithoutUserInputSchema) ]),
}).strict();

export default PageCreateOrConnectWithoutUserInputSchema;
