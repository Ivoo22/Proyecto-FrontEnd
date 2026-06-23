const hamburguesa = document.getElementById("hamburguesa");
const menu = document.querySelector(".menu")

hamburguesa.addEventListener("click", ()=>{
    menu.classList.toggle("activo");
});

const reseñas = document.querySelectorAll(".reseña");
const contenedor = document.querySelector(".grid-reseñas");

let visibles = 4;
let botonVerMas = crearBotonVerMas();
let botonOcultar = null;

for (let i = visibles; i < reseñas.length; i++) {
    reseñas[i].classList.add("oculta");
}

function crearBotonVerMas () {
    const btn = document.createElement("button");
    btn.textContent = "Ver Más Reseñas";
    btn.classList.add("boton-tres");

    contenedor.appendChild(btn);

    btn.onclick = function () {
        let mostradas = 0;

        for (let i = 0; i < reseñas.length; i++) {
            if (reseñas[i].classList.contains("oculta") && mostradas < 2) {
                reseñas[i].classList.remove("oculta");
                mostradas++;
                visibles++;
            }
        }

        if (!botonOcultar) {
            crearBotonOcultar();
        }

        if (visibles >= reseñas.length) {
            btn.remove();
            botonVerMas = null;
        }
    };

    return btn;
}

function crearBotonOcultar () {
    botonOcultar = document.createElement("button");
    botonOcultar.textContent = "Ocultar Reseñas";
    botonOcultar.classList.add("boton-tres");

    contenedor.appendChild(botonOcultar);

    botonOcultar.onclick = function() {
        for (let i = 4; i < reseñas.length; i++) {
            reseñas[i].classList.add("oculta");
        }

        visibles = 4;

        botonOcultar.remove();
        botonOcultar = null;

        if (!botonVerMas) {
            botonVerMas = crearBotonVerMas();
        }
    };
}