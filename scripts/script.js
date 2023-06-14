//AGREGAR PIZZAS AL PEDIDO

var pedido = []; //Arreglo de pedidos

function agregarPizza() {
    var pizzaSeleccionada = document.getElementById("pizza-seleccionada").value;
    var cantidadSeleccionada = document.getElementById("cantidad-seleccionada").value;

    var pizza = {
        nombre: pizzaSeleccionada,
        cantidad: cantidadSeleccionada
    };

    if(cantidadSeleccionada>0){
        pedido.push(pizza); //Se carga la pizza en el arreglo
        actualizarPedido(); //Se actualiza el pedido en la caja de texto
    }else{
        alert("Por favor seleccione una cantidad de pizzas para continuar")
    }

    
}

function actualizarPedido() {
    var pedidoTexto = "";
    for (var i = 0; i < pedido.length; i++) {
        pedidoTexto += pedido[i].nombre + " x" + pedido[i].cantidad + "\n";
    } 
    document.getElementById("texto-pedido").value = pedidoTexto;
}


//ENVIO DEL PEDIDO DE LAS PIZZAS

function validarFormularioPedido() {
    var nombre = document.getElementById('nombreP').value;
    var direccion = document.getElementById('direccionP').value;
    var telefono = document.getElementById('telefonoP').value;
    
    if (nombre === '' || direccion === '' || telefono === '') {
        return false;
    }
    else{
        return true;
    }
    
}


function confirmacionPedido() {
    if (validarFormularioPedido() && !(pedido.length < 1)) {
        confirm("Pedido confirmado, recibirá un mensaje/email pronto. Muchas Gracias.");
        
        //Envio el formulario
        var form = document.getElementById("form-pedido");
        form.submit();
    }
    else {
        alert("Pedido no completo, por favor revise los datos.");
    }
}


//PRECIO DE LAS PIZZAS AL SELECCIONAR TAMAÑO

// Obtengo todos los botones de tamaño de pizza
var sizeButtons = document.querySelectorAll('input[name="pizza-size"]');

// Agrego evento de cambio a cada botón de tamaño de pizza
sizeButtons.forEach(function(button) {
    button.addEventListener('change', function() {
        // Obtengo el elemento de la lista de la pizza
        var pizza = this.closest('.opcion-pizza');
        //console.log(pizzaElement);

        //Nombre
        var nombrePizza = pizza.querySelector('h3').textContent; //h3 es el nombre de la pizza
        //console.log(nombrePizza);

        //Tamaño
        var tamañoSeleccionado = this.value; //This es 'este' elemento que se selecciono
        //console.log(tamañoSeleccionado);
        
        var precio = pizza.querySelector('h4');
        //console.log(precio);
        //console.log(precioPizza, tamañoSeleccionado);
        
        precio.textContent = precioPizza(nombrePizza, tamañoSeleccionado);
        
    });
});

function precioPizza(nombrePizza, tamañoSeleccionado){ //Funcion que me devuelve el precio segun el nombre de la pizza
    switch (nombrePizza){
        case("Capresse"):
            if (tamañoSeleccionado === "small") return "$1600";
            else return "$2800";
        case("Pepperoni"):
            if (tamañoSeleccionado === "small") return "$1900";
            else return "$3500";
        case("Barbacoa"):
            if (tamañoSeleccionado === "small") return "$1900";
            else return "$3500";
        case("Bosque"):
            if (tamañoSeleccionado === "small") return "$2000";
            else return "$3600";
        case("Camaron"):
            if (tamañoSeleccionado === "small") return "$2500";
            else return "$3900";
        case("Cebolla Especial"):
            if (tamañoSeleccionado === "small") return "$1900";
            else return "$3300";
        case("Champignon"):
            if (tamañoSeleccionado === "small") return "$1900";
            else return "$3300";
        case("CreamCheese"):
            if (tamañoSeleccionado === "small") return "$1800";
            else return "$3400";
        case("Cuatro Quesos"):
            if (tamañoSeleccionado === "small") return "$1700";
            else return "$3200";
        case("Pollo"):
            if (tamañoSeleccionado === "small") return "$2000";
            else return "$3900";
    }
}


//MENSAJE CONTACTO

function validarFormularioContacto() {
    var nombre = document.getElementById('nombreC').value;
    var telefono = document.getElementById('telefonoC').value;
    var email = document.getElementById('emailC').value;
    var texto = document.getElementById('textoC')
    
    if (nombre === '' || email === '' || telefono === '' || texto === '') {
        return false;
    }else{
        return true;
    }
    
}

function mensajeEnviado(){
    if (validarFormularioContacto()){
        confirm("Nos pondremos en contacto a la brevedad con usted. Muchas Gracias");
        //Envio el formulario
        var form = document.getElementById("form-contacto");
        form.submit();
    }else{
        alert("Formulario de contacto no completo, por favor revise los datos.");
    }
}


