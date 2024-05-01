import { isArray, isInteger, mapValues, set, toInteger, toNumber } from 'lodash-es';
import vine, { errors as VineErrors, type VineValidator } from "@vinejs/vine";
import type { InferInput, Infer, SchemaTypes } from "@vinejs/vine/types";
import { normalizeValue } from './utils';

export type ValidateReturnType<T extends SchemaTypes, Schema = Infer<T>> = [
    Schema | null,
    ValidateErrors<T> | null
]

export type ValidateErrors<T extends SchemaTypes, Schema = Infer<T>> = {
    [key in keyof Schema]: {
        message: string;
        rule: string;
        field: string;
        meta: Record<string, any>;
    }
}

export const validate = async <T extends SchemaTypes>(
    schema: T, 
    request: Request
): Promise<ValidateReturnType<T>> => {
    let data: T | null = null;
    let errors: ValidateErrors<T> | null = null;
    
    const validator = vine.compile(schema);
    const formDataObject = await request.formData();
    const formDataParsed = formData<Infer<typeof schema>>(formDataObject);
    
    try {
        data = await validator.validate(formDataParsed);
        errors = null;
    } catch(error) {
        if (error instanceof VineErrors.E_VALIDATION_ERROR) {
            if (error?.messages) {
                errors = {} as ValidateErrors<T>;
                
                for (const err of error.messages) {
                    errors[err.field as keyof Infer<typeof schema>] = err;
                }
            }
        }
        
        data = null;
    }

    return [data, errors];
}
  

export const getSearchParams = <T extends Record<string, any>>( url: URL ) => {
    const searchParams = Object.fromEntries(url.searchParams.entries());

    return mapValues(searchParams, normalizeValue) as { [K in keyof T]: T[K] extends string ? any : T[K] };
}

export const formData = <T>(formData: FormData): T => {
    const root = {};

    for (let [path, value] of formData) {
        /**
         * Account for path that represents array
         * Eg: badges[]
         * 
         * Update path with an index
         * Eg: badges[0]
         */
        if (path.endsWith('[]')) {
            path = path.replace('[]', `[${formData.getAll(path).findIndex(i => i === value)}]`)
        }
        
        set(root, path, normalizeValue(value));
    }
    
    return root as T;
}