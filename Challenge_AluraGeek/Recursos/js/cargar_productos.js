
// Importo función del archivo API_calls para poder llamarla en este javascript

import { fetch_productos } from "./API_calls.js";
//import { espera_listing } from "./publicar_producto.js";

// variable inventario (elemento div del HTML sobre el que se pondrá el html de las tarjetas de producto)

const inventario = document.querySelector("[data-producto]");

//funcion listar_productos carga HTML dinámico de tarjeta de producto

function listar_producto(foto_producto, descripcion_producto, precio_producto) {
    const listing = document.createElement("div");
    listing.className = "miniatura_producto";
//Le asignamos un id dinámico
    listing.id = Math.floor(Math.random()*100);
    listing.innerHTML = `<img src="${foto_producto}" width="150px" />
                <div class="card-comments">
                  <p class="card-container info" >${descripcion_producto}</p>
                  <div class="card-container additional-info">
                    <p class="card-container value">RD$ ${precio_producto}</p>
              <!--      <input class="boton_remover" type="image" src="./Recursos/media/boton_eliminar.PNG" height="15px"></input>  -->
                  </div>
                </div>`;   

    const coloco_boton = document.querySelector(".value"); 
    /* coloco_boton.appendChild( () => {

        const boton_eliminar = document.createElement("input");
        boton_eliminar.className = `${listing.id}`;
        boton_eliminar.type = "image";
        boton_eliminar.src = "./Recursos/media/boton_eliminar.PNG";
        boton_eliminar.height = "15px";

    }); */


    return listing;
}

function no_productos() {

    const listing = document.createElement("p");
    listing.className = "no-product";
    listing.innerHTML ="No tenemos artículos en stock en estos momentos.";     

    return listing;
}

//funcion llamar_productos conecta funcion listar_productos con los datos del API y los carga al HTML a través de const inventario 

async function llamar_productos() {

    const llamadaAPI = await fetch_productos;
       
//inventario.appendchild cargará dentro del tag <div data-producto> la tarjeta con los datos del API del json-server

    llamadaAPI.forEach( (fetch_productos) => inventario.appendChild( listar_producto(fetch_productos.url, fetch_productos.nombre, fetch_productos.precio) ) );
}

export async function imprime_noProducto() {

    await inventario.appendChild( no_productos() );
}

llamar_productos();

//setTimeout(espera_listing(), 10000);

