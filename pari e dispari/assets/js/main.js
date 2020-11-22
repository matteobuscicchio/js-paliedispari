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
 * FUNZIONE P/D
 * 
 * 
 * questa funzione regola e verifica la scelta tra: 
 * 
 * 1) pari e dispari;
 */
function userLuckChoise() {

    // pari e dispari
    var userLuck = prompt('digita "P" per scegliere pari o "D" per scegliere dispari');
    userLuck = userLuck.toLowerCase();

    i=0;
    errore=1;

    while (i < errore) {
        if (userLuck === "p") {
            userLuck = ("p");
            i++;
        } else if (userLuck === "d") {
            userLuck = ("p");
            i++;
        } else {
            var userLuck = prompt('Hai inserito un valore non ammesso; per favore digita "P" per scegliere pari o "D" per scegliere dispari');
            userLuck = userLuck.toLowerCase();
        }
    }

    return userLuck;
}

/**
 * FUNZIONE NUMERO FORTUNATO
 * 
 * 
 * questa funzione regola e verifica la scelta tra: 
 * 
 * 2) numero fortunato compreso tra 1 e 5;
 */
function userNumberChoise() {
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
    // console.log(userNumber);

    finallUserNumber = 0;
    checkNumber = 0;
    while (finallUserNumber < userNumber) {
        if (checkNumber < userNumber) {
            finallUserNumber++;
        }
    }
    console.log(finallUserNumber);
    return finallUserNumber;
}

/**
 * DUNZIONE NUMERO FORTUNATO COMPUTER
 * 
 * la funzione si occupa di generare un numero randomico compreso tra 1 e 5;
 * questo numero fortunato verrà sommato a quello selezionato dall'utente.
 */
function computerNumber() {
    computerRandomNumber = Number(Math.floor(Math.random() * 5) + 1);
    console.log(computerRandomNumber);

    return computerRandomNumber;
}

function sumUserCp(num1, num2) {
    var result = num1 + num2;
    console.log("somma " + result);
    return result;
}

// ESECUZIONE GIOCO

userLuckChoise();
userNumberChoise();
computerNumber();
sumUserCp(finallUserNumber, computerRandomNumber);


// console.log(finallUserNumber);
