//Code Question 2
const hamburger = {
  name: "Cheese Burger",
  weight: 250,
  ingredients: ["Cheese", "Meat", "Bread", "Tomato"],
};
const secondBurger = { ...hamburger };
secondBurger.ingredients[0] = "Salad";
console.log(hamburger.ingredients[0]);
console.log(secondBurger.ingredients[0]);
//P.S.: Ricordati che gli Array, come gli oggetti, sono dei Reference Type (Tipi di Riferimento)!

//Domande:
//1.Senza lanciare il codice, riesci a prevedere cosa viene stampato in console?
//salad
//2.Quanti oggetti sono stati creati in memoria durante l'esecuzione di questo codice?
//due oggetti cioe l'oggetto hamburger e l'oggetto secondBurger (l'array ingredients non viene duplicato, quindi rimane un unico array condiviso tra i due oggetti).
