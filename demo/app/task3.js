function isValidSortTriangle(arrTriangle) {
    if (!Array.isArray(arrTriangle)) {
        return {
            status: 'failed',
            reason: 'Error: Function running with incorrect parameters.'
        };
    }

    const length = arrTriangle.length;

    for (let i = 0; i < length; i += 1) {
        const triangle = arrTriangle[i];

        if (typeof(triangle.vertices) !== 'string') {
            return {
                status: 'failed',
                reason: 'TypeError: Sides of triangle must be numbers and vertices must be string.'
            };
        }

        const vertices = triangle.vertices.split('');
        const sides = [];

        for (side in triangle) {

            if (typeof(triangle[side]) === 'string') continue;
            if (typeof(triangle[side]) !== 'number') {
                return {
                    status: 'failed',
                    reason: 'TypeError: Sides of triangle must be numbers and vertices must be string.'
                };
            }
            if (!vertices.includes(side.toUpperCase())) {
                return {
                    status: 'failed',
                    reason: 'Error: Vertices must match the names of the sides.'
                };
            }
            sides.push(triangle[side]);
        }

        if (sides[0] + sides[1] < sides[2] || sides[1] + sides[2] < sides[0] || sides[0] + sides[2] < sides[1]) {
            return {
                status: 'failed',
                reason: 'Triangle must be possible.'
            };
        }
    }

    return false;
}

function square(triangle) {

    let sum = 0;
    for (side in triangle) {
        if (typeof(triangle[side]) === 'string') continue;
        sum += triangle[side];
    }
    const result = Math.trunc(0.5 * sum);
    return result;
}

function sortTriangle(arrTriangle) {

    const errorMessage = isValidSortTriangle(arrTriangle);
    if (errorMessage) return errorMessage;

    arrTriangle.sort(function(a, b) {
        return square(b) - square(a);
    });

    const result = arrTriangle.map(el => el.vertices);
    return result;
}
console.log(sortTriangle([{
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