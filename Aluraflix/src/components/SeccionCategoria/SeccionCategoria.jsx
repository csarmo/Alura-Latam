import "./SeccionCategoria.css";
import Card from "../Card/Card";
import { useState, useEffect } from "react";


function SeccionCategoria(props) {
//////////////////////////////////////////////////////////////////////////
      
   const [Videos, setVideos] = useState([]);

    //Cargar API desde json-server (HTTP GET)
    useEffect( () => {
        
        fetch("http://localhost:5000/Videos")
        .then( (response) => { 
            if (response.ok) { return response.json() }
            throw response 
                            } )
        .then( (data) => setVideos(data) )
        .catch( (err) => { console.log("Error cargando videos: ", err) } )
    }, [] );


    // Divido por categorias

    const categoria_FrontEnd = Videos.filter( video => video.categoria === "FRONT END" );
    const categoria_BackEnd = Videos.filter( video => video.categoria === "BACK END" )
    const categoria_InnoDesa = Videos.filter( video => video.categoria === "INNOVACIÓN Y GESTIÓN" )


    return <section className="videos_por_categoria">


                    <h1 className="section_category">
                        <span className="categorizaciones" style={{background: categoria_FrontEnd[0].color}} > 
                            categoria_FrontEnd[0].categoria
                        </span>
                    </h1>

                    <ul className="listado_videos">
                        {  categoria_FrontEnd.map( video => { return <Card {...video} key={video.id} /> } )  }
                    </ul>



                    <h1 className="section_category">
                        <span className="categorizaciones" style={{background: categoria_BackEnd[0].color}}> 
                        categoria_BackEnd[0].categoria
                        </span>
                    </h1>

                    <ul className="listado_videos">
                        {  categoria_BackEnd.map( video => { return <Card {...video} key={video.id} /> } )  }
                    </ul>



                    <h1 className="section_category">
                        <span className="categorizaciones" style={{background: categoria_InnoDesa[0].color}}> 
                        categoria_InnoDesa[0].categoria
                        </span>
                    </h1>

                    <ul className="listado_videos">
                        {  categoria_InnoDesa.map( video => { return <Card {...video} key={video.id} /> } )  }
                    </ul>

            </section> 
}

export default SeccionCategoria;
