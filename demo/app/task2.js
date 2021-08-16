function isValidEnvelope(env1, env2) {
    if (typeof(env1) !== 'object' || typeof(env2) !== 'object') {
        return {
            status: 'failed',
            reason: 'Error: Function running with incorrect parameters.'
        };
    }
    const validEnv1 = env1.hasOwnProperty('a') && env1.hasOwnProperty('b');
    const validEnv2 = env2.hasOwnProperty('c') && env2.hasOwnProperty('d');
    if (!validEnv1 || !validEnv2) {
        return {
            status: 'failed',
            reason: 'Error: Function running with incorrect parameters.'
        };
    }
    const arraySides = [env1.a, env1.b, env2.c, env2.d]
    const length = arraySides.length;
    for (let i = 0; i < length; i += 1) {

        if (typeof(arraySides[i]) !== 'number') {
            return {
                status: 'failed',
                reason: 'TypeError: Sides of enveloes must be numbers.'
            };
        }
        if (arraySides[i] < 1 || arraySides[i] > 1000000) {
            return {
                status: 'failed',
                reason: 'RangeError: Sides of enveloes must be numbers greater than zero and less than 1000000.'
            };
        }
    }

    return false;
}


function isEqual(value, arguments) {
    const arr = arguments.map(el => el == value);
    const result = (arr[0] && arr[1]) || (arr[2] && arr[3]);
    return result;
}

function envelope(env1, env2) {

    const errorMessage = isValidEnvelope(env1, env2);
    if (errorMessage) return errorMessage;

    const substraction = [];
    substraction[0] = Math.sign(env1.a - env2.c);
    substraction[1] = Math.sign(env1.b - env2.d);
    substraction[2] = Math.sign(env1.a - env2.d);
    substraction[3] = Math.sign(env1.b - env2.c);

    let result = 0;
    if (isEqual(-1, substraction)) result = 1;
    if (isEqual(1, substraction)) result = 2;
    return result;
}