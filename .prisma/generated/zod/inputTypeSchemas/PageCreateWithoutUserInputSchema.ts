import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { FileCreateNestedOneWithoutPageInputSchema } from './FileCreateNestedOneWithoutPageInputSchema';
import { PageContentCreateNestedOneWithoutPageInputSchema } from './PageContentCreateNestedOneWithoutPageInputSchema';
import { CategoryCreateNestedOneWithoutPageInputSchema } from './CategoryCreateNestedOneWithoutPageInputSchema';
import { ChemicalCreateNestedOneWithoutPageInputSchema } from './ChemicalCreateNestedOneWithoutPageInputSchema';
import { IngredientCreateNestedManyWithoutPageInputSchema } from './IngredientCreateNestedManyWithoutPageInputSchema';

export const PageCreateWithoutUserInputSchema: z.ZodType<Prisma.PageCreateWithoutUserInput> = z.object({
  id: z.string().cuid().optional(),
  title: z.string(),
  slug: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  featuredImage: z.lazy(() => FileCreateNestedOneWithoutPageInputSchema).optional(),
  content: z.lazy(() => PageContentCreateNestedOneWithoutPageInputSchema),
  category: z.lazy(() => CategoryCreateNestedOneWithoutPageInputSchema).optional(),
  chemical: z.lazy(() => ChemicalCreateNestedOneWithoutPageInputSchema).optional(),
  ingredients: z.lazy(() => IngredientCreateNestedManyWithoutPageInputSchema).optional()
}).strict();

export default PageCreateWithoutUserInputSchema;
