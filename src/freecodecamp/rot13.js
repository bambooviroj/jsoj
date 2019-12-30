function rot13(str) {
    return Array.of(...str).map((char) => {
        if (char < 'A' || char > 'Z') return char

        return String.fromCharCode(
            65 + (
                    (
                        (char.charCodeAt(0) - 65) + 13
                    ) % 26
                 )
        )
    }).join('')
}

rot13("SERR PBQR PNZC") |> console.log