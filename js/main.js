// Algoritmo con un condicional. Validación de Edad
const edad = parseInt(prompt("¿Cuál es tu edad?"));

if (edad >= 0 && edad < 18) {
  alert("Sos menor de edad, no estas habilitado para comprar en linea");
} else if (edad >= 18) {
  alert("¡Bienvenido a nuestra tienda!");
} else {
  alert("Edad incorrecta, vuelva a ingresar su edad");
}

// Algoritmo utilizando un ciclo - Estructura iterativa (for)
const productos = [
  { nombre: "Limpiador Facial", precio: 15800 },
  { nombre: "Crema Hidratante", precio: 20200 },
  { nombre: "Serum Hidratante", precio: 25600 },
  { nombre: "Protector Solar", precio: 30000 },
  { nombre: "Mascarilla Facial", precio: 8500 },
  { nombre: "Contorno de Ojos", precio: 22500 },
];

let listaDeProductos = "";
for (let i = 0; i < productos.length; i++) {
  listaDeProductos += productos[i].nombre + " - $" + productos[i].precio;
  if (i < productos.length - 1) {
    listaDeProductos += "\n"; // Agregar salto de línea
  }
}
alert("Estos son nuestros productos disponibles:\n" + listaDeProductos);

// Función para calcular el total de la compra con un descuento del 20%
function calcularTotalCompra() {
  const precioProducto = 10000;
  const precioParaAplicarDescuento = 100000;
  const descuento = 0.2;

  const cantidad = parseInt(prompt("¿Cuántos productos deseas comprar?"));

  let total = cantidad * precioProducto;
  let totalDescuento = 0;

  // Aplicar descuento
  if (total > precioParaAplicarDescuento) {
    totalDescuento = total * descuento;
    total -= totalDescuento;
  }

  alert(
    "El total de tu compra es: $" +
      total.toFixed(2) +
      "\nDescuento aplicado: $" +
      totalDescuento.toFixed(2)
  );
}
calcularTotalCompra();

// Función flecha

let nombreUsuario = prompt("Ingrese su nombre");

const saludar = (nombre) => {
  while (
    typeof nombre !== "string" ||
    // Verifica que sea un string
    nombre.trim() === "" ||
    //Verifica que no sea una cadena vacía ("").
    /\d/.test(nombre)
    // Evalúa que la cadena "nombre" no tenga digitos.
  ) {
    nombre = prompt("Incorrecto, vuelva a ingresar su nombre");
  }

  alert("Hola " + nombre + " ¡Bienvenido/a a nuestra web!");
};

saludar(nombreUsuario);
