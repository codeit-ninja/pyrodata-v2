import { z } from 'zod';

export const PageContentScalarFieldEnumSchema = z.enum(['id','createdAt','html','sidebar']);

export default PageContentScalarFieldEnumSchema;
