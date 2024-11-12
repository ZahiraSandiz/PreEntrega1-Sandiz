// Obtener entradas mediante propt

// Función Filtrar (Ej precio entre 10000 y 20000)

// Funcion finalizarCompra
// Alert gracias por su compra

//1 array de objetos

// Sobre array
//        ---> 1 Método de búsqueda: find o filter
//        ---> 1 método de filtrado : filter

// Array de objetos

const productos = [
  { nombre: "Limpiador Facial", id: 10, tipo: "Limpiador", precio: 15800 },
  { nombre: "Tónico Refrescante", id: 32, tipo: "Tónico", precio: 13500 },
  { nombre: "Sérum de Vitamina C", id: 43, tipo: "Sérum", precio: 20000 },
  { nombre: "Hidratante Facial", id: 14, tipo: "Hidratante", precio: 20075 },
  {
    nombre: "Protector Solar SPF 50",
    id: 35,
    tipo: "Protector Solar",
    precio: 25000,
  },
  {
    nombre: "Exfoliante Facial Suave",
    id: 16,
    tipo: "Exfoliante",
    precio: 18500,
  },
  {
    nombre: "Mascarilla de Arcilla",
    id: 27,
    tipo: "Mascarilla",
    precio: 15000,
  },
  {
    nombre: "Crema Antiarrugas de Noche",
    id: 81,
    tipo: "Hidratante",
    precio: 30200,
  },
  {
    nombre: "Contorno de Ojos",
    id: 49,
    tipo: "Contorno de Ojos",
    precio: 28500,
  },
];

// Función saludar
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
  return;
};

saludar(nombreUsuario);

// Algoritmo utilizando un ciclo - Estructura iterativa (for)
let listaDeProductos = "";
for (let i = 0; i < productos.length; i++) {
  listaDeProductos += productos[i].nombre + " - $" + productos[i].precio;
  if (i < productos.length - 1) {
    listaDeProductos += "\n"; // Agregar salto de línea
  }
}
alert("Estos son nuestros productos disponibles:\n" + listaDeProductos);

// Función para ordenar de mayor a menor o de menor a mayor
const ordenarPorPrecio = (productos) => {
  const numeroIngresado = prompt(
    "Para ordenar los productos de mayor a menor, ingrese 1 \nPara ordenar los productos de menor a mayor, ingrese 2"
  );

  let productosOrdenados;

  if (numeroIngresado == 1) {
    productosOrdenados = productos.sort((a, b) => b.precio - a.precio);
  } else if (numeroIngresado == 2) {
    productosOrdenados = productos.sort((a, b) => a.precio - b.precio);
  } else {
    return alert("Opción inválida. Intenta de nuevo.");
  }

  // Usamos map para transformar el objeto a una cadena, join para unir los elementos en una sola cadena con saltos de línea
  const productosFormateados = productosOrdenados
    .map(
      (producto, index) =>
        `${index + 1}. ${producto.nombre} - $${producto.precio}`
    )
    .join("\n\n");

  alert("Productos ordenados:\n\n" + productosFormateados);
};

ordenarPorPrecio(productos);

// Función para agregar productos al carrito y finalizar compra

let carrito = [];

const agregarProductosAlCarrito = (productos) => {
  // Pedir el nombre del producto al usuario
  const nombreProducto = prompt(
    "Ingrese el nombre del producto que desea agregar al carrito:"
  );

  // Buscar el producto en el array de productos
  const producto = productos.find(
    (p) => p.nombre.toLowerCase() === nombreProducto.toLowerCase()
  );

  // Verificar si el producto existe y agregarlo al carrito
  if (producto) {
    const unidades = parseInt(
      prompt("Ingrese la cantidad de unidades que desea de este producto")
    );

    if (isNaN(unidades) || unidades <= 0) {
      alert("Cantidad inválida. Por favor, ingrese un número válido.");
      return;
    }

    const precioTotalUnidades = producto.precio * unidades;

    // Crear el objeto de compra para el carrito
    const itemCarrito = {
      nombre: producto.nombre,
      unidades: unidades,
      precioUnitario: producto.precio,
      precioTotal: precioTotalUnidades,
    };

    // Agregar el objeto al carrito
    carrito.push(itemCarrito);

    console.log(carrito);

    alert(`${producto.nombre} x ${unidades} ha sido agregado al carrito.`);

    const seguirComprando = prompt(
      "Para seguir agregando productos al carrito ingrese 1, de lo contrario marque cualquier tecla"
    );

    if (seguirComprando == 1) {
      agregarProductosAlCarrito(productos);
    } else {
      // Calcular el total de la compra
      const totalCompra = carrito.reduce(
        (acc, item) => acc + item.precioTotal,
        0
      );

      // Resumen de la compra
      let resumenCompra = "Resumen de tu compra:\n\n";
      carrito.forEach((item, index) => {
        resumenCompra += `${index + 1}. ${item.nombre} - Unidades: ${
          item.unidades
        } - Precio Unitario: $${item.precioUnitario} - Precio Total: $${
          item.precioTotal
        }\n`;
      });

      resumenCompra += `\nTotal de la compra: $${totalCompra}`;

      // Mostrar el resumen al usuario
      alert(resumenCompra);

      // Mostrar agradecimiento por la compra
      alert(`Gracias por tu compra!`);
    }
  } else {
    alert("Producto no encontrado.");
  }
};

agregarProductosAlCarrito(productos);
