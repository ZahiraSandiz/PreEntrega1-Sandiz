document.addEventListener("DOMContentLoaded", function () {
  funcionPrincipal();
});

function funcionPrincipal() {
  const productos = [
    // Anillos dorados
    {
      id: 1,
      nombre: "Anillo Sol Dorado",
      tipo: "anillo",
      color: "dorados",
      precio: 18000,
      rutaImagen: "./img/anillos/dorados/img1.jpg",
      stock: 17,
    },
    {
      id: 2,
      nombre: "Anillo Brillo Lunar",
      tipo: "anillo",
      color: "dorados",
      precio: 22000,
      rutaImagen: "./img/anillos/dorados/img2.jpg",
      stock: 12,
    },
    {
      id: 3,
      nombre: "Anillo Destello",
      tipo: "anillo",
      color: "dorados",
      precio: 20000,
      rutaImagen: "./img/anillos/dorados/img3.jpg",
      stock: 1,
    },
    {
      id: 4,
      nombre: "Anillo Elegancia",
      tipo: "anillo",
      color: "dorados",
      precio: 25000,
      rutaImagen: "./img/anillos/dorados/img4.jpg",
      stock: 17,
    },
    {
      id: 5,
      nombre: "Anillo Oro Vivo",
      tipo: "anillo",
      color: "dorados",
      precio: 19000,
      rutaImagen: "./img/anillos/dorados/img5.jpg",
      stock: 13,
    },
    {
      id: 6,
      nombre: "Anillo Real Dorado",
      tipo: "anillo",
      color: "dorados",
      precio: 23000,
      rutaImagen: "./img/anillos/dorados/img6.jpg",
      stock: 7,
    },
    {
      id: 7,
      nombre: "Anillo Resplandor",
      tipo: "anillo",
      color: "dorados",
      precio: 24000,
      rutaImagen: "./img/anillos/dorados/img7.jpg",
      stock: 15,
    },
    {
      id: 8,
      nombre: "Anillo Fulgor",
      tipo: "anillo",
      color: "dorados",
      precio: 21000,
      rutaImagen: "./img/anillos/dorados/img8.jpg",
      stock: 5,
    },

    // Anillos plateados
    {
      id: 9,
      nombre: "Anillo Luna Plateada",
      tipo: "anillo",
      color: "plateados",
      precio: 16000,
      rutaImagen: "./img/anillos/plateados/img1.jpg",
      stock: 9,
    },
    {
      id: 10,
      nombre: "Anillo Brillo de Noche",
      tipo: "anillo",
      color: "plateados",
      precio: 17000,
      rutaImagen: "./img/anillos/plateados/img2.jpg",
      stock: 18,
    },
    {
      id: 11,
      nombre: "Anillo Plata Pura",
      tipo: "anillo",
      color: "plateados",
      precio: 18000,
      rutaImagen: "./img/anillos/plateados/img3.jpg",
      stock: 11,
    },
    {
      id: 12,
      nombre: "Anillo Estrella",
      tipo: "anillo",
      color: "plateados",
      precio: 19000,
      rutaImagen: "./img/anillos/plateados/img4.jpg",
      stock: 4,
    },
    {
      id: 13,
      nombre: "Anillo Aurora Plateada",
      tipo: "anillo",
      color: "plateados",
      precio: 20000,
      rutaImagen: "./img/anillos/plateados/img5.jpg",
      stock: 16,
    },

    // Aritos dorados
    {
      id: 14,
      nombre: "Aritos Oro Clásico",
      tipo: "arito",
      color: "dorados",
      precio: 15000,
      rutaImagen: "./img/aritos/dorados/img1.jpg",
      stock: 6,
    },
    {
      id: 15,
      nombre: "Aritos Esfera Dorada",
      tipo: "arito",
      color: "dorados",
      precio: 17000,
      rutaImagen: "./img/aritos/dorados/img2.jpg",
      stock: 14,
    },
    {
      id: 16,
      nombre: "Aritos Sol",
      tipo: "arito",
      color: "dorados",
      precio: 16000,
      rutaImagen: "./img/aritos/dorados/img3.jpg",
      stock: 20,
    },
    {
      id: 17,
      nombre: "Aritos Resplandor",
      tipo: "arito",
      color: "dorados",
      precio: 18000,
      rutaImagen: "./img/aritos/dorados/img4.jpg",
      stock: 8,
    },
    {
      id: 18,
      nombre: "Aritos Delicados",
      tipo: "arito",
      color: "dorados",
      precio: 19000,
      rutaImagen: "./img/aritos/dorados/img5.jpg",
      stock: 10,
    },
    {
      id: 19,
      nombre: "Aritos Estrella Dorada",
      tipo: "arito",
      color: "dorados",
      precio: 21000,
      rutaImagen: "./img/aritos/dorados/img6.jpg",
      stock: 3,
    },
    {
      id: 20,
      nombre: "Aritos Brillo Solar",
      tipo: "arito",
      color: "dorados",
      precio: 22000,
      rutaImagen: "./img/aritos/dorados/img7.jpg",
      stock: 19,
    },
    {
      id: 21,
      nombre: "Aritos Oro Fino",
      tipo: "arito",
      color: "dorados",
      precio: 23000,
      rutaImagen: "./img/aritos/dorados/img8.jpg",
      stock: 12,
    },

    // Aritos plateados
    {
      id: 22,
      nombre: "Aritos Plata Lunar",
      tipo: "arito",
      color: "plateados",
      precio: 16000,
      rutaImagen: "./img/aritos/plateados/img1.jpg",
      stock: 8,
    },
    {
      id: 23,
      nombre: "Aritos Estelar",
      tipo: "arito",
      color: "plateados",
      precio: 15000,
      rutaImagen: "./img/aritos/plateados/img2.jpg",
      stock: 4,
    },
    {
      id: 24,
      nombre: "Aritos Mini Plata",
      tipo: "arito",
      color: "plateados",
      precio: 17000,
      rutaImagen: "./img/aritos/plateados/img3.jpg",
      stock: 14,
    },
    {
      id: 25,
      nombre: "Aritos Aurora Plateada",
      tipo: "arito",
      color: "plateados",
      precio: 18000,
      rutaImagen: "./img/aritos/plateados/img4.jpg",
      stock: 7,
    },
    {
      id: 26,
      nombre: "Aritos Delicados Plateados",
      tipo: "arito",
      color: "plateados",
      precio: 19000,
      rutaImagen: "./img/aritos/plateados/img5.jpg",
      stock: 11,
    },

    // Collares dorados
    {
      id: 27,
      nombre: "Collar Sol Dorado",
      tipo: "collar",
      color: "dorados",
      precio: 28000,
      rutaImagen: "./img/collares/dorados/img1.jpg",
      stock: 13,
    },
    {
      id: 28,
      nombre: "Collar Oro Real",
      tipo: "collar",
      color: "dorados",
      precio: 30000,
      rutaImagen: "./img/collares/dorados/img2.jpg",
      stock: 2,
    },
    {
      id: 29,
      nombre: "Collar Delicado Dorado",
      tipo: "collar",
      color: "dorados",
      precio: 27000,
      rutaImagen: "./img/collares/dorados/img3.jpg",
      stock: 18,
    },
    {
      id: 30,
      nombre: "Collar Brillo Solar",
      tipo: "collar",
      color: "dorados",
      precio: 29000,
      rutaImagen: "./img/collares/dorados/img4.jpg",
      stock: 8,
    },
    {
      id: 31,
      nombre: "Collar Elegancia",
      tipo: "collar",
      color: "dorados",
      precio: 31000,
      rutaImagen: "./img/collares/dorados/img5.jpg",
      stock: 14,
    },
    {
      id: 32,
      nombre: "Collar Radiante",
      tipo: "collar",
      color: "dorados",
      precio: 32000,
      rutaImagen: "./img/collares/dorados/img6.jpg",
      stock: 4,
    },
    {
      id: 33,
      nombre: "Collar Esplendor Dorado",
      tipo: "collar",
      color: "dorados",
      precio: 35000,
      rutaImagen: "./img/collares/dorados/img7.jpg",
      stock: 9,
    },
    {
      id: 34,
      nombre: "Collar Fulgor",
      tipo: "collar",
      color: "dorados",
      precio: 33000,
      rutaImagen: "./img/collares/dorados/img8.jpg",
      stock: 16,
    },
    {
      id: 35,
      nombre: "Collar Oro Vivo",
      tipo: "collar",
      color: "dorados",
      precio: 29000,
      rutaImagen: "./img/collares/dorados/img9.jpg",
      stock: 7,
    },
    {
      id: 36,
      nombre: "Collar Dorado Supremo",
      tipo: "collar",
      color: "dorados",
      precio: 34000,
      rutaImagen: "./img/collares/dorados/img10.jpg",
      stock: 12,
    },

    // Collares plateados
    {
      id: 37,
      nombre: "Collar Luna Plateada",
      tipo: "collar",
      color: "plateados",
      precio: 25000,
      rutaImagen: "./img/collares/plateados/img1.jpg",
      stock: 15,
    },
    {
      id: 38,
      nombre: "Collar Plata Estelar",
      tipo: "collar",
      color: "plateados",
      precio: 26000,
      rutaImagen: "./img/collares/plateados/img2.jpg",
      stock: 3,
    },
    {
      id: 39,
      nombre: "Collar Aurora Plateada",
      tipo: "collar",
      color: "plateados",
      precio: 24000,
      rutaImagen: "./img/collares/plateados/img3.jpg",
      stock: 10,
    },
    {
      id: 40,
      nombre: "Collar Brillo Lunar",
      tipo: "collar",
      color: "plateados",
      precio: 23000,
      rutaImagen: "./img/collares/plateados/img4.jpg",
      stock: 8,
    },
    {
      id: 41,
      nombre: "Collar Pureza Plateada",
      tipo: "collar",
      color: "plateados",
      precio: 27000,
      rutaImagen: "./img/collares/plateados/img5.jpg",
      stock: 6,
    },
    {
      id: 42,
      nombre: "Collar Elegancia Plateada",
      tipo: "collar",
      color: "plateados",
      precio: 28000,
      rutaImagen: "./img/collares/plateados/img6.jpg",
      stock: 14,
    },

    // Pulseras doradas
    {
      id: 43,
      nombre: "Pulsera Oro Clásico",
      tipo: "pulsera",
      color: "dorados",
      precio: 19000,
      rutaImagen: "./img/pulseras/dorados/img1.jpg",
      stock: 20,
    },
    {
      id: 44,
      nombre: "Pulsera Sol Dorado",
      tipo: "pulsera",
      color: "dorados",
      precio: 21000,
      rutaImagen: "./img/pulseras/dorados/img2.jpg",
      stock: 7,
    },
    {
      id: 45,
      nombre: "Pulsera Elegante Dorada",
      tipo: "pulsera",
      color: "dorados",
      precio: 23000,
      rutaImagen: "./img/pulseras/dorados/img3.jpg",
      stock: 5,
    },
    {
      id: 46,
      nombre: "Pulsera Espléndida",
      tipo: "pulsera",
      color: "dorados",
      precio: 20000,
      rutaImagen: "./img/pulseras/dorados/img4.jpg",
      stock: 12,
    },
    {
      id: 47,
      nombre: "Pulsera Dorada Viva",
      tipo: "pulsera",
      color: "dorados",
      precio: 18000,
      rutaImagen: "./img/pulseras/dorados/img5.jpg",
      stock: 4,
    },
    {
      id: 48,
      nombre: "Pulsera Resplandor Dorado",
      tipo: "pulsera",
      color: "dorados",
      precio: 25000,
      rutaImagen: "./img/pulseras/dorados/img6.jpg",
      stock: 18,
    },
    {
      id: 49,
      nombre: "Pulsera Delicada",
      tipo: "pulsera",
      color: "dorados",
      precio: 24000,
      rutaImagen: "./img/pulseras/dorados/img7.jpg",
      stock: 11,
    },
    {
      id: 50,
      nombre: "Pulsera Radiante",
      tipo: "pulsera",
      color: "dorados",
      precio: 22000,
      rutaImagen: "./img/pulseras/dorados/img8.jpg",
      stock: 9,
    },

    // Pulseras plateadas
    {
      id: 51,
      nombre: "Pulsera Lunar",
      tipo: "pulsera",
      color: "plateados",
      precio: 16000,
      rutaImagen: "./img/pulseras/plateados/img1.jpg",
      stock: 3,
    },
    {
      id: 52,
      nombre: "Pulsera Estrella Plateada",
      tipo: "pulsera",
      color: "plateados",
      precio: 17000,
      rutaImagen: "./img/pulseras/plateados/img2.jpg",
      stock: 1,
    },
    {
      id: 53,
      nombre: "Pulsera Aurora Plateada",
      tipo: "pulsera",
      color: "plateados",
      precio: 19000,
      rutaImagen: "./img/pulseras/plateados/img3.jpg",
      stock: 7,
    },
  ];

  let carrito = recuperarCarritoDelStorage();

  renderizarCarrito(carrito);
  crearCardsProductos(productos, carrito);

  let botonCarrito = document.getElementById("boton-carrito");
  botonCarrito.addEventListener("click", verOcultarCarrito);

  let cerrarCarrito = document.getElementById("cerrar-carrito");
  cerrarCarrito.addEventListener("click", verOcultarCarrito);

  let botonMenorAMayor = document.getElementById("menorAMayor");
  botonMenorAMayor.addEventListener("click", () =>
    ordenarDeMenorAMayor(productos)
  );

  let botonMayorAMenor = document.getElementById("mayorAMenor");
  botonMayorAMenor.addEventListener("click", () =>
    ordenarDeMayorAMenor(productos)
  );

  let botonPlateado = document.getElementById("color-plateado");
  botonPlateado.addEventListener("click", () =>
    filtrarPorColor(productos, "plateados")
  );

  let botonDorado = document.getElementById("color-dorado");
  botonDorado.addEventListener("click", () =>
    filtrarPorColor(productos, "dorados")
  );

  let categoryFilters = Array.from(
    document.getElementsByClassName("category-filter")
  );

  categoryFilters.forEach((filter) => {
    filter.addEventListener("click", (event) => {
      event.preventDefault();
      const categoriaSeleccionada = filter.dataset.category.toLowerCase();
      const productosFiltrados = productos.filter(
        (producto) => producto.tipo.toLowerCase() === categoriaSeleccionada
      );
      crearCardsProductos(productosFiltrados, carrito);
    });
  });

  let botonesAgregarproductos = document.getElementsByClassName("card-button");

  for (const boton of botonesAgregarproductos) {
    boton.addEventListener("click", (e) =>
      agregarProductoAlCarrito(e, productos)
    );
  }

  let inputBuscar = document.getElementById("inputBuscar");
  inputBuscar.addEventListener("change", (e) =>
    filtrarYrenderizar(e, productos, carrito)
  );

  let botonBuscar = document.getElementById("botonBuscar");
  botonBuscar.addEventListener("click", (e) =>
    filtrarYrenderizarConBoton(inputBuscar, productos)
  );

  let botonFinalizarCompra = document.getElementById("boton-finalizar-compra");
  botonFinalizarCompra.addEventListener("click", () => finalizarCompra());
}

