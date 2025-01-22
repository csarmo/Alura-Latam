import "./Categoria.css"

function Categoria(props) {


//Objeto categorias que sera importado de una API
const categorias = [
	'FRONT END',
	'BACK END',
	'INNOVACIÓN Y GESTIÓN'
];

const pongoValor = (event) => {
    props.refreshVal(event.target.value);
}

return <div className="categoria" style= {{margin: props.margenes, background: props.color_fondo}}>
    
    <label className="label">Categoria</label>
    <select className="opciones" value={props.valor} onChange={pongoValor}>
        <option value="" disabled defaultValue="" hidden>elija categoria</option>
        { categorias.map(  
            (categoria, index) => { return <option key={index} value={categoria}> {categoria} </option> }  )}
    </select>

    </div>

}

export default Categoria;