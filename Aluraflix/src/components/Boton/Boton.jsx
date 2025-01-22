import './Boton.css'

const Boton = (props) => {
    return <div className='boton_grid'>
            <button className='boton_global' style={props.estilo_selected} onClick={props.accion_boton}> {props.nombre} </button>
            </div>
    
};

export default Boton;