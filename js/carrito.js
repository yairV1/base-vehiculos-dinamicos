const tablaBody = document.querySelector("#carritoCompras tbody");

document.addEventListener("DOMContentLoaded", () => {
    const carritosGuardados = JSON.parse(localStorage.getItem("carrito")) || [];

    carritosGuardados.forEach((carrito) => {
        const fila = document.createElement("tr");

        // Foto
        const tdFoto = document.createElement("td");
        const img = document.createElement("img");
        img.src = carrito.foto;  // ruta de la foto
        img.alt = carrito.nombre;
        img.width = 80; // tamaño opcional
        tdFoto.appendChild(img);

        // Nombre
        const tdNombre = document.createElement("td");
        tdNombre.textContent = carrito.nombre;

        // Precio
        const tdPrecio = document.createElement("td");
        tdPrecio.textContent = carrito.precio;

        // Modelo
        const tdModelo = document.createElement("td");
        tdModelo.textContent = carrito.modelo;

        // Kilometraje
        const tdKilometraje = document.createElement("td");
        tdKilometraje.textContent = carrito.kilometraje + " kl";

        // Agregar las celdas a la fila
        fila.appendChild(tdFoto);
        fila.appendChild(tdNombre);
        fila.appendChild(tdPrecio);
        fila.appendChild(tdModelo);
        fila.appendChild(tdKilometraje);

        // Insertar fila en la tabla
        tablaBody.appendChild(fila);
    });
});
const btnIndex = document.getElementById("indez");

btnIndex.addEventListener("click", () => {
    // Redirigir a index.html
    window.location.href = "index.html"; 
});
