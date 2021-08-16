describe("sortTriangle", function() {
    it("Triangles: ABC(3,4,5), CDE(10,20,22.36), FEH(5,5,5). Expected output: ['CDE', 'FEH', 'ABC']", function() {
        assert.deepEqual(['CDE', 'FEH', 'ABC'], sortTriangle([{
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
    it("Triangles: _(3,4,5). Expected output: Error", function() {
        assert.deepEqual({ status: 'failed', reason: 'Error: Function running with incorrect parameters.' }, sortTriangle());
    });
    it("Triangles: ABC(100,4,5). Expected output: Error", function() {
        assert.deepEqual({ status: 'failed', reason: 'Triangle must be possible.' }, sortTriangle([{
            vertices: 'ABC',
            a: 100,
            b: 4,
            c: 5
        }]));
    });
    it("Triangles: 100('a','b','c'). Expected output: Error", function() {
        assert.deepEqual({ status: 'failed', reason: 'TypeError: Sides of triangle must be numbers and vertices must be string.' }, sortTriangle([{
            vertices: 100,
            a: 'a',
            b: 'b',
            c: 'c'
        }]));
    });
    it("Triangles: ABD(3,4,5). Expected output: Error", function() {
        assert.deepEqual({ status: 'failed', reason: 'Error: Vertices must match the names of the sides.' }, sortTriangle([{
            vertices: 'ABD',
            a: 3,
            b: 4,
            c: 5
        }]));
    });

});