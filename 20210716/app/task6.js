function isValid(n, m) {

    if (!isNaturalWithLimit(n) || !isNaturalWithLimit(m)) {
        return {
            status: 'failed',
            reason: 'RangeError: Length and minimum square value must be integer and greater than 0.'
        };
    }

    return false;
}

function numerical_sequence(n, m) {

    const errorMessage = isValid(n, m);
    if (errorMessage) return errorMessage;

    const result = [];
    result.push(Math.ceil(Math.sqrt(m)));
    for (let i = 1; i < n; i += 1) {
        result.push(result[i - 1] + 1);
    }
    return result.join(', ');
}
console.log(numerical_sequence(3, 10));