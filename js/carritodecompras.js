
class Cliente {
    constructor(nombre, celular){
        this.nombre = nombre;
        this.celular = celular;
    }
 
    correccionCelular(nuevoCelular){
        this.celular = nuevoCelular;
    }

}

alert( "Bienvenido a la Ferreteria el Punto, por favor ingresa tu información");

let nombre1 = prompt("¿Cúal es tu nombre?");
let celular1 = prompt("¿Cúal es tu celular?");

let cliente1 = new Cliente(nombre1, celular1);

let confirmarInfo = prompt("Hola " + cliente1.nombre + " este fue el número que ingresaste:\n " + cliente1.celular + "\n¿Es correcto? Responde SI ó NO").toLowerCase();

switch (confirmarInfo) {
      case "no":
      let otroCelular = prompt("¿Cúal es tu celular?");
      cliente1.correccionCelular(otroCelular);
      break;
}

  const respuesta = prompt("¿Quieres comprar pintura blanca en promoción?\n Responde SI ó NO").toLowerCase();

    let valorPagar = 0;
    let ahorro = 0;
    let resultado = 0;

    function multiplicar(a,b,c) {
        return  a*b*c;
    }

    if (respuesta == "si") {
      const cantidadGalones = prompt("El precio por galon es $ 100 ¿Cúantos galones quieres comprar, ten en cuenta el descuento? \n1) De 0 a 5: 0% \n2) De 6 a 10: 5% \n3) De 10 en adelante: 10%");
      if (cantidadGalones <= 5) {
        valorPagar = multiplicar(cantidadGalones,100,1);
        ahorro = 0;
      }
      else if (cantidadGalones <= 10) {
         valorPagar = multiplicar(cantidadGalones,100,0.95);
         ahorro = multiplicar(cantidadGalones,100,0.05);

      }
      else{
         valorPagar = multiplicar(cantidadGalones,100,0.9);
         ahorro = multiplicar(cantidadGalones,100,0.10);
      }
      alert(cliente1.nombre + " el total de tu compra es: " + valorPagar + " pesos. Ahorraste " + ahorro + " pesos");
       }
    else{
        alert("Vuelve pronto");
    }



