function isValid(context) {

    if (!(context.hasOwnProperty('min') && context.hasOwnProperty('max'))) {
        return {
            status: 'failed',
            reason: 'Error: Function running with incorrect parameters.'
        };
    }

    const max = context.max;
    const min = context.min;

    if (typeof(min) != 'number' || typeof(max) != 'number') {
        return {
            status: 'failed',
            reason: 'TypeError: Max and min must be numbers.'
        };
    }

    if (!isNaturalWithLimit(min, 1000000) || !isNaturalWithLimit(max, 1000000)) {
        return {
            status: 'failed',
            reason: 'RangeError: Min and max must be integer and greater than 0 and less than 1000000.'
        };
    }

    return false;
}

function isSimpleMethod(ticket) {

    const firstHalf = ticket.slice(0, 3)
        .reduce((acc, el) => {
            return acc += Number(el);
        }, 0);

    const secondHalf = ticket.slice(3, 6)
        .reduce((acc, el) => {
            return acc += Number(el);
        }, 0);

    return secondHalf === firstHalf;
}

function isHardMethod(ticket) {
    let sumOdd = 0;
    let sumEven = 0;
    ticket.forEach(element => {
        element = Number(element);
        element % 2 == 0 ? sumOdd += element : sumEven += element;
    });
    return sumOdd === sumEven;
}


function luckTicket(context) {

    const errorMessage = isValid(context);
    if (errorMessage) return errorMessage;

    let max = context.max;
    let min = context.min;
    if (context.min > context.max) {
        min = context.max;
        max = context.min;
    }
    let simpleCounter = 0;
    let hardCounter = 0;

    for (i = min; i <= max; i++) {
        let ticket = i.toString();
        ticket = "0".repeat(6 - ticket.length) + ticket;
        ticket = ticket.split("");
        if (isSimpleMethod(ticket)) simpleCounter += 1;
        if (isHardMethod(ticket)) hardCounter += 1;
    }

    let winner;
    switch (true) {
        case simpleCounter > hardCounter:
            winner = 'simple';
            break;
        case simpleCounter < hardCounter:
            winner = 'hard';
            break;
        case simpleCounter === hardCounter:
            winner = 'both';
    }
    const result = {
        winner: winner,
        tickets: { simple: simpleCounter, hard: hardCounter }
    };
    return result;

}
//console.log(luckTicket({ min: 50000, max: -1 }));