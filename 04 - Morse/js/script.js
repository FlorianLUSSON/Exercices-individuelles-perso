const latinToMorse = {
	'A':'.-',
	'B':'-...',
	'C':'-.-.',
	'D':'-..',
	'E':'.',
	'F':'..-.',
	'G':'--.',
	'H':'....',
	'I':'..',
	'J':'.---',
	'K':'-.-',
	'L':'.-..',
	'M':'--',
	'N':'-.',
	'O':'---',
	'P':'.--.',
	'Q':'--.-',
	'R':'.-.',
	'S':'...',
	'T':'-',
	'U':'..-',
	'V':'...-',
	'W':'.--',
	'X':'-..-',
	'Y':'-.--',
	'Z':'--..',
    ' ':'/'
}

const morseToLatin = {
    '-': "T",
    '--': "M",
    '---': "O",
    '--.': "G",
    '--.-': "Q",
    '--..': "Z",
    '-.': "N",
    '-.-': "K",
    '-.--': "Y",
    '-.-.': "C",
    '-..': "D",
    '-..-': "X",
    '-...': "B",
    '.': "E",
    '.-': "A",
    '.--': "W",
    '.---': "J",
    '.--.': "P",
    '.-.': "R",
    '.-..': "L",
    '..': "I",
    '..-': "U",
    '..-.': "F",
    '...': "S",
    '...-': "V",
    '....': "H",
    '/':" "
}

function getLatinCharacterList(texte){
    let latin = texte.split("")
    return latin
}

function getmorseCharacterList(morseString){
    let splitWords = []
    let splitString = morseString.split("/")
    console.log(splitString)
    for (const element of splitString) {
      splitWords.push(element.split(" "))
    }
  
    return splitWords
  }


function translateLatinCharacter(texte){
    let translate = latinToMorse[texte]+ " "
    return translate
}

function translateMorseCharacter(arraySplit){ 
    let translatedString = ""
  
    for (const word of arraySplit) {
      for (const letter of word) {
        translatedString += morseToLatin[letter]
      }   
      translatedString += " "
    }
    
    return translatedString
  }

function encode(){
    let trad = ""
    let recup = document.getElementById("latin").value
    console.log(recup)
    let maj=recup.toUpperCase()
    let swap = getLatinCharacterList(maj)
    for (let i = 0; i < swap.length; i++) {
      let translate = translateLatinCharacter(swap[i])
      trad += translate
    }
    document.getElementById("txtLatin").innerHTML = trad
}

function decode(){
    recup2 = document.getElementById("morse").value
    let split = getmorseCharacterList(recup2)
    let translate = translateMorseCharacter(split)
    document.getElementById("txtMorse").innerHTML = translate
}
