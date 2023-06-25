//variables

var a; //declarando
var b = "b"; // declaramos y asignamos
b = "bb"; // reasignar
var a = "aa"; // redeclaracion

// Global scope
var fruit = "Apple"; // global

function bestFruit() {
  console.log(fruit);
}

bestFruit();

function countries() {
  country = "Arg"; //Si solo lo asigno sin declarar, se crea una variable global
  console.log(country);
}

countries();
console.log(country);
