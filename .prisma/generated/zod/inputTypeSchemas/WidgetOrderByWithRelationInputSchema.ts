import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { PageContentOrderByWithRelationInputSchema } from './PageContentOrderByWithRelationInputSchema';
import { ImageWidgetOrderByWithRelationInputSchema } from './ImageWidgetOrderByWithRelationInputSchema';

export const WidgetOrderByWithRelationInputSchema: z.ZodType<Prisma.WidgetOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  pageContentId: z.lazy(() => SortOrderSchema).optional(),
  pageContent: z.lazy(() => PageContentOrderByWithRelationInputSchema).optional(),
  imageWidget: z.lazy(() => ImageWidgetOrderByWithRelationInputSchema).optional()
}).strict();

export default WidgetOrderByWithRelationInputSchema;