funcionPrincipal();

function calcularTotal(productos) {
  return productos.reduce((acum, producto) => acum + producto.subtotal, 0);
}

function actualizarTotal(total) {
  let elementoTotal = document.getElementById("total");
  elementoTotal.innerHTML = "$" + total;
}

function finalizarCompra() {
  renderizarCarrito([]);
  localStorage.removeItem("carrito");
  localStorage.setItem("carrito", JSON.stringify([]));

  let carrito = document.getElementById("carrito");

  function agradecimientoCompra() {
    const agradecimiento = document.getElementById("graciasPorTuCompra");
    const botonVolver = document.getElementById("volverInicio");

    agradecimiento.style.display = "flex";

    botonVolver.addEventListener("click", () => {
      window.location.href = "./index.html";
    });
  }

  agradecimientoCompra();
}

function filtrarYrenderizarConBoton(input, productos) {
  let productosFiltrados = filtrar(input.value, productos);
  crearCardsProductos(productosFiltrados);
}

function filtrarYrenderizar(e, productos, carrito) {
  let arrayFiltrado = filtrar(e.target.value, productos);

  let sinResultados = document.getElementById("sin-resultados");
  arrayFiltrado.length === 0
    ? sinResultados.classList.remove("oculto")
    : sinResultados.classList.add("oculto");

  crearCardsProductos(arrayFiltrado, carrito);
}

