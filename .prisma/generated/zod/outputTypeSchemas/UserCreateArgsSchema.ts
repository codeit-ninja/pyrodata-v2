import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserIncludeSchema } from '../inputTypeSchemas/UserIncludeSchema'
import { UserCreateInputSchema } from '../inputTypeSchemas/UserCreateInputSchema'
import { UserUncheckedCreateInputSchema } from '../inputTypeSchemas/UserUncheckedCreateInputSchema'
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

export const UserCreateArgsSchema: z.ZodType<Prisma.UserCreateArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  data: z.union([ UserCreateInputSchema,UserUncheckedCreateInputSchema ]),
}).strict() ;

export default UserCreateArgsSchema;
