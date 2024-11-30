function funcionPrincipal() {
  const productos = [
    // Anillos dorados
    {
      id: 1,
      nombre: "Anillo Sol Dorado",
      tipo: "anillo",
      color: "dorado",
      precio: 18000,
      rutaImagen: "./img/anillos/dorados/img1.jpg",
      stock: 17,
    },
    {
      id: 2,
      nombre: "Anillo Brillo Lunar",
      tipo: "anillo",
      color: "dorado",
      precio: 22000,
      rutaImagen: "./img/anillos/dorados/img2.jpg",
      stock: 12,
    },
    {
      id: 3,
      nombre: "Anillo Destello",
      tipo: "anillo",
      color: "dorado",
      precio: 20000,
      rutaImagen: "./img/anillos/dorados/img3.jpg",
      stock: 1,
    },
    {
      id: 4,
      nombre: "Anillo Elegancia",
      tipo: "anillo",
      color: "dorado",
      precio: 25000,
      rutaImagen: "./img/anillos/dorados/img4.jpg",
      stock: 17,
    },
    {
      id: 5,
      nombre: "Anillo Oro Vivo",
      tipo: "anillo",
      color: "dorado",
      precio: 19000,
      rutaImagen: "./img/anillos/dorados/img5.jpg",
      stock: 13,
    },
    {
      id: 6,
      nombre: "Anillo Real Dorado",
      tipo: "anillo",
      color: "dorado",
      precio: 23000,
      rutaImagen: "./img/anillos/dorados/img6.jpg",
      stock: 7,
    },
    {
      id: 7,
      nombre: "Anillo Resplandor",
      tipo: "anillo",
      color: "dorado",
      precio: 24000,
      rutaImagen: "./img/anillos/dorados/img7.jpg",
      stock: 15,
    },
    {
      id: 8,
      nombre: "Anillo Fulgor",
      tipo: "anillo",
      color: "dorado",
      precio: 21000,
      rutaImagen: "./img/anillos/dorados/img8.jpg",
      stock: 5,
    },

    // Anillos plateados
    {
      id: 9,
      nombre: "Anillo Luna Plateada",
      tipo: "anillo",
      color: "plateado",
      precio: 16000,
      rutaImagen: "./img/anillos/plateados/img1.jpg",
      stock: 9,
    },
    {
      id: 10,
      nombre: "Anillo Brillo de Noche",
      tipo: "anillo",
      color: "plateado",
      precio: 17000,
      rutaImagen: "./img/anillos/plateados/img2.jpg",
      stock: 18,
    },
    {
      id: 11,
      nombre: "Anillo Plata Pura",
      tipo: "anillo",
      color: "plateado",
      precio: 18000,
      rutaImagen: "./img/anillos/plateados/img3.jpg",
      stock: 11,
    },
    {
      id: 12,
      nombre: "Anillo Estrella",
      tipo: "anillo",
      color: "plateado",
      precio: 19000,
      rutaImagen: "./img/anillos/plateados/img4.jpg",
      stock: 4,
    },
    {
      id: 13,
      nombre: "Anillo Aurora Plateada",
      tipo: "anillo",
      color: "plateado",
      precio: 20000,
      rutaImagen: "./img/anillos/plateados/img5.jpg",
      stock: 16,
    },

    // Aritos dorados
    {
      id: 14,
      nombre: "Aritos Oro Clásico",
      tipo: "arito",
      color: "dorado",
      precio: 15000,
      rutaImagen: "./img/aritos/dorados/img1.jpg",
      stock: 6,
    },
    {
      id: 15,
      nombre: "Aritos Esfera Dorada",
      tipo: "arito",
      color: "dorado",
      precio: 17000,
      rutaImagen: "./img/aritos/dorados/img2.jpg",
      stock: 14,
    },
    {
      id: 16,
      nombre: "Aritos Sol",
      tipo: "arito",
      color: "dorado",
      precio: 16000,
      rutaImagen: "./img/aritos/dorados/img3.jpg",
      stock: 20,
    },
    {
      id: 17,
      nombre: "Aritos Resplandor",
      tipo: "arito",
      color: "dorado",
      precio: 18000,
      rutaImagen: "./img/aritos/dorados/img4.jpg",
      stock: 8,
    },
    {
      id: 18,
      nombre: "Aritos Delicados",
      tipo: "arito",
      color: "dorado",
      precio: 19000,
      rutaImagen: "./img/aritos/dorados/img5.jpg",
      stock: 10,
    },
    {
      id: 19,
      nombre: "Aritos Estrella Dorada",
      tipo: "arito",
      color: "dorado",
      precio: 21000,
      rutaImagen: "./img/aritos/dorados/img6.jpg",
      stock: 3,
    },
    {
      id: 20,
      nombre: "Aritos Brillo Solar",
      tipo: "arito",
      color: "dorado",
      precio: 22000,
      rutaImagen: "./img/aritos/dorados/img7.jpg",
      stock: 19,
    },
    {
      id: 21,
      nombre: "Aritos Oro Fino",
      tipo: "arito",
      color: "dorado",
      precio: 23000,
      rutaImagen: "./img/aritos/dorados/img8.jpg",
      stock: 12,
    },

    // Aritos plateados
    {
      id: 22,
      nombre: "Aritos Plata Lunar",
      tipo: "arito",
      color: "plateado",
      precio: 16000,
      rutaImagen: "./img/aritos/plateados/img1.jpg",
      stock: 8,
    },
    {
      id: 23,
      nombre: "Aritos Estelar",
      tipo: "arito",
      color: "plateado",
      precio: 15000,
      rutaImagen: "./img/aritos/plateados/img2.jpg",
      stock: 4,
    },
    {
      id: 24,
      nombre: "Aritos Mini Plata",
      tipo: "arito",
      color: "plateado",
      precio: 17000,
      rutaImagen: "./img/aritos/plateados/img3.jpg",
      stock: 14,
    },
    {
      id: 25,
      nombre: "Aritos Aurora Plateada",
      tipo: "arito",
      color: "plateado",
      precio: 18000,
      rutaImagen: "./img/aritos/plateados/img4.jpg",
      stock: 7,
    },
    {
      id: 26,
      nombre: "Aritos Delicados Plateados",
      tipo: "arito",
      color: "plateado",
      precio: 19000,
      rutaImagen: "./img/aritos/plateados/img5.jpg",
      stock: 11,
    },

    // Collares dorados
    {
      id: 27,
      nombre: "Collar Sol Dorado",
      tipo: "collar",
      color: "dorado",
      precio: 28000,
      rutaImagen: "./img/collares/dorados/img1.jpg",
      stock: 13,
    },
    {
      id: 28,
      nombre: "Collar Oro Real",
      tipo: "collar",
      color: "dorado",
      precio: 30000,
      rutaImagen: "./img/collares/dorados/img2.jpg",
      stock: 2,
    },
    {
      id: 29,
      nombre: "Collar Delicado Dorado",
      tipo: "collar",
      color: "dorado",
      precio: 27000,
      rutaImagen: "./img/collares/dorados/img3.jpg",
      stock: 18,
    },
    {
      id: 30,
      nombre: "Collar Brillo Solar",
      tipo: "collar",
      color: "dorado",
      precio: 29000,
      rutaImagen: "./img/collares/dorados/img4.jpg",
      stock: 8,
    },
    {
      id: 31,
      nombre: "Collar Elegancia",
      tipo: "collar",
      color: "dorado",
      precio: 31000,
      rutaImagen: "./img/collares/dorados/img5.jpg",
      stock: 14,
    },
    {
      id: 32,
      nombre: "Collar Radiante",
      tipo: "collar",
      color: "dorado",
      precio: 32000,
      rutaImagen: "./img/collares/dorados/img6.jpg",
      stock: 4,
    },
    {
      id: 33,
      nombre: "Collar Esplendor Dorado",
      tipo: "collar",
      color: "dorado",
      precio: 35000,
      rutaImagen: "./img/collares/dorados/img7.jpg",
      stock: 9,
    },
    {
      id: 34,
      nombre: "Collar Fulgor",
      tipo: "collar",
      color: "dorado",
      precio: 33000,
      rutaImagen: "./img/collares/dorados/img8.jpg",
      stock: 16,
    },
    {
      id: 35,
      nombre: "Collar Oro Vivo",
      tipo: "collar",
      color: "dorado",
      precio: 29000,
      rutaImagen: "./img/collares/dorados/img9.jpg",
      stock: 7,
    },
    {
      id: 36,
      nombre: "Collar Dorado Supremo",
      tipo: "collar",
      color: "dorado",
      precio: 34000,
      rutaImagen: "./img/collares/dorados/img10.jpg",
      stock: 12,
    },

    // Collares plateados
    {
      id: 37,
      nombre: "Collar Luna Plateada",
      tipo: "collar",
      color: "plateado",
      precio: 25000,
      rutaImagen: "./img/collares/plateados/img1.jpg",
      stock: 15,
    },
    {
      id: 38,
      nombre: "Collar Plata Estelar",
      tipo: "collar",
      color: "plateado",
      precio: 26000,
      rutaImagen: "./img/collares/plateados/img2.jpg",
      stock: 3,
    },
    {
      id: 39,
      nombre: "Collar Aurora Plateada",
      tipo: "collar",
      color: "plateado",
      precio: 24000,
      rutaImagen: "./img/collares/plateados/img3.jpg",
      stock: 10,
    },
    {
      id: 40,
      nombre: "Collar Brillo Lunar",
      tipo: "collar",
      color: "plateado",
      precio: 23000,
      rutaImagen: "./img/collares/plateados/img4.jpg",
      stock: 8,
    },
    {
      id: 41,
      nombre: "Collar Pureza Plateada",
      tipo: "collar",
      color: "plateado",
      precio: 27000,
      rutaImagen: "./img/collares/plateados/img5.jpg",
      stock: 6,
    },
    {
      id: 42,
      nombre: "Collar Elegancia Plateada",
      tipo: "collar",
      color: "plateado",
      precio: 28000,
      rutaImagen: "./img/collares/plateados/img6.jpg",
      stock: 14,
    },

    // Pulseras doradas
    {
      id: 43,
      nombre: "Pulsera Oro Clásico",
      tipo: "pulsera",
      color: "dorado",
      precio: 19000,
      rutaImagen: "./img/pulseras/dorados/img1.jpg",
      stock: 20,
    },
    {
      id: 44,
      nombre: "Pulsera Sol Dorado",
      tipo: "pulsera",
      color: "dorado",
      precio: 21000,
      rutaImagen: "./img/pulseras/dorados/img2.jpg",
      stock: 7,
    },
    {
      id: 45,
      nombre: "Pulsera Elegante Dorada",
      tipo: "pulsera",
      color: "dorado",
      precio: 23000,
      rutaImagen: "./img/pulseras/dorados/img3.jpg",
      stock: 5,
    },
    {
      id: 46,
      nombre: "Pulsera Espléndida",
      tipo: "pulsera",
      color: "dorado",
      precio: 20000,
      rutaImagen: "./img/pulseras/dorados/img4.jpg",
      stock: 12,
    },
    {
      id: 47,
      nombre: "Pulsera Dorada Viva",
      tipo: "pulsera",
      color: "dorado",
      precio: 18000,
      rutaImagen: "./img/pulseras/dorados/img5.jpg",
      stock: 4,
    },
    {
      id: 48,
      nombre: "Pulsera Resplandor Dorado",
      tipo: "pulsera",
      color: "dorado",
      precio: 25000,
      rutaImagen: "./img/pulseras/dorados/img6.jpg",
      stock: 18,
    },
    {
      id: 49,
      nombre: "Pulsera Delicada",
      tipo: "pulsera",
      color: "dorado",
      precio: 24000,
      rutaImagen: "./img/pulseras/dorados/img7.jpg",
      stock: 11,
    },
    {
      id: 50,
      nombre: "Pulsera Radiante",
      tipo: "pulsera",
      color: "dorado",
      precio: 22000,
      rutaImagen: "./img/pulseras/dorados/img8.jpg",
      stock: 9,
    },

    // Pulseras plateadas
    {
      id: 51,
      nombre: "Pulsera Lunar",
      tipo: "pulsera",
      color: "plateado",
      precio: 16000,
      rutaImagen: "./img/pulseras/plateados/img1.jpg",
      stock: 3,
    },
    {
      id: 52,
      nombre: "Pulsera Estrella Plateada",
      tipo: "pulsera",
      color: "plateado",
      precio: 17000,
      rutaImagen: "./img/pulseras/plateados/img2.jpg",
      stock: 1,
    },
    {
      id: 53,
      nombre: "Pulsera Aurora Plateada",
      tipo: "pulsera",
      color: "plateado",
      precio: 19000,
      rutaImagen: "./img/pulseras/plateados/img3.jpg",
      stock: 7,
    },
  ];
  crearCardsProductos(productos);
}

funcionPrincipal();

function crearCardsProductos(productos) {
  let contenedor = document.getElementById("containerCards");
  productos.forEach((producto) => {
    let mensaje = producto.stock;
    if (producto.stock <= 5) {
      mensaje = "Quedan pocas unidades";
    } else {
      mensaje = `${producto.stock} unidades diponibles`;
    }
    let cardProducto = document.createElement("article");
    cardProducto.className = "card";

    cardProducto.innerHTML += `
      <img class="card-img" src="${producto.rutaImagen}" alt=${producto.tipo}"
      />
      <div class="card-detail">
        <span class="card-detail-name">${producto.nombre}</span>
        <span class="card-detail-price">${producto.precio}</span>
        <span class="card-detail-stock">${mensaje}</span>
      </div>
      <button id="${producto.id}" class="card-button">Agregar al carrito</button>
    `;
    contenedor.appendChild(cardProducto);

    let botonAgregarAlCarrito = document.getElementById(producto.id);
    botonAgregarAlCarrito.addEventListener("click", agregarProductoAlCarrito);
  });
}

function agregarProductoAlCarrito(event) {
  console.log(event.target);
}
