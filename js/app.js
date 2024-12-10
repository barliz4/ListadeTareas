const tarea = document.getElementById ("tarea")
const fecha = document.getElementById ("fecha")
const tareas = document.getElementById ("tareas")


// Seleccionar un elemento
let boton = document.getElementById("miBoton");

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

}