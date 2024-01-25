import React from 'react';
import ParallaxTilt from 'react-parallax-tilt';
import '../../styles/Home/MainFunctionalities.css';

const MainFunctionalities = () => {
    return (
        <div className="parallax-tilt-container">
            <ParallaxTilt
                scale={1}
                transitionSpeed={1500}
                tiltMaxAngleX={15}
                tiltMaxAngleY={15}
            >
                <div className="centered-content">
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
