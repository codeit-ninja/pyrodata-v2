// export const fetch = async (input: RequestInfo | URL, init?: RequestInit | undefined) => {
//     const request = await window.fetch();

import type { ZodFormattedError } from "zod";

//     return [];
// }

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