function filtrar(valor, productos) {
  const query = valor.toLowerCase();
  return productos.filter(
    (producto) =>
      producto.nombre.toLowerCase().includes(query) ||
      producto.tipo.toLowerCase().includes(query) ||
      producto.color.toLowerCase().includes(query)
  );
}

function agregarProductoAlCarrito(event, productos) {
  carrito = recuperarCarritoDelStorage();

  let id = Number(event.target.id.substring(3));
  let productoOriginal = productos.find((producto) => producto.id === id);
  let indiceProductoEnCarrito = carrito.findIndex(
    (producto) => producto.id === id
  );

  if (indiceProductoEnCarrito === -1) {
    carrito.push({
      id: productoOriginal.id,
      nombre: productoOriginal.nombre,
      precioUnitario: productoOriginal.precio,
      unidades: 1,
      subtotal: productoOriginal.precio,
      rutaImagen: productoOriginal.rutaImagen,
    });
  } else {
    carrito[indiceProductoEnCarrito].unidades++;
    carrito[indiceProductoEnCarrito].subtotal =
      carrito[indiceProductoEnCarrito].precioUnitario *
      carrito[indiceProductoEnCarrito].unidades;
  }

  function mostrarPopup() {
    const popup = document.getElementById("popup");
    popup.classList.add("mostrar");

    setTimeout(() => {
      popup.classList.remove("mostrar");
    }, 2000);
  }

  mostrarPopup();
  guardarEnStorage(carrito);
  renderizarCarrito(carrito);
}

