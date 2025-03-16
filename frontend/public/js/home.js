let placa
let hora

const espacios = document.querySelectorAll('.espacio');

// Añade un evento de clic a cada botón
espacios.forEach(function(espacio) {
espacio.addEventListener('click', function() {
    // Cambia el color de fondo de solo este botón
    espacio.style.backgroundColor = '#FB6868';  // El color puede ser el que elijas
    /* espacio.textContent = placa */
    });
}); 

// Función para actualizar la fecha y hora del equipo en vivo
function mostrarReloj() {
    const fecha = new Date(); // Crear un objeto Date con la fecha y hora actuales del equipo
    
    // Obtener los componentes de la fecha
    const año = fecha.getFullYear();
    const mes = fecha.getMonth() + 1; // Los meses comienzan desde 0 (enero es 0)
    const dia = fecha.getDate();
    const horas = fecha.getHours();
    const minutos = fecha.getMinutes();
    const segundos = fecha.getSeconds();
    
    // Formateamos la fecha y hora en un formato legible
    const fechaHoraFormateada = `${año}-${mes < 10 ? '0' + mes : mes}-${dia < 10 ? '0' + dia : dia} ${horas < 10 ? '0' + horas : horas}:${minutos < 10 ? '0' + minutos : minutos}:${segundos < 10 ? '0' + segundos : segundos}`;
    hora = `${horas < 10 ? '0' + horas : horas}:${minutos < 10 ? '0' + minutos : minutos}:${segundos < 10 ? '0' + segundos : segundos}`
    fecha2 = ` ${año}-${mes < 10 ? '0' + mes : mes}-${dia < 10 ? '0' + dia : dia}`
    // Mostramos la fecha y hora en el HTML
    
    document.getElementById('hora').textContent = `Fecha y Hora del Sistema: ${fechaHoraFormateada}`;

}


// Llamamos a la función para que se ejecute cada segundo
setInterval(mostrarReloj, 1000); // 1000 ms = 1 segundo

const vehiculo = {
    tipoVehiculo : String,
    placa : String,
    horaIngreso : String,
    horaSalida : String,
    fechaIngreso : Date,
    fechaSalida: Date
}

function capturarDatos(){
    

  let tipoVehiculo2 = document.getElementsByName('tipo-vehiculo');
  
 for ( i = 0; i < tipoVehiculo2.length; i++) {
    if (tipoVehiculo2[i].checked) {
      // Si el radio está seleccionado, mostrar el valor
      prueba = tipoVehiculo2[i].value;
      let placa = document.getElementById('ingresoPlaca').value;
      vehiculo.tipoVehiculo = prueba;
      vehiculo.placa = placa;
      vehiculo.horaIngreso = hora
      vehiculo.fechaIngreso = fecha2
  
      console.log(vehiculo)
      return; 
       // Salir del ciclo después de encontrar el seleccionado
    }
  }    

}

function registrarSalida(){
    
}