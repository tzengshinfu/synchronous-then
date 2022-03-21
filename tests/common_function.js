function plus(augend, addend) {
    let result = 0;
    result = augend + addend;
    return result;
}

function minus(minuend, subtrahend) {
    let result = 0;
    result = minuend - subtrahend;
    return result;
}

function multiply(multiplier, multiplicand) {
    let result = 0;
    result = multiplier * multiplicand;
    return result;
}

function divide(dividend, divisor) {
    let result = 0;
    result = dividend / divisor;
    return result;
}

function addDays(datetime, days) {
    let result = datetime;
    result.setDate(result.getDate() + days);
    return result;
}

function addMonths(datetime, months) {
    let result = datetime;
    result.setMonth(result.getMonth() + months);
    return result;
}

function addYears(datetime, years) {
    let result = datetime;
    result.setFullYear(result.getFullYear() + years);
    return result;
}

module.exports = { plus, minus, multiply, divide, addDays, addMonths, addYears };