function crearCardsProductos(productos, carrito) {
  let contenedor = document.getElementById("containerCards");
  contenedor.innerHTML = "";
  productos.forEach((producto) => {
    let mensaje =
      producto.stock <= 5
        ? "Quedan pocas unidades"
        : `${producto.stock} unidades disponibles`;

    let cardProducto = document.createElement("article");
    cardProducto.className = "card";

    cardProducto.innerHTML += `
      <img class="card-img" src="${producto.rutaImagen}" alt="${producto.nombre}" />
      <div class="card-detail">
        <span class="card-detail-name">${producto.nombre}</span>
        <span class="card-detail-price">${producto.precio}</span>
        <span class="card-detail-stock">${mensaje}</span>
      </div>
      <button id="agc${producto.id}" class="card-button">Agregar al carrito</button>
    `;

    contenedor.appendChild(cardProducto);
  });

  const botonesAgregar = document.querySelectorAll(".card-button");
  botonesAgregar.forEach((boton) => {
    boton.addEventListener("click", (e) =>
      agregarProductoAlCarrito(e, productos)
    );
  });
}

function filtrarPorColor(productos, color) {
  const productosFiltrados = productos.filter(
    (producto) => producto.color === color
  );
  crearCardsProductos(productosFiltrados, carrito);
}

