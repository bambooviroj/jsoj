// 3 9 9 9

// MMM CM XC IX
// III IX IX IX

// [I, V, X, L, C, D, M]

function convertToRoman(num) {
    let romenNum = ""
    const digitsSymbols = "IVXLCDM"
    let level = 0

    for (let digit of digitsGenerator(num)) {
        romenNum = levelMapper(digit, level).concat(romenNum)
        level++
    }

    return romenNum
}

function levelMapper (digit, level) {
    const offset = level * 2
    const digitsSymbols = "IVXLCDM"

    return Array.of(...oneToTenMapper(digit)).map(char => {
        let index = offset

        if (char == 'I') index += 0 
        if (char == 'V') index += 1
        if (char == 'X') index += 2

        return digitsSymbols[index]
    }).join("")
}

/* 
take 1 - 10 integer 
return Romen String
*/
function oneToTenMapper (num) {
    return ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X"][num]
}

function * digitsGenerator(num) {
    let n = ~~(num)

    while (n != 0) {
        yield n % 10
        n = ~~(n / 10)
    }
}

