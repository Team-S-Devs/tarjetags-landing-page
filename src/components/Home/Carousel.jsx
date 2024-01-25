import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useSpring, animated } from 'react-spring';
import "../../styles/Home/BenefitsFunction.css";
import commentsData from '../../utils/Comments.json';

const Carousel = () => {
  const [index, setIndex] = useState(0);

  const comments = commentsData.map((comment) => comment.text);

  const sliderSettings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500, // Ajusta la velocidad del carrusel según tu preferencia
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (oldIndex, newIndex) => setIndex(newIndex),
  };

  const springProps = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    reset: true,
    onRest: () => setIndex((prevIndex) => (prevIndex + 1) % comments.length),
  });

  return (

    <div className='funcionality-conteiner-benefit'>
      <Slider {...sliderSettings}>
        {comments.map((comment, commentIndex) => (
          <div key={commentIndex} className="custom-fun-section-benefit">
            <animated.div style={springProps} className='comment-benefit'>{comment}</animated.div>
          </div>
        ))}
      </Slider>
    </div>
  );
};


export default Carousel;
