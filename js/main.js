class Producto {
  constructor(imagen, nombre, precio) {
    this.imagen = imagen;
    this.nombre = nombre;
    this.precio = precio;
  }
}

let total = 0;

const producto1 = new Producto("./img/Pintura.PNG", "Pintura", 100);
const producto2 = new Producto("./img/Brocha.PNG", "Brocha", 50);
const producto3 = new Producto("./img/Thinner.PNG", "Thinner", 30);

const productos = [];

productos.push(producto1);
productos.push(producto2);
productos.push(producto3);

function catalogo(productos) {
  const contenedorProductos = document.getElementById("contenedor-productos");
  contenedorProductos.innerHTML = "";
  productos.forEach((producto) => {
    const divProducto = document.createElement("div");
    divProducto.classList.add("card");
    divProducto.innerHTML = `
        <img src="${producto.imagen}" alt="${producto.nombre}">
        <div>
            <p>${producto.nombre}</p>
            <p>${producto.precio}</p>
        </div>
          `;
    const botonAgregarCarrito = document.createElement("button");
    botonAgregarCarrito.innerText = "Agregar al carrito";
    botonAgregarCarrito.classList.add("addToCart");
    botonAgregarCarrito.addEventListener("click", () => {
      total += producto.precio;
      verTotal();
    });

    divProducto.appendChild(botonAgregarCarrito);

    contenedorProductos.appendChild(divProducto);
  });
}

function verTotal() {
  const h2total = document.getElementById("total");
  h2total.innerHTML = "";
  h2total.innerHTML = `
        El valor de su compra es: ${total} 
        `;
}

catalogo(productos);
