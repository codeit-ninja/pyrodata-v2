import { z } from 'zod';

export const UserScalarFieldEnumSchema = z.enum(['id','username','password','email','role','createdAt','updatedAt']);

export default UserScalarFieldEnumSchema;
