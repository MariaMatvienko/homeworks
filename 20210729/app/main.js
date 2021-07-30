function ipsBetween(lesser_ip, bigger_ip) {
    lesser_ip = lesser_ip.split('.');
    bigger_ip = bigger_ip.split('.');
    let dec_less = 0;
    let dec_big = 0;
    let length = lesser_ip.length - 1;
    let i = 0;
    while (i < 4) {
        dec_less += Number(lesser_ip[length - i] * (256 ** i));
        dec_big += Number(bigger_ip[length - i] * 256 ** i);
        i += 1;
    }
    return dec_big - dec_less;
}

function decodeMorse(str) {
    let codes = {
        "0": "-----",
        "1": ".----",
        "2": "..---",
        "3": "...--",
        "4": "....-",
        "5": ".....",
        "6": "-....",
        "7": "--...",
        "8": "---..",
        "9": "----.",
        "a": ".-",
        "b": "-...",
        "c": "-.-.",
        "d": "-..",
        "e": ".",
        "f": "..-.",
        "g": "--.",
        "h": "....",
        "i": "..",
        "j": ".---",
        "k": "-.-",
        "l": ".-..",
        "m": "--",
        "n": "-.",
        "o": "---",
        "p": ".--.",
        "q": "--.-",
        "r": ".-.",
        "s": "...",
        "t": "-",
        "u": "..-",
        "v": "...-",
        "w": ".--",
        "x": "-..-",
        "y": "-.--",
        "z": "--..",
        ".": ".-.-.-",
        ",": "--..--",
        "?": "..--..",
        "!": "-.-.--",
        "-": "-....-",
        "/": "-..-.",
        "@": ".--.-.",
        "(": "-.--.",
        ")": "-.--.-"
    };
    codes = Object.fromEntries(Object.entries(codes).map(([k, v]) => [v, k]));

    const result = str
        .trim()
        .split("   ")
        .map(word => word
            .split(" ")
            .map(char => codes[char])
            .join('')
        )
        .join(' ');

    return result;
}

function chronos(year, month, day) {
    const Array_month = ['Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
    let res = 0;
    const prew_year = year - 1;
    res += prew_year * 12 * 30;
    res += Math.trunc(prew_year / 5) - Math.trunc(prew_year / 100) + Math.trunc(prew_year / 500);
    res += (month - 1) * 30 + day;
    if (((year % 5 == 0 && year % 100 != 0) || year % 500 == 0) && month > 2) res += 1;
    res = res % 7;
    return Array_month[res];
}

// console.log(chronos(1, 1, 1));
// console.log(ipsBetween("10.0.0.0", "10.0.0.50"));
console.log(decodeMorse('.... . -.--   .--- ..- -.. .'));