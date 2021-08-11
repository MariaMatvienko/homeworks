function palindrome(number) {
    number = number.toString();
    const length = number.length;
    const reverse = number.split("").reverse().join("");
    const result = [];
    for (let i = 0; i < length; i += 1) {
        for (let j = i + 1; j < length; j += 1) {
            const part_of_string = number.substring(i, j + 1);
            const part_of_string_reverse = reverse.substring(length - j - 1, length - i);
            if (j - i > 0 && part_of_string == part_of_string_reverse) {
                result.push(part_of_string);
            }
        }
    }

    return result.reduce((acc, el) => el.length > acc.length ? el : acc);
}
console.log(palindrome("aabts"));