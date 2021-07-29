function order(str) {
    let words = str.split(' ');
    let r = /[^\d]/g;
    let res_arr = [];
    for (let i = 0; i < words.length; i += 1) {
        res_arr[words[i].replace(r, '') - 1] = words[i];
    }
    return res_arr;
}

function ttt_game(Array) {
    const field_size = Array.length;
    const player_one = 1;
    const player_two = 2;
    const combo = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]

        // [0, 1, 2, 3],
        // [4, 5, 6, 7],
        // [8, 9, 10, 11],
        // [12, 13, 14, 15],
        // [0, 4, 8, 12],
        // [1, 5, 9, 13],
        // [2, 6, 10, 14],
        // [3, 7, 11, 15],
        // [0, 5, 10, 15],
        // [3, 6, 9, 12],

    ];
    Array = Array.flat();

    for (let i = 0; i < combo.length; i += 1) {
        let win_x_counter = 0;
        let win_o_counter = 0;
        for (let j = 0; j < combo[i].length; j += 1) {
            if (Array[combo[i][j]] == player_one) win_x_counter += 1;
            if (Array[combo[i][j]] == player_two) win_o_counter += 1;
        }

        if (win_x_counter == field_size) return 1;
        if (win_o_counter == field_size) return 2;
    }

    for (let i = 0; i < Array.length; i++) {
        if (Array[i] == 0) return -1;
    }

    return 0;

}

function meeting(Array, chairs_count) {
    if (chairs_count == 0) return 'Game On';

    let i = 0;
    let res_counter = 0;
    let res_array = [];
    while (i < Array.length && res_counter < chairs_count) {
        let free_chairs = Array[i][1] - Array[i][0].length;
        res_array.push(free_chairs);
        res_counter += free_chairs;
        i += 1;
    }

    if (res_counter < chairs_count) return 'Not enough!';
    return res_array;
}

console.log(order("is2 Thi1s T4est 3a"));
console.log(ttt_game([
    [1, 2, 2],
    [1, 1, 2],
    [2, 1, 1]
]));
// [2, 2, 2, 2],
// [1, 2, 2, 2],
// [2, 1, 1, 2],
// [2, 1, 1, 1]
console.log(meeting([
    ['XXX', 3],
    ['XXXXX', 6],
    ['XXXXXX', 9]
], 4));