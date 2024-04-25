import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserIncludeSchema } from '../inputTypeSchemas/UserIncludeSchema'
import { UserWhereUniqueInputSchema } from '../inputTypeSchemas/UserWhereUniqueInputSchema'
import { SessionArgsSchema } from "../outputTypeSchemas/SessionArgsSchema"
import { FileFindManyArgsSchema } from "../outputTypeSchemas/FileFindManyArgsSchema"
import { PageFindManyArgsSchema } from "../outputTypeSchemas/PageFindManyArgsSchema"
import { UserCountOutputTypeArgsSchema } from "../outputTypeSchemas/UserCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const UserSelectSchema: z.ZodType<Prisma.UserSelect> = z.object({
  id: z.boolean().optional(),
  username: z.boolean().optional(),
  password: z.boolean().optional(),
  email: z.boolean().optional(),
  role: z.boolean().optional(),
  session: z.union([z.boolean(),z.lazy(() => SessionArgsSchema)]).optional(),
  files: z.union([z.boolean(),z.lazy(() => FileFindManyArgsSchema)]).optional(),
  pages: z.union([z.boolean(),z.lazy(() => PageFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => UserCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const UserFindUniqueArgsSchema: z.ZodType<Prisma.UserFindUniqueArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereUniqueInputSchema,
}).strict() ;

export default UserFindUniqueArgsSchema;
