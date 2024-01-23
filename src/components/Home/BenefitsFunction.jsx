import React, { useEffect } from "react";
import StartButton from "./StartButton";
import Flickity from "flickity";
import "flickity/css/flickity.css";
import { svgCode5 } from "../../utils/svgData";
import ParallaxCard from "./MainFunctionalities";
import "../../styles/Home/BenefitsFunction.css";
import "../../global.css";

const arrowSvg = (
    <svg xmlns="http://www.w3.org/2000/svg" width="49" height="49" viewBox="0 0 49 49" fill="none">
      <path fillRule="evenodd" clipRule="evenodd" d="M24.5 43.7994C29.5922 43.7994 34.4758 41.7766 38.0765 38.1759C41.6772 34.5752 43.7001 29.6916 43.7001 24.5994C43.7001 19.5073 41.6772 14.6237 38.0765 11.023C34.4758 7.42227 29.5922 5.39941 24.5 5.39941C19.4079 5.39941 14.5243 7.42227 10.9236 11.023C7.3229 14.6237 5.30005 19.5073 5.30005 24.5994C5.30005 29.6916 7.3229 34.5752 10.9236 38.1759C14.5243 41.7766 19.4079 43.7994 24.5 43.7994ZM33.3968 22.9026L26.1968 15.7026C25.7442 15.2654 25.138 15.0235 24.5087 15.029C23.8794 15.0345 23.2775 15.2869 22.8325 15.7318C22.3875 16.1768 22.1351 16.7788 22.1296 17.4081C22.1242 18.0373 22.3661 18.6436 22.8032 19.0962L25.9065 22.1994H17.3C16.6635 22.1994 16.0531 22.4523 15.603 22.9024C15.1529 23.3524 14.9 23.9629 14.9 24.5994C14.9 25.2359 15.1529 25.8464 15.603 26.2965C16.0531 26.7466 16.6635 26.9994 17.3 26.9994H25.9065L22.8032 30.1026C22.574 30.324 22.3912 30.5888 22.2654 30.8816C22.1396 31.1745 22.0734 31.4894 22.0706 31.8081C22.0679 32.1267 22.1286 32.4428 22.2493 32.7377C22.37 33.0327 22.5482 33.3006 22.7735 33.526C22.9988 33.7513 23.2668 33.9295 23.5618 34.0502C23.8567 34.1709 24.1727 34.2316 24.4914 34.2288C24.8101 34.226 25.125 34.1598 25.4178 34.0341C25.7106 33.9083 25.9755 33.7254 26.1968 33.4962L33.3968 26.2962C33.8468 25.8461 34.0995 25.2358 34.0995 24.5994C34.0995 23.963 33.8468 23.3527 33.3968 22.9026Z" fill="white"/>
    </svg>
  );

const createSvgImage = (svgCode) => `data:image/svg+xml;base64,${btoa(svgCode)}`;
const imgSrc = createSvgImage(svgCode5);

const BenefitsFunction = () => {
    useEffect(() => {
        const flkty = new Flickity(".box-advantage-benefit", {
            cellAlign: "left",
            contain: true,
            wrapAround: true,
        });

        return () => {
            flkty.destroy();
        };
    }, []);

    return (
        <div className="benefit-section">
            <div className="container">
                <div className="container-row-benefit">
                    <div className="container-botton-benefit">
                        <h4>BENEFICIO </h4>
                        <div className="box-advantage-benefit">
                            
                            <p>
                                Diseña y lanza catálogos en minutos con una interfaz intuitiva, también obtendrás ayuda de la Inteligencia Artificial para generar descripciones de productos atractivas.
                            </p>
                            <p>
                                Olvídate de inconvenientes con PDFs pesados y cargas lentas. Nuestros menús digitales proporcionan una navegación fluida para tus clientes, sin necesidad de hacer zoom y con la certeza de tener tus productos actualizados en tiempo real.
                            </p>
                            <p>
                                Recibe pedidos directamente por estos canales y potencia la experiencia de tus clientes. Podrás recibir mensajes con todos los detalles de los productos seleccionados, simplificando la toma de decisiones.
                            </p>
                            <p>
                                Refuerza tu marca con una integración perfecta en tu propio sitio web. Nuestra conexión de dominio y subdominio te permite ofrecer un catálogo digital en su espacio en línea, manteniendo una imagen coherente y única.
                            </p>
                        </div>
                        <div className="button-container-benefit">
                            <StartButton white={true} />
                        </div>
                    </div>
                    <div className="parallax-section-benefit">
                        <img className="background-image-benefit" src={imgSrc} alt="Esta imagen debe estar detrás de ParallaxCard" />
                        <ParallaxCard />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BenefitsFunction;
