function sum(a, b) {
    return a + b;
}

function multi(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function subtraction(a, b) {
    return a - b;
}
// sum
console.log("Function sum");
NTest(sum, 2, 1, 1);
NTest(sum, 0, 0, 0);
NTest(sum, 14.8, 5.5, 9.3);
NTest(sum, 0, '0', 0);
NTest(sum, 10, '5', '5');
NTest(sum, Infinity, Infinity, Infinity);
NTest(sum, 0, NaN, NaN);
NTest(sum, 1, true, false);
NTest(sum, 1, 1);
NTest(sum, 3, 1, 1, 1);
NTest(sum, 0, {}, {});
NTest(sum, 0, [], []);
NTest(sum, 2, [1, 1]);
NTest(sum, 4, [1, 1], [1, 1]);
NTest(sum, 30, { a: 10, b: 20 });
NTest(sum, 3, function(x = 1) { return x; }, function(x = 2) { return x; });

// multi
console.log("Function multi");
NTest(multi, 15, 5, 3);
NTest(multi, 0, 0, 0);
NTest(multi, 4.8, 2.4, 2);
NTest(multi, 0, '0', 0);
NTest(multi, 75, '15', '5');
NTest(multi, Infinity, Infinity, Infinity);
NTest(multi, 0, NaN, NaN);
NTest(multi, 0, true, false);
NTest(multi, 1, 1);
NTest(multi, 6, 1, 2, 3);
NTest(multi, 0, {}, {});
NTest(multi, 0, [], []);
NTest(multi, 32, [4, 8]);
NTest(multi, 120, [2, 3], [4, 5]);
NTest(multi, 200, { a: 10, b: 20 });
NTest(multi, 50, function(x = 10) { return x; }, function(x = 5) { return x; });

// divide
console.log("Function divide");
NTest(divide, 5, 15, 3);
NTest(divide, Infinity, 0, 0);
NTest(divide, Infinity, 6, 0);
NTest(divide, 1.2, 2.4, 2);
NTest(divide, 0, '0', 4);
NTest(divide, 3, '15', '5');
NTest(divide, Infinity, Infinity, Infinity);
NTest(divide, 0, NaN, NaN);
NTest(divide, 0, false, true);
NTest(divide, 1, 1);
NTest(divide, 5, 30, 15, 3);
NTest(divide, 0, {}, {});
NTest(divide, 0, [], []);
NTest(divide, 2, [8, 4]);
NTest(divide, 25, [200, 2], [2, 2]);
NTest(divide, 7, { a: 70, b: 10 });
NTest(divide, 2, function(x = 10) { return x; }, function(x = 5) { return x; });

// subtraction
console.log("Function subtraction");
NTest(subtraction, 3, 5, 2);
NTest(subtraction, 0, 0, 0);
NTest(subtraction, -3.8, 5.5, 9.3);
NTest(subtraction, 0, '0', 0);
NTest(subtraction, -15, '15', '30');
NTest(subtraction, 1, 1);
NTest(subtraction, Infinity, Infinity, Infinity);
NTest(subtraction, 0, NaN, NaN);
NTest(subtraction, 1, true, false);
NTest(subtraction, 4, 10, 4, 2);
NTest(subtraction, 0, {}, {});
NTest(subtraction, 0, [], []);
NTest(subtraction, 2, [5, 3]);
NTest(subtraction, 5, [20, 7], [5, 3]);
NTest(subtraction, 10, { a: 30, b: 20 });
NTest(subtraction, -1, function(x = 1) { return x; }, function(x = 2) { return x; });

function NTest(func, result, ...args) {
    const callResult = func(...args);
    const passFailed = callResult === result ? 'PASS' : 'FAILED';
    const str = `${ passFailed }: ${ func.name }(${ args }) Expected: ${ result }, Received: ${ callResult }`;

    const styles = {
        PASS: 'background-color: green; padding: 5px; color: white;',
        FAILED: 'background-color: red; padding: 5px;',
    }
    console.log('%c%s', styles[passFailed], str);
}