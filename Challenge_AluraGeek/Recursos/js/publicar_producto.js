
import { publicar_producto} from "./API_calls.js";

const formulario_tag = document.querySelector("[data-formulario]");

async function cargar_formulario(event) {

    event.preventDefault();

    const nombre = document.querySelector("[data-nombre]").value;
    const precio = document.querySelector("[data-precio]").value;
    const url_imagen = document.querySelector("[data-url]").value;

    await publicar_producto(nombre, precio, url_imagen);
}

formulario_tag.addEventListener("submit", event => cargar_formulario(event));

function limpiar_formulario(event) {

    document.querySelector("[data-nombre]").value = "";
    document.querySelector("[data-precio]").value = "";
    document.querySelector("[data-url]").value = "";

    event.preventDefault();
}

formulario_tag.addEventListener("reset", event => limpiar_formulario(event));

//Eliminar listing de producto desde ícono de "x".

/*export async function espera_listing() {

    const elimina_listing = document.getElementById("eliminar");
    console.log(elimina_listing);
    await elimina_listing.addEventListener("click", event => eliminar_producto(event));

}*/