document.getElementById("registerForm").addEventListener("submit", async (e) => {
    e.preventDefault();
    console.log(e)
    const usuario = document.getElementById("username").value;
    const contrasena = document.getElementById('password').value;
    const email = document.getElementById("email").value;
    const slots = document.getElementById('slots').value;

    
 const response = await fetch("http://localhost:3000/userRoutes/register", { 
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ usuario, contrasena, email, slots }) 
    });

    const data = await response.json();
    console.log(data);
    const mensaje = data.message
    alert(mensaje)
    console.log(mensaje)
  });
  