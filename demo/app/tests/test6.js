describe("numericalSequence", function() {
    it("Length: 5, minimum square value: 25. Expected output: '5, 6, 7, 8, 9'", function() {
        assert.equal('5, 6, 7, 8, 9', numericalSequence(5, 25));
    });
    it("Length: 5, minimum square value: 25. Expected output: true", function() {
        assert.isString(numericalSequence(5, 25));
    });
    it("Length: -5, minimum square value: 25. Expected output: Error", function() {
        assert.deepEqual({ status: 'failed', reason: 'RangeError: Length and minimum square value must be integer and greater than 0.' }, numericalSequence(-5, 25));
    });
    it("Length: 2.3, minimum square value: 25. Expected output: Error", function() {
        assert.deepEqual({ status: 'failed', reason: 'RangeError: Length and minimum square value must be integer and greater than 0.' }, numericalSequence(-5, 25));
    });
    it("Length: 'aaa', minimum square value: 25. Expected output: Error", function() {
        assert.deepEqual({ status: 'failed', reason: 'RangeError: Length and minimum square value must be integer and greater than 0.' }, numericalSequence('aaa', 25));
    });

});