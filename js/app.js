const tarea = document.getElementById ("tarea")
const fecha = document.getElementById ("fecha")
const tareas = document.getElementById ("tareas")
// Seleccionar un elemento
let boton = document.getElementById("miBoton");

//Cambiar el color al pasar el cursor por encima
let contenedor = document.getElementById("contenedor");
contenedor.addEventListener("mouseover", function() {
    contenedor.style.backgroundColor = "black";
});
contenedor.addEventListener("mouseout", function() {
    contenedor.style.backgroundColor = "green";
});
   

let edad = 18;
if (edad >= 18) {
    alert("Bienvenido, este formulario es +18.");
}

let listaTareas = [];


// Agregar un evento de clic
boton.addEventListener("click", guardarTarea)

function guardarTarea () {
    let txtTarea = tarea.value
    let txtFecha = fecha.value
    let txtNumber = number.value

    //console.log(txtFecha)               //Se captura la información, se verifica en la consola del navegador
    //console.log(txtTarea)


    const nuevaTarea = document.createElement ('li');
    nuevaTarea.innerHTML = "<h1>" + txtTarea + "</h1><p>" + txtFecha +  txtNumber + "</p>"
    tareas.appendChild(nuevaTarea)
    let tareaGuardar = {"tarea":txtTarea, "fecha":txtFecha}
    listaTareas.push(tareaGuardar)
    localStorage.setItem('tareas', JSON.stringify(listaTareas));
}

document.addEventListener("keydown", function(evento) {     //En la consola del navegador se visualizan las teclas digitadas
    console.log("Tecla presionada: " + evento.key);

    if(evento.key == "Enter"){              //Al presionar enter se guarda la información en el formulario
        guardarTarea()  
    }
});

    // Guardar un dato en la consola
    localStorage.setItem('nombre', 'Juan');

    // Recuperar un dato
    let nombre = localStorage.getItem('nombre');        //getItem se recupera
    console.log(nombre); // Muestra "Juan"

    function cargarTareas() {
        let listaTareas = JSON.parse(localStorage.getItem('tareas'));
        console.log(listaTareas)
        
        for (let i=0; i<listaTareas.length;i ++) {
            console.log(listaTareas[i])
            const nuevaTarea = document.createElement ('li');
            nuevaTarea.innerHTML = "<h1>" + listaTareas[i].tarea + "</h1> <>" + listaTareas[i].fecha + "</p>"
            tareas.appendChild(nuevaTarea)

        }
    }