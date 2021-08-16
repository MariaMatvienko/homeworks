function isValidChessDesk(height, width, symbol) {
    console.log(typeof arguments);
    if (Array.from(arguments).includes(undefined)) {
        return {
            status: 'failed',
            reason: 'Error: Function running with incorrect parameters.'
        };
    }
    if (!isNaturalWithLimit(height, 20) || !isNaturalWithLimit(width, 20)) {
        return {
            status: 'failed',
            reason: 'RangeError: Height and width must be natural numbers greater than zero.'
        };
    }
    if (typeof(symbol) !== 'string') {
        return {
            status: 'failed',
            reason: 'TypeError: Symbol must be char'
        };
    }
    if (symbol.length !== 1 || symbol === ' ') {
        return {
            status: 'failed',
            reason: 'RangeError: Symbol length must be 1 and not be space'
        };
    }
    return false;
}

function chessDesk(height, width, symbol) {

    const errorMessage = isValidChessDesk(height, width, symbol);
    if (errorMessage) return errorMessage;

    let result = '';
    for (let i = 0; i < height; i += 1) {
        for (let j = 0; j < width / 2; j += 1) {
            if (i % 2 == 0) result += symbol + ' ';
            else result += ' ' + symbol;
        }
        if (width % 2 != 0) result = result.slice(0, -1);
        if (i != height - 1) result += '\n';
    }
    return result;
}
console.log(chessDesk(4, 8, '*'));