const nota1 = document.getElementById ("nota 1")
const fecha = document.getElementById ("fecha")
const tareas = document.getElementById ("tareas")

// Seleccionar un elemento
let boton = document.getElementById("miBoton");

//Cambiar el color al pasar el cursor por encima
let contenedor = document.getElementById("contenedor");
contenedor.addEventListener("mouseover", function() {
    contenedor.style.backgroundColor = "#1B1B1B";
});
contenedor.addEventListener("mouseout", function() {
    contenedor.style.backgroundColor = "black";
});
   

//let edad = 18;
//if (edad >= 18) {
    //alert("Bienvenido, este formulario es +18.");
//}

let listaTareas = [];


// Agregar un evento de clic
boton.addEventListener("click", guardarTarea)

function guardarTarea () {
    let nota1 = nota1.value
    let txtFecha = fecha.value
    let txtNumber = number.value

    //console.log(txtFecha)               //Se captura la información, se verifica en la consola del navegador
    //console.log(txtTarea)


    const nuevaNota1 = document.createElement ('li');
    nuevaNota1.innerHTML = "<h1>" + txtNota1 + "</h1><p>" + txtFecha +  txtNumber + "</p>"
    tareas.appendChild(nuevaNota1)
    let tareaGuardar = {"tarea":txtNota1, "fecha":txtFecha}
    listaTareas.push(nota1Guardar)
    localStorage.setItem('Notas', JSON.stringify(listaNota1));
}

document.addEventListener("keydown", function(evento) {     //En la consola del navegador se visualizan las teclas digitadas
    console.log("Tecla presionada: " + evento.key);

    if(evento.key == "Enter"){              //Al presionar enter se guarda la información en el formulario
        guardarNota1()  
    }
});

    // Guardar un dato en la consola
    //localStorage.setItem('nombre', 'Juan');

    // Recuperar un dato
    //let nombre = localStorage.getItem('nombre');        //getItem se recupera
    //console.log(nombre); // Muestra "Juan"

    function cargarTareas() {
        let listaNota1 = JSON.parse(localStorage.getItem('Nota 1'));
        console.log(listaNota1)
        
        for (let i=0; i<listaNota1.length;i ++) {
            console.log(listaNota1[i])
            const nuevaTarea = document.createElement ('li');
            nuevaTarea.innerHTML = "<h1>" + listaNota1[i].tarea + "</h1> <>" + listaNota1[i].fecha + "</p>"
            Nota1.appendChild(nuevaNota1)

        }
    }