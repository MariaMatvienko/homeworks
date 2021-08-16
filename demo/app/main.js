function isNaturalWithLimit(number, limit = Infinity) {
    return number > 0 && Number.isInteger(number) && number < limit;
}


mocha.setup('bdd');
const assert = chai.assert;


mocha.run();