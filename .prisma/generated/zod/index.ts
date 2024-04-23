import { z } from 'zod';
import type { Prisma } from '@prisma/client';

/////////////////////////////////////////
// HELPER FUNCTIONS
/////////////////////////////////////////


/////////////////////////////////////////
// ENUMS
/////////////////////////////////////////

export const TransactionIsolationLevelSchema = z.enum(['ReadUncommitted','ReadCommitted','RepeatableRead','Serializable']);

export const UserScalarFieldEnumSchema = z.enum(['id','username','password','email','role']);

export const SessionScalarFieldEnumSchema = z.enum(['id','userId']);

export const FileScalarFieldEnumSchema = z.enum(['id','name','title','description','mimeType']);

export const IngredientScalarFieldEnumSchema = z.enum(['id','amount','name','note','compositionId','pageId']);

export const CompositionScalarFieldEnumSchema = z.enum(['id','name','description','videoId']);

export const CompositionCategoryScalarFieldEnumSchema = z.enum(['id','name','slug']);

export const HazardSymbolsScalarFieldEnumSchema = z.enum(['id','name','symbol']);

export const ChemicalScalarFieldEnumSchema = z.enum(['id','name','formula','pageId']);

export const PageScalarFieldEnumSchema = z.enum(['id','title','slug','featuredImageId','pageContentId','categorySlug','createdAt','updatedAt']);

export const CategoryScalarFieldEnumSchema = z.enum(['title','slug']);

export const PageContentScalarFieldEnumSchema = z.enum(['id','createdAt','html','sidebar']);

export const WidgetScalarFieldEnumSchema = z.enum(['id','pageContentId']);

export const ImageWidgetScalarFieldEnumSchema = z.enum(['id','widgetId','fileId']);

export const EditorWidgetScalarFieldEnumSchema = z.enum(['id']);

export const SortOrderSchema = z.enum(['asc','desc']);

export const QueryModeSchema = z.enum(['default','insensitive']);

export const NullsOrderSchema = z.enum(['first','last']);

export const RoleSchema = z.enum(['USER','EDITOR','ADMIN']);

export type RoleType = `${z.infer<typeof RoleSchema>}`

/////////////////////////////////////////
// MODELS
/////////////////////////////////////////

/////////////////////////////////////////
// USER SCHEMA
/////////////////////////////////////////

export const UserSchema = z.object({
  role: RoleSchema,
  id: z.string().cuid(),
  username: z.string(),
  password: z.string(),
  email: z.string(),
})

export type User = z.infer<typeof UserSchema>

/////////////////////////////////////////
// SESSION SCHEMA
/////////////////////////////////////////

export const SessionSchema = z.object({
  id: z.string().uuid(),
  userId: z.string(),
})

export type Session = z.infer<typeof SessionSchema>

/////////////////////////////////////////
// FILE SCHEMA
/////////////////////////////////////////

export const FileSchema = z.object({
  id: z.string().cuid(),
  name: z.string(),
  title: z.string(),
  description: z.string().nullable(),
  mimeType: z.string().nullable(),
})

export type File = z.infer<typeof FileSchema>

/////////////////////////////////////////
// INGREDIENT SCHEMA
/////////////////////////////////////////

export const IngredientSchema = z.object({
  id: z.string().cuid(),
  amount: z.number(),
  name: z.string(),
  note: z.string().nullable(),
  compositionId: z.string(),
  pageId: z.string().nullable(),
})

export type Ingredient = z.infer<typeof IngredientSchema>

/////////////////////////////////////////
// COMPOSITION SCHEMA
/////////////////////////////////////////

export const CompositionSchema = z.object({
  id: z.string().cuid(),
  name: z.string(),
  description: z.string().nullable(),
  videoId: z.string().nullable(),
})

export type Composition = z.infer<typeof CompositionSchema>

/////////////////////////////////////////
// COMPOSITION CATEGORY SCHEMA
/////////////////////////////////////////

export const CompositionCategorySchema = z.object({
  id: z.string().cuid(),
  name: z.string(),
  slug: z.string(),
})

export type CompositionCategory = z.infer<typeof CompositionCategorySchema>

/////////////////////////////////////////
// HAZARD SYMBOLS SCHEMA
/////////////////////////////////////////

export const HazardSymbolsSchema = z.object({
  id: z.string().cuid(),
  name: z.string(),
  symbol: z.string(),
})

export type HazardSymbols = z.infer<typeof HazardSymbolsSchema>

/////////////////////////////////////////
// CHEMICAL SCHEMA
/////////////////////////////////////////

export const ChemicalSchema = z.object({
  id: z.string().cuid(),
  name: z.string(),
  formula: z.string().nullable(),
  pageId: z.string(),
})

export type Chemical = z.infer<typeof ChemicalSchema>

/////////////////////////////////////////
// PAGE SCHEMA
/////////////////////////////////////////

export const PageSchema = z.object({
  id: z.string().cuid(),
  title: z.string(),
  slug: z.string(),
  featuredImageId: z.string().nullable(),
  pageContentId: z.string(),
  categorySlug: z.string().nullable(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type Page = z.infer<typeof PageSchema>

/////////////////////////////////////////
// CATEGORY SCHEMA
/////////////////////////////////////////

export const CategorySchema = z.object({
  title: z.string(),
  slug: z.string(),
})

export type Category = z.infer<typeof CategorySchema>

/////////////////////////////////////////
// PAGE CONTENT SCHEMA
/////////////////////////////////////////

export const PageContentSchema = z.object({
  id: z.string().cuid(),
  createdAt: z.coerce.date(),
  html: z.string(),
  sidebar: z.boolean(),
})

export type PageContent = z.infer<typeof PageContentSchema>

/////////////////////////////////////////
// WIDGET SCHEMA
/////////////////////////////////////////

export const WidgetSchema = z.object({
  id: z.string().cuid(),
  pageContentId: z.string(),
})

export type Widget = z.infer<typeof WidgetSchema>

/////////////////////////////////////////
// IMAGE WIDGET SCHEMA
/////////////////////////////////////////

export const ImageWidgetSchema = z.object({
  id: z.string().cuid(),
  widgetId: z.string(),
  fileId: z.string(),
})

export type ImageWidget = z.infer<typeof ImageWidgetSchema>

/////////////////////////////////////////
// EDITOR WIDGET SCHEMA
/////////////////////////////////////////

export const EditorWidgetSchema = z.object({
  id: z.number().int(),
})

export type EditorWidget = z.infer<typeof EditorWidgetSchema>

/////////////////////////////////////////
// SELECT & INCLUDE
/////////////////////////////////////////

// USER
//------------------------------------------------------

export const UserIncludeSchema: z.ZodType<Prisma.UserInclude> = z.object({
  session: z.union([z.boolean(),z.lazy(() => SessionArgsSchema)]).optional(),
}).strict()

export const UserArgsSchema: z.ZodType<Prisma.UserDefaultArgs> = z.object({
  select: z.lazy(() => UserSelectSchema).optional(),
  include: z.lazy(() => UserIncludeSchema).optional(),
}).strict();

export const UserSelectSchema: z.ZodType<Prisma.UserSelect> = z.object({
  id: z.boolean().optional(),
  username: z.boolean().optional(),
  password: z.boolean().optional(),
  email: z.boolean().optional(),
  role: z.boolean().optional(),
  session: z.union([z.boolean(),z.lazy(() => SessionArgsSchema)]).optional(),
}).strict()

// SESSION
//------------------------------------------------------

export const SessionIncludeSchema: z.ZodType<Prisma.SessionInclude> = z.object({
  user: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
}).strict()

export const SessionArgsSchema: z.ZodType<Prisma.SessionDefaultArgs> = z.object({
  select: z.lazy(() => SessionSelectSchema).optional(),
  include: z.lazy(() => SessionIncludeSchema).optional(),
}).strict();

export const SessionSelectSchema: z.ZodType<Prisma.SessionSelect> = z.object({
  id: z.boolean().optional(),
  userId: z.boolean().optional(),
  user: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
}).strict()

// FILE
//------------------------------------------------------

export const FileIncludeSchema: z.ZodType<Prisma.FileInclude> = z.object({
  imageWidget: z.union([z.boolean(),z.lazy(() => ImageWidgetFindManyArgsSchema)]).optional(),
  page: z.union([z.boolean(),z.lazy(() => PageFindManyArgsSchema)]).optional(),
  composition: z.union([z.boolean(),z.lazy(() => CompositionFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => FileCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const FileArgsSchema: z.ZodType<Prisma.FileDefaultArgs> = z.object({
  select: z.lazy(() => FileSelectSchema).optional(),
  include: z.lazy(() => FileIncludeSchema).optional(),
}).strict();

export const FileCountOutputTypeArgsSchema: z.ZodType<Prisma.FileCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => FileCountOutputTypeSelectSchema).nullish(),
}).strict();

export const FileCountOutputTypeSelectSchema: z.ZodType<Prisma.FileCountOutputTypeSelect> = z.object({
  imageWidget: z.boolean().optional(),
  page: z.boolean().optional(),
  composition: z.boolean().optional(),
}).strict();

export const FileSelectSchema: z.ZodType<Prisma.FileSelect> = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  title: z.boolean().optional(),
  description: z.boolean().optional(),
  mimeType: z.boolean().optional(),
  imageWidget: z.union([z.boolean(),z.lazy(() => ImageWidgetFindManyArgsSchema)]).optional(),
  page: z.union([z.boolean(),z.lazy(() => PageFindManyArgsSchema)]).optional(),
  composition: z.union([z.boolean(),z.lazy(() => CompositionFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => FileCountOutputTypeArgsSchema)]).optional(),
}).strict()

// INGREDIENT
//------------------------------------------------------

export const IngredientIncludeSchema: z.ZodType<Prisma.IngredientInclude> = z.object({
  composition: z.union([z.boolean(),z.lazy(() => CompositionArgsSchema)]).optional(),
  page: z.union([z.boolean(),z.lazy(() => PageArgsSchema)]).optional(),
}).strict()

export const IngredientArgsSchema: z.ZodType<Prisma.IngredientDefaultArgs> = z.object({
  select: z.lazy(() => IngredientSelectSchema).optional(),
  include: z.lazy(() => IngredientIncludeSchema).optional(),
}).strict();

export const IngredientSelectSchema: z.ZodType<Prisma.IngredientSelect> = z.object({
  id: z.boolean().optional(),
  amount: z.boolean().optional(),
  name: z.boolean().optional(),
  note: z.boolean().optional(),
  compositionId: z.boolean().optional(),
  pageId: z.boolean().optional(),
  composition: z.union([z.boolean(),z.lazy(() => CompositionArgsSchema)]).optional(),
  page: z.union([z.boolean(),z.lazy(() => PageArgsSchema)]).optional(),
}).strict()

// COMPOSITION
//------------------------------------------------------

export const CompositionIncludeSchema: z.ZodType<Prisma.CompositionInclude> = z.object({
  video: z.union([z.boolean(),z.lazy(() => FileArgsSchema)]).optional(),
  ingredients: z.union([z.boolean(),z.lazy(() => IngredientFindManyArgsSchema)]).optional(),
  categories: z.union([z.boolean(),z.lazy(() => CompositionCategoryFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => CompositionCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const CompositionArgsSchema: z.ZodType<Prisma.CompositionDefaultArgs> = z.object({
  select: z.lazy(() => CompositionSelectSchema).optional(),
  include: z.lazy(() => CompositionIncludeSchema).optional(),
}).strict();

export const CompositionCountOutputTypeArgsSchema: z.ZodType<Prisma.CompositionCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => CompositionCountOutputTypeSelectSchema).nullish(),
}).strict();

export const CompositionCountOutputTypeSelectSchema: z.ZodType<Prisma.CompositionCountOutputTypeSelect> = z.object({
  ingredients: z.boolean().optional(),
  categories: z.boolean().optional(),
}).strict();

export const CompositionSelectSchema: z.ZodType<Prisma.CompositionSelect> = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  description: z.boolean().optional(),
  videoId: z.boolean().optional(),
  video: z.union([z.boolean(),z.lazy(() => FileArgsSchema)]).optional(),
  ingredients: z.union([z.boolean(),z.lazy(() => IngredientFindManyArgsSchema)]).optional(),
  categories: z.union([z.boolean(),z.lazy(() => CompositionCategoryFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => CompositionCountOutputTypeArgsSchema)]).optional(),
}).strict()

// COMPOSITION CATEGORY
//------------------------------------------------------

export const CompositionCategoryIncludeSchema: z.ZodType<Prisma.CompositionCategoryInclude> = z.object({
  compositions: z.union([z.boolean(),z.lazy(() => CompositionFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => CompositionCategoryCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const CompositionCategoryArgsSchema: z.ZodType<Prisma.CompositionCategoryDefaultArgs> = z.object({
  select: z.lazy(() => CompositionCategorySelectSchema).optional(),
  include: z.lazy(() => CompositionCategoryIncludeSchema).optional(),
}).strict();

export const CompositionCategoryCountOutputTypeArgsSchema: z.ZodType<Prisma.CompositionCategoryCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => CompositionCategoryCountOutputTypeSelectSchema).nullish(),
}).strict();

export const CompositionCategoryCountOutputTypeSelectSchema: z.ZodType<Prisma.CompositionCategoryCountOutputTypeSelect> = z.object({
  compositions: z.boolean().optional(),
}).strict();

export const CompositionCategorySelectSchema: z.ZodType<Prisma.CompositionCategorySelect> = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  slug: z.boolean().optional(),
  compositions: z.union([z.boolean(),z.lazy(() => CompositionFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => CompositionCategoryCountOutputTypeArgsSchema)]).optional(),
}).strict()

// HAZARD SYMBOLS
//------------------------------------------------------

export const HazardSymbolsIncludeSchema: z.ZodType<Prisma.HazardSymbolsInclude> = z.object({
  chemicals: z.union([z.boolean(),z.lazy(() => ChemicalFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => HazardSymbolsCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const HazardSymbolsArgsSchema: z.ZodType<Prisma.HazardSymbolsDefaultArgs> = z.object({
  select: z.lazy(() => HazardSymbolsSelectSchema).optional(),
  include: z.lazy(() => HazardSymbolsIncludeSchema).optional(),
}).strict();

export const HazardSymbolsCountOutputTypeArgsSchema: z.ZodType<Prisma.HazardSymbolsCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => HazardSymbolsCountOutputTypeSelectSchema).nullish(),
}).strict();

export const HazardSymbolsCountOutputTypeSelectSchema: z.ZodType<Prisma.HazardSymbolsCountOutputTypeSelect> = z.object({
  chemicals: z.boolean().optional(),
}).strict();

export const HazardSymbolsSelectSchema: z.ZodType<Prisma.HazardSymbolsSelect> = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  symbol: z.boolean().optional(),
  chemicals: z.union([z.boolean(),z.lazy(() => ChemicalFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => HazardSymbolsCountOutputTypeArgsSchema)]).optional(),
}).strict()

// CHEMICAL
//------------------------------------------------------

export const ChemicalIncludeSchema: z.ZodType<Prisma.ChemicalInclude> = z.object({
  hazards: z.union([z.boolean(),z.lazy(() => HazardSymbolsFindManyArgsSchema)]).optional(),
  page: z.union([z.boolean(),z.lazy(() => PageArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => ChemicalCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const ChemicalArgsSchema: z.ZodType<Prisma.ChemicalDefaultArgs> = z.object({
  select: z.lazy(() => ChemicalSelectSchema).optional(),
  include: z.lazy(() => ChemicalIncludeSchema).optional(),
}).strict();

export const ChemicalCountOutputTypeArgsSchema: z.ZodType<Prisma.ChemicalCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => ChemicalCountOutputTypeSelectSchema).nullish(),
}).strict();

export const ChemicalCountOutputTypeSelectSchema: z.ZodType<Prisma.ChemicalCountOutputTypeSelect> = z.object({
  hazards: z.boolean().optional(),
}).strict();

export const ChemicalSelectSchema: z.ZodType<Prisma.ChemicalSelect> = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  formula: z.boolean().optional(),
  pageId: z.boolean().optional(),
  hazards: z.union([z.boolean(),z.lazy(() => HazardSymbolsFindManyArgsSchema)]).optional(),
  page: z.union([z.boolean(),z.lazy(() => PageArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => ChemicalCountOutputTypeArgsSchema)]).optional(),
}).strict()

// PAGE
//------------------------------------------------------

export const PageIncludeSchema: z.ZodType<Prisma.PageInclude> = z.object({
  featuredImage: z.union([z.boolean(),z.lazy(() => FileArgsSchema)]).optional(),
  content: z.union([z.boolean(),z.lazy(() => PageContentArgsSchema)]).optional(),
  category: z.union([z.boolean(),z.lazy(() => CategoryArgsSchema)]).optional(),
  chemical: z.union([z.boolean(),z.lazy(() => ChemicalArgsSchema)]).optional(),
  ingredients: z.union([z.boolean(),z.lazy(() => IngredientFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => PageCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const PageArgsSchema: z.ZodType<Prisma.PageDefaultArgs> = z.object({
  select: z.lazy(() => PageSelectSchema).optional(),
  include: z.lazy(() => PageIncludeSchema).optional(),
}).strict();

export const PageCountOutputTypeArgsSchema: z.ZodType<Prisma.PageCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => PageCountOutputTypeSelectSchema).nullish(),
}).strict();

export const PageCountOutputTypeSelectSchema: z.ZodType<Prisma.PageCountOutputTypeSelect> = z.object({
  ingredients: z.boolean().optional(),
}).strict();

export const PageSelectSchema: z.ZodType<Prisma.PageSelect> = z.object({
  id: z.boolean().optional(),
  title: z.boolean().optional(),
  slug: z.boolean().optional(),
  featuredImageId: z.boolean().optional(),
  pageContentId: z.boolean().optional(),
  categorySlug: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  featuredImage: z.union([z.boolean(),z.lazy(() => FileArgsSchema)]).optional(),
  content: z.union([z.boolean(),z.lazy(() => PageContentArgsSchema)]).optional(),
  category: z.union([z.boolean(),z.lazy(() => CategoryArgsSchema)]).optional(),
  chemical: z.union([z.boolean(),z.lazy(() => ChemicalArgsSchema)]).optional(),
  ingredients: z.union([z.boolean(),z.lazy(() => IngredientFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => PageCountOutputTypeArgsSchema)]).optional(),
}).strict()

// CATEGORY
//------------------------------------------------------

export const CategoryIncludeSchema: z.ZodType<Prisma.CategoryInclude> = z.object({
  page: z.union([z.boolean(),z.lazy(() => PageFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => CategoryCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const CategoryArgsSchema: z.ZodType<Prisma.CategoryDefaultArgs> = z.object({
  select: z.lazy(() => CategorySelectSchema).optional(),
  include: z.lazy(() => CategoryIncludeSchema).optional(),
}).strict();

export const CategoryCountOutputTypeArgsSchema: z.ZodType<Prisma.CategoryCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => CategoryCountOutputTypeSelectSchema).nullish(),
}).strict();

export const CategoryCountOutputTypeSelectSchema: z.ZodType<Prisma.CategoryCountOutputTypeSelect> = z.object({
  page: z.boolean().optional(),
}).strict();

export const CategorySelectSchema: z.ZodType<Prisma.CategorySelect> = z.object({
  title: z.boolean().optional(),
  slug: z.boolean().optional(),
  page: z.union([z.boolean(),z.lazy(() => PageFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => CategoryCountOutputTypeArgsSchema)]).optional(),
}).strict()

// PAGE CONTENT
//------------------------------------------------------

export const PageContentIncludeSchema: z.ZodType<Prisma.PageContentInclude> = z.object({
  page: z.union([z.boolean(),z.lazy(() => PageFindManyArgsSchema)]).optional(),
  widgets: z.union([z.boolean(),z.lazy(() => WidgetFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => PageContentCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const PageContentArgsSchema: z.ZodType<Prisma.PageContentDefaultArgs> = z.object({
  select: z.lazy(() => PageContentSelectSchema).optional(),
  include: z.lazy(() => PageContentIncludeSchema).optional(),
}).strict();

export const PageContentCountOutputTypeArgsSchema: z.ZodType<Prisma.PageContentCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => PageContentCountOutputTypeSelectSchema).nullish(),
}).strict();

export const PageContentCountOutputTypeSelectSchema: z.ZodType<Prisma.PageContentCountOutputTypeSelect> = z.object({
  page: z.boolean().optional(),
  widgets: z.boolean().optional(),
}).strict();

export const PageContentSelectSchema: z.ZodType<Prisma.PageContentSelect> = z.object({
  id: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  html: z.boolean().optional(),
  sidebar: z.boolean().optional(),
  page: z.union([z.boolean(),z.lazy(() => PageFindManyArgsSchema)]).optional(),
  widgets: z.union([z.boolean(),z.lazy(() => WidgetFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => PageContentCountOutputTypeArgsSchema)]).optional(),
}).strict()

// WIDGET
//------------------------------------------------------

export const WidgetIncludeSchema: z.ZodType<Prisma.WidgetInclude> = z.object({
  pageContent: z.union([z.boolean(),z.lazy(() => PageContentArgsSchema)]).optional(),
  imageWidget: z.union([z.boolean(),z.lazy(() => ImageWidgetArgsSchema)]).optional(),
}).strict()

export const WidgetArgsSchema: z.ZodType<Prisma.WidgetDefaultArgs> = z.object({
  select: z.lazy(() => WidgetSelectSchema).optional(),
  include: z.lazy(() => WidgetIncludeSchema).optional(),
}).strict();

export const WidgetSelectSchema: z.ZodType<Prisma.WidgetSelect> = z.object({
  id: z.boolean().optional(),
  pageContentId: z.boolean().optional(),
  pageContent: z.union([z.boolean(),z.lazy(() => PageContentArgsSchema)]).optional(),
  imageWidget: z.union([z.boolean(),z.lazy(() => ImageWidgetArgsSchema)]).optional(),
}).strict()

// IMAGE WIDGET
//------------------------------------------------------

export const ImageWidgetIncludeSchema: z.ZodType<Prisma.ImageWidgetInclude> = z.object({
  widgets: z.union([z.boolean(),z.lazy(() => WidgetArgsSchema)]).optional(),
  file: z.union([z.boolean(),z.lazy(() => FileArgsSchema)]).optional(),
}).strict()

export const ImageWidgetArgsSchema: z.ZodType<Prisma.ImageWidgetDefaultArgs> = z.object({
  select: z.lazy(() => ImageWidgetSelectSchema).optional(),
  include: z.lazy(() => ImageWidgetIncludeSchema).optional(),
}).strict();

export const ImageWidgetSelectSchema: z.ZodType<Prisma.ImageWidgetSelect> = z.object({
  id: z.boolean().optional(),
  widgetId: z.boolean().optional(),
  fileId: z.boolean().optional(),
  widgets: z.union([z.boolean(),z.lazy(() => WidgetArgsSchema)]).optional(),
  file: z.union([z.boolean(),z.lazy(() => FileArgsSchema)]).optional(),
}).strict()

// EDITOR WIDGET
//------------------------------------------------------

export const EditorWidgetSelectSchema: z.ZodType<Prisma.EditorWidgetSelect> = z.object({
  id: z.boolean().optional(),
}).strict()


/////////////////////////////////////////
// INPUT TYPES
/////////////////////////////////////////

export const UserWhereInputSchema: z.ZodType<Prisma.UserWhereInput> = z.object({
  AND: z.union([ z.lazy(() => UserWhereInputSchema),z.lazy(() => UserWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => UserWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => UserWhereInputSchema),z.lazy(() => UserWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  username: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  password: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  email: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  role: z.union([ z.lazy(() => EnumRoleFilterSchema),z.lazy(() => RoleSchema) ]).optional(),
  session: z.union([ z.lazy(() => SessionNullableRelationFilterSchema),z.lazy(() => SessionWhereInputSchema) ]).optional().nullable(),
}).strict();

export const UserOrderByWithRelationInputSchema: z.ZodType<Prisma.UserOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  username: z.lazy(() => SortOrderSchema).optional(),
  password: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  role: z.lazy(() => SortOrderSchema).optional(),
  session: z.lazy(() => SessionOrderByWithRelationInputSchema).optional()
}).strict();

export const UserWhereUniqueInputSchema: z.ZodType<Prisma.UserWhereUniqueInput> = z.union([
  z.object({
    id: z.string().cuid(),
    username: z.string(),
    email: z.string()
  }),
  z.object({
    id: z.string().cuid(),
    username: z.string(),
  }),
  z.object({
    id: z.string().cuid(),
    email: z.string(),
  }),
  z.object({
    id: z.string().cuid(),
  }),
  z.object({
    username: z.string(),
    email: z.string(),
  }),
  z.object({
    username: z.string(),
  }),
  z.object({
    email: z.string(),
  }),
])
.and(z.object({
  id: z.string().cuid().optional(),
  username: z.string().optional(),
  email: z.string().optional(),
  AND: z.union([ z.lazy(() => UserWhereInputSchema),z.lazy(() => UserWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => UserWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => UserWhereInputSchema),z.lazy(() => UserWhereInputSchema).array() ]).optional(),
  password: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  role: z.union([ z.lazy(() => EnumRoleFilterSchema),z.lazy(() => RoleSchema) ]).optional(),
  session: z.union([ z.lazy(() => SessionNullableRelationFilterSchema),z.lazy(() => SessionWhereInputSchema) ]).optional().nullable(),
}).strict());

export const UserOrderByWithAggregationInputSchema: z.ZodType<Prisma.UserOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  username: z.lazy(() => SortOrderSchema).optional(),
  password: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  role: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => UserCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => UserMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => UserMinOrderByAggregateInputSchema).optional()
}).strict();

export const UserScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.UserScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => UserScalarWhereWithAggregatesInputSchema),z.lazy(() => UserScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => UserScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => UserScalarWhereWithAggregatesInputSchema),z.lazy(() => UserScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  username: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  password: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  email: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  role: z.union([ z.lazy(() => EnumRoleWithAggregatesFilterSchema),z.lazy(() => RoleSchema) ]).optional(),
}).strict();

export const SessionWhereInputSchema: z.ZodType<Prisma.SessionWhereInput> = z.object({
  AND: z.union([ z.lazy(() => SessionWhereInputSchema),z.lazy(() => SessionWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => SessionWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => SessionWhereInputSchema),z.lazy(() => SessionWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  userId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  user: z.union([ z.lazy(() => UserRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional(),
}).strict();

export const SessionOrderByWithRelationInputSchema: z.ZodType<Prisma.SessionOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  user: z.lazy(() => UserOrderByWithRelationInputSchema).optional()
}).strict();

export const SessionWhereUniqueInputSchema: z.ZodType<Prisma.SessionWhereUniqueInput> = z.union([
  z.object({
    id: z.string().uuid(),
    userId: z.string()
  }),
  z.object({
    id: z.string().uuid(),
  }),
  z.object({
    userId: z.string(),
  }),
])
.and(z.object({
  id: z.string().uuid().optional(),
  userId: z.string().optional(),
  AND: z.union([ z.lazy(() => SessionWhereInputSchema),z.lazy(() => SessionWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => SessionWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => SessionWhereInputSchema),z.lazy(() => SessionWhereInputSchema).array() ]).optional(),
  user: z.union([ z.lazy(() => UserRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional(),
}).strict());

export const SessionOrderByWithAggregationInputSchema: z.ZodType<Prisma.SessionOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => SessionCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => SessionMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => SessionMinOrderByAggregateInputSchema).optional()
}).strict();

export const SessionScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.SessionScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => SessionScalarWhereWithAggregatesInputSchema),z.lazy(() => SessionScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => SessionScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => SessionScalarWhereWithAggregatesInputSchema),z.lazy(() => SessionScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  userId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
}).strict();

export const FileWhereInputSchema: z.ZodType<Prisma.FileWhereInput> = z.object({
  AND: z.union([ z.lazy(() => FileWhereInputSchema),z.lazy(() => FileWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => FileWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => FileWhereInputSchema),z.lazy(() => FileWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  title: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  description: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  mimeType: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  imageWidget: z.lazy(() => ImageWidgetListRelationFilterSchema).optional(),
  page: z.lazy(() => PageListRelationFilterSchema).optional(),
  composition: z.lazy(() => CompositionListRelationFilterSchema).optional()
}).strict();

export const FileOrderByWithRelationInputSchema: z.ZodType<Prisma.FileOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  description: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  mimeType: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  imageWidget: z.lazy(() => ImageWidgetOrderByRelationAggregateInputSchema).optional(),
  page: z.lazy(() => PageOrderByRelationAggregateInputSchema).optional(),
  composition: z.lazy(() => CompositionOrderByRelationAggregateInputSchema).optional()
}).strict();

export const FileWhereUniqueInputSchema: z.ZodType<Prisma.FileWhereUniqueInput> = z.union([
  z.object({
    id: z.string().cuid(),
    name: z.string()
  }),
  z.object({
    id: z.string().cuid(),
  }),
  z.object({
    name: z.string(),
  }),
])
.and(z.object({
  id: z.string().cuid().optional(),
  name: z.string().optional(),
  AND: z.union([ z.lazy(() => FileWhereInputSchema),z.lazy(() => FileWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => FileWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => FileWhereInputSchema),z.lazy(() => FileWhereInputSchema).array() ]).optional(),
  title: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  description: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  mimeType: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  imageWidget: z.lazy(() => ImageWidgetListRelationFilterSchema).optional(),
  page: z.lazy(() => PageListRelationFilterSchema).optional(),
  composition: z.lazy(() => CompositionListRelationFilterSchema).optional()
}).strict());

export const FileOrderByWithAggregationInputSchema: z.ZodType<Prisma.FileOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  description: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  mimeType: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  _count: z.lazy(() => FileCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => FileMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => FileMinOrderByAggregateInputSchema).optional()
}).strict();

export const FileScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.FileScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => FileScalarWhereWithAggregatesInputSchema),z.lazy(() => FileScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => FileScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => FileScalarWhereWithAggregatesInputSchema),z.lazy(() => FileScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  title: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  description: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  mimeType: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export const IngredientWhereInputSchema: z.ZodType<Prisma.IngredientWhereInput> = z.object({
  AND: z.union([ z.lazy(() => IngredientWhereInputSchema),z.lazy(() => IngredientWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => IngredientWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => IngredientWhereInputSchema),z.lazy(() => IngredientWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  amount: z.union([ z.lazy(() => FloatFilterSchema),z.number() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  note: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  compositionId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  pageId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  composition: z.union([ z.lazy(() => CompositionRelationFilterSchema),z.lazy(() => CompositionWhereInputSchema) ]).optional(),
  page: z.union([ z.lazy(() => PageNullableRelationFilterSchema),z.lazy(() => PageWhereInputSchema) ]).optional().nullable(),
}).strict();

export const IngredientOrderByWithRelationInputSchema: z.ZodType<Prisma.IngredientOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  amount: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  note: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  compositionId: z.lazy(() => SortOrderSchema).optional(),
  pageId: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  composition: z.lazy(() => CompositionOrderByWithRelationInputSchema).optional(),
  page: z.lazy(() => PageOrderByWithRelationInputSchema).optional()
}).strict();

export const IngredientWhereUniqueInputSchema: z.ZodType<Prisma.IngredientWhereUniqueInput> = z.object({
  id: z.string().cuid()
})
.and(z.object({
  id: z.string().cuid().optional(),
  AND: z.union([ z.lazy(() => IngredientWhereInputSchema),z.lazy(() => IngredientWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => IngredientWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => IngredientWhereInputSchema),z.lazy(() => IngredientWhereInputSchema).array() ]).optional(),
  amount: z.union([ z.lazy(() => FloatFilterSchema),z.number() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  note: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  compositionId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  pageId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  composition: z.union([ z.lazy(() => CompositionRelationFilterSchema),z.lazy(() => CompositionWhereInputSchema) ]).optional(),
  page: z.union([ z.lazy(() => PageNullableRelationFilterSchema),z.lazy(() => PageWhereInputSchema) ]).optional().nullable(),
}).strict());

export const IngredientOrderByWithAggregationInputSchema: z.ZodType<Prisma.IngredientOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  amount: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  note: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  compositionId: z.lazy(() => SortOrderSchema).optional(),
  pageId: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  _count: z.lazy(() => IngredientCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => IngredientAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => IngredientMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => IngredientMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => IngredientSumOrderByAggregateInputSchema).optional()
}).strict();

export const IngredientScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.IngredientScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => IngredientScalarWhereWithAggregatesInputSchema),z.lazy(() => IngredientScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => IngredientScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => IngredientScalarWhereWithAggregatesInputSchema),z.lazy(() => IngredientScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  amount: z.union([ z.lazy(() => FloatWithAggregatesFilterSchema),z.number() ]).optional(),
  name: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  note: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  compositionId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  pageId: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export const CompositionWhereInputSchema: z.ZodType<Prisma.CompositionWhereInput> = z.object({
  AND: z.union([ z.lazy(() => CompositionWhereInputSchema),z.lazy(() => CompositionWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => CompositionWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => CompositionWhereInputSchema),z.lazy(() => CompositionWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  description: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  videoId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  video: z.union([ z.lazy(() => FileNullableRelationFilterSchema),z.lazy(() => FileWhereInputSchema) ]).optional().nullable(),
  ingredients: z.lazy(() => IngredientListRelationFilterSchema).optional(),
  categories: z.lazy(() => CompositionCategoryListRelationFilterSchema).optional()
}).strict();

export const CompositionOrderByWithRelationInputSchema: z.ZodType<Prisma.CompositionOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  description: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  videoId: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  video: z.lazy(() => FileOrderByWithRelationInputSchema).optional(),
  ingredients: z.lazy(() => IngredientOrderByRelationAggregateInputSchema).optional(),
  categories: z.lazy(() => CompositionCategoryOrderByRelationAggregateInputSchema).optional()
}).strict();

export const CompositionWhereUniqueInputSchema: z.ZodType<Prisma.CompositionWhereUniqueInput> = z.union([
  z.object({
    id: z.string().cuid(),
    name: z.string()
  }),
  z.object({
    id: z.string().cuid(),
  }),
  z.object({
    name: z.string(),
  }),
])
.and(z.object({
  id: z.string().cuid().optional(),
  name: z.string().optional(),
  AND: z.union([ z.lazy(() => CompositionWhereInputSchema),z.lazy(() => CompositionWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => CompositionWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => CompositionWhereInputSchema),z.lazy(() => CompositionWhereInputSchema).array() ]).optional(),
  description: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  videoId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  video: z.union([ z.lazy(() => FileNullableRelationFilterSchema),z.lazy(() => FileWhereInputSchema) ]).optional().nullable(),
  ingredients: z.lazy(() => IngredientListRelationFilterSchema).optional(),
  categories: z.lazy(() => CompositionCategoryListRelationFilterSchema).optional()
}).strict());

export const CompositionOrderByWithAggregationInputSchema: z.ZodType<Prisma.CompositionOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  description: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  videoId: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  _count: z.lazy(() => CompositionCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => CompositionMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => CompositionMinOrderByAggregateInputSchema).optional()
}).strict();

export const CompositionScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.CompositionScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => CompositionScalarWhereWithAggregatesInputSchema),z.lazy(() => CompositionScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => CompositionScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => CompositionScalarWhereWithAggregatesInputSchema),z.lazy(() => CompositionScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  description: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  videoId: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export const CompositionCategoryWhereInputSchema: z.ZodType<Prisma.CompositionCategoryWhereInput> = z.object({
  AND: z.union([ z.lazy(() => CompositionCategoryWhereInputSchema),z.lazy(() => CompositionCategoryWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => CompositionCategoryWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => CompositionCategoryWhereInputSchema),z.lazy(() => CompositionCategoryWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  slug: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  compositions: z.lazy(() => CompositionListRelationFilterSchema).optional()
}).strict();

export const CompositionCategoryOrderByWithRelationInputSchema: z.ZodType<Prisma.CompositionCategoryOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  slug: z.lazy(() => SortOrderSchema).optional(),
  compositions: z.lazy(() => CompositionOrderByRelationAggregateInputSchema).optional()
}).strict();

export const CompositionCategoryWhereUniqueInputSchema: z.ZodType<Prisma.CompositionCategoryWhereUniqueInput> = z.union([
  z.object({
    id: z.string().cuid(),
    name: z.string(),
    slug: z.string()
  }),
  z.object({
    id: z.string().cuid(),
    name: z.string(),
  }),
  z.object({
    id: z.string().cuid(),
    slug: z.string(),
  }),
  z.object({
    id: z.string().cuid(),
  }),
  z.object({
    name: z.string(),
    slug: z.string(),
  }),
  z.object({
    name: z.string(),
  }),
  z.object({
    slug: z.string(),
  }),
])
.and(z.object({
  id: z.string().cuid().optional(),
  name: z.string().optional(),
  slug: z.string().optional(),
  AND: z.union([ z.lazy(() => CompositionCategoryWhereInputSchema),z.lazy(() => CompositionCategoryWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => CompositionCategoryWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => CompositionCategoryWhereInputSchema),z.lazy(() => CompositionCategoryWhereInputSchema).array() ]).optional(),
  compositions: z.lazy(() => CompositionListRelationFilterSchema).optional()
}).strict());

export const CompositionCategoryOrderByWithAggregationInputSchema: z.ZodType<Prisma.CompositionCategoryOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  slug: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => CompositionCategoryCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => CompositionCategoryMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => CompositionCategoryMinOrderByAggregateInputSchema).optional()
}).strict();

export const CompositionCategoryScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.CompositionCategoryScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => CompositionCategoryScalarWhereWithAggregatesInputSchema),z.lazy(() => CompositionCategoryScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => CompositionCategoryScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => CompositionCategoryScalarWhereWithAggregatesInputSchema),z.lazy(() => CompositionCategoryScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  slug: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
}).strict();

export const HazardSymbolsWhereInputSchema: z.ZodType<Prisma.HazardSymbolsWhereInput> = z.object({
  AND: z.union([ z.lazy(() => HazardSymbolsWhereInputSchema),z.lazy(() => HazardSymbolsWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => HazardSymbolsWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => HazardSymbolsWhereInputSchema),z.lazy(() => HazardSymbolsWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  symbol: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  chemicals: z.lazy(() => ChemicalListRelationFilterSchema).optional()
}).strict();

export const HazardSymbolsOrderByWithRelationInputSchema: z.ZodType<Prisma.HazardSymbolsOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  symbol: z.lazy(() => SortOrderSchema).optional(),
  chemicals: z.lazy(() => ChemicalOrderByRelationAggregateInputSchema).optional()
}).strict();

export const HazardSymbolsWhereUniqueInputSchema: z.ZodType<Prisma.HazardSymbolsWhereUniqueInput> = z.union([
  z.object({
    id: z.string().cuid(),
    name: z.string()
  }),
  z.object({
    id: z.string().cuid(),
  }),
  z.object({
    name: z.string(),
  }),
])
.and(z.object({
  id: z.string().cuid().optional(),
  name: z.string().optional(),
  AND: z.union([ z.lazy(() => HazardSymbolsWhereInputSchema),z.lazy(() => HazardSymbolsWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => HazardSymbolsWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => HazardSymbolsWhereInputSchema),z.lazy(() => HazardSymbolsWhereInputSchema).array() ]).optional(),
  symbol: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  chemicals: z.lazy(() => ChemicalListRelationFilterSchema).optional()
}).strict());

export const HazardSymbolsOrderByWithAggregationInputSchema: z.ZodType<Prisma.HazardSymbolsOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  symbol: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => HazardSymbolsCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => HazardSymbolsMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => HazardSymbolsMinOrderByAggregateInputSchema).optional()
}).strict();

export const HazardSymbolsScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.HazardSymbolsScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => HazardSymbolsScalarWhereWithAggregatesInputSchema),z.lazy(() => HazardSymbolsScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => HazardSymbolsScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => HazardSymbolsScalarWhereWithAggregatesInputSchema),z.lazy(() => HazardSymbolsScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  symbol: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
}).strict();

export const ChemicalWhereInputSchema: z.ZodType<Prisma.ChemicalWhereInput> = z.object({
  AND: z.union([ z.lazy(() => ChemicalWhereInputSchema),z.lazy(() => ChemicalWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ChemicalWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ChemicalWhereInputSchema),z.lazy(() => ChemicalWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  formula: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  pageId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  hazards: z.lazy(() => HazardSymbolsListRelationFilterSchema).optional(),
  page: z.union([ z.lazy(() => PageRelationFilterSchema),z.lazy(() => PageWhereInputSchema) ]).optional(),
}).strict();

export const ChemicalOrderByWithRelationInputSchema: z.ZodType<Prisma.ChemicalOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  formula: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  pageId: z.lazy(() => SortOrderSchema).optional(),
  hazards: z.lazy(() => HazardSymbolsOrderByRelationAggregateInputSchema).optional(),
  page: z.lazy(() => PageOrderByWithRelationInputSchema).optional()
}).strict();

export const ChemicalWhereUniqueInputSchema: z.ZodType<Prisma.ChemicalWhereUniqueInput> = z.union([
  z.object({
    id: z.string().cuid(),
    name: z.string(),
    pageId: z.string()
  }),
  z.object({
    id: z.string().cuid(),
    name: z.string(),
  }),
  z.object({
    id: z.string().cuid(),
    pageId: z.string(),
  }),
  z.object({
    id: z.string().cuid(),
  }),
  z.object({
    name: z.string(),
    pageId: z.string(),
  }),
  z.object({
    name: z.string(),
  }),
  z.object({
    pageId: z.string(),
  }),
])
.and(z.object({
  id: z.string().cuid().optional(),
  name: z.string().optional(),
  pageId: z.string().optional(),
  AND: z.union([ z.lazy(() => ChemicalWhereInputSchema),z.lazy(() => ChemicalWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ChemicalWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ChemicalWhereInputSchema),z.lazy(() => ChemicalWhereInputSchema).array() ]).optional(),
  formula: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  hazards: z.lazy(() => HazardSymbolsListRelationFilterSchema).optional(),
  page: z.union([ z.lazy(() => PageRelationFilterSchema),z.lazy(() => PageWhereInputSchema) ]).optional(),
}).strict());

export const ChemicalOrderByWithAggregationInputSchema: z.ZodType<Prisma.ChemicalOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  formula: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  pageId: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => ChemicalCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => ChemicalMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => ChemicalMinOrderByAggregateInputSchema).optional()
}).strict();

export const ChemicalScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.ChemicalScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => ChemicalScalarWhereWithAggregatesInputSchema),z.lazy(() => ChemicalScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => ChemicalScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ChemicalScalarWhereWithAggregatesInputSchema),z.lazy(() => ChemicalScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  formula: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  pageId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
}).strict();

export const PageWhereInputSchema: z.ZodType<Prisma.PageWhereInput> = z.object({
  AND: z.union([ z.lazy(() => PageWhereInputSchema),z.lazy(() => PageWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => PageWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => PageWhereInputSchema),z.lazy(() => PageWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  title: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  slug: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  featuredImageId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  pageContentId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  categorySlug: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  featuredImage: z.union([ z.lazy(() => FileNullableRelationFilterSchema),z.lazy(() => FileWhereInputSchema) ]).optional().nullable(),
  content: z.union([ z.lazy(() => PageContentRelationFilterSchema),z.lazy(() => PageContentWhereInputSchema) ]).optional(),
  category: z.union([ z.lazy(() => CategoryNullableRelationFilterSchema),z.lazy(() => CategoryWhereInputSchema) ]).optional().nullable(),
  chemical: z.union([ z.lazy(() => ChemicalNullableRelationFilterSchema),z.lazy(() => ChemicalWhereInputSchema) ]).optional().nullable(),
  ingredients: z.lazy(() => IngredientListRelationFilterSchema).optional()
}).strict();

export const PageOrderByWithRelationInputSchema: z.ZodType<Prisma.PageOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  slug: z.lazy(() => SortOrderSchema).optional(),
  featuredImageId: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  pageContentId: z.lazy(() => SortOrderSchema).optional(),
  categorySlug: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  featuredImage: z.lazy(() => FileOrderByWithRelationInputSchema).optional(),
  content: z.lazy(() => PageContentOrderByWithRelationInputSchema).optional(),
  category: z.lazy(() => CategoryOrderByWithRelationInputSchema).optional(),
  chemical: z.lazy(() => ChemicalOrderByWithRelationInputSchema).optional(),
  ingredients: z.lazy(() => IngredientOrderByRelationAggregateInputSchema).optional()
}).strict();

export const PageWhereUniqueInputSchema: z.ZodType<Prisma.PageWhereUniqueInput> = z.union([
  z.object({
    id: z.string().cuid(),
    title: z.string(),
    slug: z.string()
  }),
  z.object({
    id: z.string().cuid(),
    title: z.string(),
  }),
  z.object({
    id: z.string().cuid(),
    slug: z.string(),
  }),
  z.object({
    id: z.string().cuid(),
  }),
  z.object({
    title: z.string(),
    slug: z.string(),
  }),
  z.object({
    title: z.string(),
  }),
  z.object({
    slug: z.string(),
  }),
])
.and(z.object({
  id: z.string().cuid().optional(),
  title: z.string().optional(),
  slug: z.string().optional(),
  AND: z.union([ z.lazy(() => PageWhereInputSchema),z.lazy(() => PageWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => PageWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => PageWhereInputSchema),z.lazy(() => PageWhereInputSchema).array() ]).optional(),
  featuredImageId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  pageContentId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  categorySlug: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  featuredImage: z.union([ z.lazy(() => FileNullableRelationFilterSchema),z.lazy(() => FileWhereInputSchema) ]).optional().nullable(),
  content: z.union([ z.lazy(() => PageContentRelationFilterSchema),z.lazy(() => PageContentWhereInputSchema) ]).optional(),
  category: z.union([ z.lazy(() => CategoryNullableRelationFilterSchema),z.lazy(() => CategoryWhereInputSchema) ]).optional().nullable(),
  chemical: z.union([ z.lazy(() => ChemicalNullableRelationFilterSchema),z.lazy(() => ChemicalWhereInputSchema) ]).optional().nullable(),
  ingredients: z.lazy(() => IngredientListRelationFilterSchema).optional()
}).strict());

export const PageOrderByWithAggregationInputSchema: z.ZodType<Prisma.PageOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  slug: z.lazy(() => SortOrderSchema).optional(),
  featuredImageId: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  pageContentId: z.lazy(() => SortOrderSchema).optional(),
  categorySlug: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => PageCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => PageMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => PageMinOrderByAggregateInputSchema).optional()
}).strict();

export const PageScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.PageScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => PageScalarWhereWithAggregatesInputSchema),z.lazy(() => PageScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => PageScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => PageScalarWhereWithAggregatesInputSchema),z.lazy(() => PageScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  title: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  slug: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  featuredImageId: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  pageContentId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  categorySlug: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const CategoryWhereInputSchema: z.ZodType<Prisma.CategoryWhereInput> = z.object({
  AND: z.union([ z.lazy(() => CategoryWhereInputSchema),z.lazy(() => CategoryWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => CategoryWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => CategoryWhereInputSchema),z.lazy(() => CategoryWhereInputSchema).array() ]).optional(),
  title: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  slug: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  page: z.lazy(() => PageListRelationFilterSchema).optional()
}).strict();

export const CategoryOrderByWithRelationInputSchema: z.ZodType<Prisma.CategoryOrderByWithRelationInput> = z.object({
  title: z.lazy(() => SortOrderSchema).optional(),
  slug: z.lazy(() => SortOrderSchema).optional(),
  page: z.lazy(() => PageOrderByRelationAggregateInputSchema).optional()
}).strict();

export const CategoryWhereUniqueInputSchema: z.ZodType<Prisma.CategoryWhereUniqueInput> = z.union([
  z.object({
    title: z.string(),
    slug: z.string()
  }),
  z.object({
    title: z.string(),
  }),
  z.object({
    slug: z.string(),
  }),
])
.and(z.object({
  title: z.string().optional(),
  slug: z.string().optional(),
  AND: z.union([ z.lazy(() => CategoryWhereInputSchema),z.lazy(() => CategoryWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => CategoryWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => CategoryWhereInputSchema),z.lazy(() => CategoryWhereInputSchema).array() ]).optional(),
  page: z.lazy(() => PageListRelationFilterSchema).optional()
}).strict());

export const CategoryOrderByWithAggregationInputSchema: z.ZodType<Prisma.CategoryOrderByWithAggregationInput> = z.object({
  title: z.lazy(() => SortOrderSchema).optional(),
  slug: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => CategoryCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => CategoryMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => CategoryMinOrderByAggregateInputSchema).optional()
}).strict();

export const CategoryScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.CategoryScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => CategoryScalarWhereWithAggregatesInputSchema),z.lazy(() => CategoryScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => CategoryScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => CategoryScalarWhereWithAggregatesInputSchema),z.lazy(() => CategoryScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  title: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  slug: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
}).strict();

export const PageContentWhereInputSchema: z.ZodType<Prisma.PageContentWhereInput> = z.object({
  AND: z.union([ z.lazy(() => PageContentWhereInputSchema),z.lazy(() => PageContentWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => PageContentWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => PageContentWhereInputSchema),z.lazy(() => PageContentWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  html: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  sidebar: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  page: z.lazy(() => PageListRelationFilterSchema).optional(),
  widgets: z.lazy(() => WidgetListRelationFilterSchema).optional()
}).strict();

export const PageContentOrderByWithRelationInputSchema: z.ZodType<Prisma.PageContentOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  html: z.lazy(() => SortOrderSchema).optional(),
  sidebar: z.lazy(() => SortOrderSchema).optional(),
  page: z.lazy(() => PageOrderByRelationAggregateInputSchema).optional(),
  widgets: z.lazy(() => WidgetOrderByRelationAggregateInputSchema).optional()
}).strict();

export const PageContentWhereUniqueInputSchema: z.ZodType<Prisma.PageContentWhereUniqueInput> = z.object({
  id: z.string().cuid()
})
.and(z.object({
  id: z.string().cuid().optional(),
  AND: z.union([ z.lazy(() => PageContentWhereInputSchema),z.lazy(() => PageContentWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => PageContentWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => PageContentWhereInputSchema),z.lazy(() => PageContentWhereInputSchema).array() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  html: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  sidebar: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  page: z.lazy(() => PageListRelationFilterSchema).optional(),
  widgets: z.lazy(() => WidgetListRelationFilterSchema).optional()
}).strict());

export const PageContentOrderByWithAggregationInputSchema: z.ZodType<Prisma.PageContentOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  html: z.lazy(() => SortOrderSchema).optional(),
  sidebar: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => PageContentCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => PageContentMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => PageContentMinOrderByAggregateInputSchema).optional()
}).strict();

export const PageContentScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.PageContentScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => PageContentScalarWhereWithAggregatesInputSchema),z.lazy(() => PageContentScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => PageContentScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => PageContentScalarWhereWithAggregatesInputSchema),z.lazy(() => PageContentScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  html: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  sidebar: z.union([ z.lazy(() => BoolWithAggregatesFilterSchema),z.boolean() ]).optional(),
}).strict();

export const WidgetWhereInputSchema: z.ZodType<Prisma.WidgetWhereInput> = z.object({
  AND: z.union([ z.lazy(() => WidgetWhereInputSchema),z.lazy(() => WidgetWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => WidgetWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => WidgetWhereInputSchema),z.lazy(() => WidgetWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  pageContentId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  pageContent: z.union([ z.lazy(() => PageContentRelationFilterSchema),z.lazy(() => PageContentWhereInputSchema) ]).optional(),
  imageWidget: z.union([ z.lazy(() => ImageWidgetNullableRelationFilterSchema),z.lazy(() => ImageWidgetWhereInputSchema) ]).optional().nullable(),
}).strict();

export const WidgetOrderByWithRelationInputSchema: z.ZodType<Prisma.WidgetOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  pageContentId: z.lazy(() => SortOrderSchema).optional(),
  pageContent: z.lazy(() => PageContentOrderByWithRelationInputSchema).optional(),
  imageWidget: z.lazy(() => ImageWidgetOrderByWithRelationInputSchema).optional()
}).strict();

export const WidgetWhereUniqueInputSchema: z.ZodType<Prisma.WidgetWhereUniqueInput> = z.object({
  id: z.string().cuid()
})
.and(z.object({
  id: z.string().cuid().optional(),
  AND: z.union([ z.lazy(() => WidgetWhereInputSchema),z.lazy(() => WidgetWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => WidgetWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => WidgetWhereInputSchema),z.lazy(() => WidgetWhereInputSchema).array() ]).optional(),
  pageContentId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  pageContent: z.union([ z.lazy(() => PageContentRelationFilterSchema),z.lazy(() => PageContentWhereInputSchema) ]).optional(),
  imageWidget: z.union([ z.lazy(() => ImageWidgetNullableRelationFilterSchema),z.lazy(() => ImageWidgetWhereInputSchema) ]).optional().nullable(),
}).strict());

export const WidgetOrderByWithAggregationInputSchema: z.ZodType<Prisma.WidgetOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  pageContentId: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => WidgetCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => WidgetMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => WidgetMinOrderByAggregateInputSchema).optional()
}).strict();

export const WidgetScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.WidgetScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => WidgetScalarWhereWithAggregatesInputSchema),z.lazy(() => WidgetScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => WidgetScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => WidgetScalarWhereWithAggregatesInputSchema),z.lazy(() => WidgetScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  pageContentId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
}).strict();

export const ImageWidgetWhereInputSchema: z.ZodType<Prisma.ImageWidgetWhereInput> = z.object({
  AND: z.union([ z.lazy(() => ImageWidgetWhereInputSchema),z.lazy(() => ImageWidgetWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ImageWidgetWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ImageWidgetWhereInputSchema),z.lazy(() => ImageWidgetWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  widgetId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  fileId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  widgets: z.union([ z.lazy(() => WidgetRelationFilterSchema),z.lazy(() => WidgetWhereInputSchema) ]).optional(),
  file: z.union([ z.lazy(() => FileRelationFilterSchema),z.lazy(() => FileWhereInputSchema) ]).optional(),
}).strict();

export const ImageWidgetOrderByWithRelationInputSchema: z.ZodType<Prisma.ImageWidgetOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  widgetId: z.lazy(() => SortOrderSchema).optional(),
  fileId: z.lazy(() => SortOrderSchema).optional(),
  widgets: z.lazy(() => WidgetOrderByWithRelationInputSchema).optional(),
  file: z.lazy(() => FileOrderByWithRelationInputSchema).optional()
}).strict();

export const ImageWidgetWhereUniqueInputSchema: z.ZodType<Prisma.ImageWidgetWhereUniqueInput> = z.union([
  z.object({
    id: z.string().cuid(),
    widgetId: z.string()
  }),
  z.object({
    id: z.string().cuid(),
  }),
  z.object({
    widgetId: z.string(),
  }),
])
.and(z.object({
  id: z.string().cuid().optional(),
  widgetId: z.string().optional(),
  AND: z.union([ z.lazy(() => ImageWidgetWhereInputSchema),z.lazy(() => ImageWidgetWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ImageWidgetWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ImageWidgetWhereInputSchema),z.lazy(() => ImageWidgetWhereInputSchema).array() ]).optional(),
  fileId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  widgets: z.union([ z.lazy(() => WidgetRelationFilterSchema),z.lazy(() => WidgetWhereInputSchema) ]).optional(),
  file: z.union([ z.lazy(() => FileRelationFilterSchema),z.lazy(() => FileWhereInputSchema) ]).optional(),
}).strict());

export const ImageWidgetOrderByWithAggregationInputSchema: z.ZodType<Prisma.ImageWidgetOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  widgetId: z.lazy(() => SortOrderSchema).optional(),
  fileId: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => ImageWidgetCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => ImageWidgetMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => ImageWidgetMinOrderByAggregateInputSchema).optional()
}).strict();

export const ImageWidgetScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.ImageWidgetScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => ImageWidgetScalarWhereWithAggregatesInputSchema),z.lazy(() => ImageWidgetScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => ImageWidgetScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ImageWidgetScalarWhereWithAggregatesInputSchema),z.lazy(() => ImageWidgetScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  widgetId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  fileId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
}).strict();

export const EditorWidgetWhereInputSchema: z.ZodType<Prisma.EditorWidgetWhereInput> = z.object({
  AND: z.union([ z.lazy(() => EditorWidgetWhereInputSchema),z.lazy(() => EditorWidgetWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => EditorWidgetWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => EditorWidgetWhereInputSchema),z.lazy(() => EditorWidgetWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
}).strict();

export const EditorWidgetOrderByWithRelationInputSchema: z.ZodType<Prisma.EditorWidgetOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const EditorWidgetWhereUniqueInputSchema: z.ZodType<Prisma.EditorWidgetWhereUniqueInput> = z.object({
  id: z.number().int()
})
.and(z.object({
  id: z.number().int().optional(),
  AND: z.union([ z.lazy(() => EditorWidgetWhereInputSchema),z.lazy(() => EditorWidgetWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => EditorWidgetWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => EditorWidgetWhereInputSchema),z.lazy(() => EditorWidgetWhereInputSchema).array() ]).optional(),
}).strict());

export const EditorWidgetOrderByWithAggregationInputSchema: z.ZodType<Prisma.EditorWidgetOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => EditorWidgetCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => EditorWidgetAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => EditorWidgetMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => EditorWidgetMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => EditorWidgetSumOrderByAggregateInputSchema).optional()
}).strict();

export const EditorWidgetScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.EditorWidgetScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => EditorWidgetScalarWhereWithAggregatesInputSchema),z.lazy(() => EditorWidgetScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => EditorWidgetScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => EditorWidgetScalarWhereWithAggregatesInputSchema),z.lazy(() => EditorWidgetScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
}).strict();

export const UserCreateInputSchema: z.ZodType<Prisma.UserCreateInput> = z.object({
  id: z.string().cuid().optional(),
  username: z.string(),
  password: z.string(),
  email: z.string(),
  role: z.lazy(() => RoleSchema).optional(),
  session: z.lazy(() => SessionCreateNestedOneWithoutUserInputSchema).optional()
}).strict();

export const UserUncheckedCreateInputSchema: z.ZodType<Prisma.UserUncheckedCreateInput> = z.object({
  id: z.string().cuid().optional(),
  username: z.string(),
  password: z.string(),
  email: z.string(),
  role: z.lazy(() => RoleSchema).optional(),
  session: z.lazy(() => SessionUncheckedCreateNestedOneWithoutUserInputSchema).optional()
}).strict();

export const UserUpdateInputSchema: z.ZodType<Prisma.UserUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  username: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  password: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  role: z.union([ z.lazy(() => RoleSchema),z.lazy(() => EnumRoleFieldUpdateOperationsInputSchema) ]).optional(),
  session: z.lazy(() => SessionUpdateOneWithoutUserNestedInputSchema).optional()
}).strict();

export const UserUncheckedUpdateInputSchema: z.ZodType<Prisma.UserUncheckedUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  username: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  password: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  role: z.union([ z.lazy(() => RoleSchema),z.lazy(() => EnumRoleFieldUpdateOperationsInputSchema) ]).optional(),
  session: z.lazy(() => SessionUncheckedUpdateOneWithoutUserNestedInputSchema).optional()
}).strict();

export const UserCreateManyInputSchema: z.ZodType<Prisma.UserCreateManyInput> = z.object({
  id: z.string().cuid().optional(),
  username: z.string(),
  password: z.string(),
  email: z.string(),
  role: z.lazy(() => RoleSchema).optional()
}).strict();

export const UserUpdateManyMutationInputSchema: z.ZodType<Prisma.UserUpdateManyMutationInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  username: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  password: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  role: z.union([ z.lazy(() => RoleSchema),z.lazy(() => EnumRoleFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const UserUncheckedUpdateManyInputSchema: z.ZodType<Prisma.UserUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  username: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  password: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  role: z.union([ z.lazy(() => RoleSchema),z.lazy(() => EnumRoleFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const SessionCreateInputSchema: z.ZodType<Prisma.SessionCreateInput> = z.object({
  id: z.string().uuid().optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutSessionInputSchema)
}).strict();

export const SessionUncheckedCreateInputSchema: z.ZodType<Prisma.SessionUncheckedCreateInput> = z.object({
  id: z.string().uuid().optional(),
  userId: z.string()
}).strict();

export const SessionUpdateInputSchema: z.ZodType<Prisma.SessionUpdateInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  user: z.lazy(() => UserUpdateOneRequiredWithoutSessionNestedInputSchema).optional()
}).strict();

export const SessionUncheckedUpdateInputSchema: z.ZodType<Prisma.SessionUncheckedUpdateInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const SessionCreateManyInputSchema: z.ZodType<Prisma.SessionCreateManyInput> = z.object({
  id: z.string().uuid().optional(),
  userId: z.string()
}).strict();

export const SessionUpdateManyMutationInputSchema: z.ZodType<Prisma.SessionUpdateManyMutationInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const SessionUncheckedUpdateManyInputSchema: z.ZodType<Prisma.SessionUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const FileCreateInputSchema: z.ZodType<Prisma.FileCreateInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  title: z.string(),
  description: z.string().optional().nullable(),
  mimeType: z.string().optional().nullable(),
  imageWidget: z.lazy(() => ImageWidgetCreateNestedManyWithoutFileInputSchema).optional(),
  page: z.lazy(() => PageCreateNestedManyWithoutFeaturedImageInputSchema).optional(),
  composition: z.lazy(() => CompositionCreateNestedManyWithoutVideoInputSchema).optional()
}).strict();

export const FileUncheckedCreateInputSchema: z.ZodType<Prisma.FileUncheckedCreateInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  title: z.string(),
  description: z.string().optional().nullable(),
  mimeType: z.string().optional().nullable(),
  imageWidget: z.lazy(() => ImageWidgetUncheckedCreateNestedManyWithoutFileInputSchema).optional(),
  page: z.lazy(() => PageUncheckedCreateNestedManyWithoutFeaturedImageInputSchema).optional(),
  composition: z.lazy(() => CompositionUncheckedCreateNestedManyWithoutVideoInputSchema).optional()
}).strict();

export const FileUpdateInputSchema: z.ZodType<Prisma.FileUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  mimeType: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  imageWidget: z.lazy(() => ImageWidgetUpdateManyWithoutFileNestedInputSchema).optional(),
  page: z.lazy(() => PageUpdateManyWithoutFeaturedImageNestedInputSchema).optional(),
  composition: z.lazy(() => CompositionUpdateManyWithoutVideoNestedInputSchema).optional()
}).strict();

export const FileUncheckedUpdateInputSchema: z.ZodType<Prisma.FileUncheckedUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  mimeType: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  imageWidget: z.lazy(() => ImageWidgetUncheckedUpdateManyWithoutFileNestedInputSchema).optional(),
  page: z.lazy(() => PageUncheckedUpdateManyWithoutFeaturedImageNestedInputSchema).optional(),
  composition: z.lazy(() => CompositionUncheckedUpdateManyWithoutVideoNestedInputSchema).optional()
}).strict();

export const FileCreateManyInputSchema: z.ZodType<Prisma.FileCreateManyInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  title: z.string(),
  description: z.string().optional().nullable(),
  mimeType: z.string().optional().nullable()
}).strict();

export const FileUpdateManyMutationInputSchema: z.ZodType<Prisma.FileUpdateManyMutationInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  mimeType: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const FileUncheckedUpdateManyInputSchema: z.ZodType<Prisma.FileUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  mimeType: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const IngredientCreateInputSchema: z.ZodType<Prisma.IngredientCreateInput> = z.object({
  id: z.string().cuid().optional(),
  amount: z.number(),
  name: z.string(),
  note: z.string().optional().nullable(),
  composition: z.lazy(() => CompositionCreateNestedOneWithoutIngredientsInputSchema),
  page: z.lazy(() => PageCreateNestedOneWithoutIngredientsInputSchema).optional()
}).strict();

export const IngredientUncheckedCreateInputSchema: z.ZodType<Prisma.IngredientUncheckedCreateInput> = z.object({
  id: z.string().cuid().optional(),
  amount: z.number(),
  name: z.string(),
  note: z.string().optional().nullable(),
  compositionId: z.string(),
  pageId: z.string().optional().nullable()
}).strict();

export const IngredientUpdateInputSchema: z.ZodType<Prisma.IngredientUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  amount: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  note: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  composition: z.lazy(() => CompositionUpdateOneRequiredWithoutIngredientsNestedInputSchema).optional(),
  page: z.lazy(() => PageUpdateOneWithoutIngredientsNestedInputSchema).optional()
}).strict();

export const IngredientUncheckedUpdateInputSchema: z.ZodType<Prisma.IngredientUncheckedUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  amount: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  note: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  compositionId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  pageId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const IngredientCreateManyInputSchema: z.ZodType<Prisma.IngredientCreateManyInput> = z.object({
  id: z.string().cuid().optional(),
  amount: z.number(),
  name: z.string(),
  note: z.string().optional().nullable(),
  compositionId: z.string(),
  pageId: z.string().optional().nullable()
}).strict();

export const IngredientUpdateManyMutationInputSchema: z.ZodType<Prisma.IngredientUpdateManyMutationInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  amount: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  note: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const IngredientUncheckedUpdateManyInputSchema: z.ZodType<Prisma.IngredientUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  amount: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  note: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  compositionId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  pageId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const CompositionCreateInputSchema: z.ZodType<Prisma.CompositionCreateInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  description: z.string().optional().nullable(),
  video: z.lazy(() => FileCreateNestedOneWithoutCompositionInputSchema).optional(),
  ingredients: z.lazy(() => IngredientCreateNestedManyWithoutCompositionInputSchema).optional(),
  categories: z.lazy(() => CompositionCategoryCreateNestedManyWithoutCompositionsInputSchema).optional()
}).strict();

export const CompositionUncheckedCreateInputSchema: z.ZodType<Prisma.CompositionUncheckedCreateInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  description: z.string().optional().nullable(),
  videoId: z.string().optional().nullable(),
  ingredients: z.lazy(() => IngredientUncheckedCreateNestedManyWithoutCompositionInputSchema).optional(),
  categories: z.lazy(() => CompositionCategoryUncheckedCreateNestedManyWithoutCompositionsInputSchema).optional()
}).strict();

export const CompositionUpdateInputSchema: z.ZodType<Prisma.CompositionUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  video: z.lazy(() => FileUpdateOneWithoutCompositionNestedInputSchema).optional(),
  ingredients: z.lazy(() => IngredientUpdateManyWithoutCompositionNestedInputSchema).optional(),
  categories: z.lazy(() => CompositionCategoryUpdateManyWithoutCompositionsNestedInputSchema).optional()
}).strict();

export const CompositionUncheckedUpdateInputSchema: z.ZodType<Prisma.CompositionUncheckedUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  videoId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  ingredients: z.lazy(() => IngredientUncheckedUpdateManyWithoutCompositionNestedInputSchema).optional(),
  categories: z.lazy(() => CompositionCategoryUncheckedUpdateManyWithoutCompositionsNestedInputSchema).optional()
}).strict();

export const CompositionCreateManyInputSchema: z.ZodType<Prisma.CompositionCreateManyInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  description: z.string().optional().nullable(),
  videoId: z.string().optional().nullable()
}).strict();

export const CompositionUpdateManyMutationInputSchema: z.ZodType<Prisma.CompositionUpdateManyMutationInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const CompositionUncheckedUpdateManyInputSchema: z.ZodType<Prisma.CompositionUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  videoId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const CompositionCategoryCreateInputSchema: z.ZodType<Prisma.CompositionCategoryCreateInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  slug: z.string(),
  compositions: z.lazy(() => CompositionCreateNestedManyWithoutCategoriesInputSchema).optional()
}).strict();

export const CompositionCategoryUncheckedCreateInputSchema: z.ZodType<Prisma.CompositionCategoryUncheckedCreateInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  slug: z.string(),
  compositions: z.lazy(() => CompositionUncheckedCreateNestedManyWithoutCategoriesInputSchema).optional()
}).strict();

export const CompositionCategoryUpdateInputSchema: z.ZodType<Prisma.CompositionCategoryUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  slug: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  compositions: z.lazy(() => CompositionUpdateManyWithoutCategoriesNestedInputSchema).optional()
}).strict();

export const CompositionCategoryUncheckedUpdateInputSchema: z.ZodType<Prisma.CompositionCategoryUncheckedUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  slug: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  compositions: z.lazy(() => CompositionUncheckedUpdateManyWithoutCategoriesNestedInputSchema).optional()
}).strict();

export const CompositionCategoryCreateManyInputSchema: z.ZodType<Prisma.CompositionCategoryCreateManyInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  slug: z.string()
}).strict();

export const CompositionCategoryUpdateManyMutationInputSchema: z.ZodType<Prisma.CompositionCategoryUpdateManyMutationInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  slug: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const CompositionCategoryUncheckedUpdateManyInputSchema: z.ZodType<Prisma.CompositionCategoryUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  slug: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const HazardSymbolsCreateInputSchema: z.ZodType<Prisma.HazardSymbolsCreateInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  symbol: z.string(),
  chemicals: z.lazy(() => ChemicalCreateNestedManyWithoutHazardsInputSchema).optional()
}).strict();

export const HazardSymbolsUncheckedCreateInputSchema: z.ZodType<Prisma.HazardSymbolsUncheckedCreateInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  symbol: z.string(),
  chemicals: z.lazy(() => ChemicalUncheckedCreateNestedManyWithoutHazardsInputSchema).optional()
}).strict();

export const HazardSymbolsUpdateInputSchema: z.ZodType<Prisma.HazardSymbolsUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  symbol: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  chemicals: z.lazy(() => ChemicalUpdateManyWithoutHazardsNestedInputSchema).optional()
}).strict();

export const HazardSymbolsUncheckedUpdateInputSchema: z.ZodType<Prisma.HazardSymbolsUncheckedUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  symbol: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  chemicals: z.lazy(() => ChemicalUncheckedUpdateManyWithoutHazardsNestedInputSchema).optional()
}).strict();

export const HazardSymbolsCreateManyInputSchema: z.ZodType<Prisma.HazardSymbolsCreateManyInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  symbol: z.string()
}).strict();

export const HazardSymbolsUpdateManyMutationInputSchema: z.ZodType<Prisma.HazardSymbolsUpdateManyMutationInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  symbol: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const HazardSymbolsUncheckedUpdateManyInputSchema: z.ZodType<Prisma.HazardSymbolsUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  symbol: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ChemicalCreateInputSchema: z.ZodType<Prisma.ChemicalCreateInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  formula: z.string().optional().nullable(),
  hazards: z.lazy(() => HazardSymbolsCreateNestedManyWithoutChemicalsInputSchema).optional(),
  page: z.lazy(() => PageCreateNestedOneWithoutChemicalInputSchema)
}).strict();

export const ChemicalUncheckedCreateInputSchema: z.ZodType<Prisma.ChemicalUncheckedCreateInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  formula: z.string().optional().nullable(),
  pageId: z.string(),
  hazards: z.lazy(() => HazardSymbolsUncheckedCreateNestedManyWithoutChemicalsInputSchema).optional()
}).strict();

export const ChemicalUpdateInputSchema: z.ZodType<Prisma.ChemicalUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  formula: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  hazards: z.lazy(() => HazardSymbolsUpdateManyWithoutChemicalsNestedInputSchema).optional(),
  page: z.lazy(() => PageUpdateOneRequiredWithoutChemicalNestedInputSchema).optional()
}).strict();

export const ChemicalUncheckedUpdateInputSchema: z.ZodType<Prisma.ChemicalUncheckedUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  formula: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  pageId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  hazards: z.lazy(() => HazardSymbolsUncheckedUpdateManyWithoutChemicalsNestedInputSchema).optional()
}).strict();

export const ChemicalCreateManyInputSchema: z.ZodType<Prisma.ChemicalCreateManyInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  formula: z.string().optional().nullable(),
  pageId: z.string()
}).strict();

export const ChemicalUpdateManyMutationInputSchema: z.ZodType<Prisma.ChemicalUpdateManyMutationInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  formula: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const ChemicalUncheckedUpdateManyInputSchema: z.ZodType<Prisma.ChemicalUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  formula: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  pageId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const PageCreateInputSchema: z.ZodType<Prisma.PageCreateInput> = z.object({
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

export const PageUncheckedCreateInputSchema: z.ZodType<Prisma.PageUncheckedCreateInput> = z.object({
  id: z.string().cuid().optional(),
  title: z.string(),
  slug: z.string(),
  featuredImageId: z.string().optional().nullable(),
  pageContentId: z.string(),
  categorySlug: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  chemical: z.lazy(() => ChemicalUncheckedCreateNestedOneWithoutPageInputSchema).optional(),
  ingredients: z.lazy(() => IngredientUncheckedCreateNestedManyWithoutPageInputSchema).optional()
}).strict();

export const PageUpdateInputSchema: z.ZodType<Prisma.PageUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  slug: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  featuredImage: z.lazy(() => FileUpdateOneWithoutPageNestedInputSchema).optional(),
  content: z.lazy(() => PageContentUpdateOneRequiredWithoutPageNestedInputSchema).optional(),
  category: z.lazy(() => CategoryUpdateOneWithoutPageNestedInputSchema).optional(),
  chemical: z.lazy(() => ChemicalUpdateOneWithoutPageNestedInputSchema).optional(),
  ingredients: z.lazy(() => IngredientUpdateManyWithoutPageNestedInputSchema).optional()
}).strict();

export const PageUncheckedUpdateInputSchema: z.ZodType<Prisma.PageUncheckedUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  slug: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  featuredImageId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  pageContentId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  categorySlug: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  chemical: z.lazy(() => ChemicalUncheckedUpdateOneWithoutPageNestedInputSchema).optional(),
  ingredients: z.lazy(() => IngredientUncheckedUpdateManyWithoutPageNestedInputSchema).optional()
}).strict();

export const PageCreateManyInputSchema: z.ZodType<Prisma.PageCreateManyInput> = z.object({
  id: z.string().cuid().optional(),
  title: z.string(),
  slug: z.string(),
  featuredImageId: z.string().optional().nullable(),
  pageContentId: z.string(),
  categorySlug: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const PageUpdateManyMutationInputSchema: z.ZodType<Prisma.PageUpdateManyMutationInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  slug: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const PageUncheckedUpdateManyInputSchema: z.ZodType<Prisma.PageUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  slug: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  featuredImageId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  pageContentId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  categorySlug: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const CategoryCreateInputSchema: z.ZodType<Prisma.CategoryCreateInput> = z.object({
  title: z.string(),
  slug: z.string(),
  page: z.lazy(() => PageCreateNestedManyWithoutCategoryInputSchema).optional()
}).strict();

export const CategoryUncheckedCreateInputSchema: z.ZodType<Prisma.CategoryUncheckedCreateInput> = z.object({
  title: z.string(),
  slug: z.string(),
  page: z.lazy(() => PageUncheckedCreateNestedManyWithoutCategoryInputSchema).optional()
}).strict();

export const CategoryUpdateInputSchema: z.ZodType<Prisma.CategoryUpdateInput> = z.object({
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  slug: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  page: z.lazy(() => PageUpdateManyWithoutCategoryNestedInputSchema).optional()
}).strict();

export const CategoryUncheckedUpdateInputSchema: z.ZodType<Prisma.CategoryUncheckedUpdateInput> = z.object({
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  slug: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  page: z.lazy(() => PageUncheckedUpdateManyWithoutCategoryNestedInputSchema).optional()
}).strict();

export const CategoryCreateManyInputSchema: z.ZodType<Prisma.CategoryCreateManyInput> = z.object({
  title: z.string(),
  slug: z.string()
}).strict();

export const CategoryUpdateManyMutationInputSchema: z.ZodType<Prisma.CategoryUpdateManyMutationInput> = z.object({
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  slug: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const CategoryUncheckedUpdateManyInputSchema: z.ZodType<Prisma.CategoryUncheckedUpdateManyInput> = z.object({
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  slug: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const PageContentCreateInputSchema: z.ZodType<Prisma.PageContentCreateInput> = z.object({
  id: z.string().cuid().optional(),
  createdAt: z.coerce.date().optional(),
  html: z.string().optional(),
  sidebar: z.boolean().optional(),
  page: z.lazy(() => PageCreateNestedManyWithoutContentInputSchema).optional(),
  widgets: z.lazy(() => WidgetCreateNestedManyWithoutPageContentInputSchema).optional()
}).strict();

export const PageContentUncheckedCreateInputSchema: z.ZodType<Prisma.PageContentUncheckedCreateInput> = z.object({
  id: z.string().cuid().optional(),
  createdAt: z.coerce.date().optional(),
  html: z.string().optional(),
  sidebar: z.boolean().optional(),
  page: z.lazy(() => PageUncheckedCreateNestedManyWithoutContentInputSchema).optional(),
  widgets: z.lazy(() => WidgetUncheckedCreateNestedManyWithoutPageContentInputSchema).optional()
}).strict();

export const PageContentUpdateInputSchema: z.ZodType<Prisma.PageContentUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  html: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  sidebar: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  page: z.lazy(() => PageUpdateManyWithoutContentNestedInputSchema).optional(),
  widgets: z.lazy(() => WidgetUpdateManyWithoutPageContentNestedInputSchema).optional()
}).strict();

export const PageContentUncheckedUpdateInputSchema: z.ZodType<Prisma.PageContentUncheckedUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  html: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  sidebar: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  page: z.lazy(() => PageUncheckedUpdateManyWithoutContentNestedInputSchema).optional(),
  widgets: z.lazy(() => WidgetUncheckedUpdateManyWithoutPageContentNestedInputSchema).optional()
}).strict();

export const PageContentCreateManyInputSchema: z.ZodType<Prisma.PageContentCreateManyInput> = z.object({
  id: z.string().cuid().optional(),
  createdAt: z.coerce.date().optional(),
  html: z.string().optional(),
  sidebar: z.boolean().optional()
}).strict();

export const PageContentUpdateManyMutationInputSchema: z.ZodType<Prisma.PageContentUpdateManyMutationInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  html: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  sidebar: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const PageContentUncheckedUpdateManyInputSchema: z.ZodType<Prisma.PageContentUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  html: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  sidebar: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const WidgetCreateInputSchema: z.ZodType<Prisma.WidgetCreateInput> = z.object({
  id: z.string().cuid().optional(),
  pageContent: z.lazy(() => PageContentCreateNestedOneWithoutWidgetsInputSchema),
  imageWidget: z.lazy(() => ImageWidgetCreateNestedOneWithoutWidgetsInputSchema).optional()
}).strict();

export const WidgetUncheckedCreateInputSchema: z.ZodType<Prisma.WidgetUncheckedCreateInput> = z.object({
  id: z.string().cuid().optional(),
  pageContentId: z.string(),
  imageWidget: z.lazy(() => ImageWidgetUncheckedCreateNestedOneWithoutWidgetsInputSchema).optional()
}).strict();

export const WidgetUpdateInputSchema: z.ZodType<Prisma.WidgetUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  pageContent: z.lazy(() => PageContentUpdateOneRequiredWithoutWidgetsNestedInputSchema).optional(),
  imageWidget: z.lazy(() => ImageWidgetUpdateOneWithoutWidgetsNestedInputSchema).optional()
}).strict();

export const WidgetUncheckedUpdateInputSchema: z.ZodType<Prisma.WidgetUncheckedUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  pageContentId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  imageWidget: z.lazy(() => ImageWidgetUncheckedUpdateOneWithoutWidgetsNestedInputSchema).optional()
}).strict();

export const WidgetCreateManyInputSchema: z.ZodType<Prisma.WidgetCreateManyInput> = z.object({
  id: z.string().cuid().optional(),
  pageContentId: z.string()
}).strict();

export const WidgetUpdateManyMutationInputSchema: z.ZodType<Prisma.WidgetUpdateManyMutationInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const WidgetUncheckedUpdateManyInputSchema: z.ZodType<Prisma.WidgetUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  pageContentId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ImageWidgetCreateInputSchema: z.ZodType<Prisma.ImageWidgetCreateInput> = z.object({
  id: z.string().cuid().optional(),
  widgets: z.lazy(() => WidgetCreateNestedOneWithoutImageWidgetInputSchema),
  file: z.lazy(() => FileCreateNestedOneWithoutImageWidgetInputSchema)
}).strict();

export const ImageWidgetUncheckedCreateInputSchema: z.ZodType<Prisma.ImageWidgetUncheckedCreateInput> = z.object({
  id: z.string().cuid().optional(),
  widgetId: z.string(),
  fileId: z.string()
}).strict();

export const ImageWidgetUpdateInputSchema: z.ZodType<Prisma.ImageWidgetUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  widgets: z.lazy(() => WidgetUpdateOneRequiredWithoutImageWidgetNestedInputSchema).optional(),
  file: z.lazy(() => FileUpdateOneRequiredWithoutImageWidgetNestedInputSchema).optional()
}).strict();

export const ImageWidgetUncheckedUpdateInputSchema: z.ZodType<Prisma.ImageWidgetUncheckedUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  widgetId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  fileId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ImageWidgetCreateManyInputSchema: z.ZodType<Prisma.ImageWidgetCreateManyInput> = z.object({
  id: z.string().cuid().optional(),
  widgetId: z.string(),
  fileId: z.string()
}).strict();

export const ImageWidgetUpdateManyMutationInputSchema: z.ZodType<Prisma.ImageWidgetUpdateManyMutationInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ImageWidgetUncheckedUpdateManyInputSchema: z.ZodType<Prisma.ImageWidgetUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  widgetId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  fileId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const EditorWidgetCreateInputSchema: z.ZodType<Prisma.EditorWidgetCreateInput> = z.object({
}).strict();

export const EditorWidgetUncheckedCreateInputSchema: z.ZodType<Prisma.EditorWidgetUncheckedCreateInput> = z.object({
  id: z.number().int().optional()
}).strict();

export const EditorWidgetUpdateInputSchema: z.ZodType<Prisma.EditorWidgetUpdateInput> = z.object({
}).strict();

export const EditorWidgetUncheckedUpdateInputSchema: z.ZodType<Prisma.EditorWidgetUncheckedUpdateInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const EditorWidgetCreateManyInputSchema: z.ZodType<Prisma.EditorWidgetCreateManyInput> = z.object({
  id: z.number().int().optional()
}).strict();

export const EditorWidgetUpdateManyMutationInputSchema: z.ZodType<Prisma.EditorWidgetUpdateManyMutationInput> = z.object({
}).strict();

export const EditorWidgetUncheckedUpdateManyInputSchema: z.ZodType<Prisma.EditorWidgetUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const StringFilterSchema: z.ZodType<Prisma.StringFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  mode: z.lazy(() => QueryModeSchema).optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringFilterSchema) ]).optional(),
}).strict();

export const EnumRoleFilterSchema: z.ZodType<Prisma.EnumRoleFilter> = z.object({
  equals: z.lazy(() => RoleSchema).optional(),
  in: z.lazy(() => RoleSchema).array().optional(),
  notIn: z.lazy(() => RoleSchema).array().optional(),
  not: z.union([ z.lazy(() => RoleSchema),z.lazy(() => NestedEnumRoleFilterSchema) ]).optional(),
}).strict();

export const SessionNullableRelationFilterSchema: z.ZodType<Prisma.SessionNullableRelationFilter> = z.object({
  is: z.lazy(() => SessionWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => SessionWhereInputSchema).optional().nullable()
}).strict();

export const UserCountOrderByAggregateInputSchema: z.ZodType<Prisma.UserCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  username: z.lazy(() => SortOrderSchema).optional(),
  password: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  role: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const UserMaxOrderByAggregateInputSchema: z.ZodType<Prisma.UserMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  username: z.lazy(() => SortOrderSchema).optional(),
  password: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  role: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const UserMinOrderByAggregateInputSchema: z.ZodType<Prisma.UserMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  username: z.lazy(() => SortOrderSchema).optional(),
  password: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  role: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const StringWithAggregatesFilterSchema: z.ZodType<Prisma.StringWithAggregatesFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  mode: z.lazy(() => QueryModeSchema).optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedStringFilterSchema).optional(),
  _max: z.lazy(() => NestedStringFilterSchema).optional()
}).strict();

export const EnumRoleWithAggregatesFilterSchema: z.ZodType<Prisma.EnumRoleWithAggregatesFilter> = z.object({
  equals: z.lazy(() => RoleSchema).optional(),
  in: z.lazy(() => RoleSchema).array().optional(),
  notIn: z.lazy(() => RoleSchema).array().optional(),
  not: z.union([ z.lazy(() => RoleSchema),z.lazy(() => NestedEnumRoleWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumRoleFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumRoleFilterSchema).optional()
}).strict();

export const UserRelationFilterSchema: z.ZodType<Prisma.UserRelationFilter> = z.object({
  is: z.lazy(() => UserWhereInputSchema).optional(),
  isNot: z.lazy(() => UserWhereInputSchema).optional()
}).strict();

export const SessionCountOrderByAggregateInputSchema: z.ZodType<Prisma.SessionCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const SessionMaxOrderByAggregateInputSchema: z.ZodType<Prisma.SessionMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const SessionMinOrderByAggregateInputSchema: z.ZodType<Prisma.SessionMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const StringNullableFilterSchema: z.ZodType<Prisma.StringNullableFilter> = z.object({
  equals: z.string().optional().nullable(),
  in: z.string().array().optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  mode: z.lazy(() => QueryModeSchema).optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const ImageWidgetListRelationFilterSchema: z.ZodType<Prisma.ImageWidgetListRelationFilter> = z.object({
  every: z.lazy(() => ImageWidgetWhereInputSchema).optional(),
  some: z.lazy(() => ImageWidgetWhereInputSchema).optional(),
  none: z.lazy(() => ImageWidgetWhereInputSchema).optional()
}).strict();

export const PageListRelationFilterSchema: z.ZodType<Prisma.PageListRelationFilter> = z.object({
  every: z.lazy(() => PageWhereInputSchema).optional(),
  some: z.lazy(() => PageWhereInputSchema).optional(),
  none: z.lazy(() => PageWhereInputSchema).optional()
}).strict();

export const CompositionListRelationFilterSchema: z.ZodType<Prisma.CompositionListRelationFilter> = z.object({
  every: z.lazy(() => CompositionWhereInputSchema).optional(),
  some: z.lazy(() => CompositionWhereInputSchema).optional(),
  none: z.lazy(() => CompositionWhereInputSchema).optional()
}).strict();

export const SortOrderInputSchema: z.ZodType<Prisma.SortOrderInput> = z.object({
  sort: z.lazy(() => SortOrderSchema),
  nulls: z.lazy(() => NullsOrderSchema).optional()
}).strict();

export const ImageWidgetOrderByRelationAggregateInputSchema: z.ZodType<Prisma.ImageWidgetOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const PageOrderByRelationAggregateInputSchema: z.ZodType<Prisma.PageOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const CompositionOrderByRelationAggregateInputSchema: z.ZodType<Prisma.CompositionOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const FileCountOrderByAggregateInputSchema: z.ZodType<Prisma.FileCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  mimeType: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const FileMaxOrderByAggregateInputSchema: z.ZodType<Prisma.FileMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  mimeType: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const FileMinOrderByAggregateInputSchema: z.ZodType<Prisma.FileMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  mimeType: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const StringNullableWithAggregatesFilterSchema: z.ZodType<Prisma.StringNullableWithAggregatesFilter> = z.object({
  equals: z.string().optional().nullable(),
  in: z.string().array().optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  mode: z.lazy(() => QueryModeSchema).optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedStringNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedStringNullableFilterSchema).optional()
}).strict();

export const FloatFilterSchema: z.ZodType<Prisma.FloatFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedFloatFilterSchema) ]).optional(),
}).strict();

export const CompositionRelationFilterSchema: z.ZodType<Prisma.CompositionRelationFilter> = z.object({
  is: z.lazy(() => CompositionWhereInputSchema).optional(),
  isNot: z.lazy(() => CompositionWhereInputSchema).optional()
}).strict();

export const PageNullableRelationFilterSchema: z.ZodType<Prisma.PageNullableRelationFilter> = z.object({
  is: z.lazy(() => PageWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => PageWhereInputSchema).optional().nullable()
}).strict();

export const IngredientCountOrderByAggregateInputSchema: z.ZodType<Prisma.IngredientCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  amount: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  note: z.lazy(() => SortOrderSchema).optional(),
  compositionId: z.lazy(() => SortOrderSchema).optional(),
  pageId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const IngredientAvgOrderByAggregateInputSchema: z.ZodType<Prisma.IngredientAvgOrderByAggregateInput> = z.object({
  amount: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const IngredientMaxOrderByAggregateInputSchema: z.ZodType<Prisma.IngredientMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  amount: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  note: z.lazy(() => SortOrderSchema).optional(),
  compositionId: z.lazy(() => SortOrderSchema).optional(),
  pageId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const IngredientMinOrderByAggregateInputSchema: z.ZodType<Prisma.IngredientMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  amount: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  note: z.lazy(() => SortOrderSchema).optional(),
  compositionId: z.lazy(() => SortOrderSchema).optional(),
  pageId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const IngredientSumOrderByAggregateInputSchema: z.ZodType<Prisma.IngredientSumOrderByAggregateInput> = z.object({
  amount: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const FloatWithAggregatesFilterSchema: z.ZodType<Prisma.FloatWithAggregatesFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedFloatWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatFilterSchema).optional(),
  _sum: z.lazy(() => NestedFloatFilterSchema).optional(),
  _min: z.lazy(() => NestedFloatFilterSchema).optional(),
  _max: z.lazy(() => NestedFloatFilterSchema).optional()
}).strict();

export const FileNullableRelationFilterSchema: z.ZodType<Prisma.FileNullableRelationFilter> = z.object({
  is: z.lazy(() => FileWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => FileWhereInputSchema).optional().nullable()
}).strict();

export const IngredientListRelationFilterSchema: z.ZodType<Prisma.IngredientListRelationFilter> = z.object({
  every: z.lazy(() => IngredientWhereInputSchema).optional(),
  some: z.lazy(() => IngredientWhereInputSchema).optional(),
  none: z.lazy(() => IngredientWhereInputSchema).optional()
}).strict();

export const CompositionCategoryListRelationFilterSchema: z.ZodType<Prisma.CompositionCategoryListRelationFilter> = z.object({
  every: z.lazy(() => CompositionCategoryWhereInputSchema).optional(),
  some: z.lazy(() => CompositionCategoryWhereInputSchema).optional(),
  none: z.lazy(() => CompositionCategoryWhereInputSchema).optional()
}).strict();

export const IngredientOrderByRelationAggregateInputSchema: z.ZodType<Prisma.IngredientOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const CompositionCategoryOrderByRelationAggregateInputSchema: z.ZodType<Prisma.CompositionCategoryOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const CompositionCountOrderByAggregateInputSchema: z.ZodType<Prisma.CompositionCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  videoId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const CompositionMaxOrderByAggregateInputSchema: z.ZodType<Prisma.CompositionMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  videoId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const CompositionMinOrderByAggregateInputSchema: z.ZodType<Prisma.CompositionMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  videoId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const CompositionCategoryCountOrderByAggregateInputSchema: z.ZodType<Prisma.CompositionCategoryCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  slug: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const CompositionCategoryMaxOrderByAggregateInputSchema: z.ZodType<Prisma.CompositionCategoryMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  slug: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const CompositionCategoryMinOrderByAggregateInputSchema: z.ZodType<Prisma.CompositionCategoryMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  slug: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ChemicalListRelationFilterSchema: z.ZodType<Prisma.ChemicalListRelationFilter> = z.object({
  every: z.lazy(() => ChemicalWhereInputSchema).optional(),
  some: z.lazy(() => ChemicalWhereInputSchema).optional(),
  none: z.lazy(() => ChemicalWhereInputSchema).optional()
}).strict();

export const ChemicalOrderByRelationAggregateInputSchema: z.ZodType<Prisma.ChemicalOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const HazardSymbolsCountOrderByAggregateInputSchema: z.ZodType<Prisma.HazardSymbolsCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  symbol: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const HazardSymbolsMaxOrderByAggregateInputSchema: z.ZodType<Prisma.HazardSymbolsMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  symbol: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const HazardSymbolsMinOrderByAggregateInputSchema: z.ZodType<Prisma.HazardSymbolsMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  symbol: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const HazardSymbolsListRelationFilterSchema: z.ZodType<Prisma.HazardSymbolsListRelationFilter> = z.object({
  every: z.lazy(() => HazardSymbolsWhereInputSchema).optional(),
  some: z.lazy(() => HazardSymbolsWhereInputSchema).optional(),
  none: z.lazy(() => HazardSymbolsWhereInputSchema).optional()
}).strict();

export const PageRelationFilterSchema: z.ZodType<Prisma.PageRelationFilter> = z.object({
  is: z.lazy(() => PageWhereInputSchema).optional(),
  isNot: z.lazy(() => PageWhereInputSchema).optional()
}).strict();

export const HazardSymbolsOrderByRelationAggregateInputSchema: z.ZodType<Prisma.HazardSymbolsOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ChemicalCountOrderByAggregateInputSchema: z.ZodType<Prisma.ChemicalCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  formula: z.lazy(() => SortOrderSchema).optional(),
  pageId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ChemicalMaxOrderByAggregateInputSchema: z.ZodType<Prisma.ChemicalMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  formula: z.lazy(() => SortOrderSchema).optional(),
  pageId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ChemicalMinOrderByAggregateInputSchema: z.ZodType<Prisma.ChemicalMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  formula: z.lazy(() => SortOrderSchema).optional(),
  pageId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const DateTimeFilterSchema: z.ZodType<Prisma.DateTimeFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeFilterSchema) ]).optional(),
}).strict();

export const PageContentRelationFilterSchema: z.ZodType<Prisma.PageContentRelationFilter> = z.object({
  is: z.lazy(() => PageContentWhereInputSchema).optional(),
  isNot: z.lazy(() => PageContentWhereInputSchema).optional()
}).strict();

export const CategoryNullableRelationFilterSchema: z.ZodType<Prisma.CategoryNullableRelationFilter> = z.object({
  is: z.lazy(() => CategoryWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => CategoryWhereInputSchema).optional().nullable()
}).strict();

export const ChemicalNullableRelationFilterSchema: z.ZodType<Prisma.ChemicalNullableRelationFilter> = z.object({
  is: z.lazy(() => ChemicalWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => ChemicalWhereInputSchema).optional().nullable()
}).strict();

export const PageCountOrderByAggregateInputSchema: z.ZodType<Prisma.PageCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  slug: z.lazy(() => SortOrderSchema).optional(),
  featuredImageId: z.lazy(() => SortOrderSchema).optional(),
  pageContentId: z.lazy(() => SortOrderSchema).optional(),
  categorySlug: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const PageMaxOrderByAggregateInputSchema: z.ZodType<Prisma.PageMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  slug: z.lazy(() => SortOrderSchema).optional(),
  featuredImageId: z.lazy(() => SortOrderSchema).optional(),
  pageContentId: z.lazy(() => SortOrderSchema).optional(),
  categorySlug: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const PageMinOrderByAggregateInputSchema: z.ZodType<Prisma.PageMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  slug: z.lazy(() => SortOrderSchema).optional(),
  featuredImageId: z.lazy(() => SortOrderSchema).optional(),
  pageContentId: z.lazy(() => SortOrderSchema).optional(),
  categorySlug: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const DateTimeWithAggregatesFilterSchema: z.ZodType<Prisma.DateTimeWithAggregatesFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedDateTimeFilterSchema).optional(),
  _max: z.lazy(() => NestedDateTimeFilterSchema).optional()
}).strict();

export const CategoryCountOrderByAggregateInputSchema: z.ZodType<Prisma.CategoryCountOrderByAggregateInput> = z.object({
  title: z.lazy(() => SortOrderSchema).optional(),
  slug: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const CategoryMaxOrderByAggregateInputSchema: z.ZodType<Prisma.CategoryMaxOrderByAggregateInput> = z.object({
  title: z.lazy(() => SortOrderSchema).optional(),
  slug: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const CategoryMinOrderByAggregateInputSchema: z.ZodType<Prisma.CategoryMinOrderByAggregateInput> = z.object({
  title: z.lazy(() => SortOrderSchema).optional(),
  slug: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const BoolFilterSchema: z.ZodType<Prisma.BoolFilter> = z.object({
  equals: z.boolean().optional(),
  not: z.union([ z.boolean(),z.lazy(() => NestedBoolFilterSchema) ]).optional(),
}).strict();

export const WidgetListRelationFilterSchema: z.ZodType<Prisma.WidgetListRelationFilter> = z.object({
  every: z.lazy(() => WidgetWhereInputSchema).optional(),
  some: z.lazy(() => WidgetWhereInputSchema).optional(),
  none: z.lazy(() => WidgetWhereInputSchema).optional()
}).strict();

export const WidgetOrderByRelationAggregateInputSchema: z.ZodType<Prisma.WidgetOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const PageContentCountOrderByAggregateInputSchema: z.ZodType<Prisma.PageContentCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  html: z.lazy(() => SortOrderSchema).optional(),
  sidebar: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const PageContentMaxOrderByAggregateInputSchema: z.ZodType<Prisma.PageContentMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  html: z.lazy(() => SortOrderSchema).optional(),
  sidebar: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const PageContentMinOrderByAggregateInputSchema: z.ZodType<Prisma.PageContentMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  html: z.lazy(() => SortOrderSchema).optional(),
  sidebar: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const BoolWithAggregatesFilterSchema: z.ZodType<Prisma.BoolWithAggregatesFilter> = z.object({
  equals: z.boolean().optional(),
  not: z.union([ z.boolean(),z.lazy(() => NestedBoolWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedBoolFilterSchema).optional(),
  _max: z.lazy(() => NestedBoolFilterSchema).optional()
}).strict();

export const ImageWidgetNullableRelationFilterSchema: z.ZodType<Prisma.ImageWidgetNullableRelationFilter> = z.object({
  is: z.lazy(() => ImageWidgetWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => ImageWidgetWhereInputSchema).optional().nullable()
}).strict();

export const WidgetCountOrderByAggregateInputSchema: z.ZodType<Prisma.WidgetCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  pageContentId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const WidgetMaxOrderByAggregateInputSchema: z.ZodType<Prisma.WidgetMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  pageContentId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const WidgetMinOrderByAggregateInputSchema: z.ZodType<Prisma.WidgetMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  pageContentId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const WidgetRelationFilterSchema: z.ZodType<Prisma.WidgetRelationFilter> = z.object({
  is: z.lazy(() => WidgetWhereInputSchema).optional(),
  isNot: z.lazy(() => WidgetWhereInputSchema).optional()
}).strict();

export const FileRelationFilterSchema: z.ZodType<Prisma.FileRelationFilter> = z.object({
  is: z.lazy(() => FileWhereInputSchema).optional(),
  isNot: z.lazy(() => FileWhereInputSchema).optional()
}).strict();

export const ImageWidgetCountOrderByAggregateInputSchema: z.ZodType<Prisma.ImageWidgetCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  widgetId: z.lazy(() => SortOrderSchema).optional(),
  fileId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ImageWidgetMaxOrderByAggregateInputSchema: z.ZodType<Prisma.ImageWidgetMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  widgetId: z.lazy(() => SortOrderSchema).optional(),
  fileId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ImageWidgetMinOrderByAggregateInputSchema: z.ZodType<Prisma.ImageWidgetMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  widgetId: z.lazy(() => SortOrderSchema).optional(),
  fileId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const IntFilterSchema: z.ZodType<Prisma.IntFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntFilterSchema) ]).optional(),
}).strict();

export const EditorWidgetCountOrderByAggregateInputSchema: z.ZodType<Prisma.EditorWidgetCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const EditorWidgetAvgOrderByAggregateInputSchema: z.ZodType<Prisma.EditorWidgetAvgOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const EditorWidgetMaxOrderByAggregateInputSchema: z.ZodType<Prisma.EditorWidgetMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const EditorWidgetMinOrderByAggregateInputSchema: z.ZodType<Prisma.EditorWidgetMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const EditorWidgetSumOrderByAggregateInputSchema: z.ZodType<Prisma.EditorWidgetSumOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const IntWithAggregatesFilterSchema: z.ZodType<Prisma.IntWithAggregatesFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatFilterSchema).optional(),
  _sum: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedIntFilterSchema).optional(),
  _max: z.lazy(() => NestedIntFilterSchema).optional()
}).strict();

export const SessionCreateNestedOneWithoutUserInputSchema: z.ZodType<Prisma.SessionCreateNestedOneWithoutUserInput> = z.object({
  create: z.union([ z.lazy(() => SessionCreateWithoutUserInputSchema),z.lazy(() => SessionUncheckedCreateWithoutUserInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => SessionCreateOrConnectWithoutUserInputSchema).optional(),
  connect: z.lazy(() => SessionWhereUniqueInputSchema).optional()
}).strict();

export const SessionUncheckedCreateNestedOneWithoutUserInputSchema: z.ZodType<Prisma.SessionUncheckedCreateNestedOneWithoutUserInput> = z.object({
  create: z.union([ z.lazy(() => SessionCreateWithoutUserInputSchema),z.lazy(() => SessionUncheckedCreateWithoutUserInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => SessionCreateOrConnectWithoutUserInputSchema).optional(),
  connect: z.lazy(() => SessionWhereUniqueInputSchema).optional()
}).strict();

export const StringFieldUpdateOperationsInputSchema: z.ZodType<Prisma.StringFieldUpdateOperationsInput> = z.object({
  set: z.string().optional()
}).strict();

export const EnumRoleFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumRoleFieldUpdateOperationsInput> = z.object({
  set: z.lazy(() => RoleSchema).optional()
}).strict();

export const SessionUpdateOneWithoutUserNestedInputSchema: z.ZodType<Prisma.SessionUpdateOneWithoutUserNestedInput> = z.object({
  create: z.union([ z.lazy(() => SessionCreateWithoutUserInputSchema),z.lazy(() => SessionUncheckedCreateWithoutUserInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => SessionCreateOrConnectWithoutUserInputSchema).optional(),
  upsert: z.lazy(() => SessionUpsertWithoutUserInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => SessionWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => SessionWhereInputSchema) ]).optional(),
  connect: z.lazy(() => SessionWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => SessionUpdateToOneWithWhereWithoutUserInputSchema),z.lazy(() => SessionUpdateWithoutUserInputSchema),z.lazy(() => SessionUncheckedUpdateWithoutUserInputSchema) ]).optional(),
}).strict();

export const SessionUncheckedUpdateOneWithoutUserNestedInputSchema: z.ZodType<Prisma.SessionUncheckedUpdateOneWithoutUserNestedInput> = z.object({
  create: z.union([ z.lazy(() => SessionCreateWithoutUserInputSchema),z.lazy(() => SessionUncheckedCreateWithoutUserInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => SessionCreateOrConnectWithoutUserInputSchema).optional(),
  upsert: z.lazy(() => SessionUpsertWithoutUserInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => SessionWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => SessionWhereInputSchema) ]).optional(),
  connect: z.lazy(() => SessionWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => SessionUpdateToOneWithWhereWithoutUserInputSchema),z.lazy(() => SessionUpdateWithoutUserInputSchema),z.lazy(() => SessionUncheckedUpdateWithoutUserInputSchema) ]).optional(),
}).strict();

export const UserCreateNestedOneWithoutSessionInputSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutSessionInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutSessionInputSchema),z.lazy(() => UserUncheckedCreateWithoutSessionInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutSessionInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional()
}).strict();

export const UserUpdateOneRequiredWithoutSessionNestedInputSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutSessionNestedInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutSessionInputSchema),z.lazy(() => UserUncheckedCreateWithoutSessionInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutSessionInputSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutSessionInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => UserUpdateToOneWithWhereWithoutSessionInputSchema),z.lazy(() => UserUpdateWithoutSessionInputSchema),z.lazy(() => UserUncheckedUpdateWithoutSessionInputSchema) ]).optional(),
}).strict();

export const ImageWidgetCreateNestedManyWithoutFileInputSchema: z.ZodType<Prisma.ImageWidgetCreateNestedManyWithoutFileInput> = z.object({
  create: z.union([ z.lazy(() => ImageWidgetCreateWithoutFileInputSchema),z.lazy(() => ImageWidgetCreateWithoutFileInputSchema).array(),z.lazy(() => ImageWidgetUncheckedCreateWithoutFileInputSchema),z.lazy(() => ImageWidgetUncheckedCreateWithoutFileInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ImageWidgetCreateOrConnectWithoutFileInputSchema),z.lazy(() => ImageWidgetCreateOrConnectWithoutFileInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ImageWidgetCreateManyFileInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => ImageWidgetWhereUniqueInputSchema),z.lazy(() => ImageWidgetWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const PageCreateNestedManyWithoutFeaturedImageInputSchema: z.ZodType<Prisma.PageCreateNestedManyWithoutFeaturedImageInput> = z.object({
  create: z.union([ z.lazy(() => PageCreateWithoutFeaturedImageInputSchema),z.lazy(() => PageCreateWithoutFeaturedImageInputSchema).array(),z.lazy(() => PageUncheckedCreateWithoutFeaturedImageInputSchema),z.lazy(() => PageUncheckedCreateWithoutFeaturedImageInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PageCreateOrConnectWithoutFeaturedImageInputSchema),z.lazy(() => PageCreateOrConnectWithoutFeaturedImageInputSchema).array() ]).optional(),
  createMany: z.lazy(() => PageCreateManyFeaturedImageInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => PageWhereUniqueInputSchema),z.lazy(() => PageWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const CompositionCreateNestedManyWithoutVideoInputSchema: z.ZodType<Prisma.CompositionCreateNestedManyWithoutVideoInput> = z.object({
  create: z.union([ z.lazy(() => CompositionCreateWithoutVideoInputSchema),z.lazy(() => CompositionCreateWithoutVideoInputSchema).array(),z.lazy(() => CompositionUncheckedCreateWithoutVideoInputSchema),z.lazy(() => CompositionUncheckedCreateWithoutVideoInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => CompositionCreateOrConnectWithoutVideoInputSchema),z.lazy(() => CompositionCreateOrConnectWithoutVideoInputSchema).array() ]).optional(),
  createMany: z.lazy(() => CompositionCreateManyVideoInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => CompositionWhereUniqueInputSchema),z.lazy(() => CompositionWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const ImageWidgetUncheckedCreateNestedManyWithoutFileInputSchema: z.ZodType<Prisma.ImageWidgetUncheckedCreateNestedManyWithoutFileInput> = z.object({
  create: z.union([ z.lazy(() => ImageWidgetCreateWithoutFileInputSchema),z.lazy(() => ImageWidgetCreateWithoutFileInputSchema).array(),z.lazy(() => ImageWidgetUncheckedCreateWithoutFileInputSchema),z.lazy(() => ImageWidgetUncheckedCreateWithoutFileInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ImageWidgetCreateOrConnectWithoutFileInputSchema),z.lazy(() => ImageWidgetCreateOrConnectWithoutFileInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ImageWidgetCreateManyFileInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => ImageWidgetWhereUniqueInputSchema),z.lazy(() => ImageWidgetWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const PageUncheckedCreateNestedManyWithoutFeaturedImageInputSchema: z.ZodType<Prisma.PageUncheckedCreateNestedManyWithoutFeaturedImageInput> = z.object({
  create: z.union([ z.lazy(() => PageCreateWithoutFeaturedImageInputSchema),z.lazy(() => PageCreateWithoutFeaturedImageInputSchema).array(),z.lazy(() => PageUncheckedCreateWithoutFeaturedImageInputSchema),z.lazy(() => PageUncheckedCreateWithoutFeaturedImageInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PageCreateOrConnectWithoutFeaturedImageInputSchema),z.lazy(() => PageCreateOrConnectWithoutFeaturedImageInputSchema).array() ]).optional(),
  createMany: z.lazy(() => PageCreateManyFeaturedImageInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => PageWhereUniqueInputSchema),z.lazy(() => PageWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const CompositionUncheckedCreateNestedManyWithoutVideoInputSchema: z.ZodType<Prisma.CompositionUncheckedCreateNestedManyWithoutVideoInput> = z.object({
  create: z.union([ z.lazy(() => CompositionCreateWithoutVideoInputSchema),z.lazy(() => CompositionCreateWithoutVideoInputSchema).array(),z.lazy(() => CompositionUncheckedCreateWithoutVideoInputSchema),z.lazy(() => CompositionUncheckedCreateWithoutVideoInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => CompositionCreateOrConnectWithoutVideoInputSchema),z.lazy(() => CompositionCreateOrConnectWithoutVideoInputSchema).array() ]).optional(),
  createMany: z.lazy(() => CompositionCreateManyVideoInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => CompositionWhereUniqueInputSchema),z.lazy(() => CompositionWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const NullableStringFieldUpdateOperationsInputSchema: z.ZodType<Prisma.NullableStringFieldUpdateOperationsInput> = z.object({
  set: z.string().optional().nullable()
}).strict();

export const ImageWidgetUpdateManyWithoutFileNestedInputSchema: z.ZodType<Prisma.ImageWidgetUpdateManyWithoutFileNestedInput> = z.object({
  create: z.union([ z.lazy(() => ImageWidgetCreateWithoutFileInputSchema),z.lazy(() => ImageWidgetCreateWithoutFileInputSchema).array(),z.lazy(() => ImageWidgetUncheckedCreateWithoutFileInputSchema),z.lazy(() => ImageWidgetUncheckedCreateWithoutFileInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ImageWidgetCreateOrConnectWithoutFileInputSchema),z.lazy(() => ImageWidgetCreateOrConnectWithoutFileInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => ImageWidgetUpsertWithWhereUniqueWithoutFileInputSchema),z.lazy(() => ImageWidgetUpsertWithWhereUniqueWithoutFileInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ImageWidgetCreateManyFileInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => ImageWidgetWhereUniqueInputSchema),z.lazy(() => ImageWidgetWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => ImageWidgetWhereUniqueInputSchema),z.lazy(() => ImageWidgetWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => ImageWidgetWhereUniqueInputSchema),z.lazy(() => ImageWidgetWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ImageWidgetWhereUniqueInputSchema),z.lazy(() => ImageWidgetWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => ImageWidgetUpdateWithWhereUniqueWithoutFileInputSchema),z.lazy(() => ImageWidgetUpdateWithWhereUniqueWithoutFileInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => ImageWidgetUpdateManyWithWhereWithoutFileInputSchema),z.lazy(() => ImageWidgetUpdateManyWithWhereWithoutFileInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => ImageWidgetScalarWhereInputSchema),z.lazy(() => ImageWidgetScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const PageUpdateManyWithoutFeaturedImageNestedInputSchema: z.ZodType<Prisma.PageUpdateManyWithoutFeaturedImageNestedInput> = z.object({
  create: z.union([ z.lazy(() => PageCreateWithoutFeaturedImageInputSchema),z.lazy(() => PageCreateWithoutFeaturedImageInputSchema).array(),z.lazy(() => PageUncheckedCreateWithoutFeaturedImageInputSchema),z.lazy(() => PageUncheckedCreateWithoutFeaturedImageInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PageCreateOrConnectWithoutFeaturedImageInputSchema),z.lazy(() => PageCreateOrConnectWithoutFeaturedImageInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => PageUpsertWithWhereUniqueWithoutFeaturedImageInputSchema),z.lazy(() => PageUpsertWithWhereUniqueWithoutFeaturedImageInputSchema).array() ]).optional(),
  createMany: z.lazy(() => PageCreateManyFeaturedImageInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => PageWhereUniqueInputSchema),z.lazy(() => PageWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => PageWhereUniqueInputSchema),z.lazy(() => PageWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => PageWhereUniqueInputSchema),z.lazy(() => PageWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => PageWhereUniqueInputSchema),z.lazy(() => PageWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => PageUpdateWithWhereUniqueWithoutFeaturedImageInputSchema),z.lazy(() => PageUpdateWithWhereUniqueWithoutFeaturedImageInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => PageUpdateManyWithWhereWithoutFeaturedImageInputSchema),z.lazy(() => PageUpdateManyWithWhereWithoutFeaturedImageInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => PageScalarWhereInputSchema),z.lazy(() => PageScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const CompositionUpdateManyWithoutVideoNestedInputSchema: z.ZodType<Prisma.CompositionUpdateManyWithoutVideoNestedInput> = z.object({
  create: z.union([ z.lazy(() => CompositionCreateWithoutVideoInputSchema),z.lazy(() => CompositionCreateWithoutVideoInputSchema).array(),z.lazy(() => CompositionUncheckedCreateWithoutVideoInputSchema),z.lazy(() => CompositionUncheckedCreateWithoutVideoInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => CompositionCreateOrConnectWithoutVideoInputSchema),z.lazy(() => CompositionCreateOrConnectWithoutVideoInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => CompositionUpsertWithWhereUniqueWithoutVideoInputSchema),z.lazy(() => CompositionUpsertWithWhereUniqueWithoutVideoInputSchema).array() ]).optional(),
  createMany: z.lazy(() => CompositionCreateManyVideoInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => CompositionWhereUniqueInputSchema),z.lazy(() => CompositionWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => CompositionWhereUniqueInputSchema),z.lazy(() => CompositionWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => CompositionWhereUniqueInputSchema),z.lazy(() => CompositionWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => CompositionWhereUniqueInputSchema),z.lazy(() => CompositionWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => CompositionUpdateWithWhereUniqueWithoutVideoInputSchema),z.lazy(() => CompositionUpdateWithWhereUniqueWithoutVideoInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => CompositionUpdateManyWithWhereWithoutVideoInputSchema),z.lazy(() => CompositionUpdateManyWithWhereWithoutVideoInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => CompositionScalarWhereInputSchema),z.lazy(() => CompositionScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const ImageWidgetUncheckedUpdateManyWithoutFileNestedInputSchema: z.ZodType<Prisma.ImageWidgetUncheckedUpdateManyWithoutFileNestedInput> = z.object({
  create: z.union([ z.lazy(() => ImageWidgetCreateWithoutFileInputSchema),z.lazy(() => ImageWidgetCreateWithoutFileInputSchema).array(),z.lazy(() => ImageWidgetUncheckedCreateWithoutFileInputSchema),z.lazy(() => ImageWidgetUncheckedCreateWithoutFileInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ImageWidgetCreateOrConnectWithoutFileInputSchema),z.lazy(() => ImageWidgetCreateOrConnectWithoutFileInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => ImageWidgetUpsertWithWhereUniqueWithoutFileInputSchema),z.lazy(() => ImageWidgetUpsertWithWhereUniqueWithoutFileInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ImageWidgetCreateManyFileInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => ImageWidgetWhereUniqueInputSchema),z.lazy(() => ImageWidgetWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => ImageWidgetWhereUniqueInputSchema),z.lazy(() => ImageWidgetWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => ImageWidgetWhereUniqueInputSchema),z.lazy(() => ImageWidgetWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ImageWidgetWhereUniqueInputSchema),z.lazy(() => ImageWidgetWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => ImageWidgetUpdateWithWhereUniqueWithoutFileInputSchema),z.lazy(() => ImageWidgetUpdateWithWhereUniqueWithoutFileInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => ImageWidgetUpdateManyWithWhereWithoutFileInputSchema),z.lazy(() => ImageWidgetUpdateManyWithWhereWithoutFileInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => ImageWidgetScalarWhereInputSchema),z.lazy(() => ImageWidgetScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const PageUncheckedUpdateManyWithoutFeaturedImageNestedInputSchema: z.ZodType<Prisma.PageUncheckedUpdateManyWithoutFeaturedImageNestedInput> = z.object({
  create: z.union([ z.lazy(() => PageCreateWithoutFeaturedImageInputSchema),z.lazy(() => PageCreateWithoutFeaturedImageInputSchema).array(),z.lazy(() => PageUncheckedCreateWithoutFeaturedImageInputSchema),z.lazy(() => PageUncheckedCreateWithoutFeaturedImageInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PageCreateOrConnectWithoutFeaturedImageInputSchema),z.lazy(() => PageCreateOrConnectWithoutFeaturedImageInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => PageUpsertWithWhereUniqueWithoutFeaturedImageInputSchema),z.lazy(() => PageUpsertWithWhereUniqueWithoutFeaturedImageInputSchema).array() ]).optional(),
  createMany: z.lazy(() => PageCreateManyFeaturedImageInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => PageWhereUniqueInputSchema),z.lazy(() => PageWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => PageWhereUniqueInputSchema),z.lazy(() => PageWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => PageWhereUniqueInputSchema),z.lazy(() => PageWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => PageWhereUniqueInputSchema),z.lazy(() => PageWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => PageUpdateWithWhereUniqueWithoutFeaturedImageInputSchema),z.lazy(() => PageUpdateWithWhereUniqueWithoutFeaturedImageInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => PageUpdateManyWithWhereWithoutFeaturedImageInputSchema),z.lazy(() => PageUpdateManyWithWhereWithoutFeaturedImageInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => PageScalarWhereInputSchema),z.lazy(() => PageScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const CompositionUncheckedUpdateManyWithoutVideoNestedInputSchema: z.ZodType<Prisma.CompositionUncheckedUpdateManyWithoutVideoNestedInput> = z.object({
  create: z.union([ z.lazy(() => CompositionCreateWithoutVideoInputSchema),z.lazy(() => CompositionCreateWithoutVideoInputSchema).array(),z.lazy(() => CompositionUncheckedCreateWithoutVideoInputSchema),z.lazy(() => CompositionUncheckedCreateWithoutVideoInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => CompositionCreateOrConnectWithoutVideoInputSchema),z.lazy(() => CompositionCreateOrConnectWithoutVideoInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => CompositionUpsertWithWhereUniqueWithoutVideoInputSchema),z.lazy(() => CompositionUpsertWithWhereUniqueWithoutVideoInputSchema).array() ]).optional(),
  createMany: z.lazy(() => CompositionCreateManyVideoInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => CompositionWhereUniqueInputSchema),z.lazy(() => CompositionWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => CompositionWhereUniqueInputSchema),z.lazy(() => CompositionWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => CompositionWhereUniqueInputSchema),z.lazy(() => CompositionWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => CompositionWhereUniqueInputSchema),z.lazy(() => CompositionWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => CompositionUpdateWithWhereUniqueWithoutVideoInputSchema),z.lazy(() => CompositionUpdateWithWhereUniqueWithoutVideoInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => CompositionUpdateManyWithWhereWithoutVideoInputSchema),z.lazy(() => CompositionUpdateManyWithWhereWithoutVideoInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => CompositionScalarWhereInputSchema),z.lazy(() => CompositionScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const CompositionCreateNestedOneWithoutIngredientsInputSchema: z.ZodType<Prisma.CompositionCreateNestedOneWithoutIngredientsInput> = z.object({
  create: z.union([ z.lazy(() => CompositionCreateWithoutIngredientsInputSchema),z.lazy(() => CompositionUncheckedCreateWithoutIngredientsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => CompositionCreateOrConnectWithoutIngredientsInputSchema).optional(),
  connect: z.lazy(() => CompositionWhereUniqueInputSchema).optional()
}).strict();

export const PageCreateNestedOneWithoutIngredientsInputSchema: z.ZodType<Prisma.PageCreateNestedOneWithoutIngredientsInput> = z.object({
  create: z.union([ z.lazy(() => PageCreateWithoutIngredientsInputSchema),z.lazy(() => PageUncheckedCreateWithoutIngredientsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => PageCreateOrConnectWithoutIngredientsInputSchema).optional(),
  connect: z.lazy(() => PageWhereUniqueInputSchema).optional()
}).strict();

export const FloatFieldUpdateOperationsInputSchema: z.ZodType<Prisma.FloatFieldUpdateOperationsInput> = z.object({
  set: z.number().optional(),
  increment: z.number().optional(),
  decrement: z.number().optional(),
  multiply: z.number().optional(),
  divide: z.number().optional()
}).strict();

export const CompositionUpdateOneRequiredWithoutIngredientsNestedInputSchema: z.ZodType<Prisma.CompositionUpdateOneRequiredWithoutIngredientsNestedInput> = z.object({
  create: z.union([ z.lazy(() => CompositionCreateWithoutIngredientsInputSchema),z.lazy(() => CompositionUncheckedCreateWithoutIngredientsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => CompositionCreateOrConnectWithoutIngredientsInputSchema).optional(),
  upsert: z.lazy(() => CompositionUpsertWithoutIngredientsInputSchema).optional(),
  connect: z.lazy(() => CompositionWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => CompositionUpdateToOneWithWhereWithoutIngredientsInputSchema),z.lazy(() => CompositionUpdateWithoutIngredientsInputSchema),z.lazy(() => CompositionUncheckedUpdateWithoutIngredientsInputSchema) ]).optional(),
}).strict();

export const PageUpdateOneWithoutIngredientsNestedInputSchema: z.ZodType<Prisma.PageUpdateOneWithoutIngredientsNestedInput> = z.object({
  create: z.union([ z.lazy(() => PageCreateWithoutIngredientsInputSchema),z.lazy(() => PageUncheckedCreateWithoutIngredientsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => PageCreateOrConnectWithoutIngredientsInputSchema).optional(),
  upsert: z.lazy(() => PageUpsertWithoutIngredientsInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => PageWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => PageWhereInputSchema) ]).optional(),
  connect: z.lazy(() => PageWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => PageUpdateToOneWithWhereWithoutIngredientsInputSchema),z.lazy(() => PageUpdateWithoutIngredientsInputSchema),z.lazy(() => PageUncheckedUpdateWithoutIngredientsInputSchema) ]).optional(),
}).strict();

export const FileCreateNestedOneWithoutCompositionInputSchema: z.ZodType<Prisma.FileCreateNestedOneWithoutCompositionInput> = z.object({
  create: z.union([ z.lazy(() => FileCreateWithoutCompositionInputSchema),z.lazy(() => FileUncheckedCreateWithoutCompositionInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => FileCreateOrConnectWithoutCompositionInputSchema).optional(),
  connect: z.lazy(() => FileWhereUniqueInputSchema).optional()
}).strict();

export const IngredientCreateNestedManyWithoutCompositionInputSchema: z.ZodType<Prisma.IngredientCreateNestedManyWithoutCompositionInput> = z.object({
  create: z.union([ z.lazy(() => IngredientCreateWithoutCompositionInputSchema),z.lazy(() => IngredientCreateWithoutCompositionInputSchema).array(),z.lazy(() => IngredientUncheckedCreateWithoutCompositionInputSchema),z.lazy(() => IngredientUncheckedCreateWithoutCompositionInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => IngredientCreateOrConnectWithoutCompositionInputSchema),z.lazy(() => IngredientCreateOrConnectWithoutCompositionInputSchema).array() ]).optional(),
  createMany: z.lazy(() => IngredientCreateManyCompositionInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => IngredientWhereUniqueInputSchema),z.lazy(() => IngredientWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const CompositionCategoryCreateNestedManyWithoutCompositionsInputSchema: z.ZodType<Prisma.CompositionCategoryCreateNestedManyWithoutCompositionsInput> = z.object({
  create: z.union([ z.lazy(() => CompositionCategoryCreateWithoutCompositionsInputSchema),z.lazy(() => CompositionCategoryCreateWithoutCompositionsInputSchema).array(),z.lazy(() => CompositionCategoryUncheckedCreateWithoutCompositionsInputSchema),z.lazy(() => CompositionCategoryUncheckedCreateWithoutCompositionsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => CompositionCategoryCreateOrConnectWithoutCompositionsInputSchema),z.lazy(() => CompositionCategoryCreateOrConnectWithoutCompositionsInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => CompositionCategoryWhereUniqueInputSchema),z.lazy(() => CompositionCategoryWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const IngredientUncheckedCreateNestedManyWithoutCompositionInputSchema: z.ZodType<Prisma.IngredientUncheckedCreateNestedManyWithoutCompositionInput> = z.object({
  create: z.union([ z.lazy(() => IngredientCreateWithoutCompositionInputSchema),z.lazy(() => IngredientCreateWithoutCompositionInputSchema).array(),z.lazy(() => IngredientUncheckedCreateWithoutCompositionInputSchema),z.lazy(() => IngredientUncheckedCreateWithoutCompositionInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => IngredientCreateOrConnectWithoutCompositionInputSchema),z.lazy(() => IngredientCreateOrConnectWithoutCompositionInputSchema).array() ]).optional(),
  createMany: z.lazy(() => IngredientCreateManyCompositionInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => IngredientWhereUniqueInputSchema),z.lazy(() => IngredientWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const CompositionCategoryUncheckedCreateNestedManyWithoutCompositionsInputSchema: z.ZodType<Prisma.CompositionCategoryUncheckedCreateNestedManyWithoutCompositionsInput> = z.object({
  create: z.union([ z.lazy(() => CompositionCategoryCreateWithoutCompositionsInputSchema),z.lazy(() => CompositionCategoryCreateWithoutCompositionsInputSchema).array(),z.lazy(() => CompositionCategoryUncheckedCreateWithoutCompositionsInputSchema),z.lazy(() => CompositionCategoryUncheckedCreateWithoutCompositionsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => CompositionCategoryCreateOrConnectWithoutCompositionsInputSchema),z.lazy(() => CompositionCategoryCreateOrConnectWithoutCompositionsInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => CompositionCategoryWhereUniqueInputSchema),z.lazy(() => CompositionCategoryWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const FileUpdateOneWithoutCompositionNestedInputSchema: z.ZodType<Prisma.FileUpdateOneWithoutCompositionNestedInput> = z.object({
  create: z.union([ z.lazy(() => FileCreateWithoutCompositionInputSchema),z.lazy(() => FileUncheckedCreateWithoutCompositionInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => FileCreateOrConnectWithoutCompositionInputSchema).optional(),
  upsert: z.lazy(() => FileUpsertWithoutCompositionInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => FileWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => FileWhereInputSchema) ]).optional(),
  connect: z.lazy(() => FileWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => FileUpdateToOneWithWhereWithoutCompositionInputSchema),z.lazy(() => FileUpdateWithoutCompositionInputSchema),z.lazy(() => FileUncheckedUpdateWithoutCompositionInputSchema) ]).optional(),
}).strict();

export const IngredientUpdateManyWithoutCompositionNestedInputSchema: z.ZodType<Prisma.IngredientUpdateManyWithoutCompositionNestedInput> = z.object({
  create: z.union([ z.lazy(() => IngredientCreateWithoutCompositionInputSchema),z.lazy(() => IngredientCreateWithoutCompositionInputSchema).array(),z.lazy(() => IngredientUncheckedCreateWithoutCompositionInputSchema),z.lazy(() => IngredientUncheckedCreateWithoutCompositionInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => IngredientCreateOrConnectWithoutCompositionInputSchema),z.lazy(() => IngredientCreateOrConnectWithoutCompositionInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => IngredientUpsertWithWhereUniqueWithoutCompositionInputSchema),z.lazy(() => IngredientUpsertWithWhereUniqueWithoutCompositionInputSchema).array() ]).optional(),
  createMany: z.lazy(() => IngredientCreateManyCompositionInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => IngredientWhereUniqueInputSchema),z.lazy(() => IngredientWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => IngredientWhereUniqueInputSchema),z.lazy(() => IngredientWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => IngredientWhereUniqueInputSchema),z.lazy(() => IngredientWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => IngredientWhereUniqueInputSchema),z.lazy(() => IngredientWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => IngredientUpdateWithWhereUniqueWithoutCompositionInputSchema),z.lazy(() => IngredientUpdateWithWhereUniqueWithoutCompositionInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => IngredientUpdateManyWithWhereWithoutCompositionInputSchema),z.lazy(() => IngredientUpdateManyWithWhereWithoutCompositionInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => IngredientScalarWhereInputSchema),z.lazy(() => IngredientScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const CompositionCategoryUpdateManyWithoutCompositionsNestedInputSchema: z.ZodType<Prisma.CompositionCategoryUpdateManyWithoutCompositionsNestedInput> = z.object({
  create: z.union([ z.lazy(() => CompositionCategoryCreateWithoutCompositionsInputSchema),z.lazy(() => CompositionCategoryCreateWithoutCompositionsInputSchema).array(),z.lazy(() => CompositionCategoryUncheckedCreateWithoutCompositionsInputSchema),z.lazy(() => CompositionCategoryUncheckedCreateWithoutCompositionsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => CompositionCategoryCreateOrConnectWithoutCompositionsInputSchema),z.lazy(() => CompositionCategoryCreateOrConnectWithoutCompositionsInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => CompositionCategoryUpsertWithWhereUniqueWithoutCompositionsInputSchema),z.lazy(() => CompositionCategoryUpsertWithWhereUniqueWithoutCompositionsInputSchema).array() ]).optional(),
  set: z.union([ z.lazy(() => CompositionCategoryWhereUniqueInputSchema),z.lazy(() => CompositionCategoryWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => CompositionCategoryWhereUniqueInputSchema),z.lazy(() => CompositionCategoryWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => CompositionCategoryWhereUniqueInputSchema),z.lazy(() => CompositionCategoryWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => CompositionCategoryWhereUniqueInputSchema),z.lazy(() => CompositionCategoryWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => CompositionCategoryUpdateWithWhereUniqueWithoutCompositionsInputSchema),z.lazy(() => CompositionCategoryUpdateWithWhereUniqueWithoutCompositionsInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => CompositionCategoryUpdateManyWithWhereWithoutCompositionsInputSchema),z.lazy(() => CompositionCategoryUpdateManyWithWhereWithoutCompositionsInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => CompositionCategoryScalarWhereInputSchema),z.lazy(() => CompositionCategoryScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const IngredientUncheckedUpdateManyWithoutCompositionNestedInputSchema: z.ZodType<Prisma.IngredientUncheckedUpdateManyWithoutCompositionNestedInput> = z.object({
  create: z.union([ z.lazy(() => IngredientCreateWithoutCompositionInputSchema),z.lazy(() => IngredientCreateWithoutCompositionInputSchema).array(),z.lazy(() => IngredientUncheckedCreateWithoutCompositionInputSchema),z.lazy(() => IngredientUncheckedCreateWithoutCompositionInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => IngredientCreateOrConnectWithoutCompositionInputSchema),z.lazy(() => IngredientCreateOrConnectWithoutCompositionInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => IngredientUpsertWithWhereUniqueWithoutCompositionInputSchema),z.lazy(() => IngredientUpsertWithWhereUniqueWithoutCompositionInputSchema).array() ]).optional(),
  createMany: z.lazy(() => IngredientCreateManyCompositionInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => IngredientWhereUniqueInputSchema),z.lazy(() => IngredientWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => IngredientWhereUniqueInputSchema),z.lazy(() => IngredientWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => IngredientWhereUniqueInputSchema),z.lazy(() => IngredientWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => IngredientWhereUniqueInputSchema),z.lazy(() => IngredientWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => IngredientUpdateWithWhereUniqueWithoutCompositionInputSchema),z.lazy(() => IngredientUpdateWithWhereUniqueWithoutCompositionInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => IngredientUpdateManyWithWhereWithoutCompositionInputSchema),z.lazy(() => IngredientUpdateManyWithWhereWithoutCompositionInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => IngredientScalarWhereInputSchema),z.lazy(() => IngredientScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const CompositionCategoryUncheckedUpdateManyWithoutCompositionsNestedInputSchema: z.ZodType<Prisma.CompositionCategoryUncheckedUpdateManyWithoutCompositionsNestedInput> = z.object({
  create: z.union([ z.lazy(() => CompositionCategoryCreateWithoutCompositionsInputSchema),z.lazy(() => CompositionCategoryCreateWithoutCompositionsInputSchema).array(),z.lazy(() => CompositionCategoryUncheckedCreateWithoutCompositionsInputSchema),z.lazy(() => CompositionCategoryUncheckedCreateWithoutCompositionsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => CompositionCategoryCreateOrConnectWithoutCompositionsInputSchema),z.lazy(() => CompositionCategoryCreateOrConnectWithoutCompositionsInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => CompositionCategoryUpsertWithWhereUniqueWithoutCompositionsInputSchema),z.lazy(() => CompositionCategoryUpsertWithWhereUniqueWithoutCompositionsInputSchema).array() ]).optional(),
  set: z.union([ z.lazy(() => CompositionCategoryWhereUniqueInputSchema),z.lazy(() => CompositionCategoryWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => CompositionCategoryWhereUniqueInputSchema),z.lazy(() => CompositionCategoryWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => CompositionCategoryWhereUniqueInputSchema),z.lazy(() => CompositionCategoryWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => CompositionCategoryWhereUniqueInputSchema),z.lazy(() => CompositionCategoryWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => CompositionCategoryUpdateWithWhereUniqueWithoutCompositionsInputSchema),z.lazy(() => CompositionCategoryUpdateWithWhereUniqueWithoutCompositionsInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => CompositionCategoryUpdateManyWithWhereWithoutCompositionsInputSchema),z.lazy(() => CompositionCategoryUpdateManyWithWhereWithoutCompositionsInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => CompositionCategoryScalarWhereInputSchema),z.lazy(() => CompositionCategoryScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const CompositionCreateNestedManyWithoutCategoriesInputSchema: z.ZodType<Prisma.CompositionCreateNestedManyWithoutCategoriesInput> = z.object({
  create: z.union([ z.lazy(() => CompositionCreateWithoutCategoriesInputSchema),z.lazy(() => CompositionCreateWithoutCategoriesInputSchema).array(),z.lazy(() => CompositionUncheckedCreateWithoutCategoriesInputSchema),z.lazy(() => CompositionUncheckedCreateWithoutCategoriesInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => CompositionCreateOrConnectWithoutCategoriesInputSchema),z.lazy(() => CompositionCreateOrConnectWithoutCategoriesInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => CompositionWhereUniqueInputSchema),z.lazy(() => CompositionWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const CompositionUncheckedCreateNestedManyWithoutCategoriesInputSchema: z.ZodType<Prisma.CompositionUncheckedCreateNestedManyWithoutCategoriesInput> = z.object({
  create: z.union([ z.lazy(() => CompositionCreateWithoutCategoriesInputSchema),z.lazy(() => CompositionCreateWithoutCategoriesInputSchema).array(),z.lazy(() => CompositionUncheckedCreateWithoutCategoriesInputSchema),z.lazy(() => CompositionUncheckedCreateWithoutCategoriesInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => CompositionCreateOrConnectWithoutCategoriesInputSchema),z.lazy(() => CompositionCreateOrConnectWithoutCategoriesInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => CompositionWhereUniqueInputSchema),z.lazy(() => CompositionWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const CompositionUpdateManyWithoutCategoriesNestedInputSchema: z.ZodType<Prisma.CompositionUpdateManyWithoutCategoriesNestedInput> = z.object({
  create: z.union([ z.lazy(() => CompositionCreateWithoutCategoriesInputSchema),z.lazy(() => CompositionCreateWithoutCategoriesInputSchema).array(),z.lazy(() => CompositionUncheckedCreateWithoutCategoriesInputSchema),z.lazy(() => CompositionUncheckedCreateWithoutCategoriesInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => CompositionCreateOrConnectWithoutCategoriesInputSchema),z.lazy(() => CompositionCreateOrConnectWithoutCategoriesInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => CompositionUpsertWithWhereUniqueWithoutCategoriesInputSchema),z.lazy(() => CompositionUpsertWithWhereUniqueWithoutCategoriesInputSchema).array() ]).optional(),
  set: z.union([ z.lazy(() => CompositionWhereUniqueInputSchema),z.lazy(() => CompositionWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => CompositionWhereUniqueInputSchema),z.lazy(() => CompositionWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => CompositionWhereUniqueInputSchema),z.lazy(() => CompositionWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => CompositionWhereUniqueInputSchema),z.lazy(() => CompositionWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => CompositionUpdateWithWhereUniqueWithoutCategoriesInputSchema),z.lazy(() => CompositionUpdateWithWhereUniqueWithoutCategoriesInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => CompositionUpdateManyWithWhereWithoutCategoriesInputSchema),z.lazy(() => CompositionUpdateManyWithWhereWithoutCategoriesInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => CompositionScalarWhereInputSchema),z.lazy(() => CompositionScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const CompositionUncheckedUpdateManyWithoutCategoriesNestedInputSchema: z.ZodType<Prisma.CompositionUncheckedUpdateManyWithoutCategoriesNestedInput> = z.object({
  create: z.union([ z.lazy(() => CompositionCreateWithoutCategoriesInputSchema),z.lazy(() => CompositionCreateWithoutCategoriesInputSchema).array(),z.lazy(() => CompositionUncheckedCreateWithoutCategoriesInputSchema),z.lazy(() => CompositionUncheckedCreateWithoutCategoriesInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => CompositionCreateOrConnectWithoutCategoriesInputSchema),z.lazy(() => CompositionCreateOrConnectWithoutCategoriesInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => CompositionUpsertWithWhereUniqueWithoutCategoriesInputSchema),z.lazy(() => CompositionUpsertWithWhereUniqueWithoutCategoriesInputSchema).array() ]).optional(),
  set: z.union([ z.lazy(() => CompositionWhereUniqueInputSchema),z.lazy(() => CompositionWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => CompositionWhereUniqueInputSchema),z.lazy(() => CompositionWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => CompositionWhereUniqueInputSchema),z.lazy(() => CompositionWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => CompositionWhereUniqueInputSchema),z.lazy(() => CompositionWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => CompositionUpdateWithWhereUniqueWithoutCategoriesInputSchema),z.lazy(() => CompositionUpdateWithWhereUniqueWithoutCategoriesInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => CompositionUpdateManyWithWhereWithoutCategoriesInputSchema),z.lazy(() => CompositionUpdateManyWithWhereWithoutCategoriesInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => CompositionScalarWhereInputSchema),z.lazy(() => CompositionScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const ChemicalCreateNestedManyWithoutHazardsInputSchema: z.ZodType<Prisma.ChemicalCreateNestedManyWithoutHazardsInput> = z.object({
  create: z.union([ z.lazy(() => ChemicalCreateWithoutHazardsInputSchema),z.lazy(() => ChemicalCreateWithoutHazardsInputSchema).array(),z.lazy(() => ChemicalUncheckedCreateWithoutHazardsInputSchema),z.lazy(() => ChemicalUncheckedCreateWithoutHazardsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ChemicalCreateOrConnectWithoutHazardsInputSchema),z.lazy(() => ChemicalCreateOrConnectWithoutHazardsInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ChemicalWhereUniqueInputSchema),z.lazy(() => ChemicalWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const ChemicalUncheckedCreateNestedManyWithoutHazardsInputSchema: z.ZodType<Prisma.ChemicalUncheckedCreateNestedManyWithoutHazardsInput> = z.object({
  create: z.union([ z.lazy(() => ChemicalCreateWithoutHazardsInputSchema),z.lazy(() => ChemicalCreateWithoutHazardsInputSchema).array(),z.lazy(() => ChemicalUncheckedCreateWithoutHazardsInputSchema),z.lazy(() => ChemicalUncheckedCreateWithoutHazardsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ChemicalCreateOrConnectWithoutHazardsInputSchema),z.lazy(() => ChemicalCreateOrConnectWithoutHazardsInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ChemicalWhereUniqueInputSchema),z.lazy(() => ChemicalWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const ChemicalUpdateManyWithoutHazardsNestedInputSchema: z.ZodType<Prisma.ChemicalUpdateManyWithoutHazardsNestedInput> = z.object({
  create: z.union([ z.lazy(() => ChemicalCreateWithoutHazardsInputSchema),z.lazy(() => ChemicalCreateWithoutHazardsInputSchema).array(),z.lazy(() => ChemicalUncheckedCreateWithoutHazardsInputSchema),z.lazy(() => ChemicalUncheckedCreateWithoutHazardsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ChemicalCreateOrConnectWithoutHazardsInputSchema),z.lazy(() => ChemicalCreateOrConnectWithoutHazardsInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => ChemicalUpsertWithWhereUniqueWithoutHazardsInputSchema),z.lazy(() => ChemicalUpsertWithWhereUniqueWithoutHazardsInputSchema).array() ]).optional(),
  set: z.union([ z.lazy(() => ChemicalWhereUniqueInputSchema),z.lazy(() => ChemicalWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => ChemicalWhereUniqueInputSchema),z.lazy(() => ChemicalWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => ChemicalWhereUniqueInputSchema),z.lazy(() => ChemicalWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ChemicalWhereUniqueInputSchema),z.lazy(() => ChemicalWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => ChemicalUpdateWithWhereUniqueWithoutHazardsInputSchema),z.lazy(() => ChemicalUpdateWithWhereUniqueWithoutHazardsInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => ChemicalUpdateManyWithWhereWithoutHazardsInputSchema),z.lazy(() => ChemicalUpdateManyWithWhereWithoutHazardsInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => ChemicalScalarWhereInputSchema),z.lazy(() => ChemicalScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const ChemicalUncheckedUpdateManyWithoutHazardsNestedInputSchema: z.ZodType<Prisma.ChemicalUncheckedUpdateManyWithoutHazardsNestedInput> = z.object({
  create: z.union([ z.lazy(() => ChemicalCreateWithoutHazardsInputSchema),z.lazy(() => ChemicalCreateWithoutHazardsInputSchema).array(),z.lazy(() => ChemicalUncheckedCreateWithoutHazardsInputSchema),z.lazy(() => ChemicalUncheckedCreateWithoutHazardsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ChemicalCreateOrConnectWithoutHazardsInputSchema),z.lazy(() => ChemicalCreateOrConnectWithoutHazardsInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => ChemicalUpsertWithWhereUniqueWithoutHazardsInputSchema),z.lazy(() => ChemicalUpsertWithWhereUniqueWithoutHazardsInputSchema).array() ]).optional(),
  set: z.union([ z.lazy(() => ChemicalWhereUniqueInputSchema),z.lazy(() => ChemicalWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => ChemicalWhereUniqueInputSchema),z.lazy(() => ChemicalWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => ChemicalWhereUniqueInputSchema),z.lazy(() => ChemicalWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ChemicalWhereUniqueInputSchema),z.lazy(() => ChemicalWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => ChemicalUpdateWithWhereUniqueWithoutHazardsInputSchema),z.lazy(() => ChemicalUpdateWithWhereUniqueWithoutHazardsInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => ChemicalUpdateManyWithWhereWithoutHazardsInputSchema),z.lazy(() => ChemicalUpdateManyWithWhereWithoutHazardsInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => ChemicalScalarWhereInputSchema),z.lazy(() => ChemicalScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const HazardSymbolsCreateNestedManyWithoutChemicalsInputSchema: z.ZodType<Prisma.HazardSymbolsCreateNestedManyWithoutChemicalsInput> = z.object({
  create: z.union([ z.lazy(() => HazardSymbolsCreateWithoutChemicalsInputSchema),z.lazy(() => HazardSymbolsCreateWithoutChemicalsInputSchema).array(),z.lazy(() => HazardSymbolsUncheckedCreateWithoutChemicalsInputSchema),z.lazy(() => HazardSymbolsUncheckedCreateWithoutChemicalsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => HazardSymbolsCreateOrConnectWithoutChemicalsInputSchema),z.lazy(() => HazardSymbolsCreateOrConnectWithoutChemicalsInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => HazardSymbolsWhereUniqueInputSchema),z.lazy(() => HazardSymbolsWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const PageCreateNestedOneWithoutChemicalInputSchema: z.ZodType<Prisma.PageCreateNestedOneWithoutChemicalInput> = z.object({
  create: z.union([ z.lazy(() => PageCreateWithoutChemicalInputSchema),z.lazy(() => PageUncheckedCreateWithoutChemicalInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => PageCreateOrConnectWithoutChemicalInputSchema).optional(),
  connect: z.lazy(() => PageWhereUniqueInputSchema).optional()
}).strict();

export const HazardSymbolsUncheckedCreateNestedManyWithoutChemicalsInputSchema: z.ZodType<Prisma.HazardSymbolsUncheckedCreateNestedManyWithoutChemicalsInput> = z.object({
  create: z.union([ z.lazy(() => HazardSymbolsCreateWithoutChemicalsInputSchema),z.lazy(() => HazardSymbolsCreateWithoutChemicalsInputSchema).array(),z.lazy(() => HazardSymbolsUncheckedCreateWithoutChemicalsInputSchema),z.lazy(() => HazardSymbolsUncheckedCreateWithoutChemicalsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => HazardSymbolsCreateOrConnectWithoutChemicalsInputSchema),z.lazy(() => HazardSymbolsCreateOrConnectWithoutChemicalsInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => HazardSymbolsWhereUniqueInputSchema),z.lazy(() => HazardSymbolsWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const HazardSymbolsUpdateManyWithoutChemicalsNestedInputSchema: z.ZodType<Prisma.HazardSymbolsUpdateManyWithoutChemicalsNestedInput> = z.object({
  create: z.union([ z.lazy(() => HazardSymbolsCreateWithoutChemicalsInputSchema),z.lazy(() => HazardSymbolsCreateWithoutChemicalsInputSchema).array(),z.lazy(() => HazardSymbolsUncheckedCreateWithoutChemicalsInputSchema),z.lazy(() => HazardSymbolsUncheckedCreateWithoutChemicalsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => HazardSymbolsCreateOrConnectWithoutChemicalsInputSchema),z.lazy(() => HazardSymbolsCreateOrConnectWithoutChemicalsInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => HazardSymbolsUpsertWithWhereUniqueWithoutChemicalsInputSchema),z.lazy(() => HazardSymbolsUpsertWithWhereUniqueWithoutChemicalsInputSchema).array() ]).optional(),
  set: z.union([ z.lazy(() => HazardSymbolsWhereUniqueInputSchema),z.lazy(() => HazardSymbolsWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => HazardSymbolsWhereUniqueInputSchema),z.lazy(() => HazardSymbolsWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => HazardSymbolsWhereUniqueInputSchema),z.lazy(() => HazardSymbolsWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => HazardSymbolsWhereUniqueInputSchema),z.lazy(() => HazardSymbolsWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => HazardSymbolsUpdateWithWhereUniqueWithoutChemicalsInputSchema),z.lazy(() => HazardSymbolsUpdateWithWhereUniqueWithoutChemicalsInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => HazardSymbolsUpdateManyWithWhereWithoutChemicalsInputSchema),z.lazy(() => HazardSymbolsUpdateManyWithWhereWithoutChemicalsInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => HazardSymbolsScalarWhereInputSchema),z.lazy(() => HazardSymbolsScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const PageUpdateOneRequiredWithoutChemicalNestedInputSchema: z.ZodType<Prisma.PageUpdateOneRequiredWithoutChemicalNestedInput> = z.object({
  create: z.union([ z.lazy(() => PageCreateWithoutChemicalInputSchema),z.lazy(() => PageUncheckedCreateWithoutChemicalInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => PageCreateOrConnectWithoutChemicalInputSchema).optional(),
  upsert: z.lazy(() => PageUpsertWithoutChemicalInputSchema).optional(),
  connect: z.lazy(() => PageWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => PageUpdateToOneWithWhereWithoutChemicalInputSchema),z.lazy(() => PageUpdateWithoutChemicalInputSchema),z.lazy(() => PageUncheckedUpdateWithoutChemicalInputSchema) ]).optional(),
}).strict();

export const HazardSymbolsUncheckedUpdateManyWithoutChemicalsNestedInputSchema: z.ZodType<Prisma.HazardSymbolsUncheckedUpdateManyWithoutChemicalsNestedInput> = z.object({
  create: z.union([ z.lazy(() => HazardSymbolsCreateWithoutChemicalsInputSchema),z.lazy(() => HazardSymbolsCreateWithoutChemicalsInputSchema).array(),z.lazy(() => HazardSymbolsUncheckedCreateWithoutChemicalsInputSchema),z.lazy(() => HazardSymbolsUncheckedCreateWithoutChemicalsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => HazardSymbolsCreateOrConnectWithoutChemicalsInputSchema),z.lazy(() => HazardSymbolsCreateOrConnectWithoutChemicalsInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => HazardSymbolsUpsertWithWhereUniqueWithoutChemicalsInputSchema),z.lazy(() => HazardSymbolsUpsertWithWhereUniqueWithoutChemicalsInputSchema).array() ]).optional(),
  set: z.union([ z.lazy(() => HazardSymbolsWhereUniqueInputSchema),z.lazy(() => HazardSymbolsWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => HazardSymbolsWhereUniqueInputSchema),z.lazy(() => HazardSymbolsWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => HazardSymbolsWhereUniqueInputSchema),z.lazy(() => HazardSymbolsWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => HazardSymbolsWhereUniqueInputSchema),z.lazy(() => HazardSymbolsWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => HazardSymbolsUpdateWithWhereUniqueWithoutChemicalsInputSchema),z.lazy(() => HazardSymbolsUpdateWithWhereUniqueWithoutChemicalsInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => HazardSymbolsUpdateManyWithWhereWithoutChemicalsInputSchema),z.lazy(() => HazardSymbolsUpdateManyWithWhereWithoutChemicalsInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => HazardSymbolsScalarWhereInputSchema),z.lazy(() => HazardSymbolsScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const FileCreateNestedOneWithoutPageInputSchema: z.ZodType<Prisma.FileCreateNestedOneWithoutPageInput> = z.object({
  create: z.union([ z.lazy(() => FileCreateWithoutPageInputSchema),z.lazy(() => FileUncheckedCreateWithoutPageInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => FileCreateOrConnectWithoutPageInputSchema).optional(),
  connect: z.lazy(() => FileWhereUniqueInputSchema).optional()
}).strict();

export const PageContentCreateNestedOneWithoutPageInputSchema: z.ZodType<Prisma.PageContentCreateNestedOneWithoutPageInput> = z.object({
  create: z.union([ z.lazy(() => PageContentCreateWithoutPageInputSchema),z.lazy(() => PageContentUncheckedCreateWithoutPageInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => PageContentCreateOrConnectWithoutPageInputSchema).optional(),
  connect: z.lazy(() => PageContentWhereUniqueInputSchema).optional()
}).strict();

export const CategoryCreateNestedOneWithoutPageInputSchema: z.ZodType<Prisma.CategoryCreateNestedOneWithoutPageInput> = z.object({
  create: z.union([ z.lazy(() => CategoryCreateWithoutPageInputSchema),z.lazy(() => CategoryUncheckedCreateWithoutPageInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => CategoryCreateOrConnectWithoutPageInputSchema).optional(),
  connect: z.lazy(() => CategoryWhereUniqueInputSchema).optional()
}).strict();

export const ChemicalCreateNestedOneWithoutPageInputSchema: z.ZodType<Prisma.ChemicalCreateNestedOneWithoutPageInput> = z.object({
  create: z.union([ z.lazy(() => ChemicalCreateWithoutPageInputSchema),z.lazy(() => ChemicalUncheckedCreateWithoutPageInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ChemicalCreateOrConnectWithoutPageInputSchema).optional(),
  connect: z.lazy(() => ChemicalWhereUniqueInputSchema).optional()
}).strict();

export const IngredientCreateNestedManyWithoutPageInputSchema: z.ZodType<Prisma.IngredientCreateNestedManyWithoutPageInput> = z.object({
  create: z.union([ z.lazy(() => IngredientCreateWithoutPageInputSchema),z.lazy(() => IngredientCreateWithoutPageInputSchema).array(),z.lazy(() => IngredientUncheckedCreateWithoutPageInputSchema),z.lazy(() => IngredientUncheckedCreateWithoutPageInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => IngredientCreateOrConnectWithoutPageInputSchema),z.lazy(() => IngredientCreateOrConnectWithoutPageInputSchema).array() ]).optional(),
  createMany: z.lazy(() => IngredientCreateManyPageInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => IngredientWhereUniqueInputSchema),z.lazy(() => IngredientWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const ChemicalUncheckedCreateNestedOneWithoutPageInputSchema: z.ZodType<Prisma.ChemicalUncheckedCreateNestedOneWithoutPageInput> = z.object({
  create: z.union([ z.lazy(() => ChemicalCreateWithoutPageInputSchema),z.lazy(() => ChemicalUncheckedCreateWithoutPageInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ChemicalCreateOrConnectWithoutPageInputSchema).optional(),
  connect: z.lazy(() => ChemicalWhereUniqueInputSchema).optional()
}).strict();

export const IngredientUncheckedCreateNestedManyWithoutPageInputSchema: z.ZodType<Prisma.IngredientUncheckedCreateNestedManyWithoutPageInput> = z.object({
  create: z.union([ z.lazy(() => IngredientCreateWithoutPageInputSchema),z.lazy(() => IngredientCreateWithoutPageInputSchema).array(),z.lazy(() => IngredientUncheckedCreateWithoutPageInputSchema),z.lazy(() => IngredientUncheckedCreateWithoutPageInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => IngredientCreateOrConnectWithoutPageInputSchema),z.lazy(() => IngredientCreateOrConnectWithoutPageInputSchema).array() ]).optional(),
  createMany: z.lazy(() => IngredientCreateManyPageInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => IngredientWhereUniqueInputSchema),z.lazy(() => IngredientWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const DateTimeFieldUpdateOperationsInputSchema: z.ZodType<Prisma.DateTimeFieldUpdateOperationsInput> = z.object({
  set: z.coerce.date().optional()
}).strict();

export const FileUpdateOneWithoutPageNestedInputSchema: z.ZodType<Prisma.FileUpdateOneWithoutPageNestedInput> = z.object({
  create: z.union([ z.lazy(() => FileCreateWithoutPageInputSchema),z.lazy(() => FileUncheckedCreateWithoutPageInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => FileCreateOrConnectWithoutPageInputSchema).optional(),
  upsert: z.lazy(() => FileUpsertWithoutPageInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => FileWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => FileWhereInputSchema) ]).optional(),
  connect: z.lazy(() => FileWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => FileUpdateToOneWithWhereWithoutPageInputSchema),z.lazy(() => FileUpdateWithoutPageInputSchema),z.lazy(() => FileUncheckedUpdateWithoutPageInputSchema) ]).optional(),
}).strict();

export const PageContentUpdateOneRequiredWithoutPageNestedInputSchema: z.ZodType<Prisma.PageContentUpdateOneRequiredWithoutPageNestedInput> = z.object({
  create: z.union([ z.lazy(() => PageContentCreateWithoutPageInputSchema),z.lazy(() => PageContentUncheckedCreateWithoutPageInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => PageContentCreateOrConnectWithoutPageInputSchema).optional(),
  upsert: z.lazy(() => PageContentUpsertWithoutPageInputSchema).optional(),
  connect: z.lazy(() => PageContentWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => PageContentUpdateToOneWithWhereWithoutPageInputSchema),z.lazy(() => PageContentUpdateWithoutPageInputSchema),z.lazy(() => PageContentUncheckedUpdateWithoutPageInputSchema) ]).optional(),
}).strict();

export const CategoryUpdateOneWithoutPageNestedInputSchema: z.ZodType<Prisma.CategoryUpdateOneWithoutPageNestedInput> = z.object({
  create: z.union([ z.lazy(() => CategoryCreateWithoutPageInputSchema),z.lazy(() => CategoryUncheckedCreateWithoutPageInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => CategoryCreateOrConnectWithoutPageInputSchema).optional(),
  upsert: z.lazy(() => CategoryUpsertWithoutPageInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => CategoryWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => CategoryWhereInputSchema) ]).optional(),
  connect: z.lazy(() => CategoryWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => CategoryUpdateToOneWithWhereWithoutPageInputSchema),z.lazy(() => CategoryUpdateWithoutPageInputSchema),z.lazy(() => CategoryUncheckedUpdateWithoutPageInputSchema) ]).optional(),
}).strict();

export const ChemicalUpdateOneWithoutPageNestedInputSchema: z.ZodType<Prisma.ChemicalUpdateOneWithoutPageNestedInput> = z.object({
  create: z.union([ z.lazy(() => ChemicalCreateWithoutPageInputSchema),z.lazy(() => ChemicalUncheckedCreateWithoutPageInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ChemicalCreateOrConnectWithoutPageInputSchema).optional(),
  upsert: z.lazy(() => ChemicalUpsertWithoutPageInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => ChemicalWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => ChemicalWhereInputSchema) ]).optional(),
  connect: z.lazy(() => ChemicalWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => ChemicalUpdateToOneWithWhereWithoutPageInputSchema),z.lazy(() => ChemicalUpdateWithoutPageInputSchema),z.lazy(() => ChemicalUncheckedUpdateWithoutPageInputSchema) ]).optional(),
}).strict();

export const IngredientUpdateManyWithoutPageNestedInputSchema: z.ZodType<Prisma.IngredientUpdateManyWithoutPageNestedInput> = z.object({
  create: z.union([ z.lazy(() => IngredientCreateWithoutPageInputSchema),z.lazy(() => IngredientCreateWithoutPageInputSchema).array(),z.lazy(() => IngredientUncheckedCreateWithoutPageInputSchema),z.lazy(() => IngredientUncheckedCreateWithoutPageInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => IngredientCreateOrConnectWithoutPageInputSchema),z.lazy(() => IngredientCreateOrConnectWithoutPageInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => IngredientUpsertWithWhereUniqueWithoutPageInputSchema),z.lazy(() => IngredientUpsertWithWhereUniqueWithoutPageInputSchema).array() ]).optional(),
  createMany: z.lazy(() => IngredientCreateManyPageInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => IngredientWhereUniqueInputSchema),z.lazy(() => IngredientWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => IngredientWhereUniqueInputSchema),z.lazy(() => IngredientWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => IngredientWhereUniqueInputSchema),z.lazy(() => IngredientWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => IngredientWhereUniqueInputSchema),z.lazy(() => IngredientWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => IngredientUpdateWithWhereUniqueWithoutPageInputSchema),z.lazy(() => IngredientUpdateWithWhereUniqueWithoutPageInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => IngredientUpdateManyWithWhereWithoutPageInputSchema),z.lazy(() => IngredientUpdateManyWithWhereWithoutPageInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => IngredientScalarWhereInputSchema),z.lazy(() => IngredientScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const ChemicalUncheckedUpdateOneWithoutPageNestedInputSchema: z.ZodType<Prisma.ChemicalUncheckedUpdateOneWithoutPageNestedInput> = z.object({
  create: z.union([ z.lazy(() => ChemicalCreateWithoutPageInputSchema),z.lazy(() => ChemicalUncheckedCreateWithoutPageInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ChemicalCreateOrConnectWithoutPageInputSchema).optional(),
  upsert: z.lazy(() => ChemicalUpsertWithoutPageInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => ChemicalWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => ChemicalWhereInputSchema) ]).optional(),
  connect: z.lazy(() => ChemicalWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => ChemicalUpdateToOneWithWhereWithoutPageInputSchema),z.lazy(() => ChemicalUpdateWithoutPageInputSchema),z.lazy(() => ChemicalUncheckedUpdateWithoutPageInputSchema) ]).optional(),
}).strict();

export const IngredientUncheckedUpdateManyWithoutPageNestedInputSchema: z.ZodType<Prisma.IngredientUncheckedUpdateManyWithoutPageNestedInput> = z.object({
  create: z.union([ z.lazy(() => IngredientCreateWithoutPageInputSchema),z.lazy(() => IngredientCreateWithoutPageInputSchema).array(),z.lazy(() => IngredientUncheckedCreateWithoutPageInputSchema),z.lazy(() => IngredientUncheckedCreateWithoutPageInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => IngredientCreateOrConnectWithoutPageInputSchema),z.lazy(() => IngredientCreateOrConnectWithoutPageInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => IngredientUpsertWithWhereUniqueWithoutPageInputSchema),z.lazy(() => IngredientUpsertWithWhereUniqueWithoutPageInputSchema).array() ]).optional(),
  createMany: z.lazy(() => IngredientCreateManyPageInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => IngredientWhereUniqueInputSchema),z.lazy(() => IngredientWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => IngredientWhereUniqueInputSchema),z.lazy(() => IngredientWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => IngredientWhereUniqueInputSchema),z.lazy(() => IngredientWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => IngredientWhereUniqueInputSchema),z.lazy(() => IngredientWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => IngredientUpdateWithWhereUniqueWithoutPageInputSchema),z.lazy(() => IngredientUpdateWithWhereUniqueWithoutPageInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => IngredientUpdateManyWithWhereWithoutPageInputSchema),z.lazy(() => IngredientUpdateManyWithWhereWithoutPageInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => IngredientScalarWhereInputSchema),z.lazy(() => IngredientScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const PageCreateNestedManyWithoutCategoryInputSchema: z.ZodType<Prisma.PageCreateNestedManyWithoutCategoryInput> = z.object({
  create: z.union([ z.lazy(() => PageCreateWithoutCategoryInputSchema),z.lazy(() => PageCreateWithoutCategoryInputSchema).array(),z.lazy(() => PageUncheckedCreateWithoutCategoryInputSchema),z.lazy(() => PageUncheckedCreateWithoutCategoryInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PageCreateOrConnectWithoutCategoryInputSchema),z.lazy(() => PageCreateOrConnectWithoutCategoryInputSchema).array() ]).optional(),
  createMany: z.lazy(() => PageCreateManyCategoryInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => PageWhereUniqueInputSchema),z.lazy(() => PageWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const PageUncheckedCreateNestedManyWithoutCategoryInputSchema: z.ZodType<Prisma.PageUncheckedCreateNestedManyWithoutCategoryInput> = z.object({
  create: z.union([ z.lazy(() => PageCreateWithoutCategoryInputSchema),z.lazy(() => PageCreateWithoutCategoryInputSchema).array(),z.lazy(() => PageUncheckedCreateWithoutCategoryInputSchema),z.lazy(() => PageUncheckedCreateWithoutCategoryInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PageCreateOrConnectWithoutCategoryInputSchema),z.lazy(() => PageCreateOrConnectWithoutCategoryInputSchema).array() ]).optional(),
  createMany: z.lazy(() => PageCreateManyCategoryInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => PageWhereUniqueInputSchema),z.lazy(() => PageWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const PageUpdateManyWithoutCategoryNestedInputSchema: z.ZodType<Prisma.PageUpdateManyWithoutCategoryNestedInput> = z.object({
  create: z.union([ z.lazy(() => PageCreateWithoutCategoryInputSchema),z.lazy(() => PageCreateWithoutCategoryInputSchema).array(),z.lazy(() => PageUncheckedCreateWithoutCategoryInputSchema),z.lazy(() => PageUncheckedCreateWithoutCategoryInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PageCreateOrConnectWithoutCategoryInputSchema),z.lazy(() => PageCreateOrConnectWithoutCategoryInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => PageUpsertWithWhereUniqueWithoutCategoryInputSchema),z.lazy(() => PageUpsertWithWhereUniqueWithoutCategoryInputSchema).array() ]).optional(),
  createMany: z.lazy(() => PageCreateManyCategoryInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => PageWhereUniqueInputSchema),z.lazy(() => PageWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => PageWhereUniqueInputSchema),z.lazy(() => PageWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => PageWhereUniqueInputSchema),z.lazy(() => PageWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => PageWhereUniqueInputSchema),z.lazy(() => PageWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => PageUpdateWithWhereUniqueWithoutCategoryInputSchema),z.lazy(() => PageUpdateWithWhereUniqueWithoutCategoryInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => PageUpdateManyWithWhereWithoutCategoryInputSchema),z.lazy(() => PageUpdateManyWithWhereWithoutCategoryInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => PageScalarWhereInputSchema),z.lazy(() => PageScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const PageUncheckedUpdateManyWithoutCategoryNestedInputSchema: z.ZodType<Prisma.PageUncheckedUpdateManyWithoutCategoryNestedInput> = z.object({
  create: z.union([ z.lazy(() => PageCreateWithoutCategoryInputSchema),z.lazy(() => PageCreateWithoutCategoryInputSchema).array(),z.lazy(() => PageUncheckedCreateWithoutCategoryInputSchema),z.lazy(() => PageUncheckedCreateWithoutCategoryInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PageCreateOrConnectWithoutCategoryInputSchema),z.lazy(() => PageCreateOrConnectWithoutCategoryInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => PageUpsertWithWhereUniqueWithoutCategoryInputSchema),z.lazy(() => PageUpsertWithWhereUniqueWithoutCategoryInputSchema).array() ]).optional(),
  createMany: z.lazy(() => PageCreateManyCategoryInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => PageWhereUniqueInputSchema),z.lazy(() => PageWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => PageWhereUniqueInputSchema),z.lazy(() => PageWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => PageWhereUniqueInputSchema),z.lazy(() => PageWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => PageWhereUniqueInputSchema),z.lazy(() => PageWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => PageUpdateWithWhereUniqueWithoutCategoryInputSchema),z.lazy(() => PageUpdateWithWhereUniqueWithoutCategoryInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => PageUpdateManyWithWhereWithoutCategoryInputSchema),z.lazy(() => PageUpdateManyWithWhereWithoutCategoryInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => PageScalarWhereInputSchema),z.lazy(() => PageScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const PageCreateNestedManyWithoutContentInputSchema: z.ZodType<Prisma.PageCreateNestedManyWithoutContentInput> = z.object({
  create: z.union([ z.lazy(() => PageCreateWithoutContentInputSchema),z.lazy(() => PageCreateWithoutContentInputSchema).array(),z.lazy(() => PageUncheckedCreateWithoutContentInputSchema),z.lazy(() => PageUncheckedCreateWithoutContentInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PageCreateOrConnectWithoutContentInputSchema),z.lazy(() => PageCreateOrConnectWithoutContentInputSchema).array() ]).optional(),
  createMany: z.lazy(() => PageCreateManyContentInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => PageWhereUniqueInputSchema),z.lazy(() => PageWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const WidgetCreateNestedManyWithoutPageContentInputSchema: z.ZodType<Prisma.WidgetCreateNestedManyWithoutPageContentInput> = z.object({
  create: z.union([ z.lazy(() => WidgetCreateWithoutPageContentInputSchema),z.lazy(() => WidgetCreateWithoutPageContentInputSchema).array(),z.lazy(() => WidgetUncheckedCreateWithoutPageContentInputSchema),z.lazy(() => WidgetUncheckedCreateWithoutPageContentInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => WidgetCreateOrConnectWithoutPageContentInputSchema),z.lazy(() => WidgetCreateOrConnectWithoutPageContentInputSchema).array() ]).optional(),
  createMany: z.lazy(() => WidgetCreateManyPageContentInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => WidgetWhereUniqueInputSchema),z.lazy(() => WidgetWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const PageUncheckedCreateNestedManyWithoutContentInputSchema: z.ZodType<Prisma.PageUncheckedCreateNestedManyWithoutContentInput> = z.object({
  create: z.union([ z.lazy(() => PageCreateWithoutContentInputSchema),z.lazy(() => PageCreateWithoutContentInputSchema).array(),z.lazy(() => PageUncheckedCreateWithoutContentInputSchema),z.lazy(() => PageUncheckedCreateWithoutContentInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PageCreateOrConnectWithoutContentInputSchema),z.lazy(() => PageCreateOrConnectWithoutContentInputSchema).array() ]).optional(),
  createMany: z.lazy(() => PageCreateManyContentInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => PageWhereUniqueInputSchema),z.lazy(() => PageWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const WidgetUncheckedCreateNestedManyWithoutPageContentInputSchema: z.ZodType<Prisma.WidgetUncheckedCreateNestedManyWithoutPageContentInput> = z.object({
  create: z.union([ z.lazy(() => WidgetCreateWithoutPageContentInputSchema),z.lazy(() => WidgetCreateWithoutPageContentInputSchema).array(),z.lazy(() => WidgetUncheckedCreateWithoutPageContentInputSchema),z.lazy(() => WidgetUncheckedCreateWithoutPageContentInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => WidgetCreateOrConnectWithoutPageContentInputSchema),z.lazy(() => WidgetCreateOrConnectWithoutPageContentInputSchema).array() ]).optional(),
  createMany: z.lazy(() => WidgetCreateManyPageContentInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => WidgetWhereUniqueInputSchema),z.lazy(() => WidgetWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const BoolFieldUpdateOperationsInputSchema: z.ZodType<Prisma.BoolFieldUpdateOperationsInput> = z.object({
  set: z.boolean().optional()
}).strict();

export const PageUpdateManyWithoutContentNestedInputSchema: z.ZodType<Prisma.PageUpdateManyWithoutContentNestedInput> = z.object({
  create: z.union([ z.lazy(() => PageCreateWithoutContentInputSchema),z.lazy(() => PageCreateWithoutContentInputSchema).array(),z.lazy(() => PageUncheckedCreateWithoutContentInputSchema),z.lazy(() => PageUncheckedCreateWithoutContentInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PageCreateOrConnectWithoutContentInputSchema),z.lazy(() => PageCreateOrConnectWithoutContentInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => PageUpsertWithWhereUniqueWithoutContentInputSchema),z.lazy(() => PageUpsertWithWhereUniqueWithoutContentInputSchema).array() ]).optional(),
  createMany: z.lazy(() => PageCreateManyContentInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => PageWhereUniqueInputSchema),z.lazy(() => PageWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => PageWhereUniqueInputSchema),z.lazy(() => PageWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => PageWhereUniqueInputSchema),z.lazy(() => PageWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => PageWhereUniqueInputSchema),z.lazy(() => PageWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => PageUpdateWithWhereUniqueWithoutContentInputSchema),z.lazy(() => PageUpdateWithWhereUniqueWithoutContentInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => PageUpdateManyWithWhereWithoutContentInputSchema),z.lazy(() => PageUpdateManyWithWhereWithoutContentInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => PageScalarWhereInputSchema),z.lazy(() => PageScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const WidgetUpdateManyWithoutPageContentNestedInputSchema: z.ZodType<Prisma.WidgetUpdateManyWithoutPageContentNestedInput> = z.object({
  create: z.union([ z.lazy(() => WidgetCreateWithoutPageContentInputSchema),z.lazy(() => WidgetCreateWithoutPageContentInputSchema).array(),z.lazy(() => WidgetUncheckedCreateWithoutPageContentInputSchema),z.lazy(() => WidgetUncheckedCreateWithoutPageContentInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => WidgetCreateOrConnectWithoutPageContentInputSchema),z.lazy(() => WidgetCreateOrConnectWithoutPageContentInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => WidgetUpsertWithWhereUniqueWithoutPageContentInputSchema),z.lazy(() => WidgetUpsertWithWhereUniqueWithoutPageContentInputSchema).array() ]).optional(),
  createMany: z.lazy(() => WidgetCreateManyPageContentInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => WidgetWhereUniqueInputSchema),z.lazy(() => WidgetWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => WidgetWhereUniqueInputSchema),z.lazy(() => WidgetWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => WidgetWhereUniqueInputSchema),z.lazy(() => WidgetWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => WidgetWhereUniqueInputSchema),z.lazy(() => WidgetWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => WidgetUpdateWithWhereUniqueWithoutPageContentInputSchema),z.lazy(() => WidgetUpdateWithWhereUniqueWithoutPageContentInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => WidgetUpdateManyWithWhereWithoutPageContentInputSchema),z.lazy(() => WidgetUpdateManyWithWhereWithoutPageContentInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => WidgetScalarWhereInputSchema),z.lazy(() => WidgetScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const PageUncheckedUpdateManyWithoutContentNestedInputSchema: z.ZodType<Prisma.PageUncheckedUpdateManyWithoutContentNestedInput> = z.object({
  create: z.union([ z.lazy(() => PageCreateWithoutContentInputSchema),z.lazy(() => PageCreateWithoutContentInputSchema).array(),z.lazy(() => PageUncheckedCreateWithoutContentInputSchema),z.lazy(() => PageUncheckedCreateWithoutContentInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PageCreateOrConnectWithoutContentInputSchema),z.lazy(() => PageCreateOrConnectWithoutContentInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => PageUpsertWithWhereUniqueWithoutContentInputSchema),z.lazy(() => PageUpsertWithWhereUniqueWithoutContentInputSchema).array() ]).optional(),
  createMany: z.lazy(() => PageCreateManyContentInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => PageWhereUniqueInputSchema),z.lazy(() => PageWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => PageWhereUniqueInputSchema),z.lazy(() => PageWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => PageWhereUniqueInputSchema),z.lazy(() => PageWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => PageWhereUniqueInputSchema),z.lazy(() => PageWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => PageUpdateWithWhereUniqueWithoutContentInputSchema),z.lazy(() => PageUpdateWithWhereUniqueWithoutContentInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => PageUpdateManyWithWhereWithoutContentInputSchema),z.lazy(() => PageUpdateManyWithWhereWithoutContentInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => PageScalarWhereInputSchema),z.lazy(() => PageScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const WidgetUncheckedUpdateManyWithoutPageContentNestedInputSchema: z.ZodType<Prisma.WidgetUncheckedUpdateManyWithoutPageContentNestedInput> = z.object({
  create: z.union([ z.lazy(() => WidgetCreateWithoutPageContentInputSchema),z.lazy(() => WidgetCreateWithoutPageContentInputSchema).array(),z.lazy(() => WidgetUncheckedCreateWithoutPageContentInputSchema),z.lazy(() => WidgetUncheckedCreateWithoutPageContentInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => WidgetCreateOrConnectWithoutPageContentInputSchema),z.lazy(() => WidgetCreateOrConnectWithoutPageContentInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => WidgetUpsertWithWhereUniqueWithoutPageContentInputSchema),z.lazy(() => WidgetUpsertWithWhereUniqueWithoutPageContentInputSchema).array() ]).optional(),
  createMany: z.lazy(() => WidgetCreateManyPageContentInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => WidgetWhereUniqueInputSchema),z.lazy(() => WidgetWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => WidgetWhereUniqueInputSchema),z.lazy(() => WidgetWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => WidgetWhereUniqueInputSchema),z.lazy(() => WidgetWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => WidgetWhereUniqueInputSchema),z.lazy(() => WidgetWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => WidgetUpdateWithWhereUniqueWithoutPageContentInputSchema),z.lazy(() => WidgetUpdateWithWhereUniqueWithoutPageContentInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => WidgetUpdateManyWithWhereWithoutPageContentInputSchema),z.lazy(() => WidgetUpdateManyWithWhereWithoutPageContentInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => WidgetScalarWhereInputSchema),z.lazy(() => WidgetScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const PageContentCreateNestedOneWithoutWidgetsInputSchema: z.ZodType<Prisma.PageContentCreateNestedOneWithoutWidgetsInput> = z.object({
  create: z.union([ z.lazy(() => PageContentCreateWithoutWidgetsInputSchema),z.lazy(() => PageContentUncheckedCreateWithoutWidgetsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => PageContentCreateOrConnectWithoutWidgetsInputSchema).optional(),
  connect: z.lazy(() => PageContentWhereUniqueInputSchema).optional()
}).strict();

export const ImageWidgetCreateNestedOneWithoutWidgetsInputSchema: z.ZodType<Prisma.ImageWidgetCreateNestedOneWithoutWidgetsInput> = z.object({
  create: z.union([ z.lazy(() => ImageWidgetCreateWithoutWidgetsInputSchema),z.lazy(() => ImageWidgetUncheckedCreateWithoutWidgetsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ImageWidgetCreateOrConnectWithoutWidgetsInputSchema).optional(),
  connect: z.lazy(() => ImageWidgetWhereUniqueInputSchema).optional()
}).strict();

export const ImageWidgetUncheckedCreateNestedOneWithoutWidgetsInputSchema: z.ZodType<Prisma.ImageWidgetUncheckedCreateNestedOneWithoutWidgetsInput> = z.object({
  create: z.union([ z.lazy(() => ImageWidgetCreateWithoutWidgetsInputSchema),z.lazy(() => ImageWidgetUncheckedCreateWithoutWidgetsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ImageWidgetCreateOrConnectWithoutWidgetsInputSchema).optional(),
  connect: z.lazy(() => ImageWidgetWhereUniqueInputSchema).optional()
}).strict();

export const PageContentUpdateOneRequiredWithoutWidgetsNestedInputSchema: z.ZodType<Prisma.PageContentUpdateOneRequiredWithoutWidgetsNestedInput> = z.object({
  create: z.union([ z.lazy(() => PageContentCreateWithoutWidgetsInputSchema),z.lazy(() => PageContentUncheckedCreateWithoutWidgetsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => PageContentCreateOrConnectWithoutWidgetsInputSchema).optional(),
  upsert: z.lazy(() => PageContentUpsertWithoutWidgetsInputSchema).optional(),
  connect: z.lazy(() => PageContentWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => PageContentUpdateToOneWithWhereWithoutWidgetsInputSchema),z.lazy(() => PageContentUpdateWithoutWidgetsInputSchema),z.lazy(() => PageContentUncheckedUpdateWithoutWidgetsInputSchema) ]).optional(),
}).strict();

export const ImageWidgetUpdateOneWithoutWidgetsNestedInputSchema: z.ZodType<Prisma.ImageWidgetUpdateOneWithoutWidgetsNestedInput> = z.object({
  create: z.union([ z.lazy(() => ImageWidgetCreateWithoutWidgetsInputSchema),z.lazy(() => ImageWidgetUncheckedCreateWithoutWidgetsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ImageWidgetCreateOrConnectWithoutWidgetsInputSchema).optional(),
  upsert: z.lazy(() => ImageWidgetUpsertWithoutWidgetsInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => ImageWidgetWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => ImageWidgetWhereInputSchema) ]).optional(),
  connect: z.lazy(() => ImageWidgetWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => ImageWidgetUpdateToOneWithWhereWithoutWidgetsInputSchema),z.lazy(() => ImageWidgetUpdateWithoutWidgetsInputSchema),z.lazy(() => ImageWidgetUncheckedUpdateWithoutWidgetsInputSchema) ]).optional(),
}).strict();

export const ImageWidgetUncheckedUpdateOneWithoutWidgetsNestedInputSchema: z.ZodType<Prisma.ImageWidgetUncheckedUpdateOneWithoutWidgetsNestedInput> = z.object({
  create: z.union([ z.lazy(() => ImageWidgetCreateWithoutWidgetsInputSchema),z.lazy(() => ImageWidgetUncheckedCreateWithoutWidgetsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ImageWidgetCreateOrConnectWithoutWidgetsInputSchema).optional(),
  upsert: z.lazy(() => ImageWidgetUpsertWithoutWidgetsInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => ImageWidgetWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => ImageWidgetWhereInputSchema) ]).optional(),
  connect: z.lazy(() => ImageWidgetWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => ImageWidgetUpdateToOneWithWhereWithoutWidgetsInputSchema),z.lazy(() => ImageWidgetUpdateWithoutWidgetsInputSchema),z.lazy(() => ImageWidgetUncheckedUpdateWithoutWidgetsInputSchema) ]).optional(),
}).strict();

export const WidgetCreateNestedOneWithoutImageWidgetInputSchema: z.ZodType<Prisma.WidgetCreateNestedOneWithoutImageWidgetInput> = z.object({
  create: z.union([ z.lazy(() => WidgetCreateWithoutImageWidgetInputSchema),z.lazy(() => WidgetUncheckedCreateWithoutImageWidgetInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => WidgetCreateOrConnectWithoutImageWidgetInputSchema).optional(),
  connect: z.lazy(() => WidgetWhereUniqueInputSchema).optional()
}).strict();

export const FileCreateNestedOneWithoutImageWidgetInputSchema: z.ZodType<Prisma.FileCreateNestedOneWithoutImageWidgetInput> = z.object({
  create: z.union([ z.lazy(() => FileCreateWithoutImageWidgetInputSchema),z.lazy(() => FileUncheckedCreateWithoutImageWidgetInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => FileCreateOrConnectWithoutImageWidgetInputSchema).optional(),
  connect: z.lazy(() => FileWhereUniqueInputSchema).optional()
}).strict();

export const WidgetUpdateOneRequiredWithoutImageWidgetNestedInputSchema: z.ZodType<Prisma.WidgetUpdateOneRequiredWithoutImageWidgetNestedInput> = z.object({
  create: z.union([ z.lazy(() => WidgetCreateWithoutImageWidgetInputSchema),z.lazy(() => WidgetUncheckedCreateWithoutImageWidgetInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => WidgetCreateOrConnectWithoutImageWidgetInputSchema).optional(),
  upsert: z.lazy(() => WidgetUpsertWithoutImageWidgetInputSchema).optional(),
  connect: z.lazy(() => WidgetWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => WidgetUpdateToOneWithWhereWithoutImageWidgetInputSchema),z.lazy(() => WidgetUpdateWithoutImageWidgetInputSchema),z.lazy(() => WidgetUncheckedUpdateWithoutImageWidgetInputSchema) ]).optional(),
}).strict();

export const FileUpdateOneRequiredWithoutImageWidgetNestedInputSchema: z.ZodType<Prisma.FileUpdateOneRequiredWithoutImageWidgetNestedInput> = z.object({
  create: z.union([ z.lazy(() => FileCreateWithoutImageWidgetInputSchema),z.lazy(() => FileUncheckedCreateWithoutImageWidgetInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => FileCreateOrConnectWithoutImageWidgetInputSchema).optional(),
  upsert: z.lazy(() => FileUpsertWithoutImageWidgetInputSchema).optional(),
  connect: z.lazy(() => FileWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => FileUpdateToOneWithWhereWithoutImageWidgetInputSchema),z.lazy(() => FileUpdateWithoutImageWidgetInputSchema),z.lazy(() => FileUncheckedUpdateWithoutImageWidgetInputSchema) ]).optional(),
}).strict();

export const IntFieldUpdateOperationsInputSchema: z.ZodType<Prisma.IntFieldUpdateOperationsInput> = z.object({
  set: z.number().optional(),
  increment: z.number().optional(),
  decrement: z.number().optional(),
  multiply: z.number().optional(),
  divide: z.number().optional()
}).strict();

export const NestedStringFilterSchema: z.ZodType<Prisma.NestedStringFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringFilterSchema) ]).optional(),
}).strict();

export const NestedEnumRoleFilterSchema: z.ZodType<Prisma.NestedEnumRoleFilter> = z.object({
  equals: z.lazy(() => RoleSchema).optional(),
  in: z.lazy(() => RoleSchema).array().optional(),
  notIn: z.lazy(() => RoleSchema).array().optional(),
  not: z.union([ z.lazy(() => RoleSchema),z.lazy(() => NestedEnumRoleFilterSchema) ]).optional(),
}).strict();

export const NestedStringWithAggregatesFilterSchema: z.ZodType<Prisma.NestedStringWithAggregatesFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedStringFilterSchema).optional(),
  _max: z.lazy(() => NestedStringFilterSchema).optional()
}).strict();

export const NestedIntFilterSchema: z.ZodType<Prisma.NestedIntFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntFilterSchema) ]).optional(),
}).strict();

export const NestedEnumRoleWithAggregatesFilterSchema: z.ZodType<Prisma.NestedEnumRoleWithAggregatesFilter> = z.object({
  equals: z.lazy(() => RoleSchema).optional(),
  in: z.lazy(() => RoleSchema).array().optional(),
  notIn: z.lazy(() => RoleSchema).array().optional(),
  not: z.union([ z.lazy(() => RoleSchema),z.lazy(() => NestedEnumRoleWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumRoleFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumRoleFilterSchema).optional()
}).strict();

export const NestedStringNullableFilterSchema: z.ZodType<Prisma.NestedStringNullableFilter> = z.object({
  equals: z.string().optional().nullable(),
  in: z.string().array().optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const NestedStringNullableWithAggregatesFilterSchema: z.ZodType<Prisma.NestedStringNullableWithAggregatesFilter> = z.object({
  equals: z.string().optional().nullable(),
  in: z.string().array().optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedStringNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedStringNullableFilterSchema).optional()
}).strict();

export const NestedIntNullableFilterSchema: z.ZodType<Prisma.NestedIntNullableFilter> = z.object({
  equals: z.number().optional().nullable(),
  in: z.number().array().optional().nullable(),
  notIn: z.number().array().optional().nullable(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const NestedFloatFilterSchema: z.ZodType<Prisma.NestedFloatFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedFloatFilterSchema) ]).optional(),
}).strict();

export const NestedFloatWithAggregatesFilterSchema: z.ZodType<Prisma.NestedFloatWithAggregatesFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedFloatWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatFilterSchema).optional(),
  _sum: z.lazy(() => NestedFloatFilterSchema).optional(),
  _min: z.lazy(() => NestedFloatFilterSchema).optional(),
  _max: z.lazy(() => NestedFloatFilterSchema).optional()
}).strict();

export const NestedDateTimeFilterSchema: z.ZodType<Prisma.NestedDateTimeFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeFilterSchema) ]).optional(),
}).strict();

export const NestedDateTimeWithAggregatesFilterSchema: z.ZodType<Prisma.NestedDateTimeWithAggregatesFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedDateTimeFilterSchema).optional(),
  _max: z.lazy(() => NestedDateTimeFilterSchema).optional()
}).strict();

export const NestedBoolFilterSchema: z.ZodType<Prisma.NestedBoolFilter> = z.object({
  equals: z.boolean().optional(),
  not: z.union([ z.boolean(),z.lazy(() => NestedBoolFilterSchema) ]).optional(),
}).strict();

export const NestedBoolWithAggregatesFilterSchema: z.ZodType<Prisma.NestedBoolWithAggregatesFilter> = z.object({
  equals: z.boolean().optional(),
  not: z.union([ z.boolean(),z.lazy(() => NestedBoolWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedBoolFilterSchema).optional(),
  _max: z.lazy(() => NestedBoolFilterSchema).optional()
}).strict();

export const NestedIntWithAggregatesFilterSchema: z.ZodType<Prisma.NestedIntWithAggregatesFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatFilterSchema).optional(),
  _sum: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedIntFilterSchema).optional(),
  _max: z.lazy(() => NestedIntFilterSchema).optional()
}).strict();

export const SessionCreateWithoutUserInputSchema: z.ZodType<Prisma.SessionCreateWithoutUserInput> = z.object({
  id: z.string().uuid().optional()
}).strict();

export const SessionUncheckedCreateWithoutUserInputSchema: z.ZodType<Prisma.SessionUncheckedCreateWithoutUserInput> = z.object({
  id: z.string().uuid().optional()
}).strict();

export const SessionCreateOrConnectWithoutUserInputSchema: z.ZodType<Prisma.SessionCreateOrConnectWithoutUserInput> = z.object({
  where: z.lazy(() => SessionWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => SessionCreateWithoutUserInputSchema),z.lazy(() => SessionUncheckedCreateWithoutUserInputSchema) ]),
}).strict();

export const SessionUpsertWithoutUserInputSchema: z.ZodType<Prisma.SessionUpsertWithoutUserInput> = z.object({
  update: z.union([ z.lazy(() => SessionUpdateWithoutUserInputSchema),z.lazy(() => SessionUncheckedUpdateWithoutUserInputSchema) ]),
  create: z.union([ z.lazy(() => SessionCreateWithoutUserInputSchema),z.lazy(() => SessionUncheckedCreateWithoutUserInputSchema) ]),
  where: z.lazy(() => SessionWhereInputSchema).optional()
}).strict();

export const SessionUpdateToOneWithWhereWithoutUserInputSchema: z.ZodType<Prisma.SessionUpdateToOneWithWhereWithoutUserInput> = z.object({
  where: z.lazy(() => SessionWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => SessionUpdateWithoutUserInputSchema),z.lazy(() => SessionUncheckedUpdateWithoutUserInputSchema) ]),
}).strict();

export const SessionUpdateWithoutUserInputSchema: z.ZodType<Prisma.SessionUpdateWithoutUserInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const SessionUncheckedUpdateWithoutUserInputSchema: z.ZodType<Prisma.SessionUncheckedUpdateWithoutUserInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const UserCreateWithoutSessionInputSchema: z.ZodType<Prisma.UserCreateWithoutSessionInput> = z.object({
  id: z.string().cuid().optional(),
  username: z.string(),
  password: z.string(),
  email: z.string(),
  role: z.lazy(() => RoleSchema).optional()
}).strict();

export const UserUncheckedCreateWithoutSessionInputSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutSessionInput> = z.object({
  id: z.string().cuid().optional(),
  username: z.string(),
  password: z.string(),
  email: z.string(),
  role: z.lazy(() => RoleSchema).optional()
}).strict();

export const UserCreateOrConnectWithoutSessionInputSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutSessionInput> = z.object({
  where: z.lazy(() => UserWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => UserCreateWithoutSessionInputSchema),z.lazy(() => UserUncheckedCreateWithoutSessionInputSchema) ]),
}).strict();

export const UserUpsertWithoutSessionInputSchema: z.ZodType<Prisma.UserUpsertWithoutSessionInput> = z.object({
  update: z.union([ z.lazy(() => UserUpdateWithoutSessionInputSchema),z.lazy(() => UserUncheckedUpdateWithoutSessionInputSchema) ]),
  create: z.union([ z.lazy(() => UserCreateWithoutSessionInputSchema),z.lazy(() => UserUncheckedCreateWithoutSessionInputSchema) ]),
  where: z.lazy(() => UserWhereInputSchema).optional()
}).strict();

export const UserUpdateToOneWithWhereWithoutSessionInputSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutSessionInput> = z.object({
  where: z.lazy(() => UserWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => UserUpdateWithoutSessionInputSchema),z.lazy(() => UserUncheckedUpdateWithoutSessionInputSchema) ]),
}).strict();

export const UserUpdateWithoutSessionInputSchema: z.ZodType<Prisma.UserUpdateWithoutSessionInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  username: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  password: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  role: z.union([ z.lazy(() => RoleSchema),z.lazy(() => EnumRoleFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const UserUncheckedUpdateWithoutSessionInputSchema: z.ZodType<Prisma.UserUncheckedUpdateWithoutSessionInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  username: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  password: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  role: z.union([ z.lazy(() => RoleSchema),z.lazy(() => EnumRoleFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ImageWidgetCreateWithoutFileInputSchema: z.ZodType<Prisma.ImageWidgetCreateWithoutFileInput> = z.object({
  id: z.string().cuid().optional(),
  widgets: z.lazy(() => WidgetCreateNestedOneWithoutImageWidgetInputSchema)
}).strict();

export const ImageWidgetUncheckedCreateWithoutFileInputSchema: z.ZodType<Prisma.ImageWidgetUncheckedCreateWithoutFileInput> = z.object({
  id: z.string().cuid().optional(),
  widgetId: z.string()
}).strict();

export const ImageWidgetCreateOrConnectWithoutFileInputSchema: z.ZodType<Prisma.ImageWidgetCreateOrConnectWithoutFileInput> = z.object({
  where: z.lazy(() => ImageWidgetWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ImageWidgetCreateWithoutFileInputSchema),z.lazy(() => ImageWidgetUncheckedCreateWithoutFileInputSchema) ]),
}).strict();

export const ImageWidgetCreateManyFileInputEnvelopeSchema: z.ZodType<Prisma.ImageWidgetCreateManyFileInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => ImageWidgetCreateManyFileInputSchema),z.lazy(() => ImageWidgetCreateManyFileInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const PageCreateWithoutFeaturedImageInputSchema: z.ZodType<Prisma.PageCreateWithoutFeaturedImageInput> = z.object({
  id: z.string().cuid().optional(),
  title: z.string(),
  slug: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  content: z.lazy(() => PageContentCreateNestedOneWithoutPageInputSchema),
  category: z.lazy(() => CategoryCreateNestedOneWithoutPageInputSchema).optional(),
  chemical: z.lazy(() => ChemicalCreateNestedOneWithoutPageInputSchema).optional(),
  ingredients: z.lazy(() => IngredientCreateNestedManyWithoutPageInputSchema).optional()
}).strict();

export const PageUncheckedCreateWithoutFeaturedImageInputSchema: z.ZodType<Prisma.PageUncheckedCreateWithoutFeaturedImageInput> = z.object({
  id: z.string().cuid().optional(),
  title: z.string(),
  slug: z.string(),
  pageContentId: z.string(),
  categorySlug: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  chemical: z.lazy(() => ChemicalUncheckedCreateNestedOneWithoutPageInputSchema).optional(),
  ingredients: z.lazy(() => IngredientUncheckedCreateNestedManyWithoutPageInputSchema).optional()
}).strict();

export const PageCreateOrConnectWithoutFeaturedImageInputSchema: z.ZodType<Prisma.PageCreateOrConnectWithoutFeaturedImageInput> = z.object({
  where: z.lazy(() => PageWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => PageCreateWithoutFeaturedImageInputSchema),z.lazy(() => PageUncheckedCreateWithoutFeaturedImageInputSchema) ]),
}).strict();

export const PageCreateManyFeaturedImageInputEnvelopeSchema: z.ZodType<Prisma.PageCreateManyFeaturedImageInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => PageCreateManyFeaturedImageInputSchema),z.lazy(() => PageCreateManyFeaturedImageInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const CompositionCreateWithoutVideoInputSchema: z.ZodType<Prisma.CompositionCreateWithoutVideoInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  description: z.string().optional().nullable(),
  ingredients: z.lazy(() => IngredientCreateNestedManyWithoutCompositionInputSchema).optional(),
  categories: z.lazy(() => CompositionCategoryCreateNestedManyWithoutCompositionsInputSchema).optional()
}).strict();

export const CompositionUncheckedCreateWithoutVideoInputSchema: z.ZodType<Prisma.CompositionUncheckedCreateWithoutVideoInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  description: z.string().optional().nullable(),
  ingredients: z.lazy(() => IngredientUncheckedCreateNestedManyWithoutCompositionInputSchema).optional(),
  categories: z.lazy(() => CompositionCategoryUncheckedCreateNestedManyWithoutCompositionsInputSchema).optional()
}).strict();

export const CompositionCreateOrConnectWithoutVideoInputSchema: z.ZodType<Prisma.CompositionCreateOrConnectWithoutVideoInput> = z.object({
  where: z.lazy(() => CompositionWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => CompositionCreateWithoutVideoInputSchema),z.lazy(() => CompositionUncheckedCreateWithoutVideoInputSchema) ]),
}).strict();

export const CompositionCreateManyVideoInputEnvelopeSchema: z.ZodType<Prisma.CompositionCreateManyVideoInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => CompositionCreateManyVideoInputSchema),z.lazy(() => CompositionCreateManyVideoInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const ImageWidgetUpsertWithWhereUniqueWithoutFileInputSchema: z.ZodType<Prisma.ImageWidgetUpsertWithWhereUniqueWithoutFileInput> = z.object({
  where: z.lazy(() => ImageWidgetWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => ImageWidgetUpdateWithoutFileInputSchema),z.lazy(() => ImageWidgetUncheckedUpdateWithoutFileInputSchema) ]),
  create: z.union([ z.lazy(() => ImageWidgetCreateWithoutFileInputSchema),z.lazy(() => ImageWidgetUncheckedCreateWithoutFileInputSchema) ]),
}).strict();

export const ImageWidgetUpdateWithWhereUniqueWithoutFileInputSchema: z.ZodType<Prisma.ImageWidgetUpdateWithWhereUniqueWithoutFileInput> = z.object({
  where: z.lazy(() => ImageWidgetWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => ImageWidgetUpdateWithoutFileInputSchema),z.lazy(() => ImageWidgetUncheckedUpdateWithoutFileInputSchema) ]),
}).strict();

export const ImageWidgetUpdateManyWithWhereWithoutFileInputSchema: z.ZodType<Prisma.ImageWidgetUpdateManyWithWhereWithoutFileInput> = z.object({
  where: z.lazy(() => ImageWidgetScalarWhereInputSchema),
  data: z.union([ z.lazy(() => ImageWidgetUpdateManyMutationInputSchema),z.lazy(() => ImageWidgetUncheckedUpdateManyWithoutFileInputSchema) ]),
}).strict();

export const ImageWidgetScalarWhereInputSchema: z.ZodType<Prisma.ImageWidgetScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => ImageWidgetScalarWhereInputSchema),z.lazy(() => ImageWidgetScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ImageWidgetScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ImageWidgetScalarWhereInputSchema),z.lazy(() => ImageWidgetScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  widgetId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  fileId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
}).strict();

export const PageUpsertWithWhereUniqueWithoutFeaturedImageInputSchema: z.ZodType<Prisma.PageUpsertWithWhereUniqueWithoutFeaturedImageInput> = z.object({
  where: z.lazy(() => PageWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => PageUpdateWithoutFeaturedImageInputSchema),z.lazy(() => PageUncheckedUpdateWithoutFeaturedImageInputSchema) ]),
  create: z.union([ z.lazy(() => PageCreateWithoutFeaturedImageInputSchema),z.lazy(() => PageUncheckedCreateWithoutFeaturedImageInputSchema) ]),
}).strict();

export const PageUpdateWithWhereUniqueWithoutFeaturedImageInputSchema: z.ZodType<Prisma.PageUpdateWithWhereUniqueWithoutFeaturedImageInput> = z.object({
  where: z.lazy(() => PageWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => PageUpdateWithoutFeaturedImageInputSchema),z.lazy(() => PageUncheckedUpdateWithoutFeaturedImageInputSchema) ]),
}).strict();

export const PageUpdateManyWithWhereWithoutFeaturedImageInputSchema: z.ZodType<Prisma.PageUpdateManyWithWhereWithoutFeaturedImageInput> = z.object({
  where: z.lazy(() => PageScalarWhereInputSchema),
  data: z.union([ z.lazy(() => PageUpdateManyMutationInputSchema),z.lazy(() => PageUncheckedUpdateManyWithoutFeaturedImageInputSchema) ]),
}).strict();

export const PageScalarWhereInputSchema: z.ZodType<Prisma.PageScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => PageScalarWhereInputSchema),z.lazy(() => PageScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => PageScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => PageScalarWhereInputSchema),z.lazy(() => PageScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  title: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  slug: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  featuredImageId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  pageContentId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  categorySlug: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const CompositionUpsertWithWhereUniqueWithoutVideoInputSchema: z.ZodType<Prisma.CompositionUpsertWithWhereUniqueWithoutVideoInput> = z.object({
  where: z.lazy(() => CompositionWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => CompositionUpdateWithoutVideoInputSchema),z.lazy(() => CompositionUncheckedUpdateWithoutVideoInputSchema) ]),
  create: z.union([ z.lazy(() => CompositionCreateWithoutVideoInputSchema),z.lazy(() => CompositionUncheckedCreateWithoutVideoInputSchema) ]),
}).strict();

export const CompositionUpdateWithWhereUniqueWithoutVideoInputSchema: z.ZodType<Prisma.CompositionUpdateWithWhereUniqueWithoutVideoInput> = z.object({
  where: z.lazy(() => CompositionWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => CompositionUpdateWithoutVideoInputSchema),z.lazy(() => CompositionUncheckedUpdateWithoutVideoInputSchema) ]),
}).strict();

export const CompositionUpdateManyWithWhereWithoutVideoInputSchema: z.ZodType<Prisma.CompositionUpdateManyWithWhereWithoutVideoInput> = z.object({
  where: z.lazy(() => CompositionScalarWhereInputSchema),
  data: z.union([ z.lazy(() => CompositionUpdateManyMutationInputSchema),z.lazy(() => CompositionUncheckedUpdateManyWithoutVideoInputSchema) ]),
}).strict();

export const CompositionScalarWhereInputSchema: z.ZodType<Prisma.CompositionScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => CompositionScalarWhereInputSchema),z.lazy(() => CompositionScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => CompositionScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => CompositionScalarWhereInputSchema),z.lazy(() => CompositionScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  description: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  videoId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export const CompositionCreateWithoutIngredientsInputSchema: z.ZodType<Prisma.CompositionCreateWithoutIngredientsInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  description: z.string().optional().nullable(),
  video: z.lazy(() => FileCreateNestedOneWithoutCompositionInputSchema).optional(),
  categories: z.lazy(() => CompositionCategoryCreateNestedManyWithoutCompositionsInputSchema).optional()
}).strict();

export const CompositionUncheckedCreateWithoutIngredientsInputSchema: z.ZodType<Prisma.CompositionUncheckedCreateWithoutIngredientsInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  description: z.string().optional().nullable(),
  videoId: z.string().optional().nullable(),
  categories: z.lazy(() => CompositionCategoryUncheckedCreateNestedManyWithoutCompositionsInputSchema).optional()
}).strict();

export const CompositionCreateOrConnectWithoutIngredientsInputSchema: z.ZodType<Prisma.CompositionCreateOrConnectWithoutIngredientsInput> = z.object({
  where: z.lazy(() => CompositionWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => CompositionCreateWithoutIngredientsInputSchema),z.lazy(() => CompositionUncheckedCreateWithoutIngredientsInputSchema) ]),
}).strict();

export const PageCreateWithoutIngredientsInputSchema: z.ZodType<Prisma.PageCreateWithoutIngredientsInput> = z.object({
  id: z.string().cuid().optional(),
  title: z.string(),
  slug: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  featuredImage: z.lazy(() => FileCreateNestedOneWithoutPageInputSchema).optional(),
  content: z.lazy(() => PageContentCreateNestedOneWithoutPageInputSchema),
  category: z.lazy(() => CategoryCreateNestedOneWithoutPageInputSchema).optional(),
  chemical: z.lazy(() => ChemicalCreateNestedOneWithoutPageInputSchema).optional()
}).strict();

export const PageUncheckedCreateWithoutIngredientsInputSchema: z.ZodType<Prisma.PageUncheckedCreateWithoutIngredientsInput> = z.object({
  id: z.string().cuid().optional(),
  title: z.string(),
  slug: z.string(),
  featuredImageId: z.string().optional().nullable(),
  pageContentId: z.string(),
  categorySlug: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  chemical: z.lazy(() => ChemicalUncheckedCreateNestedOneWithoutPageInputSchema).optional()
}).strict();

export const PageCreateOrConnectWithoutIngredientsInputSchema: z.ZodType<Prisma.PageCreateOrConnectWithoutIngredientsInput> = z.object({
  where: z.lazy(() => PageWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => PageCreateWithoutIngredientsInputSchema),z.lazy(() => PageUncheckedCreateWithoutIngredientsInputSchema) ]),
}).strict();

export const CompositionUpsertWithoutIngredientsInputSchema: z.ZodType<Prisma.CompositionUpsertWithoutIngredientsInput> = z.object({
  update: z.union([ z.lazy(() => CompositionUpdateWithoutIngredientsInputSchema),z.lazy(() => CompositionUncheckedUpdateWithoutIngredientsInputSchema) ]),
  create: z.union([ z.lazy(() => CompositionCreateWithoutIngredientsInputSchema),z.lazy(() => CompositionUncheckedCreateWithoutIngredientsInputSchema) ]),
  where: z.lazy(() => CompositionWhereInputSchema).optional()
}).strict();

export const CompositionUpdateToOneWithWhereWithoutIngredientsInputSchema: z.ZodType<Prisma.CompositionUpdateToOneWithWhereWithoutIngredientsInput> = z.object({
  where: z.lazy(() => CompositionWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => CompositionUpdateWithoutIngredientsInputSchema),z.lazy(() => CompositionUncheckedUpdateWithoutIngredientsInputSchema) ]),
}).strict();

export const CompositionUpdateWithoutIngredientsInputSchema: z.ZodType<Prisma.CompositionUpdateWithoutIngredientsInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  video: z.lazy(() => FileUpdateOneWithoutCompositionNestedInputSchema).optional(),
  categories: z.lazy(() => CompositionCategoryUpdateManyWithoutCompositionsNestedInputSchema).optional()
}).strict();

export const CompositionUncheckedUpdateWithoutIngredientsInputSchema: z.ZodType<Prisma.CompositionUncheckedUpdateWithoutIngredientsInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  videoId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  categories: z.lazy(() => CompositionCategoryUncheckedUpdateManyWithoutCompositionsNestedInputSchema).optional()
}).strict();

export const PageUpsertWithoutIngredientsInputSchema: z.ZodType<Prisma.PageUpsertWithoutIngredientsInput> = z.object({
  update: z.union([ z.lazy(() => PageUpdateWithoutIngredientsInputSchema),z.lazy(() => PageUncheckedUpdateWithoutIngredientsInputSchema) ]),
  create: z.union([ z.lazy(() => PageCreateWithoutIngredientsInputSchema),z.lazy(() => PageUncheckedCreateWithoutIngredientsInputSchema) ]),
  where: z.lazy(() => PageWhereInputSchema).optional()
}).strict();

export const PageUpdateToOneWithWhereWithoutIngredientsInputSchema: z.ZodType<Prisma.PageUpdateToOneWithWhereWithoutIngredientsInput> = z.object({
  where: z.lazy(() => PageWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => PageUpdateWithoutIngredientsInputSchema),z.lazy(() => PageUncheckedUpdateWithoutIngredientsInputSchema) ]),
}).strict();

export const PageUpdateWithoutIngredientsInputSchema: z.ZodType<Prisma.PageUpdateWithoutIngredientsInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  slug: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  featuredImage: z.lazy(() => FileUpdateOneWithoutPageNestedInputSchema).optional(),
  content: z.lazy(() => PageContentUpdateOneRequiredWithoutPageNestedInputSchema).optional(),
  category: z.lazy(() => CategoryUpdateOneWithoutPageNestedInputSchema).optional(),
  chemical: z.lazy(() => ChemicalUpdateOneWithoutPageNestedInputSchema).optional()
}).strict();

export const PageUncheckedUpdateWithoutIngredientsInputSchema: z.ZodType<Prisma.PageUncheckedUpdateWithoutIngredientsInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  slug: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  featuredImageId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  pageContentId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  categorySlug: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  chemical: z.lazy(() => ChemicalUncheckedUpdateOneWithoutPageNestedInputSchema).optional()
}).strict();

export const FileCreateWithoutCompositionInputSchema: z.ZodType<Prisma.FileCreateWithoutCompositionInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  title: z.string(),
  description: z.string().optional().nullable(),
  mimeType: z.string().optional().nullable(),
  imageWidget: z.lazy(() => ImageWidgetCreateNestedManyWithoutFileInputSchema).optional(),
  page: z.lazy(() => PageCreateNestedManyWithoutFeaturedImageInputSchema).optional()
}).strict();

export const FileUncheckedCreateWithoutCompositionInputSchema: z.ZodType<Prisma.FileUncheckedCreateWithoutCompositionInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  title: z.string(),
  description: z.string().optional().nullable(),
  mimeType: z.string().optional().nullable(),
  imageWidget: z.lazy(() => ImageWidgetUncheckedCreateNestedManyWithoutFileInputSchema).optional(),
  page: z.lazy(() => PageUncheckedCreateNestedManyWithoutFeaturedImageInputSchema).optional()
}).strict();

export const FileCreateOrConnectWithoutCompositionInputSchema: z.ZodType<Prisma.FileCreateOrConnectWithoutCompositionInput> = z.object({
  where: z.lazy(() => FileWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => FileCreateWithoutCompositionInputSchema),z.lazy(() => FileUncheckedCreateWithoutCompositionInputSchema) ]),
}).strict();

export const IngredientCreateWithoutCompositionInputSchema: z.ZodType<Prisma.IngredientCreateWithoutCompositionInput> = z.object({
  id: z.string().cuid().optional(),
  amount: z.number(),
  name: z.string(),
  note: z.string().optional().nullable(),
  page: z.lazy(() => PageCreateNestedOneWithoutIngredientsInputSchema).optional()
}).strict();

export const IngredientUncheckedCreateWithoutCompositionInputSchema: z.ZodType<Prisma.IngredientUncheckedCreateWithoutCompositionInput> = z.object({
  id: z.string().cuid().optional(),
  amount: z.number(),
  name: z.string(),
  note: z.string().optional().nullable(),
  pageId: z.string().optional().nullable()
}).strict();

export const IngredientCreateOrConnectWithoutCompositionInputSchema: z.ZodType<Prisma.IngredientCreateOrConnectWithoutCompositionInput> = z.object({
  where: z.lazy(() => IngredientWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => IngredientCreateWithoutCompositionInputSchema),z.lazy(() => IngredientUncheckedCreateWithoutCompositionInputSchema) ]),
}).strict();

export const IngredientCreateManyCompositionInputEnvelopeSchema: z.ZodType<Prisma.IngredientCreateManyCompositionInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => IngredientCreateManyCompositionInputSchema),z.lazy(() => IngredientCreateManyCompositionInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const CompositionCategoryCreateWithoutCompositionsInputSchema: z.ZodType<Prisma.CompositionCategoryCreateWithoutCompositionsInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  slug: z.string()
}).strict();

export const CompositionCategoryUncheckedCreateWithoutCompositionsInputSchema: z.ZodType<Prisma.CompositionCategoryUncheckedCreateWithoutCompositionsInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  slug: z.string()
}).strict();

export const CompositionCategoryCreateOrConnectWithoutCompositionsInputSchema: z.ZodType<Prisma.CompositionCategoryCreateOrConnectWithoutCompositionsInput> = z.object({
  where: z.lazy(() => CompositionCategoryWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => CompositionCategoryCreateWithoutCompositionsInputSchema),z.lazy(() => CompositionCategoryUncheckedCreateWithoutCompositionsInputSchema) ]),
}).strict();

export const FileUpsertWithoutCompositionInputSchema: z.ZodType<Prisma.FileUpsertWithoutCompositionInput> = z.object({
  update: z.union([ z.lazy(() => FileUpdateWithoutCompositionInputSchema),z.lazy(() => FileUncheckedUpdateWithoutCompositionInputSchema) ]),
  create: z.union([ z.lazy(() => FileCreateWithoutCompositionInputSchema),z.lazy(() => FileUncheckedCreateWithoutCompositionInputSchema) ]),
  where: z.lazy(() => FileWhereInputSchema).optional()
}).strict();

export const FileUpdateToOneWithWhereWithoutCompositionInputSchema: z.ZodType<Prisma.FileUpdateToOneWithWhereWithoutCompositionInput> = z.object({
  where: z.lazy(() => FileWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => FileUpdateWithoutCompositionInputSchema),z.lazy(() => FileUncheckedUpdateWithoutCompositionInputSchema) ]),
}).strict();

export const FileUpdateWithoutCompositionInputSchema: z.ZodType<Prisma.FileUpdateWithoutCompositionInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  mimeType: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  imageWidget: z.lazy(() => ImageWidgetUpdateManyWithoutFileNestedInputSchema).optional(),
  page: z.lazy(() => PageUpdateManyWithoutFeaturedImageNestedInputSchema).optional()
}).strict();

export const FileUncheckedUpdateWithoutCompositionInputSchema: z.ZodType<Prisma.FileUncheckedUpdateWithoutCompositionInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  mimeType: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  imageWidget: z.lazy(() => ImageWidgetUncheckedUpdateManyWithoutFileNestedInputSchema).optional(),
  page: z.lazy(() => PageUncheckedUpdateManyWithoutFeaturedImageNestedInputSchema).optional()
}).strict();

export const IngredientUpsertWithWhereUniqueWithoutCompositionInputSchema: z.ZodType<Prisma.IngredientUpsertWithWhereUniqueWithoutCompositionInput> = z.object({
  where: z.lazy(() => IngredientWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => IngredientUpdateWithoutCompositionInputSchema),z.lazy(() => IngredientUncheckedUpdateWithoutCompositionInputSchema) ]),
  create: z.union([ z.lazy(() => IngredientCreateWithoutCompositionInputSchema),z.lazy(() => IngredientUncheckedCreateWithoutCompositionInputSchema) ]),
}).strict();

export const IngredientUpdateWithWhereUniqueWithoutCompositionInputSchema: z.ZodType<Prisma.IngredientUpdateWithWhereUniqueWithoutCompositionInput> = z.object({
  where: z.lazy(() => IngredientWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => IngredientUpdateWithoutCompositionInputSchema),z.lazy(() => IngredientUncheckedUpdateWithoutCompositionInputSchema) ]),
}).strict();

export const IngredientUpdateManyWithWhereWithoutCompositionInputSchema: z.ZodType<Prisma.IngredientUpdateManyWithWhereWithoutCompositionInput> = z.object({
  where: z.lazy(() => IngredientScalarWhereInputSchema),
  data: z.union([ z.lazy(() => IngredientUpdateManyMutationInputSchema),z.lazy(() => IngredientUncheckedUpdateManyWithoutCompositionInputSchema) ]),
}).strict();

export const IngredientScalarWhereInputSchema: z.ZodType<Prisma.IngredientScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => IngredientScalarWhereInputSchema),z.lazy(() => IngredientScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => IngredientScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => IngredientScalarWhereInputSchema),z.lazy(() => IngredientScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  amount: z.union([ z.lazy(() => FloatFilterSchema),z.number() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  note: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  compositionId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  pageId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export const CompositionCategoryUpsertWithWhereUniqueWithoutCompositionsInputSchema: z.ZodType<Prisma.CompositionCategoryUpsertWithWhereUniqueWithoutCompositionsInput> = z.object({
  where: z.lazy(() => CompositionCategoryWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => CompositionCategoryUpdateWithoutCompositionsInputSchema),z.lazy(() => CompositionCategoryUncheckedUpdateWithoutCompositionsInputSchema) ]),
  create: z.union([ z.lazy(() => CompositionCategoryCreateWithoutCompositionsInputSchema),z.lazy(() => CompositionCategoryUncheckedCreateWithoutCompositionsInputSchema) ]),
}).strict();

export const CompositionCategoryUpdateWithWhereUniqueWithoutCompositionsInputSchema: z.ZodType<Prisma.CompositionCategoryUpdateWithWhereUniqueWithoutCompositionsInput> = z.object({
  where: z.lazy(() => CompositionCategoryWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => CompositionCategoryUpdateWithoutCompositionsInputSchema),z.lazy(() => CompositionCategoryUncheckedUpdateWithoutCompositionsInputSchema) ]),
}).strict();

export const CompositionCategoryUpdateManyWithWhereWithoutCompositionsInputSchema: z.ZodType<Prisma.CompositionCategoryUpdateManyWithWhereWithoutCompositionsInput> = z.object({
  where: z.lazy(() => CompositionCategoryScalarWhereInputSchema),
  data: z.union([ z.lazy(() => CompositionCategoryUpdateManyMutationInputSchema),z.lazy(() => CompositionCategoryUncheckedUpdateManyWithoutCompositionsInputSchema) ]),
}).strict();

export const CompositionCategoryScalarWhereInputSchema: z.ZodType<Prisma.CompositionCategoryScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => CompositionCategoryScalarWhereInputSchema),z.lazy(() => CompositionCategoryScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => CompositionCategoryScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => CompositionCategoryScalarWhereInputSchema),z.lazy(() => CompositionCategoryScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  slug: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
}).strict();

export const CompositionCreateWithoutCategoriesInputSchema: z.ZodType<Prisma.CompositionCreateWithoutCategoriesInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  description: z.string().optional().nullable(),
  video: z.lazy(() => FileCreateNestedOneWithoutCompositionInputSchema).optional(),
  ingredients: z.lazy(() => IngredientCreateNestedManyWithoutCompositionInputSchema).optional()
}).strict();

export const CompositionUncheckedCreateWithoutCategoriesInputSchema: z.ZodType<Prisma.CompositionUncheckedCreateWithoutCategoriesInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  description: z.string().optional().nullable(),
  videoId: z.string().optional().nullable(),
  ingredients: z.lazy(() => IngredientUncheckedCreateNestedManyWithoutCompositionInputSchema).optional()
}).strict();

export const CompositionCreateOrConnectWithoutCategoriesInputSchema: z.ZodType<Prisma.CompositionCreateOrConnectWithoutCategoriesInput> = z.object({
  where: z.lazy(() => CompositionWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => CompositionCreateWithoutCategoriesInputSchema),z.lazy(() => CompositionUncheckedCreateWithoutCategoriesInputSchema) ]),
}).strict();

export const CompositionUpsertWithWhereUniqueWithoutCategoriesInputSchema: z.ZodType<Prisma.CompositionUpsertWithWhereUniqueWithoutCategoriesInput> = z.object({
  where: z.lazy(() => CompositionWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => CompositionUpdateWithoutCategoriesInputSchema),z.lazy(() => CompositionUncheckedUpdateWithoutCategoriesInputSchema) ]),
  create: z.union([ z.lazy(() => CompositionCreateWithoutCategoriesInputSchema),z.lazy(() => CompositionUncheckedCreateWithoutCategoriesInputSchema) ]),
}).strict();

export const CompositionUpdateWithWhereUniqueWithoutCategoriesInputSchema: z.ZodType<Prisma.CompositionUpdateWithWhereUniqueWithoutCategoriesInput> = z.object({
  where: z.lazy(() => CompositionWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => CompositionUpdateWithoutCategoriesInputSchema),z.lazy(() => CompositionUncheckedUpdateWithoutCategoriesInputSchema) ]),
}).strict();

export const CompositionUpdateManyWithWhereWithoutCategoriesInputSchema: z.ZodType<Prisma.CompositionUpdateManyWithWhereWithoutCategoriesInput> = z.object({
  where: z.lazy(() => CompositionScalarWhereInputSchema),
  data: z.union([ z.lazy(() => CompositionUpdateManyMutationInputSchema),z.lazy(() => CompositionUncheckedUpdateManyWithoutCategoriesInputSchema) ]),
}).strict();

export const ChemicalCreateWithoutHazardsInputSchema: z.ZodType<Prisma.ChemicalCreateWithoutHazardsInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  formula: z.string().optional().nullable(),
  page: z.lazy(() => PageCreateNestedOneWithoutChemicalInputSchema)
}).strict();

export const ChemicalUncheckedCreateWithoutHazardsInputSchema: z.ZodType<Prisma.ChemicalUncheckedCreateWithoutHazardsInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  formula: z.string().optional().nullable(),
  pageId: z.string()
}).strict();

export const ChemicalCreateOrConnectWithoutHazardsInputSchema: z.ZodType<Prisma.ChemicalCreateOrConnectWithoutHazardsInput> = z.object({
  where: z.lazy(() => ChemicalWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ChemicalCreateWithoutHazardsInputSchema),z.lazy(() => ChemicalUncheckedCreateWithoutHazardsInputSchema) ]),
}).strict();

export const ChemicalUpsertWithWhereUniqueWithoutHazardsInputSchema: z.ZodType<Prisma.ChemicalUpsertWithWhereUniqueWithoutHazardsInput> = z.object({
  where: z.lazy(() => ChemicalWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => ChemicalUpdateWithoutHazardsInputSchema),z.lazy(() => ChemicalUncheckedUpdateWithoutHazardsInputSchema) ]),
  create: z.union([ z.lazy(() => ChemicalCreateWithoutHazardsInputSchema),z.lazy(() => ChemicalUncheckedCreateWithoutHazardsInputSchema) ]),
}).strict();

export const ChemicalUpdateWithWhereUniqueWithoutHazardsInputSchema: z.ZodType<Prisma.ChemicalUpdateWithWhereUniqueWithoutHazardsInput> = z.object({
  where: z.lazy(() => ChemicalWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => ChemicalUpdateWithoutHazardsInputSchema),z.lazy(() => ChemicalUncheckedUpdateWithoutHazardsInputSchema) ]),
}).strict();

export const ChemicalUpdateManyWithWhereWithoutHazardsInputSchema: z.ZodType<Prisma.ChemicalUpdateManyWithWhereWithoutHazardsInput> = z.object({
  where: z.lazy(() => ChemicalScalarWhereInputSchema),
  data: z.union([ z.lazy(() => ChemicalUpdateManyMutationInputSchema),z.lazy(() => ChemicalUncheckedUpdateManyWithoutHazardsInputSchema) ]),
}).strict();

export const ChemicalScalarWhereInputSchema: z.ZodType<Prisma.ChemicalScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => ChemicalScalarWhereInputSchema),z.lazy(() => ChemicalScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ChemicalScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ChemicalScalarWhereInputSchema),z.lazy(() => ChemicalScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  formula: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  pageId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
}).strict();

export const HazardSymbolsCreateWithoutChemicalsInputSchema: z.ZodType<Prisma.HazardSymbolsCreateWithoutChemicalsInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  symbol: z.string()
}).strict();

export const HazardSymbolsUncheckedCreateWithoutChemicalsInputSchema: z.ZodType<Prisma.HazardSymbolsUncheckedCreateWithoutChemicalsInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  symbol: z.string()
}).strict();

export const HazardSymbolsCreateOrConnectWithoutChemicalsInputSchema: z.ZodType<Prisma.HazardSymbolsCreateOrConnectWithoutChemicalsInput> = z.object({
  where: z.lazy(() => HazardSymbolsWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => HazardSymbolsCreateWithoutChemicalsInputSchema),z.lazy(() => HazardSymbolsUncheckedCreateWithoutChemicalsInputSchema) ]),
}).strict();

export const PageCreateWithoutChemicalInputSchema: z.ZodType<Prisma.PageCreateWithoutChemicalInput> = z.object({
  id: z.string().cuid().optional(),
  title: z.string(),
  slug: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  featuredImage: z.lazy(() => FileCreateNestedOneWithoutPageInputSchema).optional(),
  content: z.lazy(() => PageContentCreateNestedOneWithoutPageInputSchema),
  category: z.lazy(() => CategoryCreateNestedOneWithoutPageInputSchema).optional(),
  ingredients: z.lazy(() => IngredientCreateNestedManyWithoutPageInputSchema).optional()
}).strict();

export const PageUncheckedCreateWithoutChemicalInputSchema: z.ZodType<Prisma.PageUncheckedCreateWithoutChemicalInput> = z.object({
  id: z.string().cuid().optional(),
  title: z.string(),
  slug: z.string(),
  featuredImageId: z.string().optional().nullable(),
  pageContentId: z.string(),
  categorySlug: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  ingredients: z.lazy(() => IngredientUncheckedCreateNestedManyWithoutPageInputSchema).optional()
}).strict();

export const PageCreateOrConnectWithoutChemicalInputSchema: z.ZodType<Prisma.PageCreateOrConnectWithoutChemicalInput> = z.object({
  where: z.lazy(() => PageWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => PageCreateWithoutChemicalInputSchema),z.lazy(() => PageUncheckedCreateWithoutChemicalInputSchema) ]),
}).strict();

export const HazardSymbolsUpsertWithWhereUniqueWithoutChemicalsInputSchema: z.ZodType<Prisma.HazardSymbolsUpsertWithWhereUniqueWithoutChemicalsInput> = z.object({
  where: z.lazy(() => HazardSymbolsWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => HazardSymbolsUpdateWithoutChemicalsInputSchema),z.lazy(() => HazardSymbolsUncheckedUpdateWithoutChemicalsInputSchema) ]),
  create: z.union([ z.lazy(() => HazardSymbolsCreateWithoutChemicalsInputSchema),z.lazy(() => HazardSymbolsUncheckedCreateWithoutChemicalsInputSchema) ]),
}).strict();

export const HazardSymbolsUpdateWithWhereUniqueWithoutChemicalsInputSchema: z.ZodType<Prisma.HazardSymbolsUpdateWithWhereUniqueWithoutChemicalsInput> = z.object({
  where: z.lazy(() => HazardSymbolsWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => HazardSymbolsUpdateWithoutChemicalsInputSchema),z.lazy(() => HazardSymbolsUncheckedUpdateWithoutChemicalsInputSchema) ]),
}).strict();

export const HazardSymbolsUpdateManyWithWhereWithoutChemicalsInputSchema: z.ZodType<Prisma.HazardSymbolsUpdateManyWithWhereWithoutChemicalsInput> = z.object({
  where: z.lazy(() => HazardSymbolsScalarWhereInputSchema),
  data: z.union([ z.lazy(() => HazardSymbolsUpdateManyMutationInputSchema),z.lazy(() => HazardSymbolsUncheckedUpdateManyWithoutChemicalsInputSchema) ]),
}).strict();

export const HazardSymbolsScalarWhereInputSchema: z.ZodType<Prisma.HazardSymbolsScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => HazardSymbolsScalarWhereInputSchema),z.lazy(() => HazardSymbolsScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => HazardSymbolsScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => HazardSymbolsScalarWhereInputSchema),z.lazy(() => HazardSymbolsScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  symbol: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
}).strict();

export const PageUpsertWithoutChemicalInputSchema: z.ZodType<Prisma.PageUpsertWithoutChemicalInput> = z.object({
  update: z.union([ z.lazy(() => PageUpdateWithoutChemicalInputSchema),z.lazy(() => PageUncheckedUpdateWithoutChemicalInputSchema) ]),
  create: z.union([ z.lazy(() => PageCreateWithoutChemicalInputSchema),z.lazy(() => PageUncheckedCreateWithoutChemicalInputSchema) ]),
  where: z.lazy(() => PageWhereInputSchema).optional()
}).strict();

export const PageUpdateToOneWithWhereWithoutChemicalInputSchema: z.ZodType<Prisma.PageUpdateToOneWithWhereWithoutChemicalInput> = z.object({
  where: z.lazy(() => PageWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => PageUpdateWithoutChemicalInputSchema),z.lazy(() => PageUncheckedUpdateWithoutChemicalInputSchema) ]),
}).strict();

export const PageUpdateWithoutChemicalInputSchema: z.ZodType<Prisma.PageUpdateWithoutChemicalInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  slug: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  featuredImage: z.lazy(() => FileUpdateOneWithoutPageNestedInputSchema).optional(),
  content: z.lazy(() => PageContentUpdateOneRequiredWithoutPageNestedInputSchema).optional(),
  category: z.lazy(() => CategoryUpdateOneWithoutPageNestedInputSchema).optional(),
  ingredients: z.lazy(() => IngredientUpdateManyWithoutPageNestedInputSchema).optional()
}).strict();

export const PageUncheckedUpdateWithoutChemicalInputSchema: z.ZodType<Prisma.PageUncheckedUpdateWithoutChemicalInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  slug: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  featuredImageId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  pageContentId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  categorySlug: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  ingredients: z.lazy(() => IngredientUncheckedUpdateManyWithoutPageNestedInputSchema).optional()
}).strict();

export const FileCreateWithoutPageInputSchema: z.ZodType<Prisma.FileCreateWithoutPageInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  title: z.string(),
  description: z.string().optional().nullable(),
  mimeType: z.string().optional().nullable(),
  imageWidget: z.lazy(() => ImageWidgetCreateNestedManyWithoutFileInputSchema).optional(),
  composition: z.lazy(() => CompositionCreateNestedManyWithoutVideoInputSchema).optional()
}).strict();

export const FileUncheckedCreateWithoutPageInputSchema: z.ZodType<Prisma.FileUncheckedCreateWithoutPageInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  title: z.string(),
  description: z.string().optional().nullable(),
  mimeType: z.string().optional().nullable(),
  imageWidget: z.lazy(() => ImageWidgetUncheckedCreateNestedManyWithoutFileInputSchema).optional(),
  composition: z.lazy(() => CompositionUncheckedCreateNestedManyWithoutVideoInputSchema).optional()
}).strict();

export const FileCreateOrConnectWithoutPageInputSchema: z.ZodType<Prisma.FileCreateOrConnectWithoutPageInput> = z.object({
  where: z.lazy(() => FileWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => FileCreateWithoutPageInputSchema),z.lazy(() => FileUncheckedCreateWithoutPageInputSchema) ]),
}).strict();

export const PageContentCreateWithoutPageInputSchema: z.ZodType<Prisma.PageContentCreateWithoutPageInput> = z.object({
  id: z.string().cuid().optional(),
  createdAt: z.coerce.date().optional(),
  html: z.string().optional(),
  sidebar: z.boolean().optional(),
  widgets: z.lazy(() => WidgetCreateNestedManyWithoutPageContentInputSchema).optional()
}).strict();

export const PageContentUncheckedCreateWithoutPageInputSchema: z.ZodType<Prisma.PageContentUncheckedCreateWithoutPageInput> = z.object({
  id: z.string().cuid().optional(),
  createdAt: z.coerce.date().optional(),
  html: z.string().optional(),
  sidebar: z.boolean().optional(),
  widgets: z.lazy(() => WidgetUncheckedCreateNestedManyWithoutPageContentInputSchema).optional()
}).strict();

export const PageContentCreateOrConnectWithoutPageInputSchema: z.ZodType<Prisma.PageContentCreateOrConnectWithoutPageInput> = z.object({
  where: z.lazy(() => PageContentWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => PageContentCreateWithoutPageInputSchema),z.lazy(() => PageContentUncheckedCreateWithoutPageInputSchema) ]),
}).strict();

export const CategoryCreateWithoutPageInputSchema: z.ZodType<Prisma.CategoryCreateWithoutPageInput> = z.object({
  title: z.string(),
  slug: z.string()
}).strict();

export const CategoryUncheckedCreateWithoutPageInputSchema: z.ZodType<Prisma.CategoryUncheckedCreateWithoutPageInput> = z.object({
  title: z.string(),
  slug: z.string()
}).strict();

export const CategoryCreateOrConnectWithoutPageInputSchema: z.ZodType<Prisma.CategoryCreateOrConnectWithoutPageInput> = z.object({
  where: z.lazy(() => CategoryWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => CategoryCreateWithoutPageInputSchema),z.lazy(() => CategoryUncheckedCreateWithoutPageInputSchema) ]),
}).strict();

export const ChemicalCreateWithoutPageInputSchema: z.ZodType<Prisma.ChemicalCreateWithoutPageInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  formula: z.string().optional().nullable(),
  hazards: z.lazy(() => HazardSymbolsCreateNestedManyWithoutChemicalsInputSchema).optional()
}).strict();

export const ChemicalUncheckedCreateWithoutPageInputSchema: z.ZodType<Prisma.ChemicalUncheckedCreateWithoutPageInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  formula: z.string().optional().nullable(),
  hazards: z.lazy(() => HazardSymbolsUncheckedCreateNestedManyWithoutChemicalsInputSchema).optional()
}).strict();

export const ChemicalCreateOrConnectWithoutPageInputSchema: z.ZodType<Prisma.ChemicalCreateOrConnectWithoutPageInput> = z.object({
  where: z.lazy(() => ChemicalWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ChemicalCreateWithoutPageInputSchema),z.lazy(() => ChemicalUncheckedCreateWithoutPageInputSchema) ]),
}).strict();

export const IngredientCreateWithoutPageInputSchema: z.ZodType<Prisma.IngredientCreateWithoutPageInput> = z.object({
  id: z.string().cuid().optional(),
  amount: z.number(),
  name: z.string(),
  note: z.string().optional().nullable(),
  composition: z.lazy(() => CompositionCreateNestedOneWithoutIngredientsInputSchema)
}).strict();

export const IngredientUncheckedCreateWithoutPageInputSchema: z.ZodType<Prisma.IngredientUncheckedCreateWithoutPageInput> = z.object({
  id: z.string().cuid().optional(),
  amount: z.number(),
  name: z.string(),
  note: z.string().optional().nullable(),
  compositionId: z.string()
}).strict();

export const IngredientCreateOrConnectWithoutPageInputSchema: z.ZodType<Prisma.IngredientCreateOrConnectWithoutPageInput> = z.object({
  where: z.lazy(() => IngredientWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => IngredientCreateWithoutPageInputSchema),z.lazy(() => IngredientUncheckedCreateWithoutPageInputSchema) ]),
}).strict();

export const IngredientCreateManyPageInputEnvelopeSchema: z.ZodType<Prisma.IngredientCreateManyPageInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => IngredientCreateManyPageInputSchema),z.lazy(() => IngredientCreateManyPageInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const FileUpsertWithoutPageInputSchema: z.ZodType<Prisma.FileUpsertWithoutPageInput> = z.object({
  update: z.union([ z.lazy(() => FileUpdateWithoutPageInputSchema),z.lazy(() => FileUncheckedUpdateWithoutPageInputSchema) ]),
  create: z.union([ z.lazy(() => FileCreateWithoutPageInputSchema),z.lazy(() => FileUncheckedCreateWithoutPageInputSchema) ]),
  where: z.lazy(() => FileWhereInputSchema).optional()
}).strict();

export const FileUpdateToOneWithWhereWithoutPageInputSchema: z.ZodType<Prisma.FileUpdateToOneWithWhereWithoutPageInput> = z.object({
  where: z.lazy(() => FileWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => FileUpdateWithoutPageInputSchema),z.lazy(() => FileUncheckedUpdateWithoutPageInputSchema) ]),
}).strict();

export const FileUpdateWithoutPageInputSchema: z.ZodType<Prisma.FileUpdateWithoutPageInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  mimeType: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  imageWidget: z.lazy(() => ImageWidgetUpdateManyWithoutFileNestedInputSchema).optional(),
  composition: z.lazy(() => CompositionUpdateManyWithoutVideoNestedInputSchema).optional()
}).strict();

export const FileUncheckedUpdateWithoutPageInputSchema: z.ZodType<Prisma.FileUncheckedUpdateWithoutPageInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  mimeType: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  imageWidget: z.lazy(() => ImageWidgetUncheckedUpdateManyWithoutFileNestedInputSchema).optional(),
  composition: z.lazy(() => CompositionUncheckedUpdateManyWithoutVideoNestedInputSchema).optional()
}).strict();

export const PageContentUpsertWithoutPageInputSchema: z.ZodType<Prisma.PageContentUpsertWithoutPageInput> = z.object({
  update: z.union([ z.lazy(() => PageContentUpdateWithoutPageInputSchema),z.lazy(() => PageContentUncheckedUpdateWithoutPageInputSchema) ]),
  create: z.union([ z.lazy(() => PageContentCreateWithoutPageInputSchema),z.lazy(() => PageContentUncheckedCreateWithoutPageInputSchema) ]),
  where: z.lazy(() => PageContentWhereInputSchema).optional()
}).strict();

export const PageContentUpdateToOneWithWhereWithoutPageInputSchema: z.ZodType<Prisma.PageContentUpdateToOneWithWhereWithoutPageInput> = z.object({
  where: z.lazy(() => PageContentWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => PageContentUpdateWithoutPageInputSchema),z.lazy(() => PageContentUncheckedUpdateWithoutPageInputSchema) ]),
}).strict();

export const PageContentUpdateWithoutPageInputSchema: z.ZodType<Prisma.PageContentUpdateWithoutPageInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  html: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  sidebar: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  widgets: z.lazy(() => WidgetUpdateManyWithoutPageContentNestedInputSchema).optional()
}).strict();

export const PageContentUncheckedUpdateWithoutPageInputSchema: z.ZodType<Prisma.PageContentUncheckedUpdateWithoutPageInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  html: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  sidebar: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  widgets: z.lazy(() => WidgetUncheckedUpdateManyWithoutPageContentNestedInputSchema).optional()
}).strict();

export const CategoryUpsertWithoutPageInputSchema: z.ZodType<Prisma.CategoryUpsertWithoutPageInput> = z.object({
  update: z.union([ z.lazy(() => CategoryUpdateWithoutPageInputSchema),z.lazy(() => CategoryUncheckedUpdateWithoutPageInputSchema) ]),
  create: z.union([ z.lazy(() => CategoryCreateWithoutPageInputSchema),z.lazy(() => CategoryUncheckedCreateWithoutPageInputSchema) ]),
  where: z.lazy(() => CategoryWhereInputSchema).optional()
}).strict();

export const CategoryUpdateToOneWithWhereWithoutPageInputSchema: z.ZodType<Prisma.CategoryUpdateToOneWithWhereWithoutPageInput> = z.object({
  where: z.lazy(() => CategoryWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => CategoryUpdateWithoutPageInputSchema),z.lazy(() => CategoryUncheckedUpdateWithoutPageInputSchema) ]),
}).strict();

export const CategoryUpdateWithoutPageInputSchema: z.ZodType<Prisma.CategoryUpdateWithoutPageInput> = z.object({
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  slug: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const CategoryUncheckedUpdateWithoutPageInputSchema: z.ZodType<Prisma.CategoryUncheckedUpdateWithoutPageInput> = z.object({
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  slug: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ChemicalUpsertWithoutPageInputSchema: z.ZodType<Prisma.ChemicalUpsertWithoutPageInput> = z.object({
  update: z.union([ z.lazy(() => ChemicalUpdateWithoutPageInputSchema),z.lazy(() => ChemicalUncheckedUpdateWithoutPageInputSchema) ]),
  create: z.union([ z.lazy(() => ChemicalCreateWithoutPageInputSchema),z.lazy(() => ChemicalUncheckedCreateWithoutPageInputSchema) ]),
  where: z.lazy(() => ChemicalWhereInputSchema).optional()
}).strict();

export const ChemicalUpdateToOneWithWhereWithoutPageInputSchema: z.ZodType<Prisma.ChemicalUpdateToOneWithWhereWithoutPageInput> = z.object({
  where: z.lazy(() => ChemicalWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => ChemicalUpdateWithoutPageInputSchema),z.lazy(() => ChemicalUncheckedUpdateWithoutPageInputSchema) ]),
}).strict();

export const ChemicalUpdateWithoutPageInputSchema: z.ZodType<Prisma.ChemicalUpdateWithoutPageInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  formula: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  hazards: z.lazy(() => HazardSymbolsUpdateManyWithoutChemicalsNestedInputSchema).optional()
}).strict();

export const ChemicalUncheckedUpdateWithoutPageInputSchema: z.ZodType<Prisma.ChemicalUncheckedUpdateWithoutPageInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  formula: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  hazards: z.lazy(() => HazardSymbolsUncheckedUpdateManyWithoutChemicalsNestedInputSchema).optional()
}).strict();

export const IngredientUpsertWithWhereUniqueWithoutPageInputSchema: z.ZodType<Prisma.IngredientUpsertWithWhereUniqueWithoutPageInput> = z.object({
  where: z.lazy(() => IngredientWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => IngredientUpdateWithoutPageInputSchema),z.lazy(() => IngredientUncheckedUpdateWithoutPageInputSchema) ]),
  create: z.union([ z.lazy(() => IngredientCreateWithoutPageInputSchema),z.lazy(() => IngredientUncheckedCreateWithoutPageInputSchema) ]),
}).strict();

export const IngredientUpdateWithWhereUniqueWithoutPageInputSchema: z.ZodType<Prisma.IngredientUpdateWithWhereUniqueWithoutPageInput> = z.object({
  where: z.lazy(() => IngredientWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => IngredientUpdateWithoutPageInputSchema),z.lazy(() => IngredientUncheckedUpdateWithoutPageInputSchema) ]),
}).strict();

export const IngredientUpdateManyWithWhereWithoutPageInputSchema: z.ZodType<Prisma.IngredientUpdateManyWithWhereWithoutPageInput> = z.object({
  where: z.lazy(() => IngredientScalarWhereInputSchema),
  data: z.union([ z.lazy(() => IngredientUpdateManyMutationInputSchema),z.lazy(() => IngredientUncheckedUpdateManyWithoutPageInputSchema) ]),
}).strict();

export const PageCreateWithoutCategoryInputSchema: z.ZodType<Prisma.PageCreateWithoutCategoryInput> = z.object({
  id: z.string().cuid().optional(),
  title: z.string(),
  slug: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  featuredImage: z.lazy(() => FileCreateNestedOneWithoutPageInputSchema).optional(),
  content: z.lazy(() => PageContentCreateNestedOneWithoutPageInputSchema),
  chemical: z.lazy(() => ChemicalCreateNestedOneWithoutPageInputSchema).optional(),
  ingredients: z.lazy(() => IngredientCreateNestedManyWithoutPageInputSchema).optional()
}).strict();

export const PageUncheckedCreateWithoutCategoryInputSchema: z.ZodType<Prisma.PageUncheckedCreateWithoutCategoryInput> = z.object({
  id: z.string().cuid().optional(),
  title: z.string(),
  slug: z.string(),
  featuredImageId: z.string().optional().nullable(),
  pageContentId: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  chemical: z.lazy(() => ChemicalUncheckedCreateNestedOneWithoutPageInputSchema).optional(),
  ingredients: z.lazy(() => IngredientUncheckedCreateNestedManyWithoutPageInputSchema).optional()
}).strict();

export const PageCreateOrConnectWithoutCategoryInputSchema: z.ZodType<Prisma.PageCreateOrConnectWithoutCategoryInput> = z.object({
  where: z.lazy(() => PageWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => PageCreateWithoutCategoryInputSchema),z.lazy(() => PageUncheckedCreateWithoutCategoryInputSchema) ]),
}).strict();

export const PageCreateManyCategoryInputEnvelopeSchema: z.ZodType<Prisma.PageCreateManyCategoryInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => PageCreateManyCategoryInputSchema),z.lazy(() => PageCreateManyCategoryInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const PageUpsertWithWhereUniqueWithoutCategoryInputSchema: z.ZodType<Prisma.PageUpsertWithWhereUniqueWithoutCategoryInput> = z.object({
  where: z.lazy(() => PageWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => PageUpdateWithoutCategoryInputSchema),z.lazy(() => PageUncheckedUpdateWithoutCategoryInputSchema) ]),
  create: z.union([ z.lazy(() => PageCreateWithoutCategoryInputSchema),z.lazy(() => PageUncheckedCreateWithoutCategoryInputSchema) ]),
}).strict();

export const PageUpdateWithWhereUniqueWithoutCategoryInputSchema: z.ZodType<Prisma.PageUpdateWithWhereUniqueWithoutCategoryInput> = z.object({
  where: z.lazy(() => PageWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => PageUpdateWithoutCategoryInputSchema),z.lazy(() => PageUncheckedUpdateWithoutCategoryInputSchema) ]),
}).strict();

export const PageUpdateManyWithWhereWithoutCategoryInputSchema: z.ZodType<Prisma.PageUpdateManyWithWhereWithoutCategoryInput> = z.object({
  where: z.lazy(() => PageScalarWhereInputSchema),
  data: z.union([ z.lazy(() => PageUpdateManyMutationInputSchema),z.lazy(() => PageUncheckedUpdateManyWithoutCategoryInputSchema) ]),
}).strict();

export const PageCreateWithoutContentInputSchema: z.ZodType<Prisma.PageCreateWithoutContentInput> = z.object({
  id: z.string().cuid().optional(),
  title: z.string(),
  slug: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  featuredImage: z.lazy(() => FileCreateNestedOneWithoutPageInputSchema).optional(),
  category: z.lazy(() => CategoryCreateNestedOneWithoutPageInputSchema).optional(),
  chemical: z.lazy(() => ChemicalCreateNestedOneWithoutPageInputSchema).optional(),
  ingredients: z.lazy(() => IngredientCreateNestedManyWithoutPageInputSchema).optional()
}).strict();

export const PageUncheckedCreateWithoutContentInputSchema: z.ZodType<Prisma.PageUncheckedCreateWithoutContentInput> = z.object({
  id: z.string().cuid().optional(),
  title: z.string(),
  slug: z.string(),
  featuredImageId: z.string().optional().nullable(),
  categorySlug: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  chemical: z.lazy(() => ChemicalUncheckedCreateNestedOneWithoutPageInputSchema).optional(),
  ingredients: z.lazy(() => IngredientUncheckedCreateNestedManyWithoutPageInputSchema).optional()
}).strict();

export const PageCreateOrConnectWithoutContentInputSchema: z.ZodType<Prisma.PageCreateOrConnectWithoutContentInput> = z.object({
  where: z.lazy(() => PageWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => PageCreateWithoutContentInputSchema),z.lazy(() => PageUncheckedCreateWithoutContentInputSchema) ]),
}).strict();

export const PageCreateManyContentInputEnvelopeSchema: z.ZodType<Prisma.PageCreateManyContentInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => PageCreateManyContentInputSchema),z.lazy(() => PageCreateManyContentInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const WidgetCreateWithoutPageContentInputSchema: z.ZodType<Prisma.WidgetCreateWithoutPageContentInput> = z.object({
  id: z.string().cuid().optional(),
  imageWidget: z.lazy(() => ImageWidgetCreateNestedOneWithoutWidgetsInputSchema).optional()
}).strict();

export const WidgetUncheckedCreateWithoutPageContentInputSchema: z.ZodType<Prisma.WidgetUncheckedCreateWithoutPageContentInput> = z.object({
  id: z.string().cuid().optional(),
  imageWidget: z.lazy(() => ImageWidgetUncheckedCreateNestedOneWithoutWidgetsInputSchema).optional()
}).strict();

export const WidgetCreateOrConnectWithoutPageContentInputSchema: z.ZodType<Prisma.WidgetCreateOrConnectWithoutPageContentInput> = z.object({
  where: z.lazy(() => WidgetWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => WidgetCreateWithoutPageContentInputSchema),z.lazy(() => WidgetUncheckedCreateWithoutPageContentInputSchema) ]),
}).strict();

export const WidgetCreateManyPageContentInputEnvelopeSchema: z.ZodType<Prisma.WidgetCreateManyPageContentInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => WidgetCreateManyPageContentInputSchema),z.lazy(() => WidgetCreateManyPageContentInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const PageUpsertWithWhereUniqueWithoutContentInputSchema: z.ZodType<Prisma.PageUpsertWithWhereUniqueWithoutContentInput> = z.object({
  where: z.lazy(() => PageWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => PageUpdateWithoutContentInputSchema),z.lazy(() => PageUncheckedUpdateWithoutContentInputSchema) ]),
  create: z.union([ z.lazy(() => PageCreateWithoutContentInputSchema),z.lazy(() => PageUncheckedCreateWithoutContentInputSchema) ]),
}).strict();

export const PageUpdateWithWhereUniqueWithoutContentInputSchema: z.ZodType<Prisma.PageUpdateWithWhereUniqueWithoutContentInput> = z.object({
  where: z.lazy(() => PageWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => PageUpdateWithoutContentInputSchema),z.lazy(() => PageUncheckedUpdateWithoutContentInputSchema) ]),
}).strict();

export const PageUpdateManyWithWhereWithoutContentInputSchema: z.ZodType<Prisma.PageUpdateManyWithWhereWithoutContentInput> = z.object({
  where: z.lazy(() => PageScalarWhereInputSchema),
  data: z.union([ z.lazy(() => PageUpdateManyMutationInputSchema),z.lazy(() => PageUncheckedUpdateManyWithoutContentInputSchema) ]),
}).strict();

export const WidgetUpsertWithWhereUniqueWithoutPageContentInputSchema: z.ZodType<Prisma.WidgetUpsertWithWhereUniqueWithoutPageContentInput> = z.object({
  where: z.lazy(() => WidgetWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => WidgetUpdateWithoutPageContentInputSchema),z.lazy(() => WidgetUncheckedUpdateWithoutPageContentInputSchema) ]),
  create: z.union([ z.lazy(() => WidgetCreateWithoutPageContentInputSchema),z.lazy(() => WidgetUncheckedCreateWithoutPageContentInputSchema) ]),
}).strict();

export const WidgetUpdateWithWhereUniqueWithoutPageContentInputSchema: z.ZodType<Prisma.WidgetUpdateWithWhereUniqueWithoutPageContentInput> = z.object({
  where: z.lazy(() => WidgetWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => WidgetUpdateWithoutPageContentInputSchema),z.lazy(() => WidgetUncheckedUpdateWithoutPageContentInputSchema) ]),
}).strict();

export const WidgetUpdateManyWithWhereWithoutPageContentInputSchema: z.ZodType<Prisma.WidgetUpdateManyWithWhereWithoutPageContentInput> = z.object({
  where: z.lazy(() => WidgetScalarWhereInputSchema),
  data: z.union([ z.lazy(() => WidgetUpdateManyMutationInputSchema),z.lazy(() => WidgetUncheckedUpdateManyWithoutPageContentInputSchema) ]),
}).strict();

export const WidgetScalarWhereInputSchema: z.ZodType<Prisma.WidgetScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => WidgetScalarWhereInputSchema),z.lazy(() => WidgetScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => WidgetScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => WidgetScalarWhereInputSchema),z.lazy(() => WidgetScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  pageContentId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
}).strict();

export const PageContentCreateWithoutWidgetsInputSchema: z.ZodType<Prisma.PageContentCreateWithoutWidgetsInput> = z.object({
  id: z.string().cuid().optional(),
  createdAt: z.coerce.date().optional(),
  html: z.string().optional(),
  sidebar: z.boolean().optional(),
  page: z.lazy(() => PageCreateNestedManyWithoutContentInputSchema).optional()
}).strict();

export const PageContentUncheckedCreateWithoutWidgetsInputSchema: z.ZodType<Prisma.PageContentUncheckedCreateWithoutWidgetsInput> = z.object({
  id: z.string().cuid().optional(),
  createdAt: z.coerce.date().optional(),
  html: z.string().optional(),
  sidebar: z.boolean().optional(),
  page: z.lazy(() => PageUncheckedCreateNestedManyWithoutContentInputSchema).optional()
}).strict();

export const PageContentCreateOrConnectWithoutWidgetsInputSchema: z.ZodType<Prisma.PageContentCreateOrConnectWithoutWidgetsInput> = z.object({
  where: z.lazy(() => PageContentWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => PageContentCreateWithoutWidgetsInputSchema),z.lazy(() => PageContentUncheckedCreateWithoutWidgetsInputSchema) ]),
}).strict();

export const ImageWidgetCreateWithoutWidgetsInputSchema: z.ZodType<Prisma.ImageWidgetCreateWithoutWidgetsInput> = z.object({
  id: z.string().cuid().optional(),
  file: z.lazy(() => FileCreateNestedOneWithoutImageWidgetInputSchema)
}).strict();

export const ImageWidgetUncheckedCreateWithoutWidgetsInputSchema: z.ZodType<Prisma.ImageWidgetUncheckedCreateWithoutWidgetsInput> = z.object({
  id: z.string().cuid().optional(),
  fileId: z.string()
}).strict();

export const ImageWidgetCreateOrConnectWithoutWidgetsInputSchema: z.ZodType<Prisma.ImageWidgetCreateOrConnectWithoutWidgetsInput> = z.object({
  where: z.lazy(() => ImageWidgetWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ImageWidgetCreateWithoutWidgetsInputSchema),z.lazy(() => ImageWidgetUncheckedCreateWithoutWidgetsInputSchema) ]),
}).strict();

export const PageContentUpsertWithoutWidgetsInputSchema: z.ZodType<Prisma.PageContentUpsertWithoutWidgetsInput> = z.object({
  update: z.union([ z.lazy(() => PageContentUpdateWithoutWidgetsInputSchema),z.lazy(() => PageContentUncheckedUpdateWithoutWidgetsInputSchema) ]),
  create: z.union([ z.lazy(() => PageContentCreateWithoutWidgetsInputSchema),z.lazy(() => PageContentUncheckedCreateWithoutWidgetsInputSchema) ]),
  where: z.lazy(() => PageContentWhereInputSchema).optional()
}).strict();

export const PageContentUpdateToOneWithWhereWithoutWidgetsInputSchema: z.ZodType<Prisma.PageContentUpdateToOneWithWhereWithoutWidgetsInput> = z.object({
  where: z.lazy(() => PageContentWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => PageContentUpdateWithoutWidgetsInputSchema),z.lazy(() => PageContentUncheckedUpdateWithoutWidgetsInputSchema) ]),
}).strict();

export const PageContentUpdateWithoutWidgetsInputSchema: z.ZodType<Prisma.PageContentUpdateWithoutWidgetsInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  html: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  sidebar: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  page: z.lazy(() => PageUpdateManyWithoutContentNestedInputSchema).optional()
}).strict();

export const PageContentUncheckedUpdateWithoutWidgetsInputSchema: z.ZodType<Prisma.PageContentUncheckedUpdateWithoutWidgetsInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  html: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  sidebar: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  page: z.lazy(() => PageUncheckedUpdateManyWithoutContentNestedInputSchema).optional()
}).strict();

export const ImageWidgetUpsertWithoutWidgetsInputSchema: z.ZodType<Prisma.ImageWidgetUpsertWithoutWidgetsInput> = z.object({
  update: z.union([ z.lazy(() => ImageWidgetUpdateWithoutWidgetsInputSchema),z.lazy(() => ImageWidgetUncheckedUpdateWithoutWidgetsInputSchema) ]),
  create: z.union([ z.lazy(() => ImageWidgetCreateWithoutWidgetsInputSchema),z.lazy(() => ImageWidgetUncheckedCreateWithoutWidgetsInputSchema) ]),
  where: z.lazy(() => ImageWidgetWhereInputSchema).optional()
}).strict();

export const ImageWidgetUpdateToOneWithWhereWithoutWidgetsInputSchema: z.ZodType<Prisma.ImageWidgetUpdateToOneWithWhereWithoutWidgetsInput> = z.object({
  where: z.lazy(() => ImageWidgetWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => ImageWidgetUpdateWithoutWidgetsInputSchema),z.lazy(() => ImageWidgetUncheckedUpdateWithoutWidgetsInputSchema) ]),
}).strict();

export const ImageWidgetUpdateWithoutWidgetsInputSchema: z.ZodType<Prisma.ImageWidgetUpdateWithoutWidgetsInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  file: z.lazy(() => FileUpdateOneRequiredWithoutImageWidgetNestedInputSchema).optional()
}).strict();

export const ImageWidgetUncheckedUpdateWithoutWidgetsInputSchema: z.ZodType<Prisma.ImageWidgetUncheckedUpdateWithoutWidgetsInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  fileId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const WidgetCreateWithoutImageWidgetInputSchema: z.ZodType<Prisma.WidgetCreateWithoutImageWidgetInput> = z.object({
  id: z.string().cuid().optional(),
  pageContent: z.lazy(() => PageContentCreateNestedOneWithoutWidgetsInputSchema)
}).strict();

export const WidgetUncheckedCreateWithoutImageWidgetInputSchema: z.ZodType<Prisma.WidgetUncheckedCreateWithoutImageWidgetInput> = z.object({
  id: z.string().cuid().optional(),
  pageContentId: z.string()
}).strict();

export const WidgetCreateOrConnectWithoutImageWidgetInputSchema: z.ZodType<Prisma.WidgetCreateOrConnectWithoutImageWidgetInput> = z.object({
  where: z.lazy(() => WidgetWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => WidgetCreateWithoutImageWidgetInputSchema),z.lazy(() => WidgetUncheckedCreateWithoutImageWidgetInputSchema) ]),
}).strict();

export const FileCreateWithoutImageWidgetInputSchema: z.ZodType<Prisma.FileCreateWithoutImageWidgetInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  title: z.string(),
  description: z.string().optional().nullable(),
  mimeType: z.string().optional().nullable(),
  page: z.lazy(() => PageCreateNestedManyWithoutFeaturedImageInputSchema).optional(),
  composition: z.lazy(() => CompositionCreateNestedManyWithoutVideoInputSchema).optional()
}).strict();

export const FileUncheckedCreateWithoutImageWidgetInputSchema: z.ZodType<Prisma.FileUncheckedCreateWithoutImageWidgetInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  title: z.string(),
  description: z.string().optional().nullable(),
  mimeType: z.string().optional().nullable(),
  page: z.lazy(() => PageUncheckedCreateNestedManyWithoutFeaturedImageInputSchema).optional(),
  composition: z.lazy(() => CompositionUncheckedCreateNestedManyWithoutVideoInputSchema).optional()
}).strict();

export const FileCreateOrConnectWithoutImageWidgetInputSchema: z.ZodType<Prisma.FileCreateOrConnectWithoutImageWidgetInput> = z.object({
  where: z.lazy(() => FileWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => FileCreateWithoutImageWidgetInputSchema),z.lazy(() => FileUncheckedCreateWithoutImageWidgetInputSchema) ]),
}).strict();

export const WidgetUpsertWithoutImageWidgetInputSchema: z.ZodType<Prisma.WidgetUpsertWithoutImageWidgetInput> = z.object({
  update: z.union([ z.lazy(() => WidgetUpdateWithoutImageWidgetInputSchema),z.lazy(() => WidgetUncheckedUpdateWithoutImageWidgetInputSchema) ]),
  create: z.union([ z.lazy(() => WidgetCreateWithoutImageWidgetInputSchema),z.lazy(() => WidgetUncheckedCreateWithoutImageWidgetInputSchema) ]),
  where: z.lazy(() => WidgetWhereInputSchema).optional()
}).strict();

export const WidgetUpdateToOneWithWhereWithoutImageWidgetInputSchema: z.ZodType<Prisma.WidgetUpdateToOneWithWhereWithoutImageWidgetInput> = z.object({
  where: z.lazy(() => WidgetWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => WidgetUpdateWithoutImageWidgetInputSchema),z.lazy(() => WidgetUncheckedUpdateWithoutImageWidgetInputSchema) ]),
}).strict();

export const WidgetUpdateWithoutImageWidgetInputSchema: z.ZodType<Prisma.WidgetUpdateWithoutImageWidgetInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  pageContent: z.lazy(() => PageContentUpdateOneRequiredWithoutWidgetsNestedInputSchema).optional()
}).strict();

export const WidgetUncheckedUpdateWithoutImageWidgetInputSchema: z.ZodType<Prisma.WidgetUncheckedUpdateWithoutImageWidgetInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  pageContentId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const FileUpsertWithoutImageWidgetInputSchema: z.ZodType<Prisma.FileUpsertWithoutImageWidgetInput> = z.object({
  update: z.union([ z.lazy(() => FileUpdateWithoutImageWidgetInputSchema),z.lazy(() => FileUncheckedUpdateWithoutImageWidgetInputSchema) ]),
  create: z.union([ z.lazy(() => FileCreateWithoutImageWidgetInputSchema),z.lazy(() => FileUncheckedCreateWithoutImageWidgetInputSchema) ]),
  where: z.lazy(() => FileWhereInputSchema).optional()
}).strict();

export const FileUpdateToOneWithWhereWithoutImageWidgetInputSchema: z.ZodType<Prisma.FileUpdateToOneWithWhereWithoutImageWidgetInput> = z.object({
  where: z.lazy(() => FileWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => FileUpdateWithoutImageWidgetInputSchema),z.lazy(() => FileUncheckedUpdateWithoutImageWidgetInputSchema) ]),
}).strict();

export const FileUpdateWithoutImageWidgetInputSchema: z.ZodType<Prisma.FileUpdateWithoutImageWidgetInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  mimeType: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  page: z.lazy(() => PageUpdateManyWithoutFeaturedImageNestedInputSchema).optional(),
  composition: z.lazy(() => CompositionUpdateManyWithoutVideoNestedInputSchema).optional()
}).strict();

export const FileUncheckedUpdateWithoutImageWidgetInputSchema: z.ZodType<Prisma.FileUncheckedUpdateWithoutImageWidgetInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  mimeType: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  page: z.lazy(() => PageUncheckedUpdateManyWithoutFeaturedImageNestedInputSchema).optional(),
  composition: z.lazy(() => CompositionUncheckedUpdateManyWithoutVideoNestedInputSchema).optional()
}).strict();

export const ImageWidgetCreateManyFileInputSchema: z.ZodType<Prisma.ImageWidgetCreateManyFileInput> = z.object({
  id: z.string().cuid().optional(),
  widgetId: z.string()
}).strict();

export const PageCreateManyFeaturedImageInputSchema: z.ZodType<Prisma.PageCreateManyFeaturedImageInput> = z.object({
  id: z.string().cuid().optional(),
  title: z.string(),
  slug: z.string(),
  pageContentId: z.string(),
  categorySlug: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const CompositionCreateManyVideoInputSchema: z.ZodType<Prisma.CompositionCreateManyVideoInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  description: z.string().optional().nullable()
}).strict();

export const ImageWidgetUpdateWithoutFileInputSchema: z.ZodType<Prisma.ImageWidgetUpdateWithoutFileInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  widgets: z.lazy(() => WidgetUpdateOneRequiredWithoutImageWidgetNestedInputSchema).optional()
}).strict();

export const ImageWidgetUncheckedUpdateWithoutFileInputSchema: z.ZodType<Prisma.ImageWidgetUncheckedUpdateWithoutFileInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  widgetId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ImageWidgetUncheckedUpdateManyWithoutFileInputSchema: z.ZodType<Prisma.ImageWidgetUncheckedUpdateManyWithoutFileInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  widgetId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const PageUpdateWithoutFeaturedImageInputSchema: z.ZodType<Prisma.PageUpdateWithoutFeaturedImageInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  slug: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  content: z.lazy(() => PageContentUpdateOneRequiredWithoutPageNestedInputSchema).optional(),
  category: z.lazy(() => CategoryUpdateOneWithoutPageNestedInputSchema).optional(),
  chemical: z.lazy(() => ChemicalUpdateOneWithoutPageNestedInputSchema).optional(),
  ingredients: z.lazy(() => IngredientUpdateManyWithoutPageNestedInputSchema).optional()
}).strict();

export const PageUncheckedUpdateWithoutFeaturedImageInputSchema: z.ZodType<Prisma.PageUncheckedUpdateWithoutFeaturedImageInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  slug: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  pageContentId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  categorySlug: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  chemical: z.lazy(() => ChemicalUncheckedUpdateOneWithoutPageNestedInputSchema).optional(),
  ingredients: z.lazy(() => IngredientUncheckedUpdateManyWithoutPageNestedInputSchema).optional()
}).strict();

export const PageUncheckedUpdateManyWithoutFeaturedImageInputSchema: z.ZodType<Prisma.PageUncheckedUpdateManyWithoutFeaturedImageInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  slug: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  pageContentId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  categorySlug: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const CompositionUpdateWithoutVideoInputSchema: z.ZodType<Prisma.CompositionUpdateWithoutVideoInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  ingredients: z.lazy(() => IngredientUpdateManyWithoutCompositionNestedInputSchema).optional(),
  categories: z.lazy(() => CompositionCategoryUpdateManyWithoutCompositionsNestedInputSchema).optional()
}).strict();

export const CompositionUncheckedUpdateWithoutVideoInputSchema: z.ZodType<Prisma.CompositionUncheckedUpdateWithoutVideoInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  ingredients: z.lazy(() => IngredientUncheckedUpdateManyWithoutCompositionNestedInputSchema).optional(),
  categories: z.lazy(() => CompositionCategoryUncheckedUpdateManyWithoutCompositionsNestedInputSchema).optional()
}).strict();

export const CompositionUncheckedUpdateManyWithoutVideoInputSchema: z.ZodType<Prisma.CompositionUncheckedUpdateManyWithoutVideoInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const IngredientCreateManyCompositionInputSchema: z.ZodType<Prisma.IngredientCreateManyCompositionInput> = z.object({
  id: z.string().cuid().optional(),
  amount: z.number(),
  name: z.string(),
  note: z.string().optional().nullable(),
  pageId: z.string().optional().nullable()
}).strict();

export const IngredientUpdateWithoutCompositionInputSchema: z.ZodType<Prisma.IngredientUpdateWithoutCompositionInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  amount: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  note: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  page: z.lazy(() => PageUpdateOneWithoutIngredientsNestedInputSchema).optional()
}).strict();

export const IngredientUncheckedUpdateWithoutCompositionInputSchema: z.ZodType<Prisma.IngredientUncheckedUpdateWithoutCompositionInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  amount: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  note: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  pageId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const IngredientUncheckedUpdateManyWithoutCompositionInputSchema: z.ZodType<Prisma.IngredientUncheckedUpdateManyWithoutCompositionInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  amount: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  note: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  pageId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const CompositionCategoryUpdateWithoutCompositionsInputSchema: z.ZodType<Prisma.CompositionCategoryUpdateWithoutCompositionsInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  slug: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const CompositionCategoryUncheckedUpdateWithoutCompositionsInputSchema: z.ZodType<Prisma.CompositionCategoryUncheckedUpdateWithoutCompositionsInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  slug: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const CompositionCategoryUncheckedUpdateManyWithoutCompositionsInputSchema: z.ZodType<Prisma.CompositionCategoryUncheckedUpdateManyWithoutCompositionsInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  slug: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const CompositionUpdateWithoutCategoriesInputSchema: z.ZodType<Prisma.CompositionUpdateWithoutCategoriesInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  video: z.lazy(() => FileUpdateOneWithoutCompositionNestedInputSchema).optional(),
  ingredients: z.lazy(() => IngredientUpdateManyWithoutCompositionNestedInputSchema).optional()
}).strict();

export const CompositionUncheckedUpdateWithoutCategoriesInputSchema: z.ZodType<Prisma.CompositionUncheckedUpdateWithoutCategoriesInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  videoId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  ingredients: z.lazy(() => IngredientUncheckedUpdateManyWithoutCompositionNestedInputSchema).optional()
}).strict();

export const CompositionUncheckedUpdateManyWithoutCategoriesInputSchema: z.ZodType<Prisma.CompositionUncheckedUpdateManyWithoutCategoriesInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  videoId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const ChemicalUpdateWithoutHazardsInputSchema: z.ZodType<Prisma.ChemicalUpdateWithoutHazardsInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  formula: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  page: z.lazy(() => PageUpdateOneRequiredWithoutChemicalNestedInputSchema).optional()
}).strict();

export const ChemicalUncheckedUpdateWithoutHazardsInputSchema: z.ZodType<Prisma.ChemicalUncheckedUpdateWithoutHazardsInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  formula: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  pageId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ChemicalUncheckedUpdateManyWithoutHazardsInputSchema: z.ZodType<Prisma.ChemicalUncheckedUpdateManyWithoutHazardsInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  formula: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  pageId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const HazardSymbolsUpdateWithoutChemicalsInputSchema: z.ZodType<Prisma.HazardSymbolsUpdateWithoutChemicalsInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  symbol: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const HazardSymbolsUncheckedUpdateWithoutChemicalsInputSchema: z.ZodType<Prisma.HazardSymbolsUncheckedUpdateWithoutChemicalsInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  symbol: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const HazardSymbolsUncheckedUpdateManyWithoutChemicalsInputSchema: z.ZodType<Prisma.HazardSymbolsUncheckedUpdateManyWithoutChemicalsInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  symbol: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const IngredientCreateManyPageInputSchema: z.ZodType<Prisma.IngredientCreateManyPageInput> = z.object({
  id: z.string().cuid().optional(),
  amount: z.number(),
  name: z.string(),
  note: z.string().optional().nullable(),
  compositionId: z.string()
}).strict();

export const IngredientUpdateWithoutPageInputSchema: z.ZodType<Prisma.IngredientUpdateWithoutPageInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  amount: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  note: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  composition: z.lazy(() => CompositionUpdateOneRequiredWithoutIngredientsNestedInputSchema).optional()
}).strict();

export const IngredientUncheckedUpdateWithoutPageInputSchema: z.ZodType<Prisma.IngredientUncheckedUpdateWithoutPageInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  amount: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  note: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  compositionId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const IngredientUncheckedUpdateManyWithoutPageInputSchema: z.ZodType<Prisma.IngredientUncheckedUpdateManyWithoutPageInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  amount: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  note: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  compositionId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const PageCreateManyCategoryInputSchema: z.ZodType<Prisma.PageCreateManyCategoryInput> = z.object({
  id: z.string().cuid().optional(),
  title: z.string(),
  slug: z.string(),
  featuredImageId: z.string().optional().nullable(),
  pageContentId: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const PageUpdateWithoutCategoryInputSchema: z.ZodType<Prisma.PageUpdateWithoutCategoryInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  slug: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  featuredImage: z.lazy(() => FileUpdateOneWithoutPageNestedInputSchema).optional(),
  content: z.lazy(() => PageContentUpdateOneRequiredWithoutPageNestedInputSchema).optional(),
  chemical: z.lazy(() => ChemicalUpdateOneWithoutPageNestedInputSchema).optional(),
  ingredients: z.lazy(() => IngredientUpdateManyWithoutPageNestedInputSchema).optional()
}).strict();

export const PageUncheckedUpdateWithoutCategoryInputSchema: z.ZodType<Prisma.PageUncheckedUpdateWithoutCategoryInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  slug: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  featuredImageId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  pageContentId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  chemical: z.lazy(() => ChemicalUncheckedUpdateOneWithoutPageNestedInputSchema).optional(),
  ingredients: z.lazy(() => IngredientUncheckedUpdateManyWithoutPageNestedInputSchema).optional()
}).strict();

export const PageUncheckedUpdateManyWithoutCategoryInputSchema: z.ZodType<Prisma.PageUncheckedUpdateManyWithoutCategoryInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  slug: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  featuredImageId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  pageContentId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const PageCreateManyContentInputSchema: z.ZodType<Prisma.PageCreateManyContentInput> = z.object({
  id: z.string().cuid().optional(),
  title: z.string(),
  slug: z.string(),
  featuredImageId: z.string().optional().nullable(),
  categorySlug: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const WidgetCreateManyPageContentInputSchema: z.ZodType<Prisma.WidgetCreateManyPageContentInput> = z.object({
  id: z.string().cuid().optional()
}).strict();

export const PageUpdateWithoutContentInputSchema: z.ZodType<Prisma.PageUpdateWithoutContentInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  slug: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  featuredImage: z.lazy(() => FileUpdateOneWithoutPageNestedInputSchema).optional(),
  category: z.lazy(() => CategoryUpdateOneWithoutPageNestedInputSchema).optional(),
  chemical: z.lazy(() => ChemicalUpdateOneWithoutPageNestedInputSchema).optional(),
  ingredients: z.lazy(() => IngredientUpdateManyWithoutPageNestedInputSchema).optional()
}).strict();

export const PageUncheckedUpdateWithoutContentInputSchema: z.ZodType<Prisma.PageUncheckedUpdateWithoutContentInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  slug: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  featuredImageId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  categorySlug: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  chemical: z.lazy(() => ChemicalUncheckedUpdateOneWithoutPageNestedInputSchema).optional(),
  ingredients: z.lazy(() => IngredientUncheckedUpdateManyWithoutPageNestedInputSchema).optional()
}).strict();

export const PageUncheckedUpdateManyWithoutContentInputSchema: z.ZodType<Prisma.PageUncheckedUpdateManyWithoutContentInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  slug: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  featuredImageId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  categorySlug: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const WidgetUpdateWithoutPageContentInputSchema: z.ZodType<Prisma.WidgetUpdateWithoutPageContentInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  imageWidget: z.lazy(() => ImageWidgetUpdateOneWithoutWidgetsNestedInputSchema).optional()
}).strict();

export const WidgetUncheckedUpdateWithoutPageContentInputSchema: z.ZodType<Prisma.WidgetUncheckedUpdateWithoutPageContentInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  imageWidget: z.lazy(() => ImageWidgetUncheckedUpdateOneWithoutWidgetsNestedInputSchema).optional()
}).strict();

export const WidgetUncheckedUpdateManyWithoutPageContentInputSchema: z.ZodType<Prisma.WidgetUncheckedUpdateManyWithoutPageContentInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

/////////////////////////////////////////
// ARGS
/////////////////////////////////////////

export const UserFindFirstArgsSchema: z.ZodType<Prisma.UserFindFirstArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereInputSchema.optional(),
  orderBy: z.union([ UserOrderByWithRelationInputSchema.array(),UserOrderByWithRelationInputSchema ]).optional(),
  cursor: UserWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ UserScalarFieldEnumSchema,UserScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const UserFindFirstOrThrowArgsSchema: z.ZodType<Prisma.UserFindFirstOrThrowArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereInputSchema.optional(),
  orderBy: z.union([ UserOrderByWithRelationInputSchema.array(),UserOrderByWithRelationInputSchema ]).optional(),
  cursor: UserWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ UserScalarFieldEnumSchema,UserScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const UserFindManyArgsSchema: z.ZodType<Prisma.UserFindManyArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereInputSchema.optional(),
  orderBy: z.union([ UserOrderByWithRelationInputSchema.array(),UserOrderByWithRelationInputSchema ]).optional(),
  cursor: UserWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ UserScalarFieldEnumSchema,UserScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const UserAggregateArgsSchema: z.ZodType<Prisma.UserAggregateArgs> = z.object({
  where: UserWhereInputSchema.optional(),
  orderBy: z.union([ UserOrderByWithRelationInputSchema.array(),UserOrderByWithRelationInputSchema ]).optional(),
  cursor: UserWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const UserGroupByArgsSchema: z.ZodType<Prisma.UserGroupByArgs> = z.object({
  where: UserWhereInputSchema.optional(),
  orderBy: z.union([ UserOrderByWithAggregationInputSchema.array(),UserOrderByWithAggregationInputSchema ]).optional(),
  by: UserScalarFieldEnumSchema.array(),
  having: UserScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const UserFindUniqueArgsSchema: z.ZodType<Prisma.UserFindUniqueArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereUniqueInputSchema,
}).strict() ;

export const UserFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.UserFindUniqueOrThrowArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereUniqueInputSchema,
}).strict() ;

export const SessionFindFirstArgsSchema: z.ZodType<Prisma.SessionFindFirstArgs> = z.object({
  select: SessionSelectSchema.optional(),
  include: SessionIncludeSchema.optional(),
  where: SessionWhereInputSchema.optional(),
  orderBy: z.union([ SessionOrderByWithRelationInputSchema.array(),SessionOrderByWithRelationInputSchema ]).optional(),
  cursor: SessionWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ SessionScalarFieldEnumSchema,SessionScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const SessionFindFirstOrThrowArgsSchema: z.ZodType<Prisma.SessionFindFirstOrThrowArgs> = z.object({
  select: SessionSelectSchema.optional(),
  include: SessionIncludeSchema.optional(),
  where: SessionWhereInputSchema.optional(),
  orderBy: z.union([ SessionOrderByWithRelationInputSchema.array(),SessionOrderByWithRelationInputSchema ]).optional(),
  cursor: SessionWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ SessionScalarFieldEnumSchema,SessionScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const SessionFindManyArgsSchema: z.ZodType<Prisma.SessionFindManyArgs> = z.object({
  select: SessionSelectSchema.optional(),
  include: SessionIncludeSchema.optional(),
  where: SessionWhereInputSchema.optional(),
  orderBy: z.union([ SessionOrderByWithRelationInputSchema.array(),SessionOrderByWithRelationInputSchema ]).optional(),
  cursor: SessionWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ SessionScalarFieldEnumSchema,SessionScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const SessionAggregateArgsSchema: z.ZodType<Prisma.SessionAggregateArgs> = z.object({
  where: SessionWhereInputSchema.optional(),
  orderBy: z.union([ SessionOrderByWithRelationInputSchema.array(),SessionOrderByWithRelationInputSchema ]).optional(),
  cursor: SessionWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const SessionGroupByArgsSchema: z.ZodType<Prisma.SessionGroupByArgs> = z.object({
  where: SessionWhereInputSchema.optional(),
  orderBy: z.union([ SessionOrderByWithAggregationInputSchema.array(),SessionOrderByWithAggregationInputSchema ]).optional(),
  by: SessionScalarFieldEnumSchema.array(),
  having: SessionScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const SessionFindUniqueArgsSchema: z.ZodType<Prisma.SessionFindUniqueArgs> = z.object({
  select: SessionSelectSchema.optional(),
  include: SessionIncludeSchema.optional(),
  where: SessionWhereUniqueInputSchema,
}).strict() ;

export const SessionFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.SessionFindUniqueOrThrowArgs> = z.object({
  select: SessionSelectSchema.optional(),
  include: SessionIncludeSchema.optional(),
  where: SessionWhereUniqueInputSchema,
}).strict() ;

export const FileFindFirstArgsSchema: z.ZodType<Prisma.FileFindFirstArgs> = z.object({
  select: FileSelectSchema.optional(),
  include: FileIncludeSchema.optional(),
  where: FileWhereInputSchema.optional(),
  orderBy: z.union([ FileOrderByWithRelationInputSchema.array(),FileOrderByWithRelationInputSchema ]).optional(),
  cursor: FileWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ FileScalarFieldEnumSchema,FileScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const FileFindFirstOrThrowArgsSchema: z.ZodType<Prisma.FileFindFirstOrThrowArgs> = z.object({
  select: FileSelectSchema.optional(),
  include: FileIncludeSchema.optional(),
  where: FileWhereInputSchema.optional(),
  orderBy: z.union([ FileOrderByWithRelationInputSchema.array(),FileOrderByWithRelationInputSchema ]).optional(),
  cursor: FileWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ FileScalarFieldEnumSchema,FileScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const FileFindManyArgsSchema: z.ZodType<Prisma.FileFindManyArgs> = z.object({
  select: FileSelectSchema.optional(),
  include: FileIncludeSchema.optional(),
  where: FileWhereInputSchema.optional(),
  orderBy: z.union([ FileOrderByWithRelationInputSchema.array(),FileOrderByWithRelationInputSchema ]).optional(),
  cursor: FileWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ FileScalarFieldEnumSchema,FileScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const FileAggregateArgsSchema: z.ZodType<Prisma.FileAggregateArgs> = z.object({
  where: FileWhereInputSchema.optional(),
  orderBy: z.union([ FileOrderByWithRelationInputSchema.array(),FileOrderByWithRelationInputSchema ]).optional(),
  cursor: FileWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const FileGroupByArgsSchema: z.ZodType<Prisma.FileGroupByArgs> = z.object({
  where: FileWhereInputSchema.optional(),
  orderBy: z.union([ FileOrderByWithAggregationInputSchema.array(),FileOrderByWithAggregationInputSchema ]).optional(),
  by: FileScalarFieldEnumSchema.array(),
  having: FileScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const FileFindUniqueArgsSchema: z.ZodType<Prisma.FileFindUniqueArgs> = z.object({
  select: FileSelectSchema.optional(),
  include: FileIncludeSchema.optional(),
  where: FileWhereUniqueInputSchema,
}).strict() ;

export const FileFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.FileFindUniqueOrThrowArgs> = z.object({
  select: FileSelectSchema.optional(),
  include: FileIncludeSchema.optional(),
  where: FileWhereUniqueInputSchema,
}).strict() ;

export const IngredientFindFirstArgsSchema: z.ZodType<Prisma.IngredientFindFirstArgs> = z.object({
  select: IngredientSelectSchema.optional(),
  include: IngredientIncludeSchema.optional(),
  where: IngredientWhereInputSchema.optional(),
  orderBy: z.union([ IngredientOrderByWithRelationInputSchema.array(),IngredientOrderByWithRelationInputSchema ]).optional(),
  cursor: IngredientWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ IngredientScalarFieldEnumSchema,IngredientScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const IngredientFindFirstOrThrowArgsSchema: z.ZodType<Prisma.IngredientFindFirstOrThrowArgs> = z.object({
  select: IngredientSelectSchema.optional(),
  include: IngredientIncludeSchema.optional(),
  where: IngredientWhereInputSchema.optional(),
  orderBy: z.union([ IngredientOrderByWithRelationInputSchema.array(),IngredientOrderByWithRelationInputSchema ]).optional(),
  cursor: IngredientWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ IngredientScalarFieldEnumSchema,IngredientScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const IngredientFindManyArgsSchema: z.ZodType<Prisma.IngredientFindManyArgs> = z.object({
  select: IngredientSelectSchema.optional(),
  include: IngredientIncludeSchema.optional(),
  where: IngredientWhereInputSchema.optional(),
  orderBy: z.union([ IngredientOrderByWithRelationInputSchema.array(),IngredientOrderByWithRelationInputSchema ]).optional(),
  cursor: IngredientWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ IngredientScalarFieldEnumSchema,IngredientScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const IngredientAggregateArgsSchema: z.ZodType<Prisma.IngredientAggregateArgs> = z.object({
  where: IngredientWhereInputSchema.optional(),
  orderBy: z.union([ IngredientOrderByWithRelationInputSchema.array(),IngredientOrderByWithRelationInputSchema ]).optional(),
  cursor: IngredientWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const IngredientGroupByArgsSchema: z.ZodType<Prisma.IngredientGroupByArgs> = z.object({
  where: IngredientWhereInputSchema.optional(),
  orderBy: z.union([ IngredientOrderByWithAggregationInputSchema.array(),IngredientOrderByWithAggregationInputSchema ]).optional(),
  by: IngredientScalarFieldEnumSchema.array(),
  having: IngredientScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const IngredientFindUniqueArgsSchema: z.ZodType<Prisma.IngredientFindUniqueArgs> = z.object({
  select: IngredientSelectSchema.optional(),
  include: IngredientIncludeSchema.optional(),
  where: IngredientWhereUniqueInputSchema,
}).strict() ;

export const IngredientFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.IngredientFindUniqueOrThrowArgs> = z.object({
  select: IngredientSelectSchema.optional(),
  include: IngredientIncludeSchema.optional(),
  where: IngredientWhereUniqueInputSchema,
}).strict() ;

export const CompositionFindFirstArgsSchema: z.ZodType<Prisma.CompositionFindFirstArgs> = z.object({
  select: CompositionSelectSchema.optional(),
  include: CompositionIncludeSchema.optional(),
  where: CompositionWhereInputSchema.optional(),
  orderBy: z.union([ CompositionOrderByWithRelationInputSchema.array(),CompositionOrderByWithRelationInputSchema ]).optional(),
  cursor: CompositionWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ CompositionScalarFieldEnumSchema,CompositionScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const CompositionFindFirstOrThrowArgsSchema: z.ZodType<Prisma.CompositionFindFirstOrThrowArgs> = z.object({
  select: CompositionSelectSchema.optional(),
  include: CompositionIncludeSchema.optional(),
  where: CompositionWhereInputSchema.optional(),
  orderBy: z.union([ CompositionOrderByWithRelationInputSchema.array(),CompositionOrderByWithRelationInputSchema ]).optional(),
  cursor: CompositionWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ CompositionScalarFieldEnumSchema,CompositionScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const CompositionFindManyArgsSchema: z.ZodType<Prisma.CompositionFindManyArgs> = z.object({
  select: CompositionSelectSchema.optional(),
  include: CompositionIncludeSchema.optional(),
  where: CompositionWhereInputSchema.optional(),
  orderBy: z.union([ CompositionOrderByWithRelationInputSchema.array(),CompositionOrderByWithRelationInputSchema ]).optional(),
  cursor: CompositionWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ CompositionScalarFieldEnumSchema,CompositionScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const CompositionAggregateArgsSchema: z.ZodType<Prisma.CompositionAggregateArgs> = z.object({
  where: CompositionWhereInputSchema.optional(),
  orderBy: z.union([ CompositionOrderByWithRelationInputSchema.array(),CompositionOrderByWithRelationInputSchema ]).optional(),
  cursor: CompositionWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const CompositionGroupByArgsSchema: z.ZodType<Prisma.CompositionGroupByArgs> = z.object({
  where: CompositionWhereInputSchema.optional(),
  orderBy: z.union([ CompositionOrderByWithAggregationInputSchema.array(),CompositionOrderByWithAggregationInputSchema ]).optional(),
  by: CompositionScalarFieldEnumSchema.array(),
  having: CompositionScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const CompositionFindUniqueArgsSchema: z.ZodType<Prisma.CompositionFindUniqueArgs> = z.object({
  select: CompositionSelectSchema.optional(),
  include: CompositionIncludeSchema.optional(),
  where: CompositionWhereUniqueInputSchema,
}).strict() ;

export const CompositionFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.CompositionFindUniqueOrThrowArgs> = z.object({
  select: CompositionSelectSchema.optional(),
  include: CompositionIncludeSchema.optional(),
  where: CompositionWhereUniqueInputSchema,
}).strict() ;

export const CompositionCategoryFindFirstArgsSchema: z.ZodType<Prisma.CompositionCategoryFindFirstArgs> = z.object({
  select: CompositionCategorySelectSchema.optional(),
  include: CompositionCategoryIncludeSchema.optional(),
  where: CompositionCategoryWhereInputSchema.optional(),
  orderBy: z.union([ CompositionCategoryOrderByWithRelationInputSchema.array(),CompositionCategoryOrderByWithRelationInputSchema ]).optional(),
  cursor: CompositionCategoryWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ CompositionCategoryScalarFieldEnumSchema,CompositionCategoryScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const CompositionCategoryFindFirstOrThrowArgsSchema: z.ZodType<Prisma.CompositionCategoryFindFirstOrThrowArgs> = z.object({
  select: CompositionCategorySelectSchema.optional(),
  include: CompositionCategoryIncludeSchema.optional(),
  where: CompositionCategoryWhereInputSchema.optional(),
  orderBy: z.union([ CompositionCategoryOrderByWithRelationInputSchema.array(),CompositionCategoryOrderByWithRelationInputSchema ]).optional(),
  cursor: CompositionCategoryWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ CompositionCategoryScalarFieldEnumSchema,CompositionCategoryScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const CompositionCategoryFindManyArgsSchema: z.ZodType<Prisma.CompositionCategoryFindManyArgs> = z.object({
  select: CompositionCategorySelectSchema.optional(),
  include: CompositionCategoryIncludeSchema.optional(),
  where: CompositionCategoryWhereInputSchema.optional(),
  orderBy: z.union([ CompositionCategoryOrderByWithRelationInputSchema.array(),CompositionCategoryOrderByWithRelationInputSchema ]).optional(),
  cursor: CompositionCategoryWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ CompositionCategoryScalarFieldEnumSchema,CompositionCategoryScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const CompositionCategoryAggregateArgsSchema: z.ZodType<Prisma.CompositionCategoryAggregateArgs> = z.object({
  where: CompositionCategoryWhereInputSchema.optional(),
  orderBy: z.union([ CompositionCategoryOrderByWithRelationInputSchema.array(),CompositionCategoryOrderByWithRelationInputSchema ]).optional(),
  cursor: CompositionCategoryWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const CompositionCategoryGroupByArgsSchema: z.ZodType<Prisma.CompositionCategoryGroupByArgs> = z.object({
  where: CompositionCategoryWhereInputSchema.optional(),
  orderBy: z.union([ CompositionCategoryOrderByWithAggregationInputSchema.array(),CompositionCategoryOrderByWithAggregationInputSchema ]).optional(),
  by: CompositionCategoryScalarFieldEnumSchema.array(),
  having: CompositionCategoryScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const CompositionCategoryFindUniqueArgsSchema: z.ZodType<Prisma.CompositionCategoryFindUniqueArgs> = z.object({
  select: CompositionCategorySelectSchema.optional(),
  include: CompositionCategoryIncludeSchema.optional(),
  where: CompositionCategoryWhereUniqueInputSchema,
}).strict() ;

export const CompositionCategoryFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.CompositionCategoryFindUniqueOrThrowArgs> = z.object({
  select: CompositionCategorySelectSchema.optional(),
  include: CompositionCategoryIncludeSchema.optional(),
  where: CompositionCategoryWhereUniqueInputSchema,
}).strict() ;

export const HazardSymbolsFindFirstArgsSchema: z.ZodType<Prisma.HazardSymbolsFindFirstArgs> = z.object({
  select: HazardSymbolsSelectSchema.optional(),
  include: HazardSymbolsIncludeSchema.optional(),
  where: HazardSymbolsWhereInputSchema.optional(),
  orderBy: z.union([ HazardSymbolsOrderByWithRelationInputSchema.array(),HazardSymbolsOrderByWithRelationInputSchema ]).optional(),
  cursor: HazardSymbolsWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ HazardSymbolsScalarFieldEnumSchema,HazardSymbolsScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const HazardSymbolsFindFirstOrThrowArgsSchema: z.ZodType<Prisma.HazardSymbolsFindFirstOrThrowArgs> = z.object({
  select: HazardSymbolsSelectSchema.optional(),
  include: HazardSymbolsIncludeSchema.optional(),
  where: HazardSymbolsWhereInputSchema.optional(),
  orderBy: z.union([ HazardSymbolsOrderByWithRelationInputSchema.array(),HazardSymbolsOrderByWithRelationInputSchema ]).optional(),
  cursor: HazardSymbolsWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ HazardSymbolsScalarFieldEnumSchema,HazardSymbolsScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const HazardSymbolsFindManyArgsSchema: z.ZodType<Prisma.HazardSymbolsFindManyArgs> = z.object({
  select: HazardSymbolsSelectSchema.optional(),
  include: HazardSymbolsIncludeSchema.optional(),
  where: HazardSymbolsWhereInputSchema.optional(),
  orderBy: z.union([ HazardSymbolsOrderByWithRelationInputSchema.array(),HazardSymbolsOrderByWithRelationInputSchema ]).optional(),
  cursor: HazardSymbolsWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ HazardSymbolsScalarFieldEnumSchema,HazardSymbolsScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const HazardSymbolsAggregateArgsSchema: z.ZodType<Prisma.HazardSymbolsAggregateArgs> = z.object({
  where: HazardSymbolsWhereInputSchema.optional(),
  orderBy: z.union([ HazardSymbolsOrderByWithRelationInputSchema.array(),HazardSymbolsOrderByWithRelationInputSchema ]).optional(),
  cursor: HazardSymbolsWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const HazardSymbolsGroupByArgsSchema: z.ZodType<Prisma.HazardSymbolsGroupByArgs> = z.object({
  where: HazardSymbolsWhereInputSchema.optional(),
  orderBy: z.union([ HazardSymbolsOrderByWithAggregationInputSchema.array(),HazardSymbolsOrderByWithAggregationInputSchema ]).optional(),
  by: HazardSymbolsScalarFieldEnumSchema.array(),
  having: HazardSymbolsScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const HazardSymbolsFindUniqueArgsSchema: z.ZodType<Prisma.HazardSymbolsFindUniqueArgs> = z.object({
  select: HazardSymbolsSelectSchema.optional(),
  include: HazardSymbolsIncludeSchema.optional(),
  where: HazardSymbolsWhereUniqueInputSchema,
}).strict() ;

export const HazardSymbolsFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.HazardSymbolsFindUniqueOrThrowArgs> = z.object({
  select: HazardSymbolsSelectSchema.optional(),
  include: HazardSymbolsIncludeSchema.optional(),
  where: HazardSymbolsWhereUniqueInputSchema,
}).strict() ;

export const ChemicalFindFirstArgsSchema: z.ZodType<Prisma.ChemicalFindFirstArgs> = z.object({
  select: ChemicalSelectSchema.optional(),
  include: ChemicalIncludeSchema.optional(),
  where: ChemicalWhereInputSchema.optional(),
  orderBy: z.union([ ChemicalOrderByWithRelationInputSchema.array(),ChemicalOrderByWithRelationInputSchema ]).optional(),
  cursor: ChemicalWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ ChemicalScalarFieldEnumSchema,ChemicalScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const ChemicalFindFirstOrThrowArgsSchema: z.ZodType<Prisma.ChemicalFindFirstOrThrowArgs> = z.object({
  select: ChemicalSelectSchema.optional(),
  include: ChemicalIncludeSchema.optional(),
  where: ChemicalWhereInputSchema.optional(),
  orderBy: z.union([ ChemicalOrderByWithRelationInputSchema.array(),ChemicalOrderByWithRelationInputSchema ]).optional(),
  cursor: ChemicalWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ ChemicalScalarFieldEnumSchema,ChemicalScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const ChemicalFindManyArgsSchema: z.ZodType<Prisma.ChemicalFindManyArgs> = z.object({
  select: ChemicalSelectSchema.optional(),
  include: ChemicalIncludeSchema.optional(),
  where: ChemicalWhereInputSchema.optional(),
  orderBy: z.union([ ChemicalOrderByWithRelationInputSchema.array(),ChemicalOrderByWithRelationInputSchema ]).optional(),
  cursor: ChemicalWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ ChemicalScalarFieldEnumSchema,ChemicalScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const ChemicalAggregateArgsSchema: z.ZodType<Prisma.ChemicalAggregateArgs> = z.object({
  where: ChemicalWhereInputSchema.optional(),
  orderBy: z.union([ ChemicalOrderByWithRelationInputSchema.array(),ChemicalOrderByWithRelationInputSchema ]).optional(),
  cursor: ChemicalWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const ChemicalGroupByArgsSchema: z.ZodType<Prisma.ChemicalGroupByArgs> = z.object({
  where: ChemicalWhereInputSchema.optional(),
  orderBy: z.union([ ChemicalOrderByWithAggregationInputSchema.array(),ChemicalOrderByWithAggregationInputSchema ]).optional(),
  by: ChemicalScalarFieldEnumSchema.array(),
  having: ChemicalScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const ChemicalFindUniqueArgsSchema: z.ZodType<Prisma.ChemicalFindUniqueArgs> = z.object({
  select: ChemicalSelectSchema.optional(),
  include: ChemicalIncludeSchema.optional(),
  where: ChemicalWhereUniqueInputSchema,
}).strict() ;

export const ChemicalFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.ChemicalFindUniqueOrThrowArgs> = z.object({
  select: ChemicalSelectSchema.optional(),
  include: ChemicalIncludeSchema.optional(),
  where: ChemicalWhereUniqueInputSchema,
}).strict() ;

export const PageFindFirstArgsSchema: z.ZodType<Prisma.PageFindFirstArgs> = z.object({
  select: PageSelectSchema.optional(),
  include: PageIncludeSchema.optional(),
  where: PageWhereInputSchema.optional(),
  orderBy: z.union([ PageOrderByWithRelationInputSchema.array(),PageOrderByWithRelationInputSchema ]).optional(),
  cursor: PageWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ PageScalarFieldEnumSchema,PageScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const PageFindFirstOrThrowArgsSchema: z.ZodType<Prisma.PageFindFirstOrThrowArgs> = z.object({
  select: PageSelectSchema.optional(),
  include: PageIncludeSchema.optional(),
  where: PageWhereInputSchema.optional(),
  orderBy: z.union([ PageOrderByWithRelationInputSchema.array(),PageOrderByWithRelationInputSchema ]).optional(),
  cursor: PageWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ PageScalarFieldEnumSchema,PageScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const PageFindManyArgsSchema: z.ZodType<Prisma.PageFindManyArgs> = z.object({
  select: PageSelectSchema.optional(),
  include: PageIncludeSchema.optional(),
  where: PageWhereInputSchema.optional(),
  orderBy: z.union([ PageOrderByWithRelationInputSchema.array(),PageOrderByWithRelationInputSchema ]).optional(),
  cursor: PageWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ PageScalarFieldEnumSchema,PageScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const PageAggregateArgsSchema: z.ZodType<Prisma.PageAggregateArgs> = z.object({
  where: PageWhereInputSchema.optional(),
  orderBy: z.union([ PageOrderByWithRelationInputSchema.array(),PageOrderByWithRelationInputSchema ]).optional(),
  cursor: PageWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const PageGroupByArgsSchema: z.ZodType<Prisma.PageGroupByArgs> = z.object({
  where: PageWhereInputSchema.optional(),
  orderBy: z.union([ PageOrderByWithAggregationInputSchema.array(),PageOrderByWithAggregationInputSchema ]).optional(),
  by: PageScalarFieldEnumSchema.array(),
  having: PageScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const PageFindUniqueArgsSchema: z.ZodType<Prisma.PageFindUniqueArgs> = z.object({
  select: PageSelectSchema.optional(),
  include: PageIncludeSchema.optional(),
  where: PageWhereUniqueInputSchema,
}).strict() ;

export const PageFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.PageFindUniqueOrThrowArgs> = z.object({
  select: PageSelectSchema.optional(),
  include: PageIncludeSchema.optional(),
  where: PageWhereUniqueInputSchema,
}).strict() ;

export const CategoryFindFirstArgsSchema: z.ZodType<Prisma.CategoryFindFirstArgs> = z.object({
  select: CategorySelectSchema.optional(),
  include: CategoryIncludeSchema.optional(),
  where: CategoryWhereInputSchema.optional(),
  orderBy: z.union([ CategoryOrderByWithRelationInputSchema.array(),CategoryOrderByWithRelationInputSchema ]).optional(),
  cursor: CategoryWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ CategoryScalarFieldEnumSchema,CategoryScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const CategoryFindFirstOrThrowArgsSchema: z.ZodType<Prisma.CategoryFindFirstOrThrowArgs> = z.object({
  select: CategorySelectSchema.optional(),
  include: CategoryIncludeSchema.optional(),
  where: CategoryWhereInputSchema.optional(),
  orderBy: z.union([ CategoryOrderByWithRelationInputSchema.array(),CategoryOrderByWithRelationInputSchema ]).optional(),
  cursor: CategoryWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ CategoryScalarFieldEnumSchema,CategoryScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const CategoryFindManyArgsSchema: z.ZodType<Prisma.CategoryFindManyArgs> = z.object({
  select: CategorySelectSchema.optional(),
  include: CategoryIncludeSchema.optional(),
  where: CategoryWhereInputSchema.optional(),
  orderBy: z.union([ CategoryOrderByWithRelationInputSchema.array(),CategoryOrderByWithRelationInputSchema ]).optional(),
  cursor: CategoryWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ CategoryScalarFieldEnumSchema,CategoryScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const CategoryAggregateArgsSchema: z.ZodType<Prisma.CategoryAggregateArgs> = z.object({
  where: CategoryWhereInputSchema.optional(),
  orderBy: z.union([ CategoryOrderByWithRelationInputSchema.array(),CategoryOrderByWithRelationInputSchema ]).optional(),
  cursor: CategoryWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const CategoryGroupByArgsSchema: z.ZodType<Prisma.CategoryGroupByArgs> = z.object({
  where: CategoryWhereInputSchema.optional(),
  orderBy: z.union([ CategoryOrderByWithAggregationInputSchema.array(),CategoryOrderByWithAggregationInputSchema ]).optional(),
  by: CategoryScalarFieldEnumSchema.array(),
  having: CategoryScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const CategoryFindUniqueArgsSchema: z.ZodType<Prisma.CategoryFindUniqueArgs> = z.object({
  select: CategorySelectSchema.optional(),
  include: CategoryIncludeSchema.optional(),
  where: CategoryWhereUniqueInputSchema,
}).strict() ;

export const CategoryFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.CategoryFindUniqueOrThrowArgs> = z.object({
  select: CategorySelectSchema.optional(),
  include: CategoryIncludeSchema.optional(),
  where: CategoryWhereUniqueInputSchema,
}).strict() ;

export const PageContentFindFirstArgsSchema: z.ZodType<Prisma.PageContentFindFirstArgs> = z.object({
  select: PageContentSelectSchema.optional(),
  include: PageContentIncludeSchema.optional(),
  where: PageContentWhereInputSchema.optional(),
  orderBy: z.union([ PageContentOrderByWithRelationInputSchema.array(),PageContentOrderByWithRelationInputSchema ]).optional(),
  cursor: PageContentWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ PageContentScalarFieldEnumSchema,PageContentScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const PageContentFindFirstOrThrowArgsSchema: z.ZodType<Prisma.PageContentFindFirstOrThrowArgs> = z.object({
  select: PageContentSelectSchema.optional(),
  include: PageContentIncludeSchema.optional(),
  where: PageContentWhereInputSchema.optional(),
  orderBy: z.union([ PageContentOrderByWithRelationInputSchema.array(),PageContentOrderByWithRelationInputSchema ]).optional(),
  cursor: PageContentWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ PageContentScalarFieldEnumSchema,PageContentScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const PageContentFindManyArgsSchema: z.ZodType<Prisma.PageContentFindManyArgs> = z.object({
  select: PageContentSelectSchema.optional(),
  include: PageContentIncludeSchema.optional(),
  where: PageContentWhereInputSchema.optional(),
  orderBy: z.union([ PageContentOrderByWithRelationInputSchema.array(),PageContentOrderByWithRelationInputSchema ]).optional(),
  cursor: PageContentWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ PageContentScalarFieldEnumSchema,PageContentScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const PageContentAggregateArgsSchema: z.ZodType<Prisma.PageContentAggregateArgs> = z.object({
  where: PageContentWhereInputSchema.optional(),
  orderBy: z.union([ PageContentOrderByWithRelationInputSchema.array(),PageContentOrderByWithRelationInputSchema ]).optional(),
  cursor: PageContentWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const PageContentGroupByArgsSchema: z.ZodType<Prisma.PageContentGroupByArgs> = z.object({
  where: PageContentWhereInputSchema.optional(),
  orderBy: z.union([ PageContentOrderByWithAggregationInputSchema.array(),PageContentOrderByWithAggregationInputSchema ]).optional(),
  by: PageContentScalarFieldEnumSchema.array(),
  having: PageContentScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const PageContentFindUniqueArgsSchema: z.ZodType<Prisma.PageContentFindUniqueArgs> = z.object({
  select: PageContentSelectSchema.optional(),
  include: PageContentIncludeSchema.optional(),
  where: PageContentWhereUniqueInputSchema,
}).strict() ;

export const PageContentFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.PageContentFindUniqueOrThrowArgs> = z.object({
  select: PageContentSelectSchema.optional(),
  include: PageContentIncludeSchema.optional(),
  where: PageContentWhereUniqueInputSchema,
}).strict() ;

export const WidgetFindFirstArgsSchema: z.ZodType<Prisma.WidgetFindFirstArgs> = z.object({
  select: WidgetSelectSchema.optional(),
  include: WidgetIncludeSchema.optional(),
  where: WidgetWhereInputSchema.optional(),
  orderBy: z.union([ WidgetOrderByWithRelationInputSchema.array(),WidgetOrderByWithRelationInputSchema ]).optional(),
  cursor: WidgetWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ WidgetScalarFieldEnumSchema,WidgetScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const WidgetFindFirstOrThrowArgsSchema: z.ZodType<Prisma.WidgetFindFirstOrThrowArgs> = z.object({
  select: WidgetSelectSchema.optional(),
  include: WidgetIncludeSchema.optional(),
  where: WidgetWhereInputSchema.optional(),
  orderBy: z.union([ WidgetOrderByWithRelationInputSchema.array(),WidgetOrderByWithRelationInputSchema ]).optional(),
  cursor: WidgetWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ WidgetScalarFieldEnumSchema,WidgetScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const WidgetFindManyArgsSchema: z.ZodType<Prisma.WidgetFindManyArgs> = z.object({
  select: WidgetSelectSchema.optional(),
  include: WidgetIncludeSchema.optional(),
  where: WidgetWhereInputSchema.optional(),
  orderBy: z.union([ WidgetOrderByWithRelationInputSchema.array(),WidgetOrderByWithRelationInputSchema ]).optional(),
  cursor: WidgetWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ WidgetScalarFieldEnumSchema,WidgetScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const WidgetAggregateArgsSchema: z.ZodType<Prisma.WidgetAggregateArgs> = z.object({
  where: WidgetWhereInputSchema.optional(),
  orderBy: z.union([ WidgetOrderByWithRelationInputSchema.array(),WidgetOrderByWithRelationInputSchema ]).optional(),
  cursor: WidgetWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const WidgetGroupByArgsSchema: z.ZodType<Prisma.WidgetGroupByArgs> = z.object({
  where: WidgetWhereInputSchema.optional(),
  orderBy: z.union([ WidgetOrderByWithAggregationInputSchema.array(),WidgetOrderByWithAggregationInputSchema ]).optional(),
  by: WidgetScalarFieldEnumSchema.array(),
  having: WidgetScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const WidgetFindUniqueArgsSchema: z.ZodType<Prisma.WidgetFindUniqueArgs> = z.object({
  select: WidgetSelectSchema.optional(),
  include: WidgetIncludeSchema.optional(),
  where: WidgetWhereUniqueInputSchema,
}).strict() ;

export const WidgetFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.WidgetFindUniqueOrThrowArgs> = z.object({
  select: WidgetSelectSchema.optional(),
  include: WidgetIncludeSchema.optional(),
  where: WidgetWhereUniqueInputSchema,
}).strict() ;

export const ImageWidgetFindFirstArgsSchema: z.ZodType<Prisma.ImageWidgetFindFirstArgs> = z.object({
  select: ImageWidgetSelectSchema.optional(),
  include: ImageWidgetIncludeSchema.optional(),
  where: ImageWidgetWhereInputSchema.optional(),
  orderBy: z.union([ ImageWidgetOrderByWithRelationInputSchema.array(),ImageWidgetOrderByWithRelationInputSchema ]).optional(),
  cursor: ImageWidgetWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ ImageWidgetScalarFieldEnumSchema,ImageWidgetScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const ImageWidgetFindFirstOrThrowArgsSchema: z.ZodType<Prisma.ImageWidgetFindFirstOrThrowArgs> = z.object({
  select: ImageWidgetSelectSchema.optional(),
  include: ImageWidgetIncludeSchema.optional(),
  where: ImageWidgetWhereInputSchema.optional(),
  orderBy: z.union([ ImageWidgetOrderByWithRelationInputSchema.array(),ImageWidgetOrderByWithRelationInputSchema ]).optional(),
  cursor: ImageWidgetWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ ImageWidgetScalarFieldEnumSchema,ImageWidgetScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const ImageWidgetFindManyArgsSchema: z.ZodType<Prisma.ImageWidgetFindManyArgs> = z.object({
  select: ImageWidgetSelectSchema.optional(),
  include: ImageWidgetIncludeSchema.optional(),
  where: ImageWidgetWhereInputSchema.optional(),
  orderBy: z.union([ ImageWidgetOrderByWithRelationInputSchema.array(),ImageWidgetOrderByWithRelationInputSchema ]).optional(),
  cursor: ImageWidgetWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ ImageWidgetScalarFieldEnumSchema,ImageWidgetScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const ImageWidgetAggregateArgsSchema: z.ZodType<Prisma.ImageWidgetAggregateArgs> = z.object({
  where: ImageWidgetWhereInputSchema.optional(),
  orderBy: z.union([ ImageWidgetOrderByWithRelationInputSchema.array(),ImageWidgetOrderByWithRelationInputSchema ]).optional(),
  cursor: ImageWidgetWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const ImageWidgetGroupByArgsSchema: z.ZodType<Prisma.ImageWidgetGroupByArgs> = z.object({
  where: ImageWidgetWhereInputSchema.optional(),
  orderBy: z.union([ ImageWidgetOrderByWithAggregationInputSchema.array(),ImageWidgetOrderByWithAggregationInputSchema ]).optional(),
  by: ImageWidgetScalarFieldEnumSchema.array(),
  having: ImageWidgetScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const ImageWidgetFindUniqueArgsSchema: z.ZodType<Prisma.ImageWidgetFindUniqueArgs> = z.object({
  select: ImageWidgetSelectSchema.optional(),
  include: ImageWidgetIncludeSchema.optional(),
  where: ImageWidgetWhereUniqueInputSchema,
}).strict() ;

export const ImageWidgetFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.ImageWidgetFindUniqueOrThrowArgs> = z.object({
  select: ImageWidgetSelectSchema.optional(),
  include: ImageWidgetIncludeSchema.optional(),
  where: ImageWidgetWhereUniqueInputSchema,
}).strict() ;

export const EditorWidgetFindFirstArgsSchema: z.ZodType<Prisma.EditorWidgetFindFirstArgs> = z.object({
  select: EditorWidgetSelectSchema.optional(),
  where: EditorWidgetWhereInputSchema.optional(),
  orderBy: z.union([ EditorWidgetOrderByWithRelationInputSchema.array(),EditorWidgetOrderByWithRelationInputSchema ]).optional(),
  cursor: EditorWidgetWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ EditorWidgetScalarFieldEnumSchema,EditorWidgetScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const EditorWidgetFindFirstOrThrowArgsSchema: z.ZodType<Prisma.EditorWidgetFindFirstOrThrowArgs> = z.object({
  select: EditorWidgetSelectSchema.optional(),
  where: EditorWidgetWhereInputSchema.optional(),
  orderBy: z.union([ EditorWidgetOrderByWithRelationInputSchema.array(),EditorWidgetOrderByWithRelationInputSchema ]).optional(),
  cursor: EditorWidgetWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ EditorWidgetScalarFieldEnumSchema,EditorWidgetScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const EditorWidgetFindManyArgsSchema: z.ZodType<Prisma.EditorWidgetFindManyArgs> = z.object({
  select: EditorWidgetSelectSchema.optional(),
  where: EditorWidgetWhereInputSchema.optional(),
  orderBy: z.union([ EditorWidgetOrderByWithRelationInputSchema.array(),EditorWidgetOrderByWithRelationInputSchema ]).optional(),
  cursor: EditorWidgetWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ EditorWidgetScalarFieldEnumSchema,EditorWidgetScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const EditorWidgetAggregateArgsSchema: z.ZodType<Prisma.EditorWidgetAggregateArgs> = z.object({
  where: EditorWidgetWhereInputSchema.optional(),
  orderBy: z.union([ EditorWidgetOrderByWithRelationInputSchema.array(),EditorWidgetOrderByWithRelationInputSchema ]).optional(),
  cursor: EditorWidgetWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const EditorWidgetGroupByArgsSchema: z.ZodType<Prisma.EditorWidgetGroupByArgs> = z.object({
  where: EditorWidgetWhereInputSchema.optional(),
  orderBy: z.union([ EditorWidgetOrderByWithAggregationInputSchema.array(),EditorWidgetOrderByWithAggregationInputSchema ]).optional(),
  by: EditorWidgetScalarFieldEnumSchema.array(),
  having: EditorWidgetScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const EditorWidgetFindUniqueArgsSchema: z.ZodType<Prisma.EditorWidgetFindUniqueArgs> = z.object({
  select: EditorWidgetSelectSchema.optional(),
  where: EditorWidgetWhereUniqueInputSchema,
}).strict() ;

export const EditorWidgetFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.EditorWidgetFindUniqueOrThrowArgs> = z.object({
  select: EditorWidgetSelectSchema.optional(),
  where: EditorWidgetWhereUniqueInputSchema,
}).strict() ;

export const UserCreateArgsSchema: z.ZodType<Prisma.UserCreateArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  data: z.union([ UserCreateInputSchema,UserUncheckedCreateInputSchema ]),
}).strict() ;

export const UserUpsertArgsSchema: z.ZodType<Prisma.UserUpsertArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereUniqueInputSchema,
  create: z.union([ UserCreateInputSchema,UserUncheckedCreateInputSchema ]),
  update: z.union([ UserUpdateInputSchema,UserUncheckedUpdateInputSchema ]),
}).strict() ;

export const UserCreateManyArgsSchema: z.ZodType<Prisma.UserCreateManyArgs> = z.object({
  data: z.union([ UserCreateManyInputSchema,UserCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const UserDeleteArgsSchema: z.ZodType<Prisma.UserDeleteArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereUniqueInputSchema,
}).strict() ;

export const UserUpdateArgsSchema: z.ZodType<Prisma.UserUpdateArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  data: z.union([ UserUpdateInputSchema,UserUncheckedUpdateInputSchema ]),
  where: UserWhereUniqueInputSchema,
}).strict() ;

export const UserUpdateManyArgsSchema: z.ZodType<Prisma.UserUpdateManyArgs> = z.object({
  data: z.union([ UserUpdateManyMutationInputSchema,UserUncheckedUpdateManyInputSchema ]),
  where: UserWhereInputSchema.optional(),
}).strict() ;

export const UserDeleteManyArgsSchema: z.ZodType<Prisma.UserDeleteManyArgs> = z.object({
  where: UserWhereInputSchema.optional(),
}).strict() ;

export const SessionCreateArgsSchema: z.ZodType<Prisma.SessionCreateArgs> = z.object({
  select: SessionSelectSchema.optional(),
  include: SessionIncludeSchema.optional(),
  data: z.union([ SessionCreateInputSchema,SessionUncheckedCreateInputSchema ]),
}).strict() ;

export const SessionUpsertArgsSchema: z.ZodType<Prisma.SessionUpsertArgs> = z.object({
  select: SessionSelectSchema.optional(),
  include: SessionIncludeSchema.optional(),
  where: SessionWhereUniqueInputSchema,
  create: z.union([ SessionCreateInputSchema,SessionUncheckedCreateInputSchema ]),
  update: z.union([ SessionUpdateInputSchema,SessionUncheckedUpdateInputSchema ]),
}).strict() ;

export const SessionCreateManyArgsSchema: z.ZodType<Prisma.SessionCreateManyArgs> = z.object({
  data: z.union([ SessionCreateManyInputSchema,SessionCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const SessionDeleteArgsSchema: z.ZodType<Prisma.SessionDeleteArgs> = z.object({
  select: SessionSelectSchema.optional(),
  include: SessionIncludeSchema.optional(),
  where: SessionWhereUniqueInputSchema,
}).strict() ;

export const SessionUpdateArgsSchema: z.ZodType<Prisma.SessionUpdateArgs> = z.object({
  select: SessionSelectSchema.optional(),
  include: SessionIncludeSchema.optional(),
  data: z.union([ SessionUpdateInputSchema,SessionUncheckedUpdateInputSchema ]),
  where: SessionWhereUniqueInputSchema,
}).strict() ;

export const SessionUpdateManyArgsSchema: z.ZodType<Prisma.SessionUpdateManyArgs> = z.object({
  data: z.union([ SessionUpdateManyMutationInputSchema,SessionUncheckedUpdateManyInputSchema ]),
  where: SessionWhereInputSchema.optional(),
}).strict() ;

export const SessionDeleteManyArgsSchema: z.ZodType<Prisma.SessionDeleteManyArgs> = z.object({
  where: SessionWhereInputSchema.optional(),
}).strict() ;

export const FileCreateArgsSchema: z.ZodType<Prisma.FileCreateArgs> = z.object({
  select: FileSelectSchema.optional(),
  include: FileIncludeSchema.optional(),
  data: z.union([ FileCreateInputSchema,FileUncheckedCreateInputSchema ]),
}).strict() ;

export const FileUpsertArgsSchema: z.ZodType<Prisma.FileUpsertArgs> = z.object({
  select: FileSelectSchema.optional(),
  include: FileIncludeSchema.optional(),
  where: FileWhereUniqueInputSchema,
  create: z.union([ FileCreateInputSchema,FileUncheckedCreateInputSchema ]),
  update: z.union([ FileUpdateInputSchema,FileUncheckedUpdateInputSchema ]),
}).strict() ;

export const FileCreateManyArgsSchema: z.ZodType<Prisma.FileCreateManyArgs> = z.object({
  data: z.union([ FileCreateManyInputSchema,FileCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const FileDeleteArgsSchema: z.ZodType<Prisma.FileDeleteArgs> = z.object({
  select: FileSelectSchema.optional(),
  include: FileIncludeSchema.optional(),
  where: FileWhereUniqueInputSchema,
}).strict() ;

export const FileUpdateArgsSchema: z.ZodType<Prisma.FileUpdateArgs> = z.object({
  select: FileSelectSchema.optional(),
  include: FileIncludeSchema.optional(),
  data: z.union([ FileUpdateInputSchema,FileUncheckedUpdateInputSchema ]),
  where: FileWhereUniqueInputSchema,
}).strict() ;

export const FileUpdateManyArgsSchema: z.ZodType<Prisma.FileUpdateManyArgs> = z.object({
  data: z.union([ FileUpdateManyMutationInputSchema,FileUncheckedUpdateManyInputSchema ]),
  where: FileWhereInputSchema.optional(),
}).strict() ;

export const FileDeleteManyArgsSchema: z.ZodType<Prisma.FileDeleteManyArgs> = z.object({
  where: FileWhereInputSchema.optional(),
}).strict() ;

export const IngredientCreateArgsSchema: z.ZodType<Prisma.IngredientCreateArgs> = z.object({
  select: IngredientSelectSchema.optional(),
  include: IngredientIncludeSchema.optional(),
  data: z.union([ IngredientCreateInputSchema,IngredientUncheckedCreateInputSchema ]),
}).strict() ;

export const IngredientUpsertArgsSchema: z.ZodType<Prisma.IngredientUpsertArgs> = z.object({
  select: IngredientSelectSchema.optional(),
  include: IngredientIncludeSchema.optional(),
  where: IngredientWhereUniqueInputSchema,
  create: z.union([ IngredientCreateInputSchema,IngredientUncheckedCreateInputSchema ]),
  update: z.union([ IngredientUpdateInputSchema,IngredientUncheckedUpdateInputSchema ]),
}).strict() ;

export const IngredientCreateManyArgsSchema: z.ZodType<Prisma.IngredientCreateManyArgs> = z.object({
  data: z.union([ IngredientCreateManyInputSchema,IngredientCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const IngredientDeleteArgsSchema: z.ZodType<Prisma.IngredientDeleteArgs> = z.object({
  select: IngredientSelectSchema.optional(),
  include: IngredientIncludeSchema.optional(),
  where: IngredientWhereUniqueInputSchema,
}).strict() ;

export const IngredientUpdateArgsSchema: z.ZodType<Prisma.IngredientUpdateArgs> = z.object({
  select: IngredientSelectSchema.optional(),
  include: IngredientIncludeSchema.optional(),
  data: z.union([ IngredientUpdateInputSchema,IngredientUncheckedUpdateInputSchema ]),
  where: IngredientWhereUniqueInputSchema,
}).strict() ;

export const IngredientUpdateManyArgsSchema: z.ZodType<Prisma.IngredientUpdateManyArgs> = z.object({
  data: z.union([ IngredientUpdateManyMutationInputSchema,IngredientUncheckedUpdateManyInputSchema ]),
  where: IngredientWhereInputSchema.optional(),
}).strict() ;

export const IngredientDeleteManyArgsSchema: z.ZodType<Prisma.IngredientDeleteManyArgs> = z.object({
  where: IngredientWhereInputSchema.optional(),
}).strict() ;

export const CompositionCreateArgsSchema: z.ZodType<Prisma.CompositionCreateArgs> = z.object({
  select: CompositionSelectSchema.optional(),
  include: CompositionIncludeSchema.optional(),
  data: z.union([ CompositionCreateInputSchema,CompositionUncheckedCreateInputSchema ]),
}).strict() ;

export const CompositionUpsertArgsSchema: z.ZodType<Prisma.CompositionUpsertArgs> = z.object({
  select: CompositionSelectSchema.optional(),
  include: CompositionIncludeSchema.optional(),
  where: CompositionWhereUniqueInputSchema,
  create: z.union([ CompositionCreateInputSchema,CompositionUncheckedCreateInputSchema ]),
  update: z.union([ CompositionUpdateInputSchema,CompositionUncheckedUpdateInputSchema ]),
}).strict() ;

export const CompositionCreateManyArgsSchema: z.ZodType<Prisma.CompositionCreateManyArgs> = z.object({
  data: z.union([ CompositionCreateManyInputSchema,CompositionCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const CompositionDeleteArgsSchema: z.ZodType<Prisma.CompositionDeleteArgs> = z.object({
  select: CompositionSelectSchema.optional(),
  include: CompositionIncludeSchema.optional(),
  where: CompositionWhereUniqueInputSchema,
}).strict() ;

export const CompositionUpdateArgsSchema: z.ZodType<Prisma.CompositionUpdateArgs> = z.object({
  select: CompositionSelectSchema.optional(),
  include: CompositionIncludeSchema.optional(),
  data: z.union([ CompositionUpdateInputSchema,CompositionUncheckedUpdateInputSchema ]),
  where: CompositionWhereUniqueInputSchema,
}).strict() ;

export const CompositionUpdateManyArgsSchema: z.ZodType<Prisma.CompositionUpdateManyArgs> = z.object({
  data: z.union([ CompositionUpdateManyMutationInputSchema,CompositionUncheckedUpdateManyInputSchema ]),
  where: CompositionWhereInputSchema.optional(),
}).strict() ;

export const CompositionDeleteManyArgsSchema: z.ZodType<Prisma.CompositionDeleteManyArgs> = z.object({
  where: CompositionWhereInputSchema.optional(),
}).strict() ;

export const CompositionCategoryCreateArgsSchema: z.ZodType<Prisma.CompositionCategoryCreateArgs> = z.object({
  select: CompositionCategorySelectSchema.optional(),
  include: CompositionCategoryIncludeSchema.optional(),
  data: z.union([ CompositionCategoryCreateInputSchema,CompositionCategoryUncheckedCreateInputSchema ]),
}).strict() ;

export const CompositionCategoryUpsertArgsSchema: z.ZodType<Prisma.CompositionCategoryUpsertArgs> = z.object({
  select: CompositionCategorySelectSchema.optional(),
  include: CompositionCategoryIncludeSchema.optional(),
  where: CompositionCategoryWhereUniqueInputSchema,
  create: z.union([ CompositionCategoryCreateInputSchema,CompositionCategoryUncheckedCreateInputSchema ]),
  update: z.union([ CompositionCategoryUpdateInputSchema,CompositionCategoryUncheckedUpdateInputSchema ]),
}).strict() ;

export const CompositionCategoryCreateManyArgsSchema: z.ZodType<Prisma.CompositionCategoryCreateManyArgs> = z.object({
  data: z.union([ CompositionCategoryCreateManyInputSchema,CompositionCategoryCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const CompositionCategoryDeleteArgsSchema: z.ZodType<Prisma.CompositionCategoryDeleteArgs> = z.object({
  select: CompositionCategorySelectSchema.optional(),
  include: CompositionCategoryIncludeSchema.optional(),
  where: CompositionCategoryWhereUniqueInputSchema,
}).strict() ;

export const CompositionCategoryUpdateArgsSchema: z.ZodType<Prisma.CompositionCategoryUpdateArgs> = z.object({
  select: CompositionCategorySelectSchema.optional(),
  include: CompositionCategoryIncludeSchema.optional(),
  data: z.union([ CompositionCategoryUpdateInputSchema,CompositionCategoryUncheckedUpdateInputSchema ]),
  where: CompositionCategoryWhereUniqueInputSchema,
}).strict() ;

export const CompositionCategoryUpdateManyArgsSchema: z.ZodType<Prisma.CompositionCategoryUpdateManyArgs> = z.object({
  data: z.union([ CompositionCategoryUpdateManyMutationInputSchema,CompositionCategoryUncheckedUpdateManyInputSchema ]),
  where: CompositionCategoryWhereInputSchema.optional(),
}).strict() ;

export const CompositionCategoryDeleteManyArgsSchema: z.ZodType<Prisma.CompositionCategoryDeleteManyArgs> = z.object({
  where: CompositionCategoryWhereInputSchema.optional(),
}).strict() ;

export const HazardSymbolsCreateArgsSchema: z.ZodType<Prisma.HazardSymbolsCreateArgs> = z.object({
  select: HazardSymbolsSelectSchema.optional(),
  include: HazardSymbolsIncludeSchema.optional(),
  data: z.union([ HazardSymbolsCreateInputSchema,HazardSymbolsUncheckedCreateInputSchema ]),
}).strict() ;

export const HazardSymbolsUpsertArgsSchema: z.ZodType<Prisma.HazardSymbolsUpsertArgs> = z.object({
  select: HazardSymbolsSelectSchema.optional(),
  include: HazardSymbolsIncludeSchema.optional(),
  where: HazardSymbolsWhereUniqueInputSchema,
  create: z.union([ HazardSymbolsCreateInputSchema,HazardSymbolsUncheckedCreateInputSchema ]),
  update: z.union([ HazardSymbolsUpdateInputSchema,HazardSymbolsUncheckedUpdateInputSchema ]),
}).strict() ;

export const HazardSymbolsCreateManyArgsSchema: z.ZodType<Prisma.HazardSymbolsCreateManyArgs> = z.object({
  data: z.union([ HazardSymbolsCreateManyInputSchema,HazardSymbolsCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const HazardSymbolsDeleteArgsSchema: z.ZodType<Prisma.HazardSymbolsDeleteArgs> = z.object({
  select: HazardSymbolsSelectSchema.optional(),
  include: HazardSymbolsIncludeSchema.optional(),
  where: HazardSymbolsWhereUniqueInputSchema,
}).strict() ;

export const HazardSymbolsUpdateArgsSchema: z.ZodType<Prisma.HazardSymbolsUpdateArgs> = z.object({
  select: HazardSymbolsSelectSchema.optional(),
  include: HazardSymbolsIncludeSchema.optional(),
  data: z.union([ HazardSymbolsUpdateInputSchema,HazardSymbolsUncheckedUpdateInputSchema ]),
  where: HazardSymbolsWhereUniqueInputSchema,
}).strict() ;

export const HazardSymbolsUpdateManyArgsSchema: z.ZodType<Prisma.HazardSymbolsUpdateManyArgs> = z.object({
  data: z.union([ HazardSymbolsUpdateManyMutationInputSchema,HazardSymbolsUncheckedUpdateManyInputSchema ]),
  where: HazardSymbolsWhereInputSchema.optional(),
}).strict() ;

export const HazardSymbolsDeleteManyArgsSchema: z.ZodType<Prisma.HazardSymbolsDeleteManyArgs> = z.object({
  where: HazardSymbolsWhereInputSchema.optional(),
}).strict() ;

export const ChemicalCreateArgsSchema: z.ZodType<Prisma.ChemicalCreateArgs> = z.object({
  select: ChemicalSelectSchema.optional(),
  include: ChemicalIncludeSchema.optional(),
  data: z.union([ ChemicalCreateInputSchema,ChemicalUncheckedCreateInputSchema ]),
}).strict() ;

export const ChemicalUpsertArgsSchema: z.ZodType<Prisma.ChemicalUpsertArgs> = z.object({
  select: ChemicalSelectSchema.optional(),
  include: ChemicalIncludeSchema.optional(),
  where: ChemicalWhereUniqueInputSchema,
  create: z.union([ ChemicalCreateInputSchema,ChemicalUncheckedCreateInputSchema ]),
  update: z.union([ ChemicalUpdateInputSchema,ChemicalUncheckedUpdateInputSchema ]),
}).strict() ;

export const ChemicalCreateManyArgsSchema: z.ZodType<Prisma.ChemicalCreateManyArgs> = z.object({
  data: z.union([ ChemicalCreateManyInputSchema,ChemicalCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const ChemicalDeleteArgsSchema: z.ZodType<Prisma.ChemicalDeleteArgs> = z.object({
  select: ChemicalSelectSchema.optional(),
  include: ChemicalIncludeSchema.optional(),
  where: ChemicalWhereUniqueInputSchema,
}).strict() ;

export const ChemicalUpdateArgsSchema: z.ZodType<Prisma.ChemicalUpdateArgs> = z.object({
  select: ChemicalSelectSchema.optional(),
  include: ChemicalIncludeSchema.optional(),
  data: z.union([ ChemicalUpdateInputSchema,ChemicalUncheckedUpdateInputSchema ]),
  where: ChemicalWhereUniqueInputSchema,
}).strict() ;

export const ChemicalUpdateManyArgsSchema: z.ZodType<Prisma.ChemicalUpdateManyArgs> = z.object({
  data: z.union([ ChemicalUpdateManyMutationInputSchema,ChemicalUncheckedUpdateManyInputSchema ]),
  where: ChemicalWhereInputSchema.optional(),
}).strict() ;

export const ChemicalDeleteManyArgsSchema: z.ZodType<Prisma.ChemicalDeleteManyArgs> = z.object({
  where: ChemicalWhereInputSchema.optional(),
}).strict() ;

export const PageCreateArgsSchema: z.ZodType<Prisma.PageCreateArgs> = z.object({
  select: PageSelectSchema.optional(),
  include: PageIncludeSchema.optional(),
  data: z.union([ PageCreateInputSchema,PageUncheckedCreateInputSchema ]),
}).strict() ;

export const PageUpsertArgsSchema: z.ZodType<Prisma.PageUpsertArgs> = z.object({
  select: PageSelectSchema.optional(),
  include: PageIncludeSchema.optional(),
  where: PageWhereUniqueInputSchema,
  create: z.union([ PageCreateInputSchema,PageUncheckedCreateInputSchema ]),
  update: z.union([ PageUpdateInputSchema,PageUncheckedUpdateInputSchema ]),
}).strict() ;

export const PageCreateManyArgsSchema: z.ZodType<Prisma.PageCreateManyArgs> = z.object({
  data: z.union([ PageCreateManyInputSchema,PageCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const PageDeleteArgsSchema: z.ZodType<Prisma.PageDeleteArgs> = z.object({
  select: PageSelectSchema.optional(),
  include: PageIncludeSchema.optional(),
  where: PageWhereUniqueInputSchema,
}).strict() ;

export const PageUpdateArgsSchema: z.ZodType<Prisma.PageUpdateArgs> = z.object({
  select: PageSelectSchema.optional(),
  include: PageIncludeSchema.optional(),
  data: z.union([ PageUpdateInputSchema,PageUncheckedUpdateInputSchema ]),
  where: PageWhereUniqueInputSchema,
}).strict() ;

export const PageUpdateManyArgsSchema: z.ZodType<Prisma.PageUpdateManyArgs> = z.object({
  data: z.union([ PageUpdateManyMutationInputSchema,PageUncheckedUpdateManyInputSchema ]),
  where: PageWhereInputSchema.optional(),
}).strict() ;

export const PageDeleteManyArgsSchema: z.ZodType<Prisma.PageDeleteManyArgs> = z.object({
  where: PageWhereInputSchema.optional(),
}).strict() ;

export const CategoryCreateArgsSchema: z.ZodType<Prisma.CategoryCreateArgs> = z.object({
  select: CategorySelectSchema.optional(),
  include: CategoryIncludeSchema.optional(),
  data: z.union([ CategoryCreateInputSchema,CategoryUncheckedCreateInputSchema ]),
}).strict() ;

export const CategoryUpsertArgsSchema: z.ZodType<Prisma.CategoryUpsertArgs> = z.object({
  select: CategorySelectSchema.optional(),
  include: CategoryIncludeSchema.optional(),
  where: CategoryWhereUniqueInputSchema,
  create: z.union([ CategoryCreateInputSchema,CategoryUncheckedCreateInputSchema ]),
  update: z.union([ CategoryUpdateInputSchema,CategoryUncheckedUpdateInputSchema ]),
}).strict() ;

export const CategoryCreateManyArgsSchema: z.ZodType<Prisma.CategoryCreateManyArgs> = z.object({
  data: z.union([ CategoryCreateManyInputSchema,CategoryCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const CategoryDeleteArgsSchema: z.ZodType<Prisma.CategoryDeleteArgs> = z.object({
  select: CategorySelectSchema.optional(),
  include: CategoryIncludeSchema.optional(),
  where: CategoryWhereUniqueInputSchema,
}).strict() ;

export const CategoryUpdateArgsSchema: z.ZodType<Prisma.CategoryUpdateArgs> = z.object({
  select: CategorySelectSchema.optional(),
  include: CategoryIncludeSchema.optional(),
  data: z.union([ CategoryUpdateInputSchema,CategoryUncheckedUpdateInputSchema ]),
  where: CategoryWhereUniqueInputSchema,
}).strict() ;

export const CategoryUpdateManyArgsSchema: z.ZodType<Prisma.CategoryUpdateManyArgs> = z.object({
  data: z.union([ CategoryUpdateManyMutationInputSchema,CategoryUncheckedUpdateManyInputSchema ]),
  where: CategoryWhereInputSchema.optional(),
}).strict() ;

export const CategoryDeleteManyArgsSchema: z.ZodType<Prisma.CategoryDeleteManyArgs> = z.object({
  where: CategoryWhereInputSchema.optional(),
}).strict() ;

export const PageContentCreateArgsSchema: z.ZodType<Prisma.PageContentCreateArgs> = z.object({
  select: PageContentSelectSchema.optional(),
  include: PageContentIncludeSchema.optional(),
  data: z.union([ PageContentCreateInputSchema,PageContentUncheckedCreateInputSchema ]).optional(),
}).strict() ;

export const PageContentUpsertArgsSchema: z.ZodType<Prisma.PageContentUpsertArgs> = z.object({
  select: PageContentSelectSchema.optional(),
  include: PageContentIncludeSchema.optional(),
  where: PageContentWhereUniqueInputSchema,
  create: z.union([ PageContentCreateInputSchema,PageContentUncheckedCreateInputSchema ]),
  update: z.union([ PageContentUpdateInputSchema,PageContentUncheckedUpdateInputSchema ]),
}).strict() ;

export const PageContentCreateManyArgsSchema: z.ZodType<Prisma.PageContentCreateManyArgs> = z.object({
  data: z.union([ PageContentCreateManyInputSchema,PageContentCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const PageContentDeleteArgsSchema: z.ZodType<Prisma.PageContentDeleteArgs> = z.object({
  select: PageContentSelectSchema.optional(),
  include: PageContentIncludeSchema.optional(),
  where: PageContentWhereUniqueInputSchema,
}).strict() ;

export const PageContentUpdateArgsSchema: z.ZodType<Prisma.PageContentUpdateArgs> = z.object({
  select: PageContentSelectSchema.optional(),
  include: PageContentIncludeSchema.optional(),
  data: z.union([ PageContentUpdateInputSchema,PageContentUncheckedUpdateInputSchema ]),
  where: PageContentWhereUniqueInputSchema,
}).strict() ;

export const PageContentUpdateManyArgsSchema: z.ZodType<Prisma.PageContentUpdateManyArgs> = z.object({
  data: z.union([ PageContentUpdateManyMutationInputSchema,PageContentUncheckedUpdateManyInputSchema ]),
  where: PageContentWhereInputSchema.optional(),
}).strict() ;

export const PageContentDeleteManyArgsSchema: z.ZodType<Prisma.PageContentDeleteManyArgs> = z.object({
  where: PageContentWhereInputSchema.optional(),
}).strict() ;

export const WidgetCreateArgsSchema: z.ZodType<Prisma.WidgetCreateArgs> = z.object({
  select: WidgetSelectSchema.optional(),
  include: WidgetIncludeSchema.optional(),
  data: z.union([ WidgetCreateInputSchema,WidgetUncheckedCreateInputSchema ]),
}).strict() ;

export const WidgetUpsertArgsSchema: z.ZodType<Prisma.WidgetUpsertArgs> = z.object({
  select: WidgetSelectSchema.optional(),
  include: WidgetIncludeSchema.optional(),
  where: WidgetWhereUniqueInputSchema,
  create: z.union([ WidgetCreateInputSchema,WidgetUncheckedCreateInputSchema ]),
  update: z.union([ WidgetUpdateInputSchema,WidgetUncheckedUpdateInputSchema ]),
}).strict() ;

export const WidgetCreateManyArgsSchema: z.ZodType<Prisma.WidgetCreateManyArgs> = z.object({
  data: z.union([ WidgetCreateManyInputSchema,WidgetCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const WidgetDeleteArgsSchema: z.ZodType<Prisma.WidgetDeleteArgs> = z.object({
  select: WidgetSelectSchema.optional(),
  include: WidgetIncludeSchema.optional(),
  where: WidgetWhereUniqueInputSchema,
}).strict() ;

export const WidgetUpdateArgsSchema: z.ZodType<Prisma.WidgetUpdateArgs> = z.object({
  select: WidgetSelectSchema.optional(),
  include: WidgetIncludeSchema.optional(),
  data: z.union([ WidgetUpdateInputSchema,WidgetUncheckedUpdateInputSchema ]),
  where: WidgetWhereUniqueInputSchema,
}).strict() ;

export const WidgetUpdateManyArgsSchema: z.ZodType<Prisma.WidgetUpdateManyArgs> = z.object({
  data: z.union([ WidgetUpdateManyMutationInputSchema,WidgetUncheckedUpdateManyInputSchema ]),
  where: WidgetWhereInputSchema.optional(),
}).strict() ;

export const WidgetDeleteManyArgsSchema: z.ZodType<Prisma.WidgetDeleteManyArgs> = z.object({
  where: WidgetWhereInputSchema.optional(),
}).strict() ;

export const ImageWidgetCreateArgsSchema: z.ZodType<Prisma.ImageWidgetCreateArgs> = z.object({
  select: ImageWidgetSelectSchema.optional(),
  include: ImageWidgetIncludeSchema.optional(),
  data: z.union([ ImageWidgetCreateInputSchema,ImageWidgetUncheckedCreateInputSchema ]),
}).strict() ;

export const ImageWidgetUpsertArgsSchema: z.ZodType<Prisma.ImageWidgetUpsertArgs> = z.object({
  select: ImageWidgetSelectSchema.optional(),
  include: ImageWidgetIncludeSchema.optional(),
  where: ImageWidgetWhereUniqueInputSchema,
  create: z.union([ ImageWidgetCreateInputSchema,ImageWidgetUncheckedCreateInputSchema ]),
  update: z.union([ ImageWidgetUpdateInputSchema,ImageWidgetUncheckedUpdateInputSchema ]),
}).strict() ;

export const ImageWidgetCreateManyArgsSchema: z.ZodType<Prisma.ImageWidgetCreateManyArgs> = z.object({
  data: z.union([ ImageWidgetCreateManyInputSchema,ImageWidgetCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const ImageWidgetDeleteArgsSchema: z.ZodType<Prisma.ImageWidgetDeleteArgs> = z.object({
  select: ImageWidgetSelectSchema.optional(),
  include: ImageWidgetIncludeSchema.optional(),
  where: ImageWidgetWhereUniqueInputSchema,
}).strict() ;

export const ImageWidgetUpdateArgsSchema: z.ZodType<Prisma.ImageWidgetUpdateArgs> = z.object({
  select: ImageWidgetSelectSchema.optional(),
  include: ImageWidgetIncludeSchema.optional(),
  data: z.union([ ImageWidgetUpdateInputSchema,ImageWidgetUncheckedUpdateInputSchema ]),
  where: ImageWidgetWhereUniqueInputSchema,
}).strict() ;

export const ImageWidgetUpdateManyArgsSchema: z.ZodType<Prisma.ImageWidgetUpdateManyArgs> = z.object({
  data: z.union([ ImageWidgetUpdateManyMutationInputSchema,ImageWidgetUncheckedUpdateManyInputSchema ]),
  where: ImageWidgetWhereInputSchema.optional(),
}).strict() ;

export const ImageWidgetDeleteManyArgsSchema: z.ZodType<Prisma.ImageWidgetDeleteManyArgs> = z.object({
  where: ImageWidgetWhereInputSchema.optional(),
}).strict() ;

export const EditorWidgetCreateArgsSchema: z.ZodType<Prisma.EditorWidgetCreateArgs> = z.object({
  select: EditorWidgetSelectSchema.optional(),
  data: z.union([ EditorWidgetCreateInputSchema,EditorWidgetUncheckedCreateInputSchema ]).optional(),
}).strict() ;

export const EditorWidgetUpsertArgsSchema: z.ZodType<Prisma.EditorWidgetUpsertArgs> = z.object({
  select: EditorWidgetSelectSchema.optional(),
  where: EditorWidgetWhereUniqueInputSchema,
  create: z.union([ EditorWidgetCreateInputSchema,EditorWidgetUncheckedCreateInputSchema ]),
  update: z.union([ EditorWidgetUpdateInputSchema,EditorWidgetUncheckedUpdateInputSchema ]),
}).strict() ;

export const EditorWidgetCreateManyArgsSchema: z.ZodType<Prisma.EditorWidgetCreateManyArgs> = z.object({
  data: z.union([ EditorWidgetCreateManyInputSchema,EditorWidgetCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const EditorWidgetDeleteArgsSchema: z.ZodType<Prisma.EditorWidgetDeleteArgs> = z.object({
  select: EditorWidgetSelectSchema.optional(),
  where: EditorWidgetWhereUniqueInputSchema,
}).strict() ;

export const EditorWidgetUpdateArgsSchema: z.ZodType<Prisma.EditorWidgetUpdateArgs> = z.object({
  select: EditorWidgetSelectSchema.optional(),
  data: z.union([ EditorWidgetUpdateInputSchema,EditorWidgetUncheckedUpdateInputSchema ]),
  where: EditorWidgetWhereUniqueInputSchema,
}).strict() ;

export const EditorWidgetUpdateManyArgsSchema: z.ZodType<Prisma.EditorWidgetUpdateManyArgs> = z.object({
  data: z.union([ EditorWidgetUpdateManyMutationInputSchema,EditorWidgetUncheckedUpdateManyInputSchema ]),
  where: EditorWidgetWhereInputSchema.optional(),
}).strict() ;

export const EditorWidgetDeleteManyArgsSchema: z.ZodType<Prisma.EditorWidgetDeleteManyArgs> = z.object({
  where: EditorWidgetWhereInputSchema.optional(),
}).strict() ;