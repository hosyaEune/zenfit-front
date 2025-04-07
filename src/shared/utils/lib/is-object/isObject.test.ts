import { isObject } from './';

describe('isObject', () => {
    it('returns true for plain objects', () => {
        expect(isObject({})).toBe(true);
        expect(isObject({ a: 1 })).toBe(true);
    });

    it('returns false for arrays', () => {
        expect(isObject([])).toBe(false);
        expect(isObject([1, 2, 3])).toBe(false);
    });

    it('returns false for null', () => {
        expect(isObject(null)).toBe(false);
    });

    it('returns false for functions', () => {
        expect(isObject(() => {})).toBe(false);
        expect(isObject(function () {})).toBe(false);
    });

    it('returns false for primitives', () => {
        expect(isObject(42)).toBe(false);
        expect(isObject('string')).toBe(false);
        expect(isObject(true)).toBe(false);
        expect(isObject(undefined)).toBe(false);
        expect(isObject(Symbol('symbol'))).toBe(false);
    });

    it('returns false for objects created with a different constructor', () => {
        class MyClass {}
        expect(isObject(new MyClass())).toBe(false);
    });
});
