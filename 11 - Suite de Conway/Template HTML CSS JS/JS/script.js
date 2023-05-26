function decoupeChaine(input) {
    let inputDecouper = []
    inputDecouper.push(input[0])
    for (i = 1; i < input.length; i++) {
        if (input[i] == input[i - 1]) {
            inputDecouper.push(input[i])
            continue
        }
        inputDecouper.push(" ")
        inputDecouper.push(input[i])
    }
    return inputDecouper
}

console.log(decoupeChaine("a"))