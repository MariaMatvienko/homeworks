describe("chessDesk", function() {

    it("Desk with height - 4, width - 12, symbol - '*'", function() {
        assert.equal('* * * * * * \n * * * * * *\n* * * * * * \n * * * * * *', chessDesk(4, 12, '*'));
    });
    it("Running with incorrect parameters", function() {
        assert.deepEqual({ status: 'failed', reason: 'Error: Function running with incorrect parameters.' }, chessDesk());
    });
    it("Desk with height - -1, width - 12, symbol - '*'", function() {
        assert.deepEqual({ status: 'failed', reason: 'RangeError: Height and width must be natural numbers greater than zero.' }, chessDesk(-1, 12, '*'));
    });
    it("Desk with height - 2.5, width - 12, symbol - '*'", function() {
        assert.deepEqual({ status: 'failed', reason: 'RangeError: Height and width must be natural numbers greater than zero.' }, chessDesk(2.5, 12, '*'));
    });
    it("Desk with height - 'aaaa', width - 12, symbol - '*'", function() {
        assert.deepEqual({ status: 'failed', reason: 'RangeError: Height and width must be natural numbers greater than zero.' }, chessDesk('aaaa', 12, '*'));
    });
    it("Desk with height - 4, width - 12, symbol - 222", function() {
        assert.deepEqual({ status: 'failed', reason: 'TypeError: Symbol must be char' }, chessDesk(4, 12, 222));
    });
    it("Desk with height - 4, width - 12, symbol - '***'", function() {
        assert.deepEqual({ status: 'failed', reason: 'RangeError: Symbol length must be 1 and not be space' }, chessDesk(4, 12, '***'));
    });
    it("Desk with height - 4, width - 12, symbol - ''", function() {
        assert.deepEqual({ status: 'failed', reason: 'RangeError: Symbol length must be 1 and not be space' }, chessDesk(4, 12, ''));
    });
    it("Desk with height - 4, width - 12, symbol - ' '", function() {
        assert.deepEqual({ status: 'failed', reason: 'RangeError: Symbol length must be 1 and not be space' }, chessDesk(4, 12, ' '));
    });


});