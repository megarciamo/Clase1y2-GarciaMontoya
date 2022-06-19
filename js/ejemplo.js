const IVA = 1.21;

class Producto {
  constructor(id, nombre, precio) {
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
  }

  calcularPrecio() {
    return this.precio * IVA;
  }
}

class Pedido{
  constructor(producto, cantidad){
    this.productos = producto;
    this.cantidad = cantidad;
  }
}

const producto1 = new Producto("123","Leche", 100);
const producto2 = new Producto("456","Cerveza", 200);
const producto3 = new Producto("789", "Jugo", 300);

const productos = [producto1, producto2, producto3];
const carrito = []

function agregarProductoAlCarrito(id) {
  //  buscar producto en el arreglo de producto y agregarlo al carrito
  const productoEncontrado = productos.find(producto => producto.id == id);
  if(productoEncontrado == undefined){
    alert("No encontre lo que estas buscando");
  } else {
    const cantidad = prompt("Ok, ingrese la cantidad de " + productoEncontrado.nombre)
    const nuevoPedido = new Pedido(productoEncontrado, cantidad)
    carrito.push(nuevoPedido);
  }
}

function mostrarCarritoActual() {
  // compraste:
  // Leche - 5 subtotal $500
  // Cerveza - 10 subtotal $2000
  // Total $2500
}

function mostrarProductosYSeleccionar() {
  let menuAMostrar = "¿Que producto desea comprar?\n";
  productos.forEach(producto => {
    menuAMostrar += producto.id +") "+ producto.nombre +" - "+ producto.precio+"\n";
  })
  let respuesta = prompt(menuAMostrar);
  return respuesta;
}

function confirmarCompra() {
  const respuesta = prompt("¿Desea comprar algo?\n1) Si \n2) No");
  if (respuesta == "1") {
    return true;
  } else {
    return false;
  }
}

function comprarProducto() {
  while (confirmarCompra()) {
    let productoSeleccionado = mostrarProductosYSeleccionar();
    //  Ahora que eligio un producto queremos agregarlo al carrito ✔
    agregarProductoAlCarrito(productoSeleccionado);
    //  Ahora que agrego el carrito quiero ver lo que fue comprando
    mostrarCarritoActual();
  }
}

comprarProducto();

// Actividad 5: Mostrarle un el total de la compra