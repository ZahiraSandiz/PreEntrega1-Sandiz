function pedirProductos() {
  fetch("./data/info.json")
    .then((response) => response.json(response))
    .then((productos) => funcionPrincipal(productos))
    .catch((error) => console.log(error, "Algo salió mal en el info.json"));
}

pedirProductos(true);

function funcionPrincipal(productos) {
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

  let botonComprar = document.getElementById("comprar");
  botonComprar.disabled = true;
  botonComprar.addEventListener("click", () => comprar());

  let formularioEnvio = document.getElementById("formularioEnvio");
  formularioEnvio.addEventListener("submit", (e) =>
    capturarDatosFormularioEnvio(e, botonComprar)
  );

  let botonBorrarTodo = document.getElementById("botonBorrarTodo");
  botonBorrarTodo.addEventListener("click", borrarTodoElCarrito);
}

function borrarTodoElCarrito() {
  Swal.fire({
    title: "¿Estás seguro de eliminar todo el carrito?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Si, eliminar todo",
    cancelButtonText: "No, cancelar",
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        title: "Hecho",
        text: "Se han eliminado todos los productos del carrito",
        icon: "success",
      });
      carrito = [];
      guardarEnStorage(carrito);
      renderizarCarrito(carrito);
      renderizarProductosMiCompra(carrito);
      botonBorrarTodo.style.display = "none";
    }
  });
}

function capturarDatosFormularioEnvio(e, botonComprar) {
  e.preventDefault();

  const datosComprador = {
    provincia: document.getElementById("provincia").value.trim(),
    localidad: document.getElementById("localidad").value.trim(),
    codigoPostal: document.getElementById("codigo-postal").value.trim(),
    calle: document.getElementById("calle").value.trim(),
    numero: document.getElementById("numero").value.trim(),
    piso: document.getElementById("piso").value.trim(),
    nombre: document.getElementById("nombre").value.trim(),
    telefono: document.getElementById("telefono").value.trim(),
  };
  const camposObligatorios = [
    "provincia",
    "localidad",
    "codigoPostal",
    "calle",
    "numero",
    "nombre",
    "telefono",
  ];
  const datosCompletos = camposObligatorios.every(
    (campo) => datosComprador[campo]
  );

  localStorage.setItem("datosComprador", JSON.stringify(datosComprador));

  Swal.fire({
    title: "Datos guardados correctamente",
    icon: "success",
    draggable: true,
  });

  const formularioEnvio = document.getElementById("formularioEnvio");
  formularioEnvio.style.display = "none";

  const formularioPago = document.getElementById("formularioPago");
  formularioPago.style.display = "inline-block";

  const envioDomicilio = document.getElementById("envioDomicilio");
  envioDomicilio.style.display = "flex";

  const total = document.getElementById("confirmarCompraTotal");
  total.style.display = "inline-block";

  capturarDatosFormularioPago();
}

function capturarDatosFormularioPago() {
  const formularioPago = document.getElementById("formularioPago");
  const botonFormularioPago = document.getElementById("botonFormularioPago");
  const botonComprar = document.getElementById("comprar");

  formularioPago.addEventListener("submit", (event) => {
    event.preventDefault();

    const numeroTarjeta = document
      .getElementById("numero-tarjeta")
      .value.trim();
    const vencimientoMes = document
      .getElementById("vencimiento-mes")
      .value.trim();
    const vencimientoAnio = document
      .getElementById("vencimiento-anio")
      .value.trim();
    const codigoSeguridad = document
      .getElementById("codigo-seguridad")
      .value.trim();
    const nombreTarjeta = document
      .getElementById("nombre-tarjeta")
      .value.trim();
    const dni = document.getElementById("dni").value.trim();

    if (
      numeroTarjeta &&
      vencimientoMes &&
      vencimientoAnio &&
      codigoSeguridad &&
      nombreTarjeta &&
      dni
    ) {
      localStorage.setItem("numeroTarjeta", numeroTarjeta);
      localStorage.setItem("vencimientoMes", vencimientoMes);
      localStorage.setItem("vencimientoAnio", vencimientoAnio);
      localStorage.setItem("codigoSeguridad", codigoSeguridad);
      localStorage.setItem("nombreTarjeta", nombreTarjeta);
      localStorage.setItem("dni", dni);

      Swal.fire({
        title: "Datos guardados correctamente",
        icon: "success",
        draggable: true,
      });

      botonComprar.disabled = false;
    }
  });
}

