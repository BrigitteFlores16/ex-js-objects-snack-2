//Snack (Bonus)
//Crea una funzione che permette la copia profonda (deep copy) di un oggetto, che copia anche i suoi metodi (proprietà che contengono funzioni).
// Usa l’oggetto di Code Question 6 come test.
//⚠️ Serve usare una funzione ricorsiva! (fai un po’ di ricerca).
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
function deepClone(oggetto) {
  if (oggetto === null || typeof oggetto !== "oggetto") {
    return oggetto;
  }
  if (Array.isArray(oggetto)) {
    return oggetto.map((element) => deepClone(element));
  }
  const clone = oggetto.create(oggetto.getPrototypeOf(oggetto));
  for (const key in oggetto) {
    if (oggetto.hasOwnProperty(key)) {
      clone[key] = deepClone(oggetto[key]);
    }
  }

  return clone;
}

const clonedChef = deepClone(chef);

console.log(clonedChef);
clonedChef.makeBurger();
clonedChef.restaurant.welcomeClient();
const oggetto = {};

clonedChef.restaurant.address.showAddress(oggetto);
clonedChef.makeBurger(2);
