let elemento;
let nombreAplicador;
let nombreEmpresa;
let volumenCamara;
let dosisAAplicar; 
let especieFruta;
let valorTotal;
const MCPMANZANA = 0.05;
const MCPPERA = 0.02;

//validar lo que el usuario ingresa en consola
    const nombreyApellido = document.querySelector('.nombreyApellido');

        nombreyApellido.addEventListener('input', (evt) => {
            console.log(evt.target.value);
 })


//next

const inputsNext = document.getElementsByClassName('formulario__input');
 for(const i = 0; i < inputsNext; i++){
    inputsNext[i].addEventListener('keyup', function(){
        if (this.value.length>=1) {
        this.nextElementSibling.classList.add('fijar');
    } else {
        this.nextElementSibling.classList.remove('fijar');
    }
    })
}
//funciona bien
function calcular() {
    try {
        var a = parseInt(document.getElementById("valorLargo").value) || 0,
        b = parseInt(document.getElementById("valorAncho").value) || 0;
        c = parseInt(document.getElementById("valorAlto").value) || 0;
        f = document.getElementById("valorTotal").value = a * b * c;
  
      document.getElementById("valorTotal").value = a * b * c;
      //document.getElementById("gramos1MPC").value = f * MCPMANZANA;
      
    } catch (e) {}
  }

//calcular dosis
function dosis() {

    

        if (document.getElementById('ingreso').value==="Manzana") {
            
            document.getElementById("gramos1MPC").value = f * MCPMANZANA;
        } else if (document.getElementById('ingreso').value==="Pera") {
        
            document.getElementById("gramos1MPC").value = f * MCPPERA;
        } else {
            
           
        }
} 

localStorage.setItem('nombre', 1);

const carritoFertilizantes = [
    { nombre: 'Micorrizas 250gr', precio: 800 , cantidad: 25},
    { nombre: 'Oro Negro', precio: 750 , cantidad: 0},
    { nombre: 'Fertilizante Organico', precio: 1200 , cantidad: 1 },
    { nombre: 'Antiplagas', precio: 850 , cantidad: 14},
    { nombre: 'Living Soil', precio: 3500 , cantidad: 23},

] ;

const objdeString = JSON.stringify  (carritoFertilizantes);

//guarda en localstorage
    localStorage.setItem('producto', objdeString);

document.getElementById("objetoTexto").value = objdeString;

//filter en string
const filtro = carritoFertilizantes.filter( (item) => item.cantidad < 2)
    const filtroTexto = JSON.stringify  (filtro);
    localStorage.setItem('filtros', filtro);

    document.getElementById('stock').value = filtroTexto;

    
   



