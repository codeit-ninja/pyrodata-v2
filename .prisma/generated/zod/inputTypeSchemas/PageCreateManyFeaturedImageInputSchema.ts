import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const PageCreateManyFeaturedImageInputSchema: z.ZodType<Prisma.PageCreateManyFeaturedImageInput> = z.object({
  id: z.string().cuid().optional(),
  title: z.string(),
  slug: z.string(),
  pageContentId: z.string(),
  categorySlug: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  userId: z.string().optional().nullable()
}).strict();

export default PageCreateManyFeaturedImageInputSchema;
