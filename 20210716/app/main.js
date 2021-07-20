function chess_desk(height, width, symbol) {
    /* Здесь будет реализация функции, пока пусто */
    //  throw Error("asdasd");
}

function envelope(evn1, env2) {
    /* Здесь будет реализация функции, пока пусто */
    //  throw Error("asdasd");

}

function sort_triangle(arr_triangle) {
    /* Здесь будет реализация функции, пока пусто */
    //  throw Error("asdasd");
    // return ['CDE', 'FEH', 'ABC'];
}

function palindrome(number) {
    /* Здесь будет реализация функции, пока пусто */
    //  throw Error("asdasd");

}

mocha.setup('bdd');
const assert = chai.assert;

//тесты

describe("chess_desk", function() {

    it("Desk with height - 4, width - 12, symbol - '*'", function() {
        assert.equal(`* * * * * * \n * * * * * *\n* * * * * * \n * * * * * *`, chess_desk(4, 12, '*'));
    });
    it("Running with incorrect parameters", function() {
        assert.throw(() => { chess_desk() }, Error, 'Function running with incorrect parameters. Height and width must be natural numbers greater than zero. Symbol must be char and not be space.');
    });
    it("Desk with height - -1, width - 12, symbol - '*'", function() {
        assert.throw(() => { chess_desk(-1, 12, '*') }, RangeError, 'Height and width must be natural numbers greater than zero');
    });
    it("Desk with height - 2.5, width - 12, symbol - '*'", function() {
        assert.throw(() => { chess_desk(2.5, 12, '*') }, RangeError, 'Height and width must be natural numbers greater than zero');
    });
    it("Desk with height - 'aaaa', width - 12, symbol - '*'", function() {
        assert.throw(() => { chess_desk('aaaa', 12, '*') }, TypeError, 'Height and width must be natural numbers greater than zero');
    });
    it("Desk with height - 4, width - 12, symbol - 222", function() {
        assert.throw(() => { chess_desk(4, 12, 222) }, TypeError, 'Symbol must be char');
    });
    it("Desk with height - 4, width - 12, symbol - '***'", function() {
        assert.throw(() => { chess_desk(4, 12, '***') }, Error, 'Symbol length must be 1 and not be space');
    });
    it("Desk with height - 4, width - 12, symbol - ' '", function() {
        assert.throw(() => { chess_desk(4, 12, ' ') }, Error, 'Symbol length must be 1 and not be space');
    });
    it("Desk with height - 4, width - 12, symbol - ''", function() {
        assert.throw(() => { chess_desk(4, 12, '') }, Error, 'Symbol length must be 1 and not be space');
    });


});

describe("envelope", function() {
    it("Envelope1(4, 21), envelope2(15, 10). Expected output: 0", function() {
        assert.equal(0, envelope({ a: 4, b: 21 }, { c: 15, d: 10 }));
    });
    it("Envelope1(20, 20), envelope2(15, 10). Expected output: 2", function() {
        assert.equal(2, envelope({ a: 20, b: 20 }, { c: 15, d: 10 }));
    });
    it("Envelope1(20.5, 20.5), envelope2(15.002, 10.1). Expected output: 2", function() {
        assert.equal(2, envelope({ a: 20.5, b: 20.5 }, { c: 15.002, d: 10.1 }));
    });
    it("Envelope1(20, 20), envelope2(35, 40). Expected output: 1", function() {
        assert.equal(1, envelope({ a: 20, b: 20 }, { c: 35, d: 40 }));
    });
    it("Envelope1(15, 10), envelope2(15, 10). Expected output: 0", function() {
        assert.equal(0, envelope({ a: 15, b: 10 }, { c: 15, d: 10 }));
    });
    it("Running with incorrect parameters", function() {
        assert.throw(() => { envelope() }, Error, 'Function running with incorrect parameters. Function takes 2 obj with sides of enveloes which must be numbers greater than zero and less than 1000000.');
    });
    it("Running with incorrect parameters", function() {
        assert.throw(() => { envelope(10, 25, 5, 4) }, Error, 'Function running with incorrect parameters. Function takes 2 obj with sides of enveloes which must be numbers greater than zero and less than 1000000.');
    });
    it("Envelope1('bbb','aaaa'), envelope2(2, 10). Expected output: TypeError", function() {
        assert.throw(() => { envelope({ a: 'bbb', b: 'aaaa' }, { c: 2, d: 10 }) }, TypeError, 'Sides of enveloes must be numbers');
    });
    it("Envelope1(111111111111, 1), envelope2(15, 10). Expected output: RangeError", function() {
        assert.throw(() => { envelope({ a: 111111111111, b: 1 }, { c: 15, d: 10 }) }, RangeError, 'Sides of enveloes must be numbers greater than zero and less than 1000000');
    });
    it("Envelope1(0, 0), envelope2(15, 10). Expected output: RangeError", function() {
        assert.throw(() => { envelope({ a: 0, b: 0 }, { c: 15, d: 10 }) }, RangeError, 'Sides of enveloes must be numbers greater than zero and less than 1000000');
    });
});

