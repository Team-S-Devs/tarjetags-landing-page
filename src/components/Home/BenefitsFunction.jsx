import React from "react";
import "../../styles/Home/BenefitsFunction.css";
import "../../global.css";
import { BsUiChecksGrid } from "react-icons/bs";
import { BsBrush } from "react-icons/bs";
import StartButton from "./StartButton";
import { svgCode } from "../../utils/svgData.js";

const createSvgImage = (svgCode) => `data:image/svg+xml;base64,${btoa(svgCode)}`;

const imgSrc = createSvgImage(svgCode);

const BenefitsFunction = () => {
    return (
        <div className="advantages-section">
            <div className="container body-advantages">
                <div className="container-row-advantages">
                    <div className="container-botton">
                        <h4>BENEFICIO </h4>
                        <div className="box-advantage">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
                            </p>
                        </div>
                        <div className="button-container-advantages">
                            <StartButton white={true} />
                        </div>
                    </div>
                    <div className="parallax-section">
                        <img className="background-image" src={imgSrc} alt="Esta imagen debe estar detrás de ParallaxCard" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BenefitsFunction;