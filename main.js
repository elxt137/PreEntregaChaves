    


// ingresar el nombre del aplicador

function ingresarNombre(){
    let nombreAplicador = prompt ("porfavor ingrese su nombre")
    alert("Bienvenido Aplicador : " + nombreAplicador) 
    return nombreAplicador;
}


/* ingresar el nombre de la empresa a prestar servicio */
function nombreEmpresa(){
    let nombreEmpresa = prompt ("Ingresar nombre de la empresa")
    alert("la empresa ingresada es: " + nombreEmpresa)
    
    return nombreEmpresa
}



// fx recompilar datos de la camara de frio
//funcion para calcular los metros cubicos de la camara para poder hacer calculos sobre la dosis a aplicar

let volumenCamara;

function volCamara(largoCamara, anchoCamara, alturaCamara){

    largoCamara = prompt ("ingrese el largo de la camara en metros")
    anchoCamara = prompt ("ingrese el ancho de la camara en metros")
    alturaCamara = prompt(" ingrese el alto de la camara en metros")
    return volumenCamara = largoCamara * anchoCamara * alturaCamara ;
}

// llamamos a las funciones creadas

ingresarNombre();
nombreEmpresa();
volCamara();
alert ("el volumen de la camara es: " + volumenCamara + "M³")

// se debe ingresar la variedad de la fruta para calcular la dosis
// las dos constantes son necesarias para el calculo de la dosis en Gramos, que seria, volumen de la camara * la constante = X Gr 
    const MCPMANZANA = 0.05;
    const MCPPERA = 0.02;
    let dosisAAplicar; 
//calcula la dosis segun variedad
    let especieFruta = prompt ("ingrese si la especie a aplicar es pera o manzana") 
    
       
            
            
            if (especieFruta==="manzana") {
                dosisAAplicar =  MCPMANZANA * volumenCamara;
                alert (" la dosis a aplicar es de: " + dosisAAplicar + "gr de 1mpc")
            } else if (especieFruta==="pera") {
                dosisAAplicar = MCPPERA * volumenCamara;
                alert (" la dosis a aplicar es de: " + dosisAAplicar + "gr de 1mpc")
            } else {
                    alert("la variedad ingresada no entre dentro de nuestro servicio")
                   
            }
        











// function saludar () {
//         alert("Bienvenido a Aplicador")
// }