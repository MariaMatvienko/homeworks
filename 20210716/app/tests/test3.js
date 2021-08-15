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
        }, RangeError, 'Triangle must be possible.');
    });
    it("Triangles: ABC(3,4). Expected output: Error", function() {
        assert.throw(() => {
            sort_triangle([{
                vertices: 'ABC',
                a: 3,
                b: 4
            }])
        }, Error, 'Function running with incorrect parameters.');
    });
    it("Triangles: _(3,4,5). Expected output: Error", function() {
        assert.throw(() => {
            sort_triangle([{
                a: 3,
                b: 4,
                c: 5
            }])
        }, Error, 'Function running with incorrect parameters.');
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