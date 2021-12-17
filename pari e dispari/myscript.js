/*
Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
*/


//scelta pari o dispari
let scelta1 = 0

let pari    = document.getElementById("pari");

pari.addEventListener(`click`, function(){

    let scelta1         = prompt("scegli un numero");
    const nPc           = numeroPc()
    const somma         = scelta1 + nPc
    
    //io qui dentro so che l'utente ha scelto dispari, la somma totale è somma
    //con questi due dati creo una funzione che mi ritorna indietro "vittoria" o "sconfitta"

    
    
    const risultato = campione()

    console.log( risultato )
});

let scelta2 = 0

let dispari = document.getElementById("dispari");
dispari.addEventListener(`click`, function(){

    let scelta2 = prompt("scegli un numero");
    const nPc   = numeroPc()
    const somma = scelta2 + nPc
    
    //se somma è pari e io hoo scelto dispari perdo altrimenti vinco
    //io qui dentro so che l'utente ha scelto dispari, la somma totale è somma
    //con questi due dati creo una funzione che mi ritorna indietro "vittoria" o "sconfitta"
    
    const risultato = campione()
 
    console.log( risultato )

});

function numeroPc(){
    let sceltaPc = Math.floor(Math.random()* 5 + 1);
    return  sceltaPc;
}

function campione(segno, somma){
    let risultato = " ";
    if (somma%2 != 0){
        risultato = "Ho vinto";
    }else{
        risultato = "Ho perso";
    }
    return risultato;
}

/*
//stabilire se somma è pari o dispari ( con funzione)
let risultato = false
function campione( segno, somma ){

    if(somma%2 == 0){
        risultato = true
        console.log("pari");
    } else{
        console.log("dispari");
    }
    return risultato;
}
*/
//dichiarare chi ha vinto



/*

let pari = document.getElementById("pari").addEventListener(`click`, function(){
    let numero = prompt("scegli un numero pari");
    let scelta = false
    for(let i=0; i < numero; i++)
        if (numero%2 == 0){
            scelta = true
            console.log(numero)
        } else {
            let numero = prompt("scegli un numero pari");
        }

    console.log(pari);
});

let dispari = document.getElementById("dispari").addEventListener(`click`, function(){
    let dispari = prompt("scegli un numero dispari");
    let scelta = false
    if (numero%2 != 0){
        scelta = true
        document.innexHTML = dispari
    } else {
        let numero = prompt("scegli un numero pari");
    }

    console.log(dispari);
})
*/