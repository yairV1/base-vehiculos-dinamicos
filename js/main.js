//  Constantes globales
const form = document.getElementById("vehiculo-form");
const contCars = document.querySelector("#cont-cards .row.g-3");
const fotoInput = document.getElementById("fotoCar");
const nombreInput = document.getElementById("nombreCar");
const marcaInput = document.getElementById("marcaCar");
const modeloInput = document.getElementById("modeloCar");
const kilometrajeInput = document.getElementById("kilometrajeCar");
const precioInput = document.getElementById("precioCar");

// Array de imágenes predeterminadas
const defaultImgs= 'img/aventador.jpg'


//  Función para crear tarjeta
function crearCard(vehiculo) {
    const col = document.createElement("div");
    col.classList.add("col-md-6", "item-vehiculo");

    const card = document.createElement("div");
    card.classList.add("card", "h-100");

    const imagen = document.createElement("img");
    imagen.classList.add("card-img-top", "w-100");
    imagen.src = vehiculo.foto;
    imagen.alt = vehiculo.nombre;

    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");

    cardBody.innerHTML = `
        <h3 class="card-title">${vehiculo.nombre}</h3>
        <h4 class="card-subtitle text-muted">${vehiculo.marca}</h4>
        <p>Modelo: ${vehiculo.modelo}</p>
        <p>Kilometraje: ${vehiculo.kilometraje} km</p>
        <h2 class="text-success">$${vehiculo.precio}</h2>
    `;

    const contBtns = document.createElement("div");
    contBtns.classList.add("d-flex", "justify-content-between", "mt-3");

    const btnSuccess = document.createElement("button");
    btnSuccess.classList.add("btn", "btn-success");
    btnSuccess.textContent = "Comprar";
    btnSuccess.addEventListener("click", () => {
        alert("Ya nos comunicaremos con usted");
    });

    const btnDanger = document.createElement("button");
    btnDanger.classList.add("btn", "btn-danger");
    btnDanger.textContent = "Eliminar";
    btnDanger.addEventListener("click", () => col.remove());

    contBtns.appendChild(btnSuccess);
    contBtns.appendChild(btnDanger);
    cardBody.appendChild(contBtns);

    card.appendChild(imagen);
    card.appendChild(cardBody);
    col.appendChild(card);

    return col;
}

//  Evento submit del formulario
form.addEventListener("submit", (e) => {
    e.preventDefault();

    const vehiculo = {
        foto: fotoInput.value.trim(),
        nombre: nombreInput.value.trim(),
        marca: marcaInput.value.trim(),
        modelo: modeloInput.value.trim(),
        kilometraje: kilometrajeInput.value.trim(),
        precio: precioInput.value.trim(),
    };

    // Validación de campos obligatorios
    if (!vehiculo.nombre || !vehiculo.marca || !vehiculo.modelo || 
        !vehiculo.kilometraje || !vehiculo.precio) {
        alert("Todos los campos son obligatorios");
        return;
    }

    // Si no hay foto, usar una aleatoria
    if (!vehiculo.foto) {
        vehiculo.foto = defaultImgs;
    }

    const newCard = crearCard(vehiculo);
    contCars.appendChild(newCard);

    form.reset();
});
// Botón de modo noche
const changeStyleBtn = document.getElementById("change-style");

changeStyleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    // Cambiar el texto del botón según el modo
    if (document.body.classList.contains("dark-mode")) {
        changeStyleBtn.innerHTML = '<i class="bi bi-sun-fill"></i>';
    } else {
        changeStyleBtn.innerHTML = '<i class="bi bi-moon-stars-fill"></i>';
    }
});