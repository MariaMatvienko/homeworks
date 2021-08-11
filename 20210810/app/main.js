console.log(['Яблоко', 'Банан', 'Ананас'].reduce((acc, el) => {
    acc.push(el[0]);
    return acc;
}, []));

console.log(['Яблоко', 'Банан', 'Ананас'].reduce((acc, el) => {
    if (el[0].toLowerCase() == 'а') acc.push(el);
    return acc;
}, []));

console.log(['Яблоко', 'Банан', 'Ананас'].reduce((acc, el, i) => {
    acc.push(`${i+1}: ${el};`);
    return acc;
}, []));