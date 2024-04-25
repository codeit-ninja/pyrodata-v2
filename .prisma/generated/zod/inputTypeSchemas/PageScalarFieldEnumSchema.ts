import { z } from 'zod';

export const PageScalarFieldEnumSchema = z.enum(['id','title','slug','featuredImageId','pageContentId','categorySlug','createdAt','updatedAt','userId']);

export default PageScalarFieldEnumSchema;
