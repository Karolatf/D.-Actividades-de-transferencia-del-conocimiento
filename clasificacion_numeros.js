// Muestra "Número positivo", "Número negativo" o "Cero"
// Extensión: además verifica si es par o impar

let numero = parseInt(prompt("Ingresa un número entero:"));

if (numero > 0) {
  console.log("Número positivo");
} else if (numero < 0) {
  console.log("Número negativo");
} else {
  console.log("Cero");
}

// Extensión: verificar par o impar
if (numero !== 0) {
  if (numero % 2 === 0) {
    console.log("Es par");
  } else {
    console.log("Es impar");
  }
}