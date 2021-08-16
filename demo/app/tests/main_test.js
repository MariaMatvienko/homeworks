mocha.setup('bdd');
const assert = chai.assert;

include("/js/test1.js");
include("/js/test2.js");
include("/js/test3.js");
include("/js/test4.js");
include("/js/test5.js");
include("/js/test6.js");
include("/js/test7.js");

mocha.run();