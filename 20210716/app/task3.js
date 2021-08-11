function square(triangle) {
    let sum = 0;
    for (side in triangle) {
        if (typeof(triangle[side]) == 'string') continue;
        sum += triangle[side];
    }
    const result = Math.trunc(0.5 * sum);
    return result;
}

function sort_triangle(arr_triangle) {
    arr_triangle.sort(function(a, b) {
        return square(a) - square(b);
    });
    const result = arr_triangle.map(el => el.vertices);
    return result;
}
console.log(sort_triangle([{
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