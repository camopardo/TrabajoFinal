//Uso de variables
const opciones = ["Reservar tour", "Consulta acerca de los tours", "Problemas con mi tour", "Cancelar tour", "Otro"];
const selectAsunto = document.getElementById("Asunto");

//Uso de condicionales
opciones.forEach(opcion => {
    const option = document.createElement("option");
    option.value = opcion;
    option.text = opcion;
    selectAsunto.appendChild(option);
});