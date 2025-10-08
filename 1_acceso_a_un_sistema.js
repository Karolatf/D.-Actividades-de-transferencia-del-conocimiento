let usuario = prompt("Ingresa el nombre de usuario:");
let contrasena = prompt("Ingresa la contraseña:");

if (usuario === "admin" && contrasena === "1234") {
  console.log("Acceso permitido");
} else {
  console.log("Acceso denegado");
}