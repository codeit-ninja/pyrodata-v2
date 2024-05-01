/**
 * Cast a string to a data type
 * 
 * @param value 
 * @returns 
 */
export const normalizeValue = (value: any): any => {
    if (value instanceof Blob) {
        return value;
    } else if (typeof value === 'string') {
        const trimmedValue = value.trim();

        if (trimmedValue === '') {
            return undefined;
        } else if (trimmedValue === 'true') {
            return true;
        } else if (trimmedValue === 'false') {
            return false;
        } else if (trimmedValue === 'null') {
            return null;
        } else if (trimmedValue === 'undefined') {
            return undefined;
        } else if (!isNaN(parseFloat(trimmedValue))) {
            return parseFloat(trimmedValue);
        } else {
            try {
                const parsedJson = JSON.parse(trimmedValue);
                if (typeof parsedJson === 'object' && parsedJson !== null) {
                    return parsedJson;
                }
            } catch (error) {
                // Ignore JSON parse errors and return original string
            }
            return value;
        }
    } else if (!isNaN(Number(value)) && value !== '') {
        if (Number.isInteger(Number(value))) {
            return Number.isSafeInteger(Number(value)) ? Number(value) : BigInt(value);
        } else {
            return Number(value);
        }
    } else if (value.toLowerCase() === 'true') {
        return true;
    } else if (value.toLowerCase() === 'false') {
        return false;
    } else {
        return value;
    }
}