function comprar() {
  Swal.fire({
    title: "¿Querés comprar el carrito?",
    showCancelButton: true,
    confirmButtonColor: "#569a32",
    cancelButtonColor: "#d33",
    confirmButtonText: "Si, quiero",
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        title: "Su compra ha sido realizada",
        text: "Gracias por elegirnos.",
        icon: "success",
      }).then(() => {
        factura();
      });
    }
  });
}
function factura() {
  const facturaDeCompra = document.getElementById("facturaDeCompra");
  facturaDeCompra.innerHTML = "";

  const productos = recuperarCarritoDelStorage();

  const pantallaFacturaCompra = document.getElementById(
    "pantalla-factura-compra"
  );
  pantallaFacturaCompra.style.display = "flex";

  const datosComprador = JSON.parse(localStorage.getItem("datosComprador"));

  if (!datosComprador) {
    Swal.fire({
      title: "Error",
      text: "No hay datos del comprador disponibles.",
      icon: "error",
    });
    return;
  }

  const carrito = recuperarCarritoDelStorage();
  const totalCompra = calcularTotal(carrito);
  const costoEnvio = 8500;
  const totalConEnvio = totalCompra + costoEnvio;

  const datosDelComprador = document.createElement("div");
  datosDelComprador.className = "detalle-factura";

  datosDelComprador.innerHTML = `
    <h2>Datos del envío</h2>
    <p><strong>Nombre y Apellido:</strong> ${datosComprador.nombre}</p>
    <p><strong>Teléfono:</strong> ${datosComprador.telefono}</p>
    <p><strong>Calle:</strong> ${datosComprador.calle}</p>
    <p><strong>Altura:</strong> ${datosComprador.numero}</p>
    <p><strong>Piso:</strong> ${datosComprador.piso || "N/A"}</p>
    <p><strong>Localidad:</strong> ${datosComprador.localidad}</p>
    <p><strong>Provincia:</strong> ${datosComprador.provincia}</p>
    <p><strong>Código Postal:</strong> ${datosComprador.codigoPostal}</p>
  `;
  facturaDeCompra.appendChild(datosDelComprador);

  const datosDeLaCompra = document.createElement("div");
  datosDeLaCompra.className = "datos-de-la-compra";

  const titulo = document.createElement("h2");
  titulo.className = "datos-de-la-compra__titulo";
  titulo.innerText = "Productos";
  datosDeLaCompra.appendChild(titulo);

  productos.forEach((producto) => {
    let productoItem = document.createElement("div");
    productoItem.className = "mi-compra__row";

    let subtotalProducto = producto.precioUnitario * producto.unidades;

    productoItem.innerHTML = `
      <img class="mi-compra__img" src="${producto.rutaImagen}" alt="${producto.nombre}" />
      <div class="mi-compra__container-info-producto">
        <div class="mi-compra__info-producto">
          <p>${producto.nombre}</p>
          <p>${producto.unidades} unidades</p>
        </div>
        <div class="mi-compra__info-producto-precio">$ ${subtotalProducto}</div>
      </div>`;
    datosDeLaCompra.appendChild(productoItem);
  });
  facturaDeCompra.appendChild(datosDeLaCompra);

  const total = document.createElement("div");
  total.className = "datos-de-la-compra__total";
  total.innerHTML = `
    <p><strong>Valor de la compra:</strong> $${totalCompra.toLocaleString()}</p>
    <p><strong>Valor del envío:</strong> $${costoEnvio.toLocaleString()}</p>
    <p><strong>Total:</strong> $${totalConEnvio.toLocaleString()}</p>
  `;
  datosDeLaCompra.appendChild(total);

  localStorage.removeItem("datosComprador");

  const botonComprar = document.getElementById("comprar");
  if (botonComprar) {
    botonComprar.disabled = true;
  }

  const botonVolverInicio = document.getElementById("volverInicio");
  botonVolverInicio.addEventListener("click", () => {
    window.location.href = "./index.html";
  });

  renderizarCarrito([]);
  localStorage.removeItem("carrito");
  localStorage.setItem("carrito", JSON.stringify([]));
}

