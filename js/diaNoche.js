const noche = document.getElementById("change-style");

noche.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        noche.innerHTML = '<i class="bi bi-sun-fill"></i>';
    } else {
        noche.innerHTML = '<i class="bi bi-moon-stars-fill"></i>';
    }
});