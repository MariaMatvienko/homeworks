function chess_desk(height, width, symbol) {
    /* Здесь будет реализация функции, пока пусто */

}

function envelope(evn1, env2) {
    /* Здесь будет реализация функции, пока пусто */


}

function sort_triangle(arr_triangle) {
    /* Здесь будет реализация функции, пока пусто */

    // return ['CDE', 'FEH', 'ABC'];
}

function palindrome(number) {
    /* Здесь будет реализация функции, пока пусто */


}

function luck_ticket(context) {
    /* Здесь будет реализация функции, пока пусто */


}

function numerical_sequence(n, m) {
    /* Здесь будет реализация функции, пока пусто */

}

function fibonacci(context) {
    /* Здесь будет реализация функции, пока пусто */
    // return { status: 'failed', reason: 'RangeError: Max must be greater than min.' };
}


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