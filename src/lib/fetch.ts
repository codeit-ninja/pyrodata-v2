import { isEmpty, omitBy } from "lodash-es";
import type { ZodFormattedError } from "zod";

export const get = async <T>(url: RequestInfo | URL, data?: T): Promise<[unknown, ZodFormattedError<T> | null]> => {
    let queryString: string = '';

    if (data) {
        queryString = `?` + new URLSearchParams(omitBy(data, isEmpty)).toString();
    }
    
    try {
        const request = await fetch(url + queryString);
        const response = await request.json();
        
        if (!request.ok) {
            // @ts-ignore
            return [null, response]
        }

        return [response, null];
    } catch(_) {
        // @ts-ignore
        return [null, { _errors: ['Something went wrong'] }];
    }
}

export const post = async <T>(url: RequestInfo | URL, data?: T): Promise<[App.Locals['session'] | null, ZodFormattedError<T> | null]> => {
    try {
        const request = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(data)
        });

        const response = await request.json();
        
        if (!request.ok) {
            // @ts-ignore
            return [null, response]
        }

        return [response, null];
    } catch(_) {
        // @ts-ignore
        return [null, { _errors: ['Something went wrong'] }];
    }
}