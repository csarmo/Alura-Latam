import './Banner.css';
import Card from '../Card/Card';


function Banner(props) {

    return <section className='banner'>

        <div className='informaciones_banner'>
            <h1> 
                <span className="categoria_banner" style={{background: props.color_destacado}}>CATEGORIA</span> 
            </h1>

            <div className="informacion_destacada">
                <h2 className="banner_video_name">{props.titulo_videoBanner}</h2>
                <p className='texto_banner'>{props.descripcion_videoDestacado}</p>

            </div>
            
        </div>
        <div>
            <a href={props.url_videoDestacado}>
                <img className="video_destacado" src={props.imagen_videoDestacado} alt="Video destacado"/>
            </a>
        </div>
        

    </section>

}

export default Banner;