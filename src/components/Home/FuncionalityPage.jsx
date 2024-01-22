import React from 'react';
import ParallaxCard from "./MainFunctionalities";
import "../../styles/Home/FuncionalityPage.css";
import StartButton from "./StartButton";


const FuncionalitySection = ({ title, imgSrc, altText, description }) => {
    return (
        <div className="fun-section">
            <div className='icon'>
                <div className='icon-center'>
                    <img className="first-image" src={imgSrc} alt={altText} />
                    <img src="https://i.ibb.co/6FhS3Wd/Ellipse-62-removebg-preview.png" alt="Descripción de la imagen" />
                </div>
            </div>
            <div className='text-section'>
                <h6 className='title-text'>{title}</h6>
                <div className='subtext-text'>{description}</div>
            </div>
        </div>
    );
};

const FuncionalityPage = () => {
    return (
        <div className="funcionality-page">
            <div className='funcionality-conteiner'>
                <div className="parallax-section">
                    <img className="background-image" src="https://i.ibb.co/q06smqs/imagenjgp.jpg" alt="Esta imagen debe estar detrás de ParallaxCard" />
                    <ParallaxCard />
                </div>
                <div className="title-section">
                    <h3>Funcionalidades Principales</h3>
                    <FuncionalitySection
                        title="Potencia tus servicios"
                        imgSrc="https://i.ibb.co/n80LSTF/trending-up.png"
                        altText="icon trending up"
                        description="Añade y personaliza una variedad de servicios para destacar tu oferta de manera atractiva."
                    />
                    <FuncionalitySection
                        title="Añade tus Redes Sociales"
                        imgSrc="https://i.ibb.co/23xKBSw/chat-alt-2.png"
                        altText="icon chat"
                        description="Facilita el contacto directo con un simple clic en tu tarjeta de presentación digital."
                    />
                    <FuncionalitySection
                        title="Visibilidad Global"
                        imgSrc="https://i.ibb.co/3p2ynbM/qrcode.png"
                        altText="icon qr"
                        description="Comparte tu tarjeta con un enlace único o código QR para llegar a todo el mundo."
                    />
                    <FuncionalitySection
                        title="Libertad sin Límites"
                        imgSrc="https://i.ibb.co/L9BSdzm/view-grid-add.png"
                        altText="icon grid add"
                        description="Amplía tu oferta con más servicios y categorías. Puedes añadir múltiples redes sociales."
                    />
                    <div className="button-container-t">
                    <StartButton />
                </div>
                </div>
            </div>
        </div>
    );
};

export default FuncionalityPage;
