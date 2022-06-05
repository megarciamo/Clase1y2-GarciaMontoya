let n1 = Number(prompt("Elige un número para prácticar"));
alert( "Hola! Vamos a practicar la tabla del " + n1 + "... Empecemos!");


for (let i = 1; i <= 10; i++) {
    let respuesta = Number(prompt("¿Cúanto es " + n1 + " x " + i + " ?")); 

let respcorre = n1*i;

while(respuesta !== respcorre){

    respuesta = Number(prompt("Es incorrecto... Vuelve a intentarlo..." + "¿Cúanto es " + n1 + " x " + i + " ?"));  
}
    alert("Es correcto! Continuemos...");
}

let continuar = prompt("Felicitaciones! Prácticaste la tabla del " + n1 + "... ¿Quieres continuar?... Contesta si o no").toLowerCase();

while(continuar == "si"){
    let n1 = Number(prompt("Elige un número para prácticar"));
    alert( "Hola! Vamos a practicar la tabla del " + n1 + "... Empecemos!");
    
    
    for (let i = 1; i <= 10; i++) {
        let respuesta = Number(prompt("¿Cúanto es " + n1 + " x " + i + " ?")); 
    
    let respcorre = n1*i;
    
    while(respuesta !== respcorre){
    
        respuesta = Number(prompt("Es incorrecto... Vuelve a intentarlo..." + "¿Cúanto es " + n1 + " x " + i + " ?"));  
    };
        alert("Es correcto! Continuemos...")
    }
    
    continuar = prompt("Felicitaciones! Prácticaste la tabla del " + n1 + "... ¿Quieres continuar?... Contesta si o no").toLowerCase();
    
}
    alert("Hasta la próxima")
