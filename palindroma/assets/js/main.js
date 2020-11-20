// Parole o frasi palidrome = anna | otto | oro | dvd | osso | area | ossesso | ottetto | i topi non avevano nipoti |
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

// Consigli del giorno
// 1. Scriviamo sempre in italiano i passaggi che vogliamo fare
// 2. Scriviamo sempre solo un pezzetto di codice alla volta, se funziona allora andiamo avanti.

var userWord = prompt('Inserisci una parola o una frase per verificare se è palindroma');

function palindromeChecker(word) {
    //ho scoperto l'esistenza delle RegExp che ti permettono di controllare la sintassi
    //ho sfruttato la cosa per selezionare ed eliminare gli spazi dalle frasi
    //così da poterle rendere delle maxi-parole.
    //ho letto amche dei modificatori i-m-g. 
    // i - non distingue tra maiuscole e minuscole;
    // m - esegue ricerche multiline (il pattern viene confrontato con ogni linea del testo);
    // g - esegue ricerche globali, cioè non si ferma alla prima occorrenza;
    var removeSpace = / /g;
    wordSpaceless = word.toLowerCase().replace(removeSpace, '');

    checkerWord = wordSpaceless;
    reverseCheckerWord = checkerWord.split('').reverse().join(''); 
    return reverseCheckerWord === wordSpaceless;
}

if (palindromeChecker(userWord)) {
    console.log('la parola o la frase è palindroma');
} else {
    console.log('la parola o la frase NON è palindroma');
}