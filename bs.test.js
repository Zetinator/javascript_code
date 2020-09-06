import {bisect_left, bisect_right, default as bs} from "./bs";

test('search value on empty array', () => {
    let e = [];
    expect(bs(e, 3)).toStrictEqual(false);
});
test('search value on array not found', () => {
    let e = [1, 2, 3, 3, 3, 3, 4, 5];
    expect(bs(e, 9)).toStrictEqual(false);
});
test('try to search a value over an array', () => {
    let e = [1, 2, 3, 3, 3, 3, 4, 5];
    expect(bs(e, 3)).toStrictEqual(true);
});
test('try to search a value over an array', () => {
    let e = [1, 2, 3, 3, 3, 3, 4, 5];
    expect(bisect_left(e, 3)).toStrictEqual(2);
});
test('try to search a value over an array', () => {
    let e = [1, 2, 3, 3, 3, 3, 4, 5];
    expect(bisect_right(e, 3)).toStrictEqual(6);
});
test('try to search a value over array not found', () => {
    let e = [1, 2, 3, 3, 3, 3, 4, 5];
    expect(bisect_right(e, 0)).toStrictEqual(0);
});
test('try to search a value over array not found', () => {
    let e = [1, 2, 3, 3, 3, 3, 4, 5];
    expect(bisect_right(e, 10)).toStrictEqual(e.length);
});