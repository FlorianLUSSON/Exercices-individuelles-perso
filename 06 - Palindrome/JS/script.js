function isValidDate(date) {
    let tabDate = date.split("/")
    return maxDaysInMonth(tabDate)
}

console.log(typeof ("coucou"))

function maxDaysInMonth(date) {
    let jour = date[0]
    let mois = date[1]
    let moisEn30 = ["04", "06", "09", "11"]
    let moisen31 = ["01", "03", "05", "07", "08", "10", "12"]
    if (moisEn30.includes(mois)) {
        if (jour > 0 && jour < 31) {
            return true
        }
    } else if (mois == 02) {
        if (jour > 0 && jour < 29) {
            return true
        }
    } else if (moisen31.includes(mois)) {
        if (jour > 0 && jour < 32) {
            return true
        }
    }
    return false
}

console.log(isValidDate("05/02/2001"))