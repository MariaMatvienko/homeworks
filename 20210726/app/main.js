function isNatural(number) {
    return number > 0 && Number.isInteger(number) ? true : false
}

function overhaul(l, w, h) {

    args = Array.from(arguments);
    args.forEach(element => {
        if (!isNatural(element) || element > 1000)
            return { status: 'failed', reason: 'RangeError: Arguments must be natural numbers less than 1000.' };
    });

    return Math.ceil(((l * h + h * w) * 2) / 16);;
}

function gold_sand(a1, a2, a3, b1, b2, b3) {

    args = Array.from(arguments);
    args.forEach(element => {
        if (!isNatural(element) || element > 100)
            return { status: 'failed', reason: 'RangeError: Arguments must be natural numbers less than 100.' };
    });

    let arr_a = [a1, a2, a3];
    let arr_b = [b1, b2, b3];
    arr_a.sort((a, b) => b - a);
    arr_b.sort((a, b) => b - a);
    let sum = 0;
    for (i = 0; i <= 2; i += 1) sum += arr_a[i] * arr_b[i];
    return sum;
}

function happy_ticket(ticket) {

    if (!isNatural(ticket) || ticket > 10 ** 6)
        return { status: 'failed', reason: 'RangeError: Arguments must be natural numbers less than 1000000.' };

    ticket = ticket.toString();
    ticket = "0".repeat(6 - ticket.length) + ticket;

    const firstHalf = ticket.split("")
        .slice(0, 3)
        .reduce((acc, el) => {
            return acc += Number(el);
        }, 0)

    const secondHalf = ticket.split("")
        .slice(3, 6)
        .reduce((acc, el) => {
            return acc += Number(el);
        }, 0)

    return secondHalf === firstHalf ? "YES" : "NO"

}

console.log(overhaul(10, 10, 10));
console.log(happy_ticket(1001));
console.log(gold_sand(15, 12, 18, 6, 3, 5));