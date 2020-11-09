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
var ex1 = "";
for (var proprieta in studente) {
  console.log(proprieta + ": " + studente[proprieta]);
  ex1 += ("<h3>" + proprieta + ": " + studente[proprieta] + "</h3>");
  document.getElementById('ex1').innerHTML = ex1;
}

// -------------- ESERCIZIO 1 ------------------
console.log("ex2");
// -------------- ESERCIZIO 2 ------------------

// creo array di oggetti
var arrayStudenti = [

  {
    "nome": "Vincent",
    "cognome": "Vega",
    "eta": 40
  },

  {
    "nome": "Marcellus",
    "cognome": "Wallace",
    "eta": 50
  },

  {
    "nome": "Jules",
    "cognome": "Winnfield",
    "eta": 45
  }

]; // fine array

// creo ciclo for con all'interno un ciclo for in a cui dico di stampare il nome ed il cognome
// equivalente alla variabile i in quel momento
var ex2 = "";
// for (var i = 0; i < arrayStudenti.length; i++) {
   for (studente in arrayStudenti) {
     console.log("nome e cognome studente: "  + arrayStudenti[studente].nome,arrayStudenti[studente].cognome);
     ex2 += ("<h3>" + "nome e cognome studente: "  + arrayStudenti[studente].nome + " " + arrayStudenti[studente].cognome + "</h3>");
     document.getElementById('ex2').innerHTML = ex2;
   }
// }

// -------------- ESERCIZIO 2 ------------------
console.log("ex3");
// -------------- ESERCIZIO 3 ------------------

// creo un array oggetto e do alle proprieta il valore di quello che inserirà l'utente

var inserisciStudente = {

  "nome" : prompt("Inserisci il tuo nome"),
  "cognome" : prompt("Inserisci il tuo cognome"),
  "eta" : parseInt(prompt("Inserisci la tua età"))

};

arrayStudenti.push(inserisciStudente); // pusho l'array all'interno dell'array principale

console.log("Array studenti: ",arrayStudenti); // stampo tutto l'array aggiornato

// -------------- ESERCIZIO 3 ------------------
