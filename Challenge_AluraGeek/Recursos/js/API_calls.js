
import { imprime_noProducto } from "./cargar_productos.js"

export const url = "http://localhost:3001/productos";


async function fetch_db_productos() {

    try {

    const respuesta_raw = await fetch(url);
    const respuesta_json = await respuesta_raw.json();

    return respuesta_json;

    }   

    catch { imprime_noProducto(); }
}

export async function publicar_producto(nombre, precio, url_imagen) {

    try {

        await fetch(url, {

            method: "POST",
            headers: {"Content-type": "application/json"},
            body: JSON.stringify({
                nombre: `${nombre}`,
                precio: `${precio}`,
                url: `${url_imagen}`
            })
        });

        } 
    
    catch { (err) => console.log(`Ha ocurrido un error con la publicación: ${err}`); } 
}


export const fetch_productos = fetch_db_productos();


function eliminar_producto(id_elmentoTarjeta) {
            
// Petición HTTP para eliminar producto de db_productos.json
const delete_http = {
    method: "DELETE",
    headers: {"Content-type": "application/json"}
};

fetch(`${url}/${id_elmentoTarjeta}`, delete_http)
//.then(response => response.json())... no es necesario devolver nada.
.catch(err => alert(`No se pudo quitar producto, razón: ${err}`))

}
