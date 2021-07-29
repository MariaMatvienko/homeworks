function sumMin(Array) {
    const initial_value = 0;
    const reducer = (accumulator, currentValue) => accumulator + Math.min(...currentValue);
    return Array.reduce(reducer, initial_value);
}

function twoOldestAges(Array) {
    const res_arr = Array.sort((a, b) => a - b);
    const length_arr = res_arr.length - 1;
    return [res_arr[length_arr - 1], res_arr[length_arr]];
}

function shortestWord(str) {
    const words = str.split(' ');
    const initial_value = words[0].length;
    const reducer = (accumulator, currentValue) => currentValue.length < accumulator ? currentValue.length : accumulator;
    return words.reduce(reducer, initial_value);
}

console.log(sumMin([
    [1, 2, 3],
    [33, 22, 55],
    [16, 42, 345, 79, 1]
]));
console.log(twoOldestAges([1, 2, 10, 8]));
console.log(shortestWord('bitcoin take over the world maybe who knows perhaps'));