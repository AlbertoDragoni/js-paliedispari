//fare inserire una parola all'utente
//ribaltare la parola e vedere se il risultato è uguale alla parola iniziale
//
// var inserireParola = prompt('inserisci qua una parola palindroma');
// var check = palindroma(inserireParola);
//
// function palindroma(inserireParola) {
//     var parolaAlContrario = '';
//     for (var i = inserireParola.length-1; i >= 0; i--) {
//         parolaAlContrario += inserireParola[i];
//     }
//     return parolaAlContrario;
// }
//
// if (inserireParola == check) {
//     console.log('la parola è palindroma');
// } else {
//     console.log('la parola non è palindroma');
// }
// ------------------ Esercizio 2 ----------------

var scommessaUtente = prompt('pari o dispari?');
var numeroUtente = parseInt(prompt('inserisci un numero da 1 a 5'));
var numeroRandom = generaRandom(1,5);
var sommaNumeri = somma(numeroUtente, numeroRandom);
var risultato = pariDispari(sommaNumeri);

if (risultato === scommessaUtente.toLowercase()) {
    console.log('you win!');
} else {
    console.log('you lose!');
}

function pariDispari (val){
    if (val % 2 === 0) {
        return 'pari';
    }
    return 'dispari';
}

function somma(valUno, valDue) {
    return valUno + valDue;
}

function generaRandom(min, max) {
    numeroRandom = Math.floor(Math.random() * (max - min + 1)) + min;
    return numeroRandom;
}
