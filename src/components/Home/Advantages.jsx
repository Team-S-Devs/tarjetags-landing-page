import React from "react";
import "../../styles/Home/Advantages.css";
import "../../global.css";
import { FiMousePointer } from "react-icons/fi";
import { BsBroadcast } from "react-icons/bs";
import { BsUiChecksGrid } from "react-icons/bs";
import { BsBrush } from "react-icons/bs";
import { Star } from "@mui/icons-material";
import StartButton from "./StartButton";
const Advantages = () => {
    return (
        <div className="advantages-section">
            <div className="container body-advantages">
                <h4>Ventajas Clave para Tu Éxito </h4>
                <div className="container-row-advantages">
                    <div className="box-advantage">
                        <BsUiChecksGrid className="icon-advantage" />
                         <h5>Gestion intuitiva</h5>
                         <p>
                         Crea tu tarjeta, agregra tu informacion, redes sociales y servicios de manera facil e intuitiva 
                         </p>
                    </div>

                    <div className="box-advantage">
                        <BsBrush className="icon-advantage" />
                         <h5>Personalización</h5>
                         <p>
                         Personaliza los colores y estilo que te representa, adapta tus redes sociales y metodos de contacto.
                        </p>
                    </div>


                    <div className="box-advantage">
                        <BsBroadcast className="icon-advantage" />
                         <h5>Presencia digital</h5>
                         <p>
                         Incrementa tu presencia en el mundo digital compartiendo tu tarjeta con el mundo.
                         </p>
                    </div>
                </div>
                <div className="button-container-advantages">
                    <StartButton white={true}/>
                </div>
            </div>
        </div>
    );
}

export default Advantages;