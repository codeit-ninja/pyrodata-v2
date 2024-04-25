import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const EditorWidgetOrderByWithRelationInputSchema: z.ZodType<Prisma.EditorWidgetOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default EditorWidgetOrderByWithRelationInputSchema;
