
import "./Card.css"
import Modal from "../Modal/Modal";
import useState from "../Modal/Modal";


const Card = ({id, titulo, categoria, imagen, video, color, descripcion}) => {

    //Manejando boton Editar Card
    const [quiero_mostrar_modal, setear_modal] = useState(false);
    const [id_video, setIdVideo] = useState("")


    const ocultar_modal = () => {
        setear_modal(false);
    };

    const tomaID = (event) => {
        event.preventDefault();
        setIdVideo(id);
        setear_modal(true);
    };

    const borrarCard = () => {
        fetch("http://localhost:5000/Videos", {
            method: 'DELETE',
            headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            },
            body: JSON.stringify({
            id: id 
            })
        })
        .then(response => console.log(response.json()))
        .catch(err => console.log("No fue posible eliminar la card: ", err))
    }
    
    return  <li className="estilo_lista">

        {quiero_mostrar_modal && <Modal cerrar_modal={ocultar_modal} card_id={id_video}/>}

        <div className="card" style={{border: "5px solid" + color}}>

             <a href={video} >
                <img width="429px" height="260px" className="Miniatura_video" src={imagen} alt={titulo}/>
            </a>

            <div className="area_botones"> 
                <a className="boton_card borrar" onClick={borrarCard}>
                    <img width="25px" height="28px" src="/recursos/waste_icon.png" alt="Icono borrar" />
                    <label className="texto_boton">BORRAR</label>
                </a>

                <a className="boton_card editar"  onClick={tomaID} >
                    <img width="25px" height="28px" src="/recursos/edit_icon.png" alt="Icono editar" />
                    <label className="texto_boton">EDITAR</label>
                </a>
            
            </div>

        </div>  
    </li>
}

export default Card;