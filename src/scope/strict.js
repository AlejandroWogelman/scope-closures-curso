"use strict";

pi = 3.1416;
console.log(pi);

//No permite la asignacion sin una declaracion y otras funciones

function name(params) {
  "use strict";
  return (pi = 3.123);
}
console.log(name());

/* El modo estricto tiene varios cambios en la semántica normal de JavaScript:

Elimina algunos errores silenciosos de JavaScript cambiándolos para que lancen errores.

Corrige errores que hacen difícil para los motores de JavaScript realizar optimizaciones: a veces, el código en modo estricto puede correr más rápido que un código idéntico pero no estricto.

Prohíbe cierta sintaxis que probablemente sea definida en futuras versiones de ECMAScript.

El modo estricto se aplica a un script completo o a funciones individuales. No se aplica a bloques entre corchetes {}; intentar aplicarlo en tales contextos no hace nada.
*/