function calcularTotal(productos) {
  return productos.reduce((acum, producto) => acum + producto.subtotal, 0);
}

function actualizarTotal(total) {
  let elementoTotal = document.getElementById("total");
  elementoTotal.innerHTML = "$" + total;
}

function finalizarCompra() {
  const pantallaFinalizarCompra = document.getElementById(
    "pantallaFinalizarCompra"
  );
  pantallaFinalizarCompra.style.display = "block";

  const botonVolverAlCarrito = document.getElementById("volverAlCarrito");
  botonVolverAlCarrito.addEventListener("click", () => {
    pantallaFinalizarCompra.style.display = "none";
  });

  const botonVolverAlInicio = document.getElementById("botonVolverAlInicio");

  botonVolverAlInicio.addEventListener("click", () => {
    window.location.href = "./index.html";
  });
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
  renderizarProductosMiCompra(carrito);
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
  const botonBorrarTodo = document.getElementById("botonBorrarTodo");

  if (carritoItems.children.length === 0) {
    mensajeCarritoVacio.style.display = "flex";
    botonFinalizarCompra.style.display = "none";
    total.style.display = "none";
    botonBorrarTodo.style.display = "none";
  } else {
    mensajeCarritoVacio.style.display = "none";
    botonFinalizarCompra.style.display = "block";
    total.style.display = "block";
    botonBorrarTodo.style.display = "block";
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
    renderizarProductosMiCompra(carrito);
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
  renderizarProductosMiCompra(carrito);
}

function eliminarProductoDelCarrito(e) {
  let id = Number(e.currentTarget.id.substring(3));
  let carrito = recuperarCarritoDelStorage();

  let indiceProducto = carrito.findIndex((producto) => producto.id === id);

  Swal.fire({
    title: "¿Estás seguro de eliminar este producto del carrito?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Si, eliminar",
    cancelButtonText: "No, cancelar",
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        title: "Hecho",
        text: "El producto ha sido eliminado del carrito",
        icon: "success",
      });
      if (indiceProducto !== -1) {
        carrito.splice(indiceProducto, 1);
        let tarjetaCarrito = document.getElementById("cit" + id);
        tarjetaCarrito.remove();
      }
    }
    const total = calcularTotal(carrito);
    actualizarTotal(total);
    guardarEnStorage(carrito);
    actualizarEstadoCarrito();
    renderizarProductosMiCompra(carrito);
  });
}

function guardarEnStorage(valor) {
  let valorJson = JSON.stringify(valor);
  localStorage.setItem("carrito", valorJson);
}

function recuperarCarritoDelStorage() {
  return JSON.parse(localStorage.getItem("carrito")) ?? [];
}

function renderizarProductosMiCompra(productos) {
  let carrito = recuperarCarritoDelStorage();
  let contenedorMiCompra = document.getElementById("miCompra");
  contenedorMiCompra.innerHTML = "";

  productos.forEach((producto) => {
    let productoItem = document.createElement("div");
    productoItem.className = "mi-compra__row";
    let subtotalProducto = producto.precioUnitario * producto.unidades;

    productoItem.innerHTML = `
      <img class="mi-compra__img" src="${producto.rutaImagen}" alt="${producto.nombre}" />
      <div class="mi-compra__container-info-producto">
        <div class="mi-compra__info-producto">
          <p>${producto.nombre}</p>
          <p>${producto.unidades} unidades</p>
        </div>
        <div class="mi-compra__info-producto-precio">$ ${subtotalProducto}</div>
      </div>`;

    contenedorMiCompra.appendChild(productoItem);
  });

  const total = calcularTotal(carrito);

  const totalCompra = document.getElementById("totalDeLaCompra");
  totalCompra.innerHTML = `$ ${total}`;

  const cuentaFinal = total + 8500;

  const compraMasEnvio = document.getElementById("compraMasEnvio");
  compraMasEnvio.innerHTML = `$ ${cuentaFinal}`;

  actualizarTotal(total);
  guardarEnStorage(carrito);
  actualizarEstadoCarrito();
}

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
renderizarProductosMiCompra(carrito);
