import type { FieldContext } from '@vinejs/vine/types'
import vine, { VineString } from '@vinejs/vine';
import cuid2, { createId, isCuid } from '@paralleldrive/cuid2';

vine.convertEmptyStringsToNull = true;

export {
    vine
}

function cuid(value: unknown, field: FieldContext) {
    if (typeof value !== 'string') {
        return;
    }

    const valid = isCuid(value)

    if (!valid) {
        field.report(
            'The {{ field }} is not valid',
            'cuid',
            field
        )
    }
}

const cuidRule = vine.createRule(cuid)

VineString.macro('cuid', function (this: VineString, options?: any) {
    return this.use(cuidRule(options))
})

declare module '@vinejs/vine' {
    interface VineString {
        cuid(): this
    }
}