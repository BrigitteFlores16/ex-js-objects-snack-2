//Code Question 1
const hamburger = { name: "Cheese Burger", weight: 250 };
const secondBurger = hamburger;
secondBurger.name = "Double Cheese Burger";
secondBurger.weight = 500;

console.log(hamburger.name);
console.log(secondBurger.name);

//Domande:
//1.Senza lanciare il codice, riesci a prevedere cosa viene stampato in console?
//Double Cheese Burger,
//Double Cheese Burger.
//2.Quanti oggetti sono stati creati in memoria durante l'esecuzione di questo codice?
//un oggetto è stato creato in memoria.
