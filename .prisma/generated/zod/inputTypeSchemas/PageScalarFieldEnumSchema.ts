import { z } from 'zod';

export const PageScalarFieldEnumSchema = z.enum(['id','title','slug','featuredImageId','pageContentId','categorySlug','userId','createdAt','updatedAt']);

export default PageScalarFieldEnumSchema;
