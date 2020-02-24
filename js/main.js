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

var scegliParita = prompt('scegli pari o dispari');
var scegliUnNumero = parseInt(prompt('scegli un numero da 1 a 5'));


if (scegliUnNumero % 2 ==0) {
    console.log('numero pari');
} else {
    console.log('numero dispari');
}
console.log(scegliUnNumero);

var numero = generaRandomMinMax(1, 5);

if ((numero + scegliUnNumero) % 2 ==0) {
    if (scegliParita = 'pari') {
        console.log('hai vinto');
    } else if (scegliParita = 'dispari'){
        console.log('hai perso');
    }
}
if ((numero + scegliUnNumero) % 2 ==1) {
    if (scegliParita = 'pari') {
        console.log('hai perso');
    } else if (scegliParita = 'dispari'){
        console.log('hai vinto');
    }
}
function generaRandomMinMax(min, max) {
    var numeroRandom = Math.floor(Math.random() * (max - min + 1)) + min;
    return numeroRandom;
}
