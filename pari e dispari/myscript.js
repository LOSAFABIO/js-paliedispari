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

let pari = document.getElementById("pari");
pari.addEventListener(`click`, function(){
    let scelta1 = prompt("scegli un numero pari");

    console.log(scelta1);
});

let scelta2 = 0

let dispari = document.getElementById("dispari");
dispari.addEventListener(`click`, function(){
    let scelta2 = prompt("scegli un numero dispari");

    console.log(scelta2);
});

//inserimento numero da 1 a 5

//generare un numero random anch eper pc da 1 a 5 (con funzione)
let sceltaPc= " ";  

function numeroPc(numeroRandom){
    let sceltaPc = Math.floor(Math.random()* 5 + 1);
    return  sceltaPc;
}

console.log(numeroPc(sceltaPc))


//somma dei numeri
let somma = scelta1 + scelta2 + sceltaPc 
console.log(somma);

//stabilire se somma è pari o dispari ( con funzione)

function campione(vittorioso){
    if(scelta1 > sceltaPc){
        document.writeln("Hai vinto");
    }else if (scelta2 > sceltaPc){
        document.writeln("Hai vinto");
    } else{
        document.writelnI("Ha vinto il PC")
    }
    
}

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