describe("sort_triangle", function() {
    it("Triangles: ABC(3,4,5), CDE(10,20,22.36), FEH(5,5,5). Expected output: ['CDE', 'FEH', 'ABC']", function() {
        assert.deepEqual(['CDE', 'FEH', 'ABC'], sort_triangle([{
            vertices: 'ABC',
            a: 3,
            b: 4,
            c: 5
        }, {
            vertices: 'CDE',
            c: 10,
            d: 20,
            e: 22.36
        }, {
            vertices: 'FEH',
            f: 5,
            e: 5,
            h: 5
        }]));
    });
    it("Triangles: ABC(100,4,5). Expected output: RangeError", function() {
        assert.throw(() => {
            sort_triangle([{
                vertices: 'ABC',
                a: 100,
                b: 4,
                c: 5
            }])
        }, RangeError, 'Thats impossible triangle.');
    });
    it("Triangles: ABC(3,4). Expected output: Error", function() {
        assert.throw(() => {
            sort_triangle([{
                vertices: 'ABC',
                a: 3,
                b: 4
            }])
        }, Error, 'Function running with incorrect parameters. Function takes array obj with vertices triangle and length of its sides');
    });
    it("Triangles: _(3,4,5). Expected output: Error", function() {
        assert.throw(() => {
            sort_triangle([{
                a: 3,
                b: 4,
                c: 5
            }])
        }, Error, 'Function running with incorrect parameters. Function takes array obj with vertices triangle and length of its sides');
    });
    it("Triangles: 100('a','b','c'). Expected output: TypeError", function() {
        assert.throw(() => {
            sort_triangle([{
                vertices: 100,
                a: 'a',
                b: 'b',
                c: 'c'
            }])
        }, TypeError, 'Sides of triangle must be numbers and vertices must be string');
    });
    it("Triangles: ABD(3,4,5). Expected output: Error", function() {
        assert.throw(() => {
            sort_triangle([{
                vertices: 'ABD',
                a: 3,
                b: 4,
                c: 5
            }])
        }, Error, 'Vertices must match the names of the sides.');
    });
});

describe("palindrome", function() {
    it("Palindrome: 23267887623423. Expected output: 678876", function() {
        assert.equal(678876, palindrome(23467887623423));
    });
    it("Palindrome: 16431218737. Expected output: 121", function() {
        assert.equal(121, palindrome(16431218737));
    });
    it("Palindrome: 123456789. Expected output: 0", function() {
        assert.equal(0, palindrome(123456789));
    });
    it("Palindrome: 5. Expected output: RangeError", function() {
        assert.throw(() => { palindrome(5) }, RangeError, 'Number must be integer and greater than 9 and less than 9007199254740991');
    });
    it("Palindrome: 111.2. Expected output: RangeError", function() {
        assert.throw(() => { palindrome(111.2) }, RangeError, 'Number must be integer and greater than 9 and less than 9007199254740991');
    });
    it("Palindrome: 'aaaaa'. Expected output: TypeError", function() {
        assert.throw(() => { palindrome('aaaaa') }, TypeError, 'Number must be integer');
    });
});

mocha.run();