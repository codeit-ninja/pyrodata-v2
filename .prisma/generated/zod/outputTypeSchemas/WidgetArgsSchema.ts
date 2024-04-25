import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { WidgetSelectSchema } from '../inputTypeSchemas/WidgetSelectSchema';
import { WidgetIncludeSchema } from '../inputTypeSchemas/WidgetIncludeSchema';

export const WidgetArgsSchema: z.ZodType<Prisma.WidgetDefaultArgs> = z.object({
  select: z.lazy(() => WidgetSelectSchema).optional(),
  include: z.lazy(() => WidgetIncludeSchema).optional(),
}).strict();

export default WidgetArgsSchema;
