
alert("Ingrese un nombre de usuario para que la página funcione correctamente")

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

let nombreUsuario;

document
  .getElementById("formulario-usuario")
  .addEventListener("submit", manejadorFormularioUsuario);

function manejadorFormularioUsuario(e) {
  e.preventDefault();
  nombreUsuario = document.getElementById("user").value;

  let ComprasPendientes = document.getElementById("ComprasPendientes");
  const pendientes = JSON.parse(localStorage.getItem(nombreUsuario));

  console.log(pendientes);

  if (pendientes == null || pendientes.length == 0) {
    ComprasPendientes.innerHTML = "<h1>No hay compras pendientes</h1>";
  } else {
    const CP = document.getElementById("CP");

    CP.innerHTML = `<h3>Bienvenido ${nombreUsuario}, a continuación puedes ver tus compras pendientes</h3>`;
    mostrarPendientes(pendientes);
  }
}

function mostrarPendientes(pendientes) {
  let ComprasPendientes = document.getElementById("ComprasPendientes");
  ComprasPendientes.innerHTML = "";

  pendientes.forEach((pendiente) => {
    let li = document.createElement("li");
    li.innerHTML = `
       ${pendiente.nombre} - ${pendiente.cantidad} - ${pendiente.precio}`;
    const botonBorrar = document.createElement("button");
    botonBorrar.innerText = "Borrar";
    botonBorrar.addEventListener("click", () => {
      eliminarpendiente(pendiente);
    });
    li.appendChild(botonBorrar);
    ComprasPendientes.appendChild(li);
  });
}

function eliminarpendiente(carrito) {
  Swal.fire({
    title: "Estás seguro?",
    text: "No será posible revertirlo!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Sí, borralo!",
    cancelButtonText: "Cancelar!",
  }).then((result) => {
    if (result.isConfirmed) {
      const itemsCarritoLocalStorage = JSON.parse(
        localStorage.getItem(nombreUsuario)
      );
      const nuevoArray = itemsCarritoLocalStorage.filter(
        (item) => item.nombre != carrito.nombre
      );
      localStorage.setItem(nombreUsuario, JSON.stringify(nuevoArray));
      mostrarPendientes(nuevoArray);
      Swal.fire("Borrado!", "Su item ha sido borrado.", "success");
    }
  });
}

let total = 0;


const URL = 'js/data/products.json'


fetch ( URL )
  .then( res => res.json() )
  .then (data => { 
    const producto6 = new Producto(data[0].imagen, data[0].nombre, data[0].precio);
    const producto7 = new Producto(data[1].imagen, data[1].nombre, data[1].precio);
    const producto8 = new Producto(data[2].imagen, data[2].nombre, data[2].precio);
    
    const productos = [];

    productos.push(producto6);
    productos.push(producto7);
    productos.push(producto8);

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
        <input type="number" id="cantidad${i}" placeholder="Cantidad">
        <button type="submit">Agregar al carito</button>
        </form>`;
    
        contenedorProductos.appendChild(divProducto);
    
        document
          .getElementById(`cantidad-alcarrito${i}`)
          .addEventListener("submit", function (event) {
            agregarCarrito(i, event) });
      });
    }
    
    function agregarCarrito(i, e) {
      e.preventDefault();
    
      const nombre = document.getElementById(`nombre${i}`).innerHTML;
      const cantidad = document.getElementById(`cantidad${i}`).value;
      const precio = document.getElementById(`precio${i}`).innerHTML;
      const carrito = new Carrito(nombre, cantidad, precio);
    
     
      if (carrito.cantidad == "" || carrito.cantidad.trim() == "") {
        
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'El valor no puede estar vacio !',
      footer: '<a href="">Why do I have this issue?</a>'
    })
      } else {
    
      const itemsCarritoLocalStorage = JSON.parse(
        localStorage.getItem(nombreUsuario)
      );
      
        if (itemsCarritoLocalStorage == null) {
        localStorage.setItem(nombreUsuario, JSON.stringify([carrito]));
        mostrarPendientes([carrito]);
      } else if (itemsCarritoLocalStorage.find((item) => item.nombre === carrito.nombre)) {
        const result = itemsCarritoLocalStorage.find((item) => item.nombre === carrito.nombre);
        carrito.cantidad = parseInt(carrito.cantidad) + parseInt(result.cantidad);
    
        const nuevoArray1 = itemsCarritoLocalStorage.filter(
          (item) => item.nombre != carrito.nombre
        );
    
        nuevoArray1.push(carrito);
    
        localStorage.setItem(nombreUsuario, JSON.stringify(nuevoArray1));
        mostrarPendientes(nuevoArray1);
      } else {
        itemsCarritoLocalStorage.push(carrito);
        localStorage.setItem(
          nombreUsuario,
          JSON.stringify(itemsCarritoLocalStorage)
        );
        mostrarPendientes(itemsCarritoLocalStorage);
      }
      e.target.reset();
    }
    }
    
    catalogo(productos);

    })

   




