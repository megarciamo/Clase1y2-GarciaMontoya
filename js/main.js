class Producto {
  constructor(imagen, nombre, precio) {
    this.imagen = imagen;
    this.nombre = nombre;
    this.precio = precio;
  }
}

class Carrito {
  constructor(nombre, cantidad, precio) {
    this.nombre = nombre;
    this.cantidad = cantidad;
    this.precio = precio;
  }
}

let nombreUsuario

document.getElementById("formulario-usuario").addEventListener("submit", manejadorFormularioUsuario)

function manejadorFormularioUsuario(e) {
    e.preventDefault()
    nombreUsuario = document.getElementById("user").value

    let ComprasPendientes = document.getElementById("ComprasPendientes")
    const pendientes = JSON.parse(localStorage.getItem(nombreUsuario))

    console.log(pendientes)

    if (pendientes == null || pendientes.length == 0) {
       ComprasPendientes.innerHTML = "<h1>No hay compras pendientes</h1>"
    } else {
      const CP = document.getElementById("CP")

      CP.innerHTML =
      `<h3>Bienvenido ${nombreUsuario}, a continuación puedes ver tus compras pendientes</h3>`;
        mostrarPendientes(pendientes)
        
    }
}


function mostrarPendientes(pendientes) {
  let ComprasPendientes = document.getElementById("ComprasPendientes")
  ComprasPendientes.innerHTML = ""

  pendientes.forEach(pendiente => {
      let li = document.createElement("li")
      li.innerHTML = `
       ${pendiente.nombre} - ${pendiente.cantidad} - ${pendiente.precio}`
      const botonBorrar = document.createElement("button")
      botonBorrar.innerText = "Borrar"
      botonBorrar.addEventListener("click", () => {
          eliminarpendiente(pendiente)
      })
      li.appendChild(botonBorrar)
      ComprasPendientes.appendChild(li)
  })   
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
  productos.forEach((producto, i) => {
    const divProducto = document.createElement("div");
    divProducto.classList.add("card");
    divProducto.innerHTML = `
        <img src="${producto.imagen}" alt="${producto.nombre}">
        <div>

        <form id="cantidad-alcarrito${i}">
        <p id="nombre${i}">${producto.nombre}</p>
        <p id="precio${i}"> $ ${producto.precio}</p>
    <input type="text" id="cantidad${i}" placeholder="Cantidad">
    <button type="submit">Agregar al carito</button>
    </form>`;



    contenedorProductos.appendChild(divProducto);

    document.getElementById(`cantidad-alcarrito${i}`).addEventListener("submit", function(event){
      agregarCarrito(i, event)
    })
  });
}

function agregarCarrito(i, e) {
  e.preventDefault()
  const nombre = document.getElementById(`nombre${i}`).innerHTML
  const cantidad = document.getElementById(`cantidad${i}`).value
  const precio = document.getElementById(`precio${i}`).innerHTML
  const carrito = new Carrito (nombre, cantidad, precio)

const itemsCarritoLocalStorage = JSON.parse(localStorage.getItem(nombreUsuario))
if (itemsCarritoLocalStorage == null) {
  localStorage.setItem(nombreUsuario, JSON.stringify([carrito]))
  mostrarPendientes([carrito])
}else {
  itemsCarritoLocalStorage.push(carrito)
  localStorage.setItem(nombreUsuario, JSON.stringify(itemsCarritoLocalStorage))
  mostrarPendientes(itemsCarritoLocalStorage)
}
e.target.reset()
}

function eliminarpendiente(carrito) {
  const itemsCarritoLocalStorage = JSON.parse(localStorage.getItem(nombreUsuario))
  const nuevoArray = itemsCarritoLocalStorage.filter(item => item.nombre != carrito.nombre)
  localStorage.setItem(nombreUsuario, JSON.stringify(nuevoArray))
  mostrarPendientes(nuevoArray)
}



catalogo(productos);