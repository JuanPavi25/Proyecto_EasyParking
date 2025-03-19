document.getElementById("loginForm").addEventListener("submit", async (e) => {
    e.preventDefault();
    console.log(e)
    const usuario = document.getElementById("username").value;
    const contrasena = document.getElementById('password').value;

    try{
        const response = await fetch("http://localhost:3000/userRoutes/login", { 
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ usuario, contrasena}) 
            });

           const data = await response.json();
            console.log(data.user);
            const mensaje = data.message
            alert(mensaje)
            console.log(mensaje) 
            

            if (response.ok) {
                localStorage.setItem('user', JSON.stringify(data.user));

                window.location.href = '/home'; 
            } else {
                window.location.reload();
            }
    } catch (error) {
    console.error('Error al conectar al servidor:', error);
    alert('Hubo un problema al conectar con el servidor.');
    }
  });
  