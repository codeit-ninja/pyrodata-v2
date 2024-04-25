import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CompositionCreateWithoutCategoriesInputSchema } from './CompositionCreateWithoutCategoriesInputSchema';
import { CompositionUncheckedCreateWithoutCategoriesInputSchema } from './CompositionUncheckedCreateWithoutCategoriesInputSchema';
import { CompositionCreateOrConnectWithoutCategoriesInputSchema } from './CompositionCreateOrConnectWithoutCategoriesInputSchema';
import { CompositionUpsertWithWhereUniqueWithoutCategoriesInputSchema } from './CompositionUpsertWithWhereUniqueWithoutCategoriesInputSchema';
import { CompositionWhereUniqueInputSchema } from './CompositionWhereUniqueInputSchema';
import { CompositionUpdateWithWhereUniqueWithoutCategoriesInputSchema } from './CompositionUpdateWithWhereUniqueWithoutCategoriesInputSchema';
import { CompositionUpdateManyWithWhereWithoutCategoriesInputSchema } from './CompositionUpdateManyWithWhereWithoutCategoriesInputSchema';
import { CompositionScalarWhereInputSchema } from './CompositionScalarWhereInputSchema';

export const CompositionUncheckedUpdateManyWithoutCategoriesNestedInputSchema: z.ZodType<Prisma.CompositionUncheckedUpdateManyWithoutCategoriesNestedInput> = z.object({
  create: z.union([ z.lazy(() => CompositionCreateWithoutCategoriesInputSchema),z.lazy(() => CompositionCreateWithoutCategoriesInputSchema).array(),z.lazy(() => CompositionUncheckedCreateWithoutCategoriesInputSchema),z.lazy(() => CompositionUncheckedCreateWithoutCategoriesInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => CompositionCreateOrConnectWithoutCategoriesInputSchema),z.lazy(() => CompositionCreateOrConnectWithoutCategoriesInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => CompositionUpsertWithWhereUniqueWithoutCategoriesInputSchema),z.lazy(() => CompositionUpsertWithWhereUniqueWithoutCategoriesInputSchema).array() ]).optional(),
  set: z.union([ z.lazy(() => CompositionWhereUniqueInputSchema),z.lazy(() => CompositionWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => CompositionWhereUniqueInputSchema),z.lazy(() => CompositionWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => CompositionWhereUniqueInputSchema),z.lazy(() => CompositionWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => CompositionWhereUniqueInputSchema),z.lazy(() => CompositionWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => CompositionUpdateWithWhereUniqueWithoutCategoriesInputSchema),z.lazy(() => CompositionUpdateWithWhereUniqueWithoutCategoriesInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => CompositionUpdateManyWithWhereWithoutCategoriesInputSchema),z.lazy(() => CompositionUpdateManyWithWhereWithoutCategoriesInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => CompositionScalarWhereInputSchema),z.lazy(() => CompositionScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default CompositionUncheckedUpdateManyWithoutCategoriesNestedInputSchema;
