import React from 'react';
import ParallaxTilt from 'react-parallax-tilt';
import '../../styles/Home/MainFunctionalities.css';

const MainFunctionalities = () => {
    return (
        <div className="parallax-tilt-container">
            <ParallaxTilt
                scale={1.2}
                transitionSpeed={1500}
                tiltMaxAngleX={15} //no tocar
                tiltMaxAngleY={15}
            >
                <div className="centered-content">
                    {/* Contenido adicional si es necesario */}
                    <img
                        src="https://marea-alcalina-resources.s3.amazonaws.com/landing_catalog_mockup_image_4.webp"
                        alt="Centrado con perspectiva"
                        className="centered-image"
                    />
                </div>
            </ParallaxTilt>
        </div>
    );
};

export default MainFunctionalities;
