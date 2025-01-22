import "./Modal.css";
import Campo from "../Campo/Campo.jsx";
import Categoria from "../Categoria/Categoria.jsx";
import Boton from "../Boton/Boton.jsx";
import { useState, useEffect } from "react";


function Modal(props) {

    //Estados de los inputs de cada campo centralizados aca

    const [titulo, actualizaTitulo ] = useState("");
    const [categoria, actualizaCategoria ] = useState("");
    const [imagen, actualizaImagen ] = useState("");
    const [video, actualizaVideo ] = useState("");
    const [descripcion, actualizaDescripcion ] = useState("");
    const [id, actualizaID] = useState("");

    //Para controlar lo que hace boton "GUARDAR"

    const guardar_datos_Modal = (event) => {
        event.preventDefault();

        actualizaID(props.card_id);

    //Ennviar a API cuando se haga click en boton Guardar

    const editar = {
            method: 'PUT',
            headers: { Accept: 'application/json','Content-Type': 'application/json' },
            body: JSON.stringify({ 
                id: id,
                titulo: titulo,
                categoria: categoria,
                imagen: imagen,
                video: video,
                descripcion: descripcion
             })
        };

            fetch('http://localhost:5000/Videos', editar)
            .then(response => console.log(response.json()))
            .catch(err => console.log("Ha ocurrido un problema con tu edicion: ", err))

 //Llamada a API PUT
    
            limpiar_datos_campos();
    }

    //Para limpiar campos en Modal
    const limpiar_datos_campos = (event) => {
        event.preventDefault();
        
        actualizaTitulo("");
        actualizaCategoria("");
        actualizaImagen("");
        actualizaVideo("");
        actualizaDescripcion("");
    }

    ////////////////////////////////////////////////////////

    return <dialog open>
    
            <div className="modal">   
                <div className="area_icono_cerrar">
                    <img src="/recursos/boton_cerrar.png" alt="Cerrar editor" onClick={props.cerrar_modal}/>
                </div>
                <h2 className="label_modal">EDITAR CARD:</h2>
                <div className="campos_modal">
	                <Campo nombre="Título" placeholder="ponle un nombre llamativo" altura="62px" margenes="4% 0% 0% 0%" valor={titulo} refreshVal={actualizaTitulo}/>
	                <Categoria margenes="4% 0% 0% 0%" color_fondo="#03122F" valor={categoria} refreshVal={actualizaCategoria}/>
	                <Campo nombre="Imagen" placeholder="debe ser un thumbnail del video" altura="62px" margenes="4% 0% 0% 0%" valor={imagen} refreshVal={actualizaImagen}/>
	                <Campo nombre="Video" placeholder="URL del video" altura="62px" margenes="4% 0% 0% 0%" valor={video} refreshVal={actualizaVideo}/>
	                <Campo nombre="Descripción" placeholder="breve explicación de lo que trata" altura="112px" margenes="4% 0% 10% 0%" valor={descripcion} refreshVal={actualizaDescripcion}/>  
                </div>
            <div className="boton_container">
            <Boton nombre="GUARDAR" accion_boton={guardar_datos_Modal}/>
            <Boton nombre="LIMPIAR" accion_boton={limpiar_datos_campos}/>
            </div>

            </div>

    </dialog>
}

export default Modal;