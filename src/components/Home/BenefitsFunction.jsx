import React from 'react';
import { useSpring, animated, config } from 'react-spring';
import ParallaxCard from "./MainFunctionalities";
import StartButton from "./StartButton";
import { svgCode6 } from "../../utils/svgData";
import "../../styles/Home/BenefitsFunction.css";
import commentsData from '../../utils/Comments.json';

const createSvgImage = (svgCode) => `data:image/svg+xml;base64,${btoa(svgCode)}`;
const imgSrc4 = createSvgImage(svgCode6);

const BenefitsFunction = () => {
    const [index, setIndex] = React.useState(0);

    const comments = commentsData.map((comment) => comment.text);

    const props = useSpring({
        opacity: 1,
        from: { opacity: 0 },
        reset: true,
        config: { tension: 40, friction: 20 }, 
        onRest: () => setIndex((prevIndex) => (prevIndex + 1) % comments.length),
    });

    return (
        <div className="benefit-section-benefit">
            <div className="container-benefit">
                <div className="title-section-benefit">
                    <h3>Funcionalidades Principales</h3>
                </div>
                <div className='funcionality-conteiner-benefit'>
                    <div className='allfun-benefit'>
                        <animated.div style={props} className="fun-section-benefit">
                            <div className='comment-benefit'>{comments[index]}</div>
                        </animated.div>
                        <div className="button-container-t-benefit">
                            <StartButton white={true} />
                        </div>
                    </div>
                    <div className="parallax-section-benefit">
                        <img className="background-image-benefit" src={imgSrc4} alt="Esta imagen debe estar detrás de ParallaxCard" />
                        <ParallaxCard />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BenefitsFunction;
