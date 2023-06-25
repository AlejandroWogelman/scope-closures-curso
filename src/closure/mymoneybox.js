/* function moneyBox(coins) {
  let saveCoins = 0;

  saveCoins += coins;
  console.log(saveCoins);
}

moneyBox(3);
moneyBox(3);
 */
function moneyBox() {
  let saveCoins = 0;

  function countCoins(coins) {
    saveCoins += coins;
    console.log(`MoneyBox: $${saveCoins}`);
  }
  return countCoins;
}
const myMoneyBox = moneyBox();
myMoneyBox(3);
myMoneyBox(3);

const moneyBoxAna = moneyBox();
moneyBoxAna(10);
moneyBoxAna(20);

function createPetList() {
  const petList = [];
  return function addPet(myPet) {
    if (myPet) {
      petList.push(myPet);
    }
    return petList;
  };
}

const pets = createPetList();
console.log(pets("perro"));
console.log(pets("gato"));
console.log(pets());
