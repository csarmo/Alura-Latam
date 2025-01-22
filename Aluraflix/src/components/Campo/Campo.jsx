import "./Campo.css"

const Campo = (props) => {

	const pongoValor = (event) => {
		props.refreshVal(event.target.value);
        console.log(event.target.value);
    }

	return <div className="campos" style={{margin: props.margenes}}>

				<label className="nombre">{props.nombre}</label>
				<input className="placeholder" placeholder={props.placeholder} 
									style={{height: props.altura, width: props.anchura}} 
									required={props.campo_requerido}
									value={props.valor}
									onChange={pongoValor}>

				</input>

			</div>
}

export default Campo;
