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

// Chiedi nome
var userName = prompt('come ti chiami?');
userLuck = prompt('digita "P" per scegliere pari o "D" per scegliere dispari');
userNumber = Number(prompt('inserisci un numero da 1 a 5'));

/**
 * FUNZIONE P/D
 * 
 * 
 * questa funzione regola e verifica la scelta tra: 
 * 
 * 1) pari e dispari;
 */
function userLuckChoise(pOd) {

    pOd = pOd.toLowerCase();

    i=0;
    errore=1;

    while (i < errore) {
        if (pOd === "p") {
            pOd = ("p");
            i++;
        } else if (pOd === "d") {
            pOd = ("d");
            i++;
        } else {
            var pOd = prompt('Hai inserito un valore non ammesso; per favore digita "P" per scegliere pari o "D" per scegliere dispari');
            pOd = pOd.toLowerCase();
        }
    }

    finallUserWord = pOd;
    // console.log(finallUserWord);
    return finallUserWord;
}

/**
 * FUNZIONE NUMERO FORTUNATO UTENTE
 * 
 * 
 * questa funzione regola e verifica la scelta tra: 
 * 
 * 2) numero fortunato compreso tra 1 e 5;
 */
function userNumberChoise(nF) {
    // numero fortunato
    // userNumber = Number(prompt('inserisci un numero da 1 a 5'));

    index=0;
    numeroSbagliato=1;

    while (index < numeroSbagliato) {
        if (nF === 1 || nF === 2 || nF === 3 || nF === 4 || nF === 5) { //ho usato quest asoluzione solo perchè sapevo di avere 5 numeri.
            index++;
        } else {
            var nF = Number(prompt('Hai inserito un valore non ammesso; scegli un numero da 1 a 5'));
        }
    }

    finallUserNumber = 0;
    checkNumber = 0;
    while (finallUserNumber < userNumber) {
        if (checkNumber < userNumber) {
            finallUserNumber++;
        }
    }
    // console.log(finallUserNumber);
    return finallUserNumber;
}

/**
 * FUNZIONE NUMERO FORTUNATO COMPUTER
 * 
 * la funzione si occupa di generare un numero randomico compreso tra 1 e 5;
 * questo numero fortunato verrà sommato a quello selezionato dall'utente.
 */
function computerNumber() {
    computerRandomNumber = Number(Math.floor(Math.random() * 5) + 1);
    // console.log(computerRandomNumber);

    return computerRandomNumber;
}

/**
 * SOMMA NUMERI FORTUNATI
 * 
 * questa funzione somma i numeri fortunati tra loro
 */
function sumUserCp(num1, num2) {
    var result = num1 + num2;

    finallNumber = 0;
    checker = 0;
    while (finallNumber < result) {
        if (checker < result) {
            finallNumber++;
        }
    }
    console.log(finallNumber);
    return finallNumber;
}

/**
 * FUNZIONE DI COMPARAZIONE CONDIZIONI DI VITTORIA
 */
function winningConditios() {

    if (finallUserWord == 'p' && finallNumber % 2 === 0) {
        console.log("complimenti " + userName + " hai vinto");
    } else if (finallUserWord == 'd' && finallNumber % 2 !== 0){
        console.log("complimenti " + userName + " hai vinto");
    } else {
        console.log("spiacente " + userName + " hai perso");
    }
}

/**
 * FUNZIONE DI ESECUZINE 
 * 
 * raccoglie al suo interno tutte le funzioni precedenti e le esegue in sequenza.
 */
function exeFunction() {
    userLuckChoise(userLuck);
    userNumberChoise(userNumber);
    computerNumber();
    sumUserCp(finallUserNumber, computerRandomNumber);
    winningConditios();
}

// ESECUZIONE GIOCO
exeFunction();