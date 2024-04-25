import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CompositionCategoryCreateWithoutCompositionsInputSchema } from './CompositionCategoryCreateWithoutCompositionsInputSchema';
import { CompositionCategoryUncheckedCreateWithoutCompositionsInputSchema } from './CompositionCategoryUncheckedCreateWithoutCompositionsInputSchema';
import { CompositionCategoryCreateOrConnectWithoutCompositionsInputSchema } from './CompositionCategoryCreateOrConnectWithoutCompositionsInputSchema';
import { CompositionCategoryUpsertWithWhereUniqueWithoutCompositionsInputSchema } from './CompositionCategoryUpsertWithWhereUniqueWithoutCompositionsInputSchema';
import { CompositionCategoryWhereUniqueInputSchema } from './CompositionCategoryWhereUniqueInputSchema';
import { CompositionCategoryUpdateWithWhereUniqueWithoutCompositionsInputSchema } from './CompositionCategoryUpdateWithWhereUniqueWithoutCompositionsInputSchema';
import { CompositionCategoryUpdateManyWithWhereWithoutCompositionsInputSchema } from './CompositionCategoryUpdateManyWithWhereWithoutCompositionsInputSchema';
import { CompositionCategoryScalarWhereInputSchema } from './CompositionCategoryScalarWhereInputSchema';

export const CompositionCategoryUncheckedUpdateManyWithoutCompositionsNestedInputSchema: z.ZodType<Prisma.CompositionCategoryUncheckedUpdateManyWithoutCompositionsNestedInput> = z.object({
  create: z.union([ z.lazy(() => CompositionCategoryCreateWithoutCompositionsInputSchema),z.lazy(() => CompositionCategoryCreateWithoutCompositionsInputSchema).array(),z.lazy(() => CompositionCategoryUncheckedCreateWithoutCompositionsInputSchema),z.lazy(() => CompositionCategoryUncheckedCreateWithoutCompositionsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => CompositionCategoryCreateOrConnectWithoutCompositionsInputSchema),z.lazy(() => CompositionCategoryCreateOrConnectWithoutCompositionsInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => CompositionCategoryUpsertWithWhereUniqueWithoutCompositionsInputSchema),z.lazy(() => CompositionCategoryUpsertWithWhereUniqueWithoutCompositionsInputSchema).array() ]).optional(),
  set: z.union([ z.lazy(() => CompositionCategoryWhereUniqueInputSchema),z.lazy(() => CompositionCategoryWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => CompositionCategoryWhereUniqueInputSchema),z.lazy(() => CompositionCategoryWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => CompositionCategoryWhereUniqueInputSchema),z.lazy(() => CompositionCategoryWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => CompositionCategoryWhereUniqueInputSchema),z.lazy(() => CompositionCategoryWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => CompositionCategoryUpdateWithWhereUniqueWithoutCompositionsInputSchema),z.lazy(() => CompositionCategoryUpdateWithWhereUniqueWithoutCompositionsInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => CompositionCategoryUpdateManyWithWhereWithoutCompositionsInputSchema),z.lazy(() => CompositionCategoryUpdateManyWithWhereWithoutCompositionsInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => CompositionCategoryScalarWhereInputSchema),z.lazy(() => CompositionCategoryScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default CompositionCategoryUncheckedUpdateManyWithoutCompositionsNestedInputSchema;
