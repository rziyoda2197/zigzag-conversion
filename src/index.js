function convert(s, numRows) {
    if (numRows === 1 || numRows >= s.length) {
        return s;
    }

    let rows = new Array(numRows).fill('');
    let index = 0;
    let step = 1;

    for (let char of s) {
        rows[index] += char;

        if (index === 0) {
            step = 1;
        } else if (index === numRows - 1) {
            step = -1;
        }

        index += step;
    }

    return rows.join('');
}

console.log(convert("PAYPALISHIRING", 3)); // "PAHNAPLSIIGYIR"
console.log(convert("PAYPALISHIRING", 4)); // "PINALSIGYAHRPI"
console.log(convert("A", 1)); // "A"
console.log(convert("AB", 1)); // "AB"
console.log(convert("ABCD", 2)); // "ACBD"
