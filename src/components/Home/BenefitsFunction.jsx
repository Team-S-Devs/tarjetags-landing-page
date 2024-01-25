import React from 'react';

import StartButton from "./StartButton";
import "../../styles/Home/BenefitsFunction.css";
import commentsData from '../../utils/Comments.json';
import { useRef, useEffect } from 'react';
import Flickity from 'flickity';
import 'flickity/css/flickity.css';
import ParallaxTilt from 'react-parallax-tilt';
import pain from '../../assets/mancha.svg';

const BenefitsFunction = () => {
    
    const carouselRef = useRef(null);
    const flickityInstance = useRef(null);
   
    useEffect(() => {
   
        flickityInstance.current = new Flickity(carouselRef.current, {
          
          autoPlay: 3000,
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
                    
                </div>
                <div className='funcionality-conteiner-benefit'>
                    <div className='container-carousel-home-benefit'>
                        <div ref={carouselRef} className="carousel-home">
                            {commentsData.map((comment, i) => (
                                <div key={i} className="carousel-cell-home">
                                    <div className="comment-benefit">
                                        <h4 className='title-benefit-carousel'>{comment.title}</h4>
                                        <p>{comment.text}</p>
                                    </div>
                                </div>
                            ))}
                            
                        </div>
                        <div className="start-button-benefit">
                            <StartButton white={true} />
                        </div>
                    </div>
                    <div className='container-card-benefit'>
                        <img src={pain} alt="pain" className="back-benefit" />
                        <ParallaxTilt
                            scale={1}
                            transitionSpeed={1500}
                            tiltMaxAngleX={15}
                            tiltMaxAngleY={15}
                        >
                            <div className="image-container-benefit">
                                <img
                                    src="https://i.postimg.cc/V657vNgn/Preview-tarjeta.png"
                                    alt="Centrado con perspectiva"
                                    className="img-benefit"
                                />
                            </div>
                        </ParallaxTilt>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BenefitsFunction;
