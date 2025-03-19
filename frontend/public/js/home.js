const datosUsuario = JSON.parse(localStorage.getItem('user'))
if (datosUsuario){
  console.log('Usuario logueado', datosUsuario)
  const titulo = document.getElementById('tituloprin');
  titulo.textContent = (datosUsuario.usuario)
}

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

setInterval(mostrarReloj, 1000);

// Generar los espacios de acuerdo a la cantidad de slots previamente configurado
const contenedorEspacios = document.getElementById("contenedor-espacio");
for (let i = 1; i <= datosUsuario.slots; i++) {
    const div = document.createElement("div");
    div.className = "espacio";
    div.id = `${(i)}`
    div.textContent = `A${i}`;
    contenedorEspacios.appendChild(div);
}

const espacios = document.querySelectorAll('.espacio');
espacios.forEach(function(espacio) {
espacio.addEventListener('click', function() {
    espacio.style.backgroundColor = '#FB6868';  // 
    });
}); 

document.getElementById("ingresoVehi").addEventListener("submit", async (e) => {
  e.preventDefault();
  console.log(e)
  
    let tipoVehiculo2 = document.getElementsByName('tipo-vehiculo');
  
    for ( i = 0; i < tipoVehiculo2.length; i++) {
    if (tipoVehiculo2[i].checked) {
      // Si el radio está seleccionado, mostrar el valor
      const placa = document.getElementById('ingresoPlaca').value
      const tipoVehiculo = tipoVehiculo2[i].value;
      const horaIngreso = new Date().toLocaleTimeString();
      const fechaIngreso = new Date().toLocaleDateString();
      const fechaSalida = '0'
      const horaSalida = '0'
  
      const response = await fetch("http://localhost:3000/vehiculosRoutes/registerVehiculo", { 
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ placa, tipoVehiculo, horaIngreso, fechaIngreso, horaSalida, fechaSalida}) 
      
   
  });
  if (response.ok){
    const slots = i;
    const data = await response.json();
    console.log(data);
    const mensaje = data.message
    alert(mensaje)
    console.log(mensaje)
  }
   }}
      return; 
       // Salir del ciclo después de encontrar el seleccionado

  })

  document.getElementById("retiroVehi").addEventListener("submit", async (e) => {
    e.preventDefault();
    console.log(e)
    const placa = document.getElementById('retiroPlaca').value; // Valor único del vehículo
    const horaSalida = new Date().toLocaleTimeString(); // Hora actual
    const fechaSalida = new Date().toLocaleDateString();
    console.log(placa,horaSalida,fechaSalida)

    try {
      const response = await fetch(`http://localhost:3000/vehiculosRoutes/updateVehiculo/${placa}`, { 
        method: "PUT", // Método HTTP para actualización
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ horaSalida, fechaSalida }) 
      });
  
      const data = await response.json();
      console.log(data);
      const mensaje = data.message;
      alert(mensaje);
    } catch (error) {
      console.error("Hubo un error:", error);
      alert("No se pudo actualizar el vehículo");
    }
  });
  