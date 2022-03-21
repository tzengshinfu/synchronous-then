const { plus, minus, multiply, divide, addDays, addMonths, addYears } = require('./common_function.js');

test('plus(1, 2) = 3', () => {
    expect(plus(1, 2)).toBe(3);
});

test('minus(3, 2) = 1', () => {
    expect(minus(3, 2)).toBe(1);
});

test('multiply(2, 3) = 6', () => {
    expect(multiply(2, 3)).toBe(6);
});

test('divide(6, 3) = 2', () => {
    expect(divide(6, 3)).toBe(2);
});

test('addDays(new Date("2022 01-01"), 5) = new Date("2022 01-06")', () => {
    expect(addDays(new Date('2022 01-01'), 5)).toStrictEqual(new Date('2022 01-06'));
});

test('addMonths(new Date("2022 01-01"), 5) = new Date("2022 06-01")', () => {
    expect(addMonths(new Date('2022 01-01'), 5)).toStrictEqual(new Date('2022 06-01'));
});

test('addYears(new Date("2022 01-01"), 5) = new Date("2027 01-01")', () => {
    expect(addYears(new Date('2022 01-01'), 5)).toStrictEqual(new Date('2027 01-01'));
});

test('plus(9007199254740991n, 1n) = 9007199254740992n', () => {
    expect(plus(9007199254740991n, 1n)).toBe(9007199254740992n);
});
