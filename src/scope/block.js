// Bloque: Casi todo lo que esté dentro de llaves {}
function fruits() {
  if (true) {
    var fruit1 = "Apple"; // Function scope
    let fruit2 = "Naranja"; // Block scope
    const fruit3 = "Banana"; // Block scope
    console.log(fruit2);
    console.log(fruit3);
  }
  console.log(fruit1);
  // Acá no las lee
}
fruits();
