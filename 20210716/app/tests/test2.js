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
        assert.throw(() => { envelope() }, Error, 'Function running with incorrect parameters.');
    });
    it("Running with incorrect parameters", function() {
        assert.throw(() => { envelope(10, 25, 5, 4) }, Error, 'Function running with incorrect parameters.');
    });
    it("Envelope1('bbb','aaaa'), envelope2(2, 10). Expected output: TypeError", function() {
        assert.throw(() => { envelope({ a: 'bbb', b: 'aaaa' }, { c: 2, d: 10 }) }, TypeError, 'Sides of enveloes must be numbers.');
    });
    it("Envelope1(111111111111, 1), envelope2(15, 10). Expected output: RangeError", function() {
        assert.throw(() => { envelope({ a: 111111111111, b: 1 }, { c: 15, d: 10 }) }, RangeError, 'Sides of enveloes must be numbers greater than zero and less than 1000000.');
    });
    it("Envelope1(0, 0), envelope2(15, 10). Expected output: RangeError", function() {
        assert.throw(() => { envelope({ a: 0, b: 0 }, { c: 15, d: 10 }) }, RangeError, 'Sides of enveloes must be numbers greater than zero and less than 1000000.');
    });
});