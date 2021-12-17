/*
Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
*/

//chiedere parola all'utente

let parola = prompt("inserisci una parola");
let parolaArr = []

parolaArr.push(parola)
console.log(parolaArr)

for( let i=0; i < parola.length; i++){
    console.log(parola.length)
}
//funzione per capire se è palindroma

function palindrome(parola) {

    parola.split("").reverse().join("");
    
    if (parola == reverse.parola){
        return parola + "Parola palindroma";

    }

    return parola + "Parola non palindroma";
}
    console.log(parola);
