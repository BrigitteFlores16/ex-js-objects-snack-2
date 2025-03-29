//Code Question 6 (Bonus)
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
// Domande:
//1.Qual è il metodo migliore per clonare l’oggetto chef, e perché?

const secondChef = {
  ...chef,
  restaurant: {
    ...chef.restaurant,
    address: {
      ...chef.restaurant.address,
    },
  },
};
console.log(secondChef);
//il metodo migliore per clonare l'oggetto chef è quello di utilizzare lo spread operator, in quanto permette di creare una copia dell'oggetto senza modificarlo,
// inoltre è molto più leggibile rispetto ad altri metodi come Object.assign() o JSON.parse(JSON.stringify()).
