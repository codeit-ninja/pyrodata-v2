import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PageCreateWithoutIngredientsInputSchema } from './PageCreateWithoutIngredientsInputSchema';
import { PageUncheckedCreateWithoutIngredientsInputSchema } from './PageUncheckedCreateWithoutIngredientsInputSchema';
import { PageCreateOrConnectWithoutIngredientsInputSchema } from './PageCreateOrConnectWithoutIngredientsInputSchema';
import { PageUpsertWithoutIngredientsInputSchema } from './PageUpsertWithoutIngredientsInputSchema';
import { PageWhereInputSchema } from './PageWhereInputSchema';
import { PageWhereUniqueInputSchema } from './PageWhereUniqueInputSchema';
import { PageUpdateToOneWithWhereWithoutIngredientsInputSchema } from './PageUpdateToOneWithWhereWithoutIngredientsInputSchema';
import { PageUpdateWithoutIngredientsInputSchema } from './PageUpdateWithoutIngredientsInputSchema';
import { PageUncheckedUpdateWithoutIngredientsInputSchema } from './PageUncheckedUpdateWithoutIngredientsInputSchema';

export const PageUpdateOneWithoutIngredientsNestedInputSchema: z.ZodType<Prisma.PageUpdateOneWithoutIngredientsNestedInput> = z.object({
  create: z.union([ z.lazy(() => PageCreateWithoutIngredientsInputSchema),z.lazy(() => PageUncheckedCreateWithoutIngredientsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => PageCreateOrConnectWithoutIngredientsInputSchema).optional(),
  upsert: z.lazy(() => PageUpsertWithoutIngredientsInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => PageWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => PageWhereInputSchema) ]).optional(),
  connect: z.lazy(() => PageWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => PageUpdateToOneWithWhereWithoutIngredientsInputSchema),z.lazy(() => PageUpdateWithoutIngredientsInputSchema),z.lazy(() => PageUncheckedUpdateWithoutIngredientsInputSchema) ]).optional(),
}).strict();

export default PageUpdateOneWithoutIngredientsNestedInputSchema;
