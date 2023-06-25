function greeting() {
  let userName = "Ana";
  console.log(userName);
  if (userName === "Ana") {
    console.log(`Hello ${userName}!`);
  }
}

greeting();

//La funcion tiene su propio scope y no puede ser accedido desde fuera
console.log(userName);
