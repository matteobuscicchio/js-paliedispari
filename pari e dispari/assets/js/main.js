// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

// Consigli del giorno
// 1. Scriviamo sempre in italiano i passaggi che vogliamo fare
// 2. Scriviamo sempre solo un pezzetto di codice alla volta, se funziona allora andiamo avanti.




// SVOLGIMENTO

/**
 * FUNZIONE P/D E NUMERO FORTUNATO
 * 
 * 
 * questa funzione regola e verifica la scelta tra: 
 * 
 * 1) pari e dispari;
 * 2) numero fortunato compreso tra 1 e 5;
 * 
 */
function userChoise() {

    // pari e dispari
    var userLuck = prompt('digita "P" per scegliere pari o "D" per scegliere dispari');
    userLuck = userLuck.toLowerCase();

    i=0;
    errore=1;

    while (i < errore) {
        if (userLuck === "p") {
        i++;
        } else if (userLuck === "d") {
        i++;
        } else {
        var userLuck = prompt('Hai inserito un valore non ammesso; per favore digita "P" per scegliere pari o "D" per scegliere dispari');
        userLuck = userLuck.toLowerCase();
        }
    }
    console.log(userLuck);

    // numero fortunato
    userNumber = Number(prompt('inserisci un numero da 1 a 5'));

    index=0;
    numeroSbagliato=1;

    while (index < numeroSbagliato) {
        if (userNumber === 1 || userNumber === 2 || userNumber === 3 || userNumber === 4 || userNumber === 5) { //ho usato quest asoluzione solo perchè sapevo di avere 5 numeri.
        index++;
        } else {
        var userNumber = Number(prompt('Hai inserito un valore non ammesso; scegli un numero da 1 a 5'));
        }
    }
    console.log(userNumber);
}

//HO DECISO DI INSERIRE ENTRAMBI I CICLI IN UNA FUNZIONE SENZA DICHIARARNE L'ARGOMENTO
// var userLuck = prompt('digita "P" per scegliere pari o "D" per scegliere dispari');
// userLuck = userLuck.toLowerCase();

// i=0;
// errore=1;
// while (i < errore) {
//     if (userLuck === "p") {
//         i++;
//     } else if (userLuck === "d") {
//         i++;
//     } else {
//         var userLuck = prompt('Hai inserito un valore non ammesso; per favore digita "P" per scegliere pari o "D" per scegliere dispari');
//         userLuck = userLuck.toLowerCase();
//     }
// }

// userNumber = Number(prompt('inserisci un numero da 1 a 5'));


// index=0;
// numeroSbagliato=1;
// while (index < numeroSbagliato) {
//     if (userNumber === 0) {
//         var userNumber = Number(prompt('Hai inserito un valore non ammesso; scegli un numero da 1 a 5'));
//     } else if (userNumber === 1 || userNumber === 2 || userNumber === 3 || userNumber === 4 || userNumber === 5) {
//         index++;
//     } else {
//         var userNumber = Number(prompt('Hai inserito un valore non ammesso; scegli un numero da 1 a 5'));
//     }
// }



// function computerNumber() {
//     computerRandomNumber = Math.floor(Math.random() * 5) + 1;
// }



// ESECUZIONE GIOCO

userChoise();

