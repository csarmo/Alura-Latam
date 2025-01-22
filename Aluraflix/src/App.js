
import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
import Footer from './components/Footer/Footer';
import SeccionCategoria from './components/SeccionCategoria/SeccionCategoria';
import Modal from './components/Modal/Modal';
import NuevoVideo from './components/NuevoVideo/NuevoVideo';
import { useState } from 'react';

 
function App() {

////////////////////////////////////////////////////////

//Hook que decide si quieres ir a home
  let [ir_home, quieres_ir_home] = useState(true);

  const home = () => {
    quieres_ir_home(true);
    quieres_ir_nuevo_video(false);
  };
////////////////////////////////////////////////////////

  //Ingresa a pagina de nuevo video
  let [ir_nuevo_video, quieres_ir_nuevo_video] = useState(false);
  
  const nuevo_video = () => {
    quieres_ir_nuevo_video(true);
    quieres_ir_home(false);
   /* setear_modal(false); */

  };

  //Controlar el boton resaltado en el header
  const bt_home_hover = {
    color: ir_home ? "blueviolet" : "white",
    border: ir_home ? "1.5px solid blueviolet" : "1.5px solid white"
  }

  const bt_nuevo_hover = {
    color: ir_nuevo_video ? "blueviolet" : "white",
    border: ir_nuevo_video ? "1.5px solid blueviolet" : "1.5px solid white"
  }

///////////////////////////////////////////////////////////////////////////////

  return ( 

    <div className="App">

      {/*Pagina inicia renderizando la parte del header, elige entre pagina de home o pagina nuevo video segun el boton clickeado
      Un prop para cada boton del header */}
      <Header lleva_home={home} lleva_nuevo_video={nuevo_video} resalto_home={bt_home_hover} resalto_nuevo_video={bt_nuevo_hover}/>

      {/*Session de nuevo video, justo luego del header y antes del footer*/}
      { ir_nuevo_video &&  <NuevoVideo/> }

      {/*Controla renderizado de pagina home (banner)*/}
      { ir_home && <Banner imagen_videoDestacado="/recursos/player.png" url_videoDestacado={""} titulo_videoBanner="Challenge Aluraflix" color_destacado="#FFBA05"  
      descripcion_videoDestacado="Este challenge es una forma de aprendizaje. Es un mecanismo donde podrás comprometerte en la resolución de un problema para poder aplicar todos los conocimientos adquiridos en la formación React."/> }

      {/*Controla rederizado de pagina de home (categoria)*/}
      { ir_home && <SeccionCategoria/> }
    
      <Footer/>
     
    </div>
  );
}

export default App;
