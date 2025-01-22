import "./Header.css"
import Boton from "../Boton/Boton";

function Header(props) {
    return <div className="header">
                <img height="40px" className="logo" src="/recursos/aluraflix_logo.png" alt="AluraFlix-Logo" />
            
                <div className="botones_header">
                    <Boton nombre="HOME" accion_boton={props.lleva_home} estilo_selected={props.resalto_home}/>
                    <Boton nombre="NUEVO VIDEO" accion_boton={props.lleva_nuevo_video} estilo_selected={props.resalto_nuevo_video}/>
                </div>
            </div>
}

export default Header;