function chess_desk(height, width, symbol) {
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
//console.log(chess_desk(4, 12, '*'));