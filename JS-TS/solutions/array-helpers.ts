/* eslint-disable @typescript-eslint/no-unused-vars */
// Task 02: Mini functional–utility library
// All helpers are declared but not implemented.

export function mapArray<T, R>(source: readonly T[], mapper: (item: T, index: number) => R): R[] {
    if (source === null || undefined) {
        throw new Error('mapArray: not implemented');
    }
    const newArray: R[] = [];
    for (let i = 0; i < source.length; i++) {
        newArray.push(mapper(source[i], i));
    }
    return newArray;
}

export function filterArray<T>(source: readonly T[], predicate: (item: T, index: number) => boolean): T[] {
    if (source === null || undefined) {
        throw new Error('filterArray: not implemented');
    }
    const newArray: T[] = [];
    for (let i = 0; i < source.length; i++) {
        if (predicate(source[i], i) === true) {
            newArray.push(source[i])
        }

    }
    return newArray;
}

export function reduceArray<T, R>(source: readonly T[], reducer: (acc: R, item: T, index: number) => R, initial: R): R {
    if (source === null || undefined) {
        throw new Error('reduceArray: not implemented');
    }
    let result: R = initial;
    for (let i = 0; i < source.length; i++) {
        result = reducer(result, source[i], i);
    }
    return result;
}


export function partition<T>(source: readonly T[], predicate: (item: T) => boolean): [T[], T[]] {
    if (source === null || undefined) {
        throw new Error('partition: not implemented');
    }
    const newArray: [T[], T[]] = [[], []];
    for (let i = 0; i < source.length; i++) {
        if (predicate(source[i]) === true) {
            newArray[0].push(source[i])
        } else {
            newArray[1].push(source[i])
        }
    }
    return newArray;
}

export function groupBy<T, K extends PropertyKey>(source: readonly T[], keySelector: (item: T) => K): Record<K, T[]> {
    if (source === null || undefined) {
        throw new Error('groupBy: not implemented');
    }
    const result = {} as Record<K, T[]>;
    for (let i = 0; i < source.length; i++) {
        let key = keySelector(source[i])
        if (!(key in result)) result[key] = [];
        result[key].push(source[i])
    }
    return result
}


