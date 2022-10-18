let temperatura = Number(prompt("temperatura"));

if(temperatura>15){
    console.log("dia agradable")
} else {
    console.log("dia fresco")
}

temperatura > 15 ? console.log("agradable") : console.log("fresco")



const carrito = ["manzana"];

if(carrito.length===0){
    console.log("aun no has seleccionado articulos")
}

carrito.length === 0 && console.log("aun no has seleccionado articulos")


for (let i=0; i<10; i+=1){
    alert(i)
}