import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { FileIncludeSchema } from '../inputTypeSchemas/FileIncludeSchema'
import { FileUpdateInputSchema } from '../inputTypeSchemas/FileUpdateInputSchema'
import { FileUncheckedUpdateInputSchema } from '../inputTypeSchemas/FileUncheckedUpdateInputSchema'
import { FileWhereUniqueInputSchema } from '../inputTypeSchemas/FileWhereUniqueInputSchema'
import { ImageWidgetFindManyArgsSchema } from "../outputTypeSchemas/ImageWidgetFindManyArgsSchema"
import { PageFindManyArgsSchema } from "../outputTypeSchemas/PageFindManyArgsSchema"
import { CompositionFindManyArgsSchema } from "../outputTypeSchemas/CompositionFindManyArgsSchema"
import { UserArgsSchema } from "../outputTypeSchemas/UserArgsSchema"
import { FileCountOutputTypeArgsSchema } from "../outputTypeSchemas/FileCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const FileSelectSchema: z.ZodType<Prisma.FileSelect> = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  title: z.boolean().optional(),
  description: z.boolean().optional(),
  mimeType: z.boolean().optional(),
  userId: z.boolean().optional(),
  imageWidget: z.union([z.boolean(),z.lazy(() => ImageWidgetFindManyArgsSchema)]).optional(),
  page: z.union([z.boolean(),z.lazy(() => PageFindManyArgsSchema)]).optional(),
  composition: z.union([z.boolean(),z.lazy(() => CompositionFindManyArgsSchema)]).optional(),
  user: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => FileCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const FileUpdateArgsSchema: z.ZodType<Prisma.FileUpdateArgs> = z.object({
  select: FileSelectSchema.optional(),
  include: FileIncludeSchema.optional(),
  data: z.union([ FileUpdateInputSchema,FileUncheckedUpdateInputSchema ]),
  where: FileWhereUniqueInputSchema,
}).strict() ;

export default FileUpdateArgsSchema;
