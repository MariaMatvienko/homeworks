function q_to_d(str) {
    if (str[str.length - 1] == '~') str = str.slice(0, -1);
    return str
        .split('~')
        .map((el) => el.length)
        .join('');
}

function d_to_q(number) {
    number = number.toString();
    return [].map.call(number, function(el, i) {
        let res;
        if (el == 0) number[i - 1] == '~' ? res = '~' : res = '~~';
        else res = '@'.repeat(Number(el)) + '~';
        return res;
    }).join('');
}

function quipu(str) {
    const reg = /[-+/*]/gi;
    const sighs = str.match(reg);
    const numbers = str.split(reg);
    let res = numbers.reduce((arr, v, i) => arr.concat(q_to_d(v), sighs[i]), []);
    return d_to_q(eval(res.join(''))).slice(0, -1);
}

function multi(arr) {
    return arr.reduce((accumulator, current) => {
        return accumulator *= current;
    });

}

function findPartMaxProd(n) {
    let sum = [];
    let Array = [];
    let counter = 0;

    function print_terms(left, min = 0, i = 0) {
        if (left < 0 || min == n)
            return Array;
        sum[i] = min;
        if (min != 0) {
            print_terms(left - min, min, i + 1);
        }
        print_terms(left - 1, min + 1, i);
        if (left == 0) {
            let small_Array = [];
            for (let j = i; j >= 0; j -= 1) {
                small_Array.push(sum[j]);
            }
            Array.push(small_Array);
            counter += 1;
        }
    }
    print_terms(n);
    Array.sort();
    const max = Array.reduce(((acc, el) => acc > multi(el) ? acc : multi(el)), multi(Array[0]));
    const res_array = [];
    Array.map((el) => multi(el) == max ? res_array.push(el) : true);
    return [...res_array, max];
}

console.log(findPartMaxProd(10));

function tickets(Array) {
    let cashbox = {
        cash_25: 0,
        cash_50: 0
    };
    const result = Array.reduce(function(acc, el) {
        k = el / 25;
        if (k > 2) {
            if (acc.cash_50 < 1) acc.cash_25 -= k - 1;
            else {
                acc.cash_25 -= k - 3;
                acc.cash_50 -= 1;
            }
        } else {
            if (k == 1) acc.cash_25 += 1;
            else acc.cash_25 -= 1;
            acc.cash_50 += k - 1;
        }
        return acc;
    }, cashbox);
    return result.cash_25 >= 0 ? 'YES' : 'NO';

}
// console.log(tickets([25, 25, 50, 50, 100]));
// console.log(maxProd(10));
console.log(quipu("@~@@+@@*@@~~"));