// Pregunta de análisis: si el usuario ingresa un número fuera de 1-4, se ejecuta el default y se indica opción no válida

let opcion = parseInt(prompt("Selecciona una opción:\n1. Consultar saldo\n2. Retirar dinero\n3. Depositar dinero\n4. Salir"));

switch (opcion) {
  case 1:
    console.log("Consultar saldo");
    break;
  case 2:
    console.log("Retirar dinero");
    break;
  case 3:
    console.log("Depositar dinero");
    break;
  case 4:
    console.log("Salir");
    break;
  default:
    console.log("Opción no válida");
    break;
}