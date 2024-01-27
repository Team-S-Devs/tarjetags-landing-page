import "../../styles/Home/Cover.css";
import Spline from "@splinetool/react-spline";
import imageCover from "../../assets/mancha.svg";
import { linkHome } from "../../utils/Links";
import { useState, useEffect } from "react";


const Cover = () => {

  /* Aqui ira la logica de obtener el valor de logueado */

  const [messageButton, setMessageButton] = useState("");
  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    if (isLogged) {
      setMessageButton("Mi dashboard");
    } else {
      setMessageButton("Registrate");
    }
  }, [isLogged]);
  
  return (
    
    <div className="cover-container-background">
      <div className=" container cover-container">
        <div className="text-cover">
          <h1 className="slogan-cover">Conéctate de Forma Digital con Targetags</h1>
          <p className="paragraph-slogan-cover">Crea tarjetas de presentación irresistibles que te abran puertas y te conecten con oportunidades ilimitadas.</p>
          <a href={linkHome} className="sign-up-cover">
            {messageButton}
          </a>
        </div>
        <div className="cover-sub-container">
          
          
          <img className="image-cover" src={imageCover} alt="cover-image" />
         <Spline scene={"https://draft.spline.design/mTewcjp1QDLvHqoq/scene.splinecode"}  className="spline-cover-one" />
          
         
        </div>
      </div>
    </div>
  );
};

export default Cover;
