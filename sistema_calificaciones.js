// El estudiante aprueba si notaFinal >= 60 y asistencia >= 80
// Pregunta de análisis: el operador lógico que asegura evaluar ambas condiciones es && (AND)

let notaFinal = parseFloat(prompt("Ingresa la nota final:"));
let asistencia = parseFloat(prompt("Ingresa el porcentaje de asistencia:"));

if (notaFinal >= 60 && asistencia >= 80) {
  console.log("Aprobado");
} else {
  console.log("Reprobado");
}