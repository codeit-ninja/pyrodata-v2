import { z } from 'zod';

export const PageContentScalarFieldEnumSchema = z.enum(['id','html','sidebar','createdAt','updatedAt']);

export default PageContentScalarFieldEnumSchema;
