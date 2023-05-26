function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

let but = getRandomInt(50)
console.log(but)
let nom = ""

function askName(){
    nom = window.prompt("What's your name?")
    console.log(nom)
    console.log(document.getElementById("ready"))
    document.getElementById("ready").innerHTML = "Are you ready " + nom + "?"
}

function askNumber(){
    var givenNumber = parseInt(document.getElementById("number").value)
    console.log(givenNumber)
    return givenNumber
}

function didIWin(givenNumber){
    if(givenNumber == but){
        document.getElementById("liste").innerHTML = "<p id='fin'><strong>" + givenNumber + " est le bon nombre bien joué tu as gagné!</strong></p>"
    }
    else if(givenNumber<but){
        document.getElementById("liste").innerHTML += "<li> It's bigger than " + givenNumber + " try again! </li>"
        console.log(givenNumber)
    }
    else if(givenNumber>but){
        document.getElementById("liste").innerHTML += "<li> It's smaller than "  + givenNumber + " try again! </li>"
        console.log(givenNumber)
    }
}

function gamePlay(){
    var nb = askNumber()
    didIWin(nb)
}

alert("You are going to play a game!")
askName()