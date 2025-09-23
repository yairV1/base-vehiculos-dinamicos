// constantes globales 
const form = document.getElementById("vehiculo-form");
const contCars = document.querySelector("#cont-cards .row.g-3");
const fotoInput = document.getElementById("fotoCar");
const nombreInput = document.getElementById("nombreCar");
const marcaInput = document.getElementById("marcaCar");
const modeloInput = document.getElementById("modeloCar");
const kilometrajeInput = document.getElementById("kilometrajeCar");
const precioInput = document.getElementById("precioCar");

const contCarrito = document.querySelector(".cont-carrito");
const totalPrecioEl = document.querySelector(".total");

const defaultImg = "img/aventador.jpg";

// Array del carrito
let carrito = [];


// creacion de un vehiculo
function crearCard(vehiculo) {
    const col = document.createElement("div");
    col.classList.add("col-md-6", "item-vehiculo");

    const card = document.createElement("div");
    card.classList.add("card", "h-100");

    const imagen = document.createElement("img");
    imagen.classList.add("card-img-top", "w-100");
    imagen.src = vehiculo.foto || defaultImg;
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

    // Botón comprar → agrega al carrito
    const btnSuccess = document.createElement("button");
    btnSuccess.classList.add("btn", "btn-success");
    btnSuccess.textContent = "Comprar";

    btnSuccess.addEventListener("click", () => {
        carrito.push(vehiculo);
        actualizarCarrito();      
    });

    // Botón eliminar tarjeta de la lista
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


// formulario
form.addEventListener("submit", (e) => {
    e.preventDefault();

    const vehiculo = {
        foto: fotoInput.value.trim() || defaultImg,
        nombre: nombreInput.value.trim(),
        marca: marcaInput.value.trim(),
        modelo: modeloInput.value.trim(),
        kilometraje: kilometrajeInput.value.trim(),
        precio: parseFloat(precioInput.value.trim()) || 0,
    };

    if (!vehiculo.nombre || !vehiculo.marca || !vehiculo.modelo || !vehiculo.kilometraje || !vehiculo.precio) {
        alert("Todos los campos son obligatorios");
        return;
    }

    const newCard = crearCard(vehiculo);
    contCars.appendChild(newCard);

    form.reset();
});


// panel lateras y eso
const carritoBtn = document.getElementById("carrito");
const remov = document.getElementById("carritos");
const panel = document.querySelector(".panel");

carritoBtn.addEventListener("click", () => {
    panel.classList.add("active");
});

remov.addEventListener("click", () => {
    panel.classList.remove("active");
});


// targetas del carrito
function createCardCarrito(vehiculo, index) {
    const cont = document.createElement("div");
    cont.classList.add("row", "card-carrito", "mb-2", "p-2", "border");

    const colImg = document.createElement("div");
    colImg.classList.add("col-md-4");

    const img = document.createElement("img");
    img.classList.add("carrito-img", "w-100");
    img.src = vehiculo.foto || defaultImg;
    img.alt = vehiculo.nombre || "Vehículo";
    colImg.appendChild(img);

    const colInfo = document.createElement("div");
    colInfo.classList.add("col-md-6");
    colInfo.innerHTML = `
        <h3 class="card-title">${vehiculo.nombre}</h3>
        <h4 class="card-subtitle text-muted">${vehiculo.marca}</h4>
        <h2 class="text-success">$${vehiculo.precio}</h2>
    `;

    const btnEliminar = document.createElement("button");
    btnEliminar.classList.add("btn", "btn-danger", "col-md-2");
    btnEliminar.textContent = "X";

    btnEliminar.addEventListener("click", () => {
        carrito.splice(index, 1);
        actualizarCarrito();      
    });

    cont.appendChild(colImg);
    cont.appendChild(colInfo);
    cont.appendChild(btnEliminar);

    return cont;
}


// total y actualizar
function actualizarCarrito() {
    contCarrito.innerHTML = "";

    carrito.forEach((auto, index) => {
        const cardCarrito = createCardCarrito(auto, index);
        contCarrito.appendChild(cardCarrito);
    });

    let total = carrito.reduce((suma, auto) => suma + auto.precio, 0);
    totalPrecioEl.textContent = `Total = $${total.toLocaleString("es-CL")}`;
}


// modo nochecita
const noche = document.getElementById("change-style");

noche.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        noche.innerHTML = '<i class="bi bi-sun-fill"></i>';
    } else {
        noche.innerHTML = '<i class="bi bi-moon-stars-fill"></i>';
    }
});
