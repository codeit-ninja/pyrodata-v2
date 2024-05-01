import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { FileIncludeSchema } from '../inputTypeSchemas/FileIncludeSchema'
import { FileWhereUniqueInputSchema } from '../inputTypeSchemas/FileWhereUniqueInputSchema'
import { FileCreateInputSchema } from '../inputTypeSchemas/FileCreateInputSchema'
import { FileUncheckedCreateInputSchema } from '../inputTypeSchemas/FileUncheckedCreateInputSchema'
import { FileUpdateInputSchema } from '../inputTypeSchemas/FileUpdateInputSchema'
import { FileUncheckedUpdateInputSchema } from '../inputTypeSchemas/FileUncheckedUpdateInputSchema'
import { ImageWidgetFindManyArgsSchema } from "../outputTypeSchemas/ImageWidgetFindManyArgsSchema"
import { PageFindManyArgsSchema } from "../outputTypeSchemas/PageFindManyArgsSchema"
import { CompositionFindManyArgsSchema } from "../outputTypeSchemas/CompositionFindManyArgsSchema"
import { UserArgsSchema } from "../outputTypeSchemas/UserArgsSchema"
import { FileCountOutputTypeArgsSchema } from "../outputTypeSchemas/FileCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const FileSelectSchema: z.ZodType<Prisma.FileSelect> = z.object({
  id: z.boolean().optional(),
  location: z.boolean().optional(),
  title: z.boolean().optional(),
  description: z.boolean().optional(),
  mimeType: z.boolean().optional(),
  userId: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  imageWidget: z.union([z.boolean(),z.lazy(() => ImageWidgetFindManyArgsSchema)]).optional(),
  page: z.union([z.boolean(),z.lazy(() => PageFindManyArgsSchema)]).optional(),
  composition: z.union([z.boolean(),z.lazy(() => CompositionFindManyArgsSchema)]).optional(),
  user: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => FileCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const FileUpsertArgsSchema: z.ZodType<Prisma.FileUpsertArgs> = z.object({
  select: FileSelectSchema.optional(),
  include: FileIncludeSchema.optional(),
  where: FileWhereUniqueInputSchema,
  create: z.union([ FileCreateInputSchema,FileUncheckedCreateInputSchema ]),
  update: z.union([ FileUpdateInputSchema,FileUncheckedUpdateInputSchema ]),
}).strict() ;

export default FileUpsertArgsSchema;
