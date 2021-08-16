describe("fibonacci", function() {
    it("Fibonacci: min: 10, max: 50. Expected output: [13, 21, 34]", function() {
        assert.deepEqual([13, 21, 34], fibonacci({ min: 10, max: 50 }));
    });
    it("Fibonacci: min: 50, max: 10. Expected output: [13, 21, 34]", function() {
        assert.deepEqual([13, 21, 34], fibonacci({ min: 50, max: 10 }));
    });
    it("Fibonacci: min: 0, max: 2. Expected output: [0, 1, 1, 2]", function() {
        assert.deepEqual([1, 1, 2], fibonacci({ min: 1, max: 2 }));
    });
    it("Fibonacci: length: 2. Expected output: [13, 21, 34, 55, 89]", function() {
        assert.deepEqual([1, 1, 2, 3], fibonacci({ length: 4 }));
    });
    it("Fibonacci: min: -10, max: 2. Expected output: Error", function() {
        assert.deepEqual({ status: 'failed', reason: 'RangeError: Max and min must be numbers greater than 0.' }, fibonacci({ min: -10, max: 2 }));
    });
    it("Fibonacci: min: 'sss', max: 'sss'. Expected output: Error", function() {
        assert.deepEqual({ status: 'failed', reason: 'RangeError: Max and min must be numbers greater than 0.' }, fibonacci({ min: 'sss', max: 'sss' }));
    });
    it("Fibonacci: length: 0. Expected output: Error", function() {
        assert.deepEqual({ status: 'failed', reason: 'RangeError: Length must be numbers greater than 0.' }, fibonacci({ length: 0 }));
    });
    it("Fibonacci: length: 'sss'. Expected output: Error", function() {
        assert.deepEqual({ status: 'failed', reason: 'RangeError: Length must be numbers greater than 0.' }, fibonacci({ length: 'sss' }));
    });

});