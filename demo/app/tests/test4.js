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
    it("Running without parameters. Expected output: Error", function() {
        assert.deepEqual({ status: 'failed', reason: 'Error: Function running with incorrect parameters.' }, palindrome());
    });
    it("Palindrome: 5. Expected output: RangeError", function() {
        assert.deepEqual({ status: 'failed', reason: 'RangeError: Number must be integer and greater than 9 and less than 9007199254740991' }, palindrome(5));
    });
    it("Palindrome: 5. Expected output: RangeError", function() {
        assert.deepEqual({ status: 'failed', reason: 'RangeError: Number must be integer and greater than 9 and less than 9007199254740991' }, palindrome(111.2));
    });
    it("Palindrome: 5. Expected output: RangeError", function() {
        assert.deepEqual({ status: 'failed', reason: 'RangeError: Number must be integer and greater than 9 and less than 9007199254740991' }, palindrome('aaaccd'));
    });



});