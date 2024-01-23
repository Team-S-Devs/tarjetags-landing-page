import React from 'react';
import FuncionalitySection from './FuncionalitySection';
import ParallaxCard from "./MainFunctionalities";
import "../../styles/Home/FuncionalityPage.css";
import StartButton from "./StartButton";
import { svgCode, svgCode1, svgCode2, svgCode3 } from "../../utils/svgData";

const createSvgImage = (svgCode) => `data:image/svg+xml;base64,${btoa(svgCode)}`;

const imgSrc = createSvgImage(svgCode);
const imgSrc1 = createSvgImage(svgCode1);
const imgSrc2 = createSvgImage(svgCode2);
const imgSrc3 = createSvgImage(svgCode3);

const FuncionalityPage = () => {
    return (
        <div className="container">
            <div className="title-section">
                <h3>Funcionalidades Principales</h3>
            </div>
            <div className='funcionality-conteiner'>
                <div className="parallax-section">
                    <img className="background-image" src="https://i.ibb.co/q06smqs/imagenjgp.jpg" alt="Esta imagen debe estar detrás de ParallaxCard" />
                    <ParallaxCard />
                </div>
                <div className='allfun'>
                    <div className="fun-section">
                        <FuncionalitySection
                            title="Potencia tus servicios"
                            imgSrc={imgSrc}
                            altText="icon trending up"
                            description="Añade y personaliza una variedad de servicios para destacar tu oferta de manera atractiva."
                        />
                        <FuncionalitySection
                            title="Añade tus Redes Sociales"
                            imgSrc={imgSrc1}
                            altText="icon chat"
                            description="Facilita el contacto directo con un simple clic en tu tarjeta de presentación digital."
                        />
                        <FuncionalitySection
                            title="Visibilidad Global"
                            imgSrc={imgSrc2}
                            altText="icon qr"
                            description="Comparte tu tarjeta con un enlace único o código QR para llegar a todo el mundo."
                        />
                        <FuncionalitySection
                            title="Libertad sin Límites"
                            imgSrc={imgSrc3}
                            altText="icon grid add"
                            description="Amplía tu oferta con más servicios y categorías. Puedes añadir múltiples redes sociales."
                        />
                        <div className="button-container-t">
                            <StartButton />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default FuncionalityPage;
