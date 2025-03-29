//Code Question 3
const hamburger = {
  name: "Cheese Burger",
  weight: 250,
  maker: {
    name: "Anonymous Chef",
    restaurant: {
      name: "Hyur's Burgers",
      address: "Main Street, 123",
      isOpen: true,
    },
    age: 29,
  },
};
const secondBurger = structuredClone(hamburger);
const thirdBurger = structuredClone(hamburger);
//Domande:
//1.Quanti oggetti sono stati creati in memoria durante l'esecuzione di questo codice?
//tre oggetti sono stati creati in memoria, l'oggetto hamburger e i due oggetti secondBurger e thirdBurger.
//L'oggetto hamburger contiene un oggetto annidato maker, che a sua volta contiene un oggetto annidato restaurant.
//le due copie secondBurger e thirdBurger conterranno ciascuno un oggetto maker e un oggetto restaurant completamente separati, con i loro valori unici.
