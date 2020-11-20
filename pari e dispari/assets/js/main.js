// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

// Consigli del giorno
// 1. Scriviamo sempre in italiano i passaggi che vogliamo fare
// 2. Scriviamo sempre solo un pezzetto di codice alla volta, se funziona allora andiamo avanti.

var userLuck = prompt('digita "P" per scegliere pari o "D" per scegliere dispari');
userLuck = userLuck.toLowerCase();

i=1;
errore=2;
while (i < errore) {
    console.log("valore di index risptto ad errore " +  [i]);
    if (userLuck == "p") {
        console.log('bravo hai scelto p');
    } else if (userLuck == "d") {
        console.log('bravo hai scelto d');
    } else {
        var userLuck = prompt('Hai inserito un valore non ammesso; per favore digita "P" per scegliere pari o "D" per scegliere dispari');
        userLuck = userLuck.toLowerCase();
        errore++;
        i--;
        console.log([i]);
    }
    i++;
}
console.log("valore di index risptto ad errore " +  [i]);

userNumber = Number(prompt('inserisci un numero da 1 a 5'));

// function computerNumber() {
//     computerRandomNumber = Math.floor(Math.random() * 5) + 1;
// }

console.log(userLuck, userNumber, [i]);

