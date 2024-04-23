import type { z, ZodFormattedError, ZodSchema } from "zod";
import { isInteger, mapValues, omit, toInteger, toNumber } from 'lodash-es';

export const validate = async <T extends Record<string, any>>(schema: ZodSchema<T>, request: Request): Promise<[T, Omit<ZodFormattedError<T>, '_errors'> | null]> => {
    const data = await request.json() as T;
    const result = schema.safeParse(data);

    if (!result.success) {
        const formatted = result.error.format()

        return [data, omit(formatted, '_errors')];
    }

    return [data, null];
}

export const getSearchParams = <T extends Record<string, any>>( url: URL ) => {
    const searchParams = Object.fromEntries(url.searchParams.entries());

    return mapValues(searchParams, (value) => {
        if (!isNaN(Number(value)) && value !== '') {
            if (isInteger(toNumber(value))) {
                return toInteger(value);
            } else {
                return toNumber(value);
            }
        } else if (value.toLowerCase() === 'true') {
            return true;
        } else if (value.toLowerCase() === 'false') {
            return false;
        } else {
            return value;
        }
    }) as { [K in keyof T]: T[K] extends string ? any : T[K] };
}