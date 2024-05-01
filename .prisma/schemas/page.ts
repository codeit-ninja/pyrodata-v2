import { z } from 'zod';
import { FileSchema } from './file';
import { CategorySchema } from './category';
import { PageContentSchema } from './pageContent';
import { ChemicalSchema } from './chemical';

export const PageSchema = z.object({
    title: z.string().min(1),
    slug: z.string().min(1),
})

export const PageSchemaRelations = PageSchema.merge(z.object({
    featuredImage: z.lazy(() => FileSchema).optional(),
    content: z.lazy(() => PageContentSchema),
    category: z.lazy(() => CategorySchema).optional(),
    chemical: z.lazy(() => ChemicalSchema).optional()
}))