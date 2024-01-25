import React from 'react';
import { useSpring, animated, config } from 'react-spring';
import ParallaxCard from "./MainFunctionalities";
import StartButton from "./StartButton";
import { svgCode6 } from "../../utils/svgData";
import "../../styles/Home/BenefitsFunction.css";
import commentsData from '../../utils/Comments.json';
import { useRef } from 'react';
import { useEffect } from 'react';
import Flickity from 'flickity';
import 'flickity/css/flickity.css';

const createSvgImage = (svgCode) => `data:image/svg+xml;base64,${btoa(svgCode)}`;
const imgSrc4 = createSvgImage(svgCode6);

const BenefitsFunction = () => {
    const [index, setIndex] = React.useState(0);

    
   
    const carouselRef = useRef(null);
    const flickityInstance = useRef(null);
   

    useEffect(() => {
   
        flickityInstance.current = new Flickity(carouselRef.current, {
          
          autoplay: true,
          prevNextButtons: true,
          pageDots: false,
          contain: true,
             wrapAround: true,
        });
        return () => {
            if(flickityInstance.current){
                flickityInstance.current.destroy();
            }
        }
    }, []);





    return (
        <div className="benefit-section-benefit">
            <div className="container body-benefits">
                <div className="title-section-benefit">
                    <h3>Beneficios</h3>
                </div>
                <div className='funcionality-conteiner-benefit'>
                    <div className='container-carousel-home-benefit'>
                        <div ref={carouselRef} className="carousel-home">
                            {commentsData.map((comment, i) => (
                                
                                <div key={i} className="carousel-cell-home">
                                    <div className="comment-benefit">
                                        <StartButton white={true}/>
                                        <h5>{comment.title}</h5>
                                        <p>{comment.text}</p>
                                        =
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className='container-card-benefit'>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BenefitsFunction;
