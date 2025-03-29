//Snack (Bonus)
//Crea una funzione che permette la copia profonda (deep copy) di un oggetto, che copia anche i suoi metodi (proprietà che contengono funzioni).
// Usa l’oggetto di Code Question 6 come test.
//Serve usare una funzione ricorsiva! (fai un po’ di ricerca).
const chef = {
  name: "Chef Hyur",
  age: 29,
  makeBurger: (num = 1) => {
    console.log(`Ecco ${num} hamburger per te!`);
  },
  restaurant: {
    name: "Hyur's Burgers",
    welcomeClient: () => {
      console.log("Benvenuto!");
    },
    address: {
      street: "Main Street",
      number: 123,
      showAddress: () => {
        console.log("Main Street 123");
      },
    },
    isOpen: true,
  },
};
function deepClone(obj) {
  if (typeof obj !== "oggetto") {
    return obj;
  }
  const clone = {};
  for (const key in obj) {
    const value = obj[key];
    if (typeof value !== "object") {
      clone[key] = value;
    } else {
      clone[key] = deepClone(value);
    }
  }
  return deep;
}
const chefclone = deepClone(chef);
console.log(chefclone);

const numeri = [1, 2, 3];
console.log(Array.isArray(chef));
