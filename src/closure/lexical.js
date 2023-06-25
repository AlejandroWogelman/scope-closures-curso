const myGlobal = 0;
//´Ambito lexico, nivel de acceso a las variables.

function myFunction() {
  const myNumber = 1;
  console.log(myGlobal);

  function parent() {
    // funcion iterna
    const inner = 2;
    console.log(myNumber, myGlobal);

    function child() {
      console.log(inner, myNumber, myGlobal);
    }
    return child();
  }
  return parent();
}

myFunction();

function sumWithClosure(firstNum) {
  // Tu código aquí 👈

  function suma(second = 0) {
    return firstNum + second;
  }
  return suma;
}

console.log(sumWithClosure(1)(2));
