function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function randomColour() {
    const code = ["blue", "red", "yellow", "green", "black", "pink", "purple", "white"]
    let searchCode = []
    for (i = 0; i < 4; i++) {
        let index = getRandomInt(8)
        searchCode.push(code[index])
    }
    return searchCode
}


//Demande quel code l'utilisateur souhaite proposer
function askCode(arrayToFind) {
    let array = []
    for (let i = 0; i < arrayToFind.length; i++) {
        let colour = prompt(`Color n°${i + 1} :`)
        while (!checkColor(colour, arrayToFind)) {
            colour = prompt("A valid colour plz")
        }
        array.push(colour)
    }
    console.log("Tableau proposer par user", array)
    return array
}

//Demande si les couleurs proposées sont valides
function checkColor(colour, code) {
    let expect = code.includes(colour)
    return expect
}

function checkPlace(arrayUser, arrayToFind) {
    let badPlaced = 0
    let goodPlaced = 0
    for (let i = 0; i < arrayUser.length; i++) {
        if (arrayUser[i] === arrayToFind[i]) {
            goodPlaced += 1
            console.log("Good", goodPlaced)
            continue;
        }
        let place = arrayToFind.indexOf(arrayUser[i])
        if (place != -1) {
            arrayToFind.splice(place, 1);
            badPlaced += 1
            console.log("Not good", badPlaced)
        }
    }
}

//Verification si code proposé correspond au code exact
function codeOk(proposition, etp2) {
    for (let i = 0; i < proposition.length; i++) {
        if (proposition[i] !== etp2[i]) {
            return false
        }
    }
    return true
}

function nbRound() {
    arrayToGuess = randomColour()
    for (let i = 0; i < 12; i++) {
        const etp2 = arrayToGuess
        console.log("Tableau souhaité", etp2)
        let prop = askCode(etp2)
        if (codeOk(prop, etp2) === true) {
            alert("You win this game, you're so strong!")
            return
        }
        checkPlace(prop, etp2)
        alert("Make an other proposition please")
    }
    alert("You lose...")
}


function play() {
    nbRound()
}

play()