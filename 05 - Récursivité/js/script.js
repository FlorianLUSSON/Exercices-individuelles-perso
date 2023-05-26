const array = [1,2,3,4,5,6]

// function sum1(tab){
//     let recup=0
//     for(let i=0; i<tab.length;i++){
//         recup += tab[i]
//     }
//     return recup
// }


// function sum2(tab){
//     if (tab.length === 0){
//         return 0
//     }
//     let elem = tab.shift()
//     return elem + sum2(tab)
// }

// function factorial(number){
//     if(number === 0){
//         return 1
//     } 
//     const calcul = number
//     return calcul * factorial(number - 1)
// }

// function fibo(x){
//     const tab = [0,1]
//     let suite = []
//     let boucle = 3
//     if(x<=2){
//         for (let i = 0; i < x; i++) {
//             suite.push(tab[i])            
//         }
//         return suite
//     }
//     suite = tab
//     while(boucle <= x){
// let last = suite[suite.length-1]
// let a = suite[suite.length-2]
// let b = last + a
// suite.push(b)
//         boucle++
//     }
//     return suite
// }

function fibonacci(x, tab = [0, 1]) {
  let suite = []
  let detect = false
  if (x < 3 && detect === false) {
    for (let i = 0; i < x; i++) {
      suite.push(tab[i]) 
    }
    return suite
  }
  suite = tab
  detect = true 
  suite.push(suite[suite.length - 1] + suite[suite.length - 2])
  fibonacci(x - 1, suite)
  return suite
}

console.log(fibonacci(50))