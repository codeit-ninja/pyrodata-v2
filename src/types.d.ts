export type FormErrors<T> = Partial<{
    [key in keyof T]: {
        message: string;
        rule: string;
        field: string;
        meta: Record<string, any>;
    }
}>

export namespace API {
    interface Response<Data extends Record<string, any> = unknown> {
        data: Data;
        meta: {
            prevPage: number;
            currentPage: number;
            nextPage: number;
            totalPages: number;
            count: number;
        }
    }
}