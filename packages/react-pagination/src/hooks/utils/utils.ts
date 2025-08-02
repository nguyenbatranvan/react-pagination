function isFunction(d: any): d is Function {
    return typeof d === 'function'
}
export type Updater<TPrevious, TResult = TPrevious> =
    | TResult
    | ((prev?: TPrevious) => TResult)

export type NonNullableUpdater<TPrevious, TResult = TPrevious> =
    | TResult
    | ((prev: TPrevious) => TResult)

export function functionalUpdate<TPrevious, TResult = TPrevious>(
    updater: Updater<TPrevious, TResult> | NonNullableUpdater<TPrevious, TResult>,
    previous: TPrevious,
): TResult {
    if (isFunction(updater)) {
        return updater(previous)
    }

    return updater
}
