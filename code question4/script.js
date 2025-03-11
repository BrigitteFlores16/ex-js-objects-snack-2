//Code Question 4
const chef = {
  name: "Chef Hyur",
  age: 29,
  makeBurger: (num = 1) => {
    console.log(`Ecco ${num} hamburger per te!`);
  },
};

const restaurant = {
  name: "Hyur's Burgers",
  address: {
    street: "Main Street",
    number: 123,
  },
  openingDate: new Date(2025, 3, 11),
  isOpen: false,
};
//Qual è il metodo migliore per clonare l’oggetto chef, e perché?
const secondochef = structuredClone(chef);
//il metodo migliore per clonare l'oggetto chef è la funzione structuredClone, che la copia secondochef conterrà una copia del metodo makeBurger,
// perché se si modifica il metodo makeBurger sull'oggetto chef originale, la copia secondochef manterrà la sua versione originale del metodo.

//Qual è il metodo migliore per clonare l’oggetto restaurant, e perché?
const secondoRestaurant = structuredClone(restaurant);
//il metodo migliore per clonare l'oggetto restaurant è la funzione structuredClone, che la copia secondoRestaurant conterrà una copia dell'oggetto address,
//perché se si modifica l'oggetto address sull'oggetto restaurant originale, la copia secondoRestaurant manterrà la sua versione originale dell'oggetto address.
