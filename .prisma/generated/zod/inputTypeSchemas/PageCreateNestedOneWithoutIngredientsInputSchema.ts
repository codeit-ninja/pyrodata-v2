import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PageCreateWithoutIngredientsInputSchema } from './PageCreateWithoutIngredientsInputSchema';
import { PageUncheckedCreateWithoutIngredientsInputSchema } from './PageUncheckedCreateWithoutIngredientsInputSchema';
import { PageCreateOrConnectWithoutIngredientsInputSchema } from './PageCreateOrConnectWithoutIngredientsInputSchema';
import { PageWhereUniqueInputSchema } from './PageWhereUniqueInputSchema';

export const PageCreateNestedOneWithoutIngredientsInputSchema: z.ZodType<Prisma.PageCreateNestedOneWithoutIngredientsInput> = z.object({
  create: z.union([ z.lazy(() => PageCreateWithoutIngredientsInputSchema),z.lazy(() => PageUncheckedCreateWithoutIngredientsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => PageCreateOrConnectWithoutIngredientsInputSchema).optional(),
  connect: z.lazy(() => PageWhereUniqueInputSchema).optional()
}).strict();

export default PageCreateNestedOneWithoutIngredientsInputSchema;