function ordenarDeMenorAMayor(productos) {
  const productosOrdenados = [...productos].sort((a, b) => a.precio - b.precio);
  crearCardsProductos(productosOrdenados);
}

function ordenarDeMayorAMenor(productos) {
  const productosOrdenados = [...productos].sort((a, b) => b.precio - a.precio);
  crearCardsProductos(productosOrdenados);
}

function reiniciarEventos(productos) {
  let botonesAgregarproductos = document.getElementsByClassName("card-button");
  for (const boton of botonesAgregarproductos) {
    boton.addEventListener("click", (e) =>
      agregarProductoAlCarrito(e, productos, carrito)
    );
  }
}

function verOcultarCarrito() {
  const carrito = document.getElementById("carrito");
  const cerrarCarrito = document.getElementById("cerrar-carrito");

  carrito.classList.toggle("oculto");
  cerrarCarrito.classList.toggle("oculto");
  document.body.classList.toggle("no-scroll");
}

function actualizarEstadoCarrito() {
  const carritoItems = document.getElementById("carrito-items");
  const mensajeCarritoVacio = document.getElementById("mensajeCarritoVacio");
  const botonFinalizarCompra = document.getElementById(
    "boton-finalizar-compra"
  );
  const total = document.getElementById("total");

  if (carritoItems.children.length === 0) {
    mensajeCarritoVacio.style.display = "block";
    botonFinalizarCompra.style.display = "none";
    total.style.display = "none";
  } else {
    mensajeCarritoVacio.style.display = "none";
    botonFinalizarCompra.style.display = "block";
    total.style.display = "block";
  }
}
actualizarEstadoCarrito();

