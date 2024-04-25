import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PageContentCreateNestedOneWithoutWidgetsInputSchema } from './PageContentCreateNestedOneWithoutWidgetsInputSchema';

export const WidgetCreateWithoutImageWidgetInputSchema: z.ZodType<Prisma.WidgetCreateWithoutImageWidgetInput> = z.object({
  id: z.string().cuid().optional(),
  pageContent: z.lazy(() => PageContentCreateNestedOneWithoutWidgetsInputSchema)
}).strict();

export default WidgetCreateWithoutImageWidgetInputSchema;
