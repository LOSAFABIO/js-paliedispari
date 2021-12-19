/*
Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
*/


//scelta pari o dispari
let scelta1 = 0;

let pari    = document.getElementById("pari");

pari.addEventListener(`click`, function(){
    
    let scelta1         = prompt("scegli un numero");
    console.log(scelta1);

    const nPc           = numeroPc();
    console.log(nPc);

    const somma         = scelta1 + nPc;
    console.log(somma);

    let segno = pari;
    
    function campione(segno, somma){
        let risultato = " ";
        if (somma%2 == 0){
            risultato = "Hai vinto";
        }else{
            risultato = "Hai perso";
        }
        return risultato;
    
    };
    const risultato = campione(pari, somma);
    console.log(risultato);
});
    //io qui dentro so che l'utente ha scelto dispari, la somma totale è somma
    //con questi due dati creo una funzione che mi ritorna indietro "vittoria" o "sconfitta"


let scelta2 = 0;


let dispari = document.getElementById("dispari");
dispari.addEventListener(`click`, function(){
    
    let scelta2 = prompt("scegli un numero");
    console.log(scelta1);

    const nPc   = numeroPc();
    console.log(nPc);

    const somma = scelta2 + nPc;
    console.log(somma); 

    let segno = dispari;
    
    function campione(segno, somma){
        let risultato = " ";
        if (somma%2 != 0){
            risultato = "Hai vinto";
        }else{
            risultato = "Hai perso";
        }
        return risultato;
    };
    
    const risultato = campione(dispari, somma);
    console.log(risultato);
});
    //io qui dentro so che l'utente ha scelto dispari, la somma totale è somma
    //con questi due dati creo una funzione che mi ritorna indietro "vittoria" o "sconfitta"
    


function numeroPc(){
    let sceltaPc = Math.floor(Math.random()*5) + 1;
    return  sceltaPc;
}


/*
va bene ma mi da errore

function campione(segno, somma){
    let risultato = " ";
    if (segno = pari){
        if (somma%2 == 0){
            risultato = "Hai vinto";
        }else{
            risultato = "Hai perso";
        }
    } else (segno = dispari){
        if (somma%2 != 0){
            risultato = "Hai vinto";
        }else{
            risultato = "Hai perso";
        }
    };
    
    return risultato;
};
*/