function renderizarCarrito(carrito) {
  let contenedorCarrito = document.getElementById("carrito-items");
  contenedorCarrito.innerHTML = "";
  carrito.forEach((producto) => {
    let carritoItem = document.createElement("div");
    carritoItem.className = "carrito-item";
    carritoItem.id = "cit" + producto.id;

    let subtotalProducto = producto.precioUnitario * producto.unidades;

    carritoItem.innerHTML = `
      <div class="carrito-item-left">
        <img
          class="carrito-item-img"
          src="${producto.rutaImagen}"
          alt="${producto.nombre}"
        />
        <p class="carrito-item-description">
          ${producto.nombre}
        </p>
        <div class="carrito-quantity-selector">
          <button
            id=run${producto.id}
            class="carrito-quantity-selector-decrease"
            aria-label="Disminuir cantidad"
          >-</button>
          <input
            class="carrito-quantity-selector-input"
            type="number"
            value="${producto.unidades}"
            min="1"
            aria-label="Cantidad de productos"
          />
          <button
            id=sun${producto.id}
            class="carrito-quantity-selector-increase"
            aria-label="Aumentar cantidad"
          >
            +
          </button>
        </div>
      </div>
      <div class="carrito-subtotal">${subtotalProducto}
      </div>
      <button id="eli${producto.id}" class="carrito-trash-icon">
        <svg
          width="128"
          height="128"
          viewBox="0 0 128 128"
          aria-labelledby="title description"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title id="title">Trash Icon</title>
          <desc id="description">This is a trash icon</desc>

          <rect
            x="32"
            y="40"
            width="64"
            height="76"
            stroke="#25313C"
            stroke-width="6"
            fill="transparent"
            rx="1"
            ry="1"
          />
          <polygon
            points="28,24 100,24 104,40 24,40"
            stroke="#25313C"
            stroke-width="6"
            fill="transparent"
            stroke-linejoin="round"
          />
          <rect
            x="56"
            y="12"
            width="16"
            height="12"
            stroke="#25313C"
            stroke-width="6"
            fill="transparent"
            rx="1"
            ry="1"
          />
          <line
            x1="48"
            y1="92"
            x2="48"
            y2="68"
            stroke="#25313C"
            stroke-width="6"
            stroke-linecap="round"
          />
          <line
            x1="64"
            y1="92"
            x2="64"
            y2="68"
            stroke="#25313C"
            stroke-width="6"
            stroke-linecap="round"
          />
          <line
            x1="80"
            y1="92"
            x2="80"
            y2="68"
            stroke="#25313C"
            stroke-width="6"
            stroke-linecap="round"
          />
        </svg>
      </button>       
    `;
    contenedorCarrito.appendChild(carritoItem);
    actualizarEstadoCarrito();

    let botonEliminar = document.getElementById("eli" + producto.id);
    botonEliminar.addEventListener("click", eliminarProductoDelCarrito);

    let botonRestarUnidad = document.getElementById("run" + producto.id);
    botonRestarUnidad.addEventListener("click", restarUnidadProdCarrito);

    let botonSumarUnidad = document.getElementById("sun" + producto.id);
    botonSumarUnidad.addEventListener("click", sumarUnidadProdCarrito);
  });

  const total = calcularTotal(carrito);
  actualizarTotal(total);
}

