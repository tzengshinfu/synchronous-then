require('../src/synchronous-then.js');
const { plus, minus, multiply, divide, addDays, addMonths, addYears } = require('./common_function.js');

test('divide(multiply(minus(plus(5, 5), 2), 3), 4) = plus(5, 5).then(x => minus(x, 2)).then(x => multiply(x, 3)).then(x => divide(x, 4))', () => {
    expect(divide(multiply(minus(plus(5, 5), 2), 3), 4)).toBe(plus(5, 5).then(x => minus(x, 2)).then(x => multiply(x, 3)).then(x => divide(x, 4)));
});

test('divide(multiply(minus(plus(5n, 5n), 2n), 3n), 4n) = plus(5n, 5n).then(x => minus(x, 2n)).then(x => multiply(x, 3n)).then(x => divide(x, 4n))', () => {
    expect(divide(multiply(minus(plus(5n, 5n), 2n), 3n), 4n)).toBe(plus(5n, 5n).then(x => minus(x, 2n)).then(x => multiply(x, 3n)).then(x => divide(x, 4n)));
});

test('addYears(addMonths(addDays(new Date("2022-01-01"), 5), 5), 5) = addDays(new Date("2022-01-01"), 5).then(x => addMonths(x, 5)).then(x => addYears(x, 5))', () => {
    expect(addYears(addMonths(addDays(new Date('2022-01-01'), 5), 5), 5)).toStrictEqual(addDays(new Date('2022-01-01'), 5).then(x => addMonths(x, 5)).then(x => addYears(x, 5)));
});

test('"OK".then(x => `RESULT=${x}`) = "RESULT=OK"', () => {
    expect('OK'.then(x => `RESULT=${x}`)).toStrictEqual('RESULT=OK');
});
