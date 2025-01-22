import "./NuevoVideo.css"
import Campo from "../Campo/Campo";
import Categoria from "../Categoria/Categoria";
import Boton from "../Boton/Boton";
import { useState } from "react";

const NuevoVideo = (props) => {

    //Estados de los inputs de cada campo centralizados aca
    
        const [titulo, actualizaTitulo ] = useState("");
        const [categoria, actualizaCategoria] = useState("");
        const [imagen, actualizaImagen ] = useState("");
        const [video, actualizaVideo ] = useState("");
        const [descripcion, actualizaDescripcion ] = useState("");
        const [color, actualizaColor ] = useState("");


        //Para seleccionar color dependiendo de categoria puesta

        function seleccionaColor() {
            switch (categoria) {
                case "FRONT END":
                    actualizaColor("#6BD1FF");
                    break;
                case "BACK END":
                    actualizaColor("#00C86F");
                    break;
                case "INNOVACIÓN Y GESTIÓN":
                    actualizaColor("#FFBA05");
                    break;
                default:
                    actualizaColor("#000000");
                    break;
            }
        }


    
        //Para controlar lo que hace boton "GUARDAR"
    
        const guardar_datos_NuevoVideo = (event) => {
            event.preventDefault();
            seleccionaColor();
            console.log(color);
    
        //Objeto a enviar a API cuando se haga click en boton Guardar
        fetch("http://localhost:5000/Videos", {
            method: 'POST',
            headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            },
            body: JSON.stringify({
            titulo: titulo,
            categoria: categoria,
            imagen: imagen,
            video: video,
            color: color,
            descripcion: descripcion 
            })
        })
        .then(response => {
            if (response.ok) {response.json()}
        })
        .catch(err => console.log("Error enviando datos: ", err))
    
                limpiar_datos_campos(event);
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

    return <section className="tab_nuevo_video">

        <h2 className="titulo_nuevo_video">NUEVO VIDEO</h2>
        <p className="informacion_nuevo_video">COMPLETE EL FORMULARIO PARA CREAR UNA NUEVA TARJETA DE VIDEO</p>
        
        <form className="formulario_nuevo_video" onSubmit={guardar_datos_NuevoVideo}>
            <div className="label_crear_tarjeta">
                <h3 className="h3">Crear Tarjeta</h3>
            </div>

            <div className="nuevo_video_campos">
                <Campo nombre="Título" placeholder="ingrese título" altura="62px" anchura="500px" margenes="3% 3% 0% 0%" valor={titulo} refreshVal={actualizaTitulo}/>
                <Categoria margenes="3% 0%" valor={categoria} refreshVal={actualizaCategoria}/>
                <Campo nombre="Imagen" placeholder="url de miniatura del video" altura="62px" anchura="500px" margenes="3% 3%% 0% 0%" campo_requerido valor={imagen} refreshVal={actualizaImagen}/>
                <Campo nombre="Video" placeholder="ingrese url del video" altura="62px" anchura="500px" margenes="0% 0% 0% 3%" campo_requerido valor={video} refreshVal={actualizaVideo}/>
                <Campo nombre="Descripción" placeholder="¿De qué se trata este vídeo?" altura="220px" anchura="500px" margenes="3% 0% 3% 0%" valor={descripcion} refreshVal={actualizaDescripcion}/>
            </div>
            <div className="botones_nuevo_video">
                <Boton nombre="GUARDAR" />
                <Boton nombre="LIMPIAR" accion_boton={limpiar_datos_campos}/>
            </div>
        </form>

    </section>

}

export default NuevoVideo;