function sumarUnidadProdCarrito(e) {
  let id = Number(e.target.id.substring(3));

  let carrito = recuperarCarritoDelStorage();
  let indiceProducto = carrito.findIndex((producto) => producto.id === id);

  if (indiceProducto !== -1) {
    carrito[indiceProducto].unidades++;
    carrito[indiceProducto].subtotal =
      carrito[indiceProducto].precioUnitario * carrito[indiceProducto].unidades;
    guardarEnStorage(carrito);

    e.target.parentElement.children[1].innerText =
      carrito[indiceProducto].unidades;
    renderizarCarrito(carrito);
  }
}

function restarUnidadProdCarrito(e) {
  let id = Number(e.target.id.substring(3));

  let carrito = recuperarCarritoDelStorage();
  let indiceProducto = carrito.findIndex((producto) => producto.id === id);

  if (indiceProducto !== -1) {
    carrito[indiceProducto].unidades--;

    if (carrito[indiceProducto].unidades === 0) {
      carrito.splice(indiceProducto, 1);
      guardarEnStorage(carrito);

      let filaProducto = e.target.closest(".carrito-item");
      if (filaProducto) filaProducto.remove();
    } else {
      carrito[indiceProducto].subtotal =
        carrito[indiceProducto].precioUnitario *
        carrito[indiceProducto].unidades;

      guardarEnStorage(carrito);

      e.target.parentElement.children[1].value =
        carrito[indiceProducto].unidades;
      e.target
        .closest(".carrito-item")
        .querySelector(".carrito-subtotal").innerText =
        carrito[indiceProducto].subtotal;
    }
  }
  const total = calcularTotal(carrito);
  actualizarTotal(total);

  actualizarEstadoCarrito();
}

function eliminarProductoDelCarrito(e) {
  let id = Number(e.currentTarget.id.substring(3));
  let carrito = recuperarCarritoDelStorage();
  let indiceProducto = carrito.findIndex((producto) => producto.id === id);

  if (indiceProducto !== -1) {
    carrito.splice(indiceProducto, 1);
    let tarjetaCarrito = document.getElementById("cit" + id);
    tarjetaCarrito.remove();
  }

  const total = calcularTotal(carrito);
  actualizarTotal(total);

  guardarEnStorage(carrito);
  actualizarEstadoCarrito();
}

function guardarEnStorage(valor) {
  let valorJson = JSON.stringify(valor);
  localStorage.setItem("carrito", valorJson);
}

function recuperarCarritoDelStorage() {
  return JSON.parse(localStorage.getItem("carrito")) ?? [];
}
