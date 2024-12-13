const nota1 = document.getElementById ("nota1")
const nota2 = document.getElementById ("nota2")
const nota3 = document.getElementById ("nota3")
const nombre = document.getElementById ("nombre")
const listahtml = document.getElementById("listahtml")

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
if(localStorage.getItem("Notas") !== null){
    listaTareas = JSON.parse(localStorage.getItem("Notas"))
}


// Agregar un evento de clic
boton.addEventListener("click", guardarTarea)

function guardarTarea () {
    let vnota1 = nota1.value
    let vnota2 = nota2.value
    let vnota3 = nota3.value
    let vnombre = nombre.value

    console.log(vnota1)               //Se captura la información, se verifica en la consola del navegador
    console.log(vnota2)


    const nuevaNota1 = document.createElement ('li');
    nuevaNota1.innerHTML = "<h3>" + vnombre + "</h3>" + "<p>" + vnota1 +  vnota2 + vnota3 + "</p>"
    listahtml.appendChild(nuevaNota1)
    let tareaGuardar = {"nombre":vnombre, "nota1":vnota1 , "nota2":vnota2 , "nota3":vnota3}
    listaTareas.push(tareaGuardar)
    localStorage.setItem('Notas', JSON.stringify(listaTareas));
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
        for (let i=0; i<listaTareas.length;i ++) {
            console.log(listaTareas[i])
            const nuevaTarea = document.createElement ('li');
            nuevaTarea.innerHTML = "<h3>" + listaTareas[i].nombre + "</h3>" + listaTareas[i].nota2 + "</p>"
            listahtml.appendChild(nuevaTarea)

        }
    }