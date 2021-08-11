function is(value, arguments) {
    let arr = arguments.map(el => el == value);
    const result = (arr[0] && arr[1]) || (arr[2] && arr[3]);
    return result;
}

function envelope(env1, env2) {
    const substraction = [];
    substraction[0] = Math.sign(env1.a - env2.c);
    substraction[1] = Math.sign(env1.b - env2.d);
    substraction[2] = Math.sign(env1.a - env2.d);
    substraction[3] = Math.sign(env1.b - env2.c);

    if (is(-1, substraction)) return 1;
    if (is(1, substraction)) return 2;
    if (is(0, substraction)) return 0;


}
console.log(envelope({ a: 30, b: 12 }, { c: 10, d: 15 }));