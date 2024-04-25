import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PageWhereUniqueInputSchema } from './PageWhereUniqueInputSchema';
import { PageUpdateWithoutUserInputSchema } from './PageUpdateWithoutUserInputSchema';
import { PageUncheckedUpdateWithoutUserInputSchema } from './PageUncheckedUpdateWithoutUserInputSchema';
import { PageCreateWithoutUserInputSchema } from './PageCreateWithoutUserInputSchema';
import { PageUncheckedCreateWithoutUserInputSchema } from './PageUncheckedCreateWithoutUserInputSchema';

export const PageUpsertWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.PageUpsertWithWhereUniqueWithoutUserInput> = z.object({
  where: z.lazy(() => PageWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => PageUpdateWithoutUserInputSchema),z.lazy(() => PageUncheckedUpdateWithoutUserInputSchema) ]),
  create: z.union([ z.lazy(() => PageCreateWithoutUserInputSchema),z.lazy(() => PageUncheckedCreateWithoutUserInputSchema) ]),
}).strict();

export default PageUpsertWithWhereUniqueWithoutUserInputSchema;
