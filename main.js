console.log(new Date(2022, 09, 10))

let elemento;
let nombreAplicador;
let nombreEmpresa;
let volumenCamara;
let dosisAAplicar; 
let especieFruta




// ingresar el nombre del aplicador

function ingresarNombre(){
    nombreAplicador = prompt ("porfavor ingrese su nombre")
    nombreAplicador = nombreAplicador.toLowerCase()
        alert("Bienvenido Aplicador : " + nombreAplicador) 
            return nombreAplicador;
}


/* ingresar el nombre de la empresa a prestar servicio */
function ingresarEmpresa(){
    nombreEmpresa = prompt ("Ingresar nombre de la empresa")
    nombreEmpresa = nombreEmpresa.toLowerCase();
        alert("la empresa ingresada es: " + nombreEmpresa)
    
             return nombreEmpresa
}



// fx recompilar datos de la camara de frio
//funcion para calcular los metros cubicos de la camara para poder hacer calculos sobre la dosis a aplicar



function volCamara(largoCamara, anchoCamara, alturaCamara){

    largoCamara = prompt ("ingrese el largo de la camara en metros")
    anchoCamara = prompt ("ingrese el ancho de la camara en metros")
    alturaCamara = prompt(" ingrese el alto de la camara en metros")
        return volumenCamara = largoCamara * anchoCamara * alturaCamara ;
}

// llamamos a las funciones creadas

    ingresarNombre();
    ingresarEmpresa();
    volCamara();
    alert ("el volumen de la camara es: " + volumenCamara + "M³")

// se debe ingresar la variedad de la fruta para calcular la dosis
// las dos constantes son necesarias para el calculo de la dosis en Gramos, que seria, volumen de la camara * la constante = X Gr 
    const MCPMANZANA = 0.05;
    const MCPPERA = 0.02;
   
//calcula la dosis segun variedad
    especieFruta = prompt ("ingrese si la especie a aplicar es pera o manzana") 
    especieFruta = especieFruta.toLowerCase();
    
       
            
            
            if (especieFruta==="manzana") {
                dosisAAplicar =  MCPMANZANA * volumenCamara;
                alert (" la dosis a aplicar es de: " + dosisAAplicar + "gr de 1mpc")
            } else if (especieFruta==="pera") {
                dosisAAplicar = MCPPERA * volumenCamara;
                alert (" la dosis a aplicar es de: " + dosisAAplicar + "gr de 1mpc")
            } else {
                    alert("la variedad ingresada no entre dentro de nuestro servicio")
                   
            }
 
            
// se agrega un switch para saber lo que cobrara el aplicador en viaticos al moverse en su auto particular por la zona selccionada
            
let selectRegion = alert ("elija la zona donde se realizara la aplicacion");
    alert ("1 Villa Regina - 2 Cipolleti - 3 General Roca")
        let distanciaRegina = 100;
        let distanciaCipolleti = 85;
        let distanciaGeneralroca = 25;
             SelectDistancia = prompt("ingresa una ciudad");
                 switch(SelectDistancia){
                    case "1":
                        alert("has elegido Villa regina vas a sumar: $" + distanciaRegina*60 + " en viaticos");
                        break;
                    case "2":
                        alert("has elegido Cipolleti vas a sumar: $" + distanciaCipolleti*60 +" en viaticos");
                        break;
                    case "3":
                        alert("has elegido Villa regina vas a sumar: $ " + distanciaGeneralroca*60 +" en viaticos");
                        break;
                        default:
        
                        alert("ingresa una opcion valida")

    }
//objeto literal que se ejecutara en consola
    const carritoFertilizantes = [
        { nombre: 'Micorrizas 250gr', precio: 800 , cantidad: 25},
        { nombre: 'Oro Negro', precio: 750 , cantidad: 0},
        { nombre: 'Fertilizante Organico', precio: 1200 , cantidad: 1 },
        { nombre: 'Antiplagas', precio: 850 , cantidad: 14},
        { nombre: 'Living Soil', precio: 3500 , cantidad: 23},
    
    ] ;
//filtro para saber el stock de nuestros productos
    let filtro = carritoFertilizantes.filter( (item) => item.cantidad < 2)
        console.log("se deberan encargar los siguientes productos")
        console.log(filtro)
//busca un producto   
    let buscar = carritoFertilizantes.find((item2) => item2.nombre ==="Antiplagas")
        console.log("el precio y stock del producto buscado es : ")
        console.log(buscar)
   
	
	












 



