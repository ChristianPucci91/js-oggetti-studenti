// Oggetti

// - Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età. Stampare a schermo attraverso il for in tutte le proprietà.
// - Creare un array di oggetti di studenti. Ciclare su tutti gli studenti e stampare per ognuno nome e cognome
// - Dare la possibilità all’utente attraverso 3 prompt di
// aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.

// -------------- ESERCIZIO 1 ------------------
console.log("ex1");
// creo oggetto dichiarando una variabile

var studente = {
  "nome": "Christian",
  "cognome": "Pucci",
  "eta": 29
};

// stampo con un for in tutte le proprietà

for (var proprieta in studente) {
  console.log(proprieta + ": " + studente[proprieta]);
}

// -------------- ESERCIZIO 1 ------------------
console.log("ex2");
// -------------- ESERCIZIO 2 ------------------


// -------------- ESERCIZIO 2 ------------------
