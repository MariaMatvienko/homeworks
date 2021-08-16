function isValidPalindrome(number) {

    if (Array.from(arguments).includes(undefined)) {
        return {
            status: 'failed',
            reason: 'Error: Function running with incorrect parameters.'
        };
    }
    if (!isNaturalWithLimit(number, 9007199254740991) || number <= 9) {
        return {
            status: 'failed',
            reason: 'RangeError: Number must be integer and greater than 9 and less than 9007199254740991'
        };
    }

    return false;
}

function palindrome(number) {
    const errorMessage = isValidPalindrome(number);
    if (errorMessage) return errorMessage;

    number = number.toString();
    const length = number.length;
    const reverse = number.split("").reverse().join("");
    const result = [];
    for (let i = 0; i < length - 1; i += 1) {
        for (let j = i + 1; j < length; j += 1) {
            const partOfString = number.substring(i, j + 1);
            const partOfStringReverse = reverse.substring(length - j - 1, length - i);
            if (j - i > 0 && partOfString == partOfStringReverse) {
                result.push(partOfString);
            }
        }
    }
    if (result.length == 0) return 0;
    return result.reduce((acc, el) => el.length > acc.length ? el : acc);
}
console.log(palindrome(1234656677777));