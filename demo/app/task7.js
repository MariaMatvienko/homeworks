function isValidFibonacci(context) {
    if (typeof(context) !== 'object') {
        return {
            status: 'failed',
            reason: 'Error: Function running with incorrect parameters.'
        };
    }
    const hasMinMax = context.hasOwnProperty('min') && context.hasOwnProperty('max');
    const hasLength = context.hasOwnProperty('length');

    if (!(hasMinMax || hasLength)) {
        return {
            status: 'failed',
            reason: 'Error: Function running with incorrect parameters.'
        };
    }
    if (hasMinMax && (!isNaturalWithLimit(context.min) || !isNaturalWithLimit(context.max))) {
        return {
            status: 'failed',
            reason: 'RangeError: Max and min must be numbers greater than 0.'
        };
    }
    if (hasLength && !isNaturalWithLimit(context.length)) {
        return {
            status: 'failed',
            reason: 'RangeError: Length must be numbers greater than 0.'
        };
    }
    return false;
}


function fibonacci(context) {

    const errorMessage = isValidFibonacci(context);
    if (errorMessage) return errorMessage;

    const fibbonachiArray = [1, 1];

    let max = context.max;
    let min = context.min;
    context.hasOwnProperty('min') ? min = context.min : min = 0;
    context.hasOwnProperty('max') ? max = context.max : max = Infinity;
    if (min > max) {
        min = context.max;
        max = context.min;
    }

    let length;
    context.hasOwnProperty('length') ? length = context.length : length = Infinity;

    const lengthWithMin = length + min;
    let newElement = 0;
    for (let i = 2; newElement < max && i < lengthWithMin; i += 1) {
        newElement = fibbonachiArray[i - 2] + fibbonachiArray[i - 1];
        fibbonachiArray.push(newElement);
    }

    const result = fibbonachiArray.filter(el => el >= min && el <= max);
    return result;
}
console.log(fibonacci({ length: 30 }));