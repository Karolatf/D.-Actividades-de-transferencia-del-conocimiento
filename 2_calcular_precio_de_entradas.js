// D2 - Calcular precio de entradas al cine
// Pregunta de análisis: usar if - else if - else (porque se evalúan rangos de edad)

let edad = parseInt(prompt("Ingresa la edad:"));
let esEstudiante = prompt("¿Es estudiante? (si/no)"); // ingresar exactamente "si" para aplicar descuento

let precio;

if (edad < 12) {
  precio = 5000;
} else if (edad >= 12 && edad <= 18) {
  precio = 8000;
} else {
  precio = 10000;
}

// Si es estudiante, se aplica descuento del 20%
if (esEstudiante === "si") {
  precio = precio * 0.8;
}

console.log(precio);