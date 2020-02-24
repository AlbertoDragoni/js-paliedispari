//fare inserire una parola all'utente
//ribaltare la parola e vedere se il risultato è uguale alla parola iniziale
//
var inserireParola = prompt('inserisci qua una parola palindroma');
var check = palindroma(inserireParola);

function palindroma(inserireParola) {
    var parolaAlContrario = '';
    for (var i = inserireParola.length-1; i >= 0; i--) {
        parolaAlContrario += inserireParola[i];
    }
    return parolaAlContrario;
}

if (inserireParola == check) {
    console.log('la parola è palindroma');
} else {
    console.log('la parola non è palindroma');
}
// ------------------ Esercizio 2 ----------------
