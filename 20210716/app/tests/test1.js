describe("chess_desk", function() {

    it("Desk with height - 4, width - 12, symbol - '*'", function() {
        assert.equal(`* * * * * * \n * * * * * *\n* * * * * * \n * * * * * *`, chess_desk(4, 12, '*'));
    });
    it("Running with incorrect parameters", function() {
        assert.throw(() => { chess_desk() }, Error, 'Function running with incorrect parameters.');
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