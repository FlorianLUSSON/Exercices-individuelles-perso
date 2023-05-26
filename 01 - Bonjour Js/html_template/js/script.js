let mois = new Date().getMonth()
mois =+1
let annee = new Date().getFullYear()
let dateAnnee = 0
let dateMois = 0
let nb = 0
let prenom
console.log(mois)
console.log(annee)
function askName(){
    do{
        prenom = window.prompt("Quel est votre prénom ?","Tapez-ici")
    }while(typeof prenom != "string")
    console.log(prenom)
    let accueil = "👋 Bonjour " + prenom + " !"
    console.log(accueil)
    document.body.innerHTML += '<h2>' + accueil + '</h2>'    
}

function askBirthYear(){
    do{
        dateAnnee = parseInt(window.prompt("Quel est votre annee de naissance ?", "Tapez-ici : (format: yyyy)"))
    }while(isNaN(dateAnnee))
    if(dateAnnee >1900){
        do{
            dateMois = parseInt( window.prompt("Quel est votre mois de naissance ?", "Tapez-ici : (format: mm)"))
        }while(isNaN(dateMois))
        if(dateMois > 0){
            let age = annee - dateAnnee
            if(dateMois>mois){
                age -= 1
            }
            let description = "Vous êtes né en " + dateAnnee + " et vous avez donc " + age + " ans." 
            document.body.innerHTML += '<h3>' + description + '</h3>'
        }
    }
}

askName()
askBirthYear()