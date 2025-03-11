//Code Question 5 (Bonus)
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

const newRestaurant = { ...hamburger.maker.restaurant };
newRestaurant.name = "Hyur's II";
newRestaurant.address = "Second Street, 12";
const secondBurger = { ...hamburger };
secondBurger.maker.restaurant = newRestaurant;
secondBurger.maker.name = "Chef Hyur";

console.log(hamburger.maker.name);
console.log(secondBurger.maker.name);
console.log(hamburger.maker.restaurant.name);
console.log(secondBurger.maker.restaurant.name);
//Senza lanciare il codice, riesci a prevedere cosa viene stampato in console?
//.viene stampato "Anonymous Chef"
//.viene stampato "Chef Hyur"
//.viene stampato "Hyur's Burgers"
//.viene stampato "Hyur's II"

//Quanti oggetti sono stati creati in memoria durante l'esecuzione di questo codice?
//tre oggetti : l'oggetto hamburger e i due oggetti secondBurger e newRestaurant.
//l'oggetto hamburger contiene un oggetto annidato maker, che a sua volta contiene un oggetto annidato restaurant.
// I due copie secondBurger e newRestaurant conterranno ciascuno un oggetto maker e un oggetto restaurant completamente separati, con i loro valori unici.
