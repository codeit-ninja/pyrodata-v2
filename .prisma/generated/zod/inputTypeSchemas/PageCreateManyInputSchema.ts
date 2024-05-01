import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const PageCreateManyInputSchema: z.ZodType<Prisma.PageCreateManyInput> = z.object({
  id: z.string().cuid().optional(),
  title: z.string(),
  slug: z.string(),
  featuredImageId: z.string().optional().nullable(),
  pageContentId: z.string(),
  categorySlug: z.string().optional().nullable(),
  userId: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export default PageCreateManyInputSchema;
