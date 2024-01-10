import React from 'react'
import '../../styles/Prices/TableCompare.css';
import ColumPrice from './ColumPrice';
import ColumnTextBenefit from './ColumnTextBenefit';
import Flickity from 'flickity';
import { useRef, useEffect, useState} from 'react';
import 'flickity/css/flickity.css';
import ButtonTableComparison from './ButtonTableComparison';
import '../../styles/Prices/CarouselButtons.css';

function TableComparePlans() {
    const carouselRef = useRef(null);
    const flickityInstance = useRef(null);
    const [displayCells, setDisplayCells] = useState([false, false, true, false, false, false]);
    let cellsReseted = false;

  useEffect(() => {
   
    flickityInstance.current = new Flickity(carouselRef.current, {
      
      wrapAround: true,
      autoplay: true,
      prevNextButtons: false,
      initialIndex: 2,
    });
    flickityInstance.current.resize();

    const handleResize = () => {
      if (window.innerWidth >= 958) {
        setDisplayCells(Array(6).fill(true));
        cellsReseted = false;
      } else {
        if(!cellsReseted){
          setDisplayCells([false, false, true, false, false, false]);
          flickityInstance.current.select(2);
          cellsReseted = true;
        }
      }
    };

    window.addEventListener('resize', handleResize);
    
    return () => {
      flickityInstance.current.destroy();
      window.removeEventListener('resize', handleResize);
    };
  }, []); 



  const handleCellClick = (index) => {
    console.log(index);
    flickityInstance.current.select(index);
    setDisplayCells(
      (prevCells) => {
        const newCells = Array(prevCells.length).fill(false);
        newCells[index] = true; 
        return newCells;}
     );

  };

  

  return (
    <div className='TableCompare-container'>
        <h2 className='tittle-text-table'>ELIGE EL PLAN QUE MAS SE ADAPTE A TUS NECESIDADES</h2>
        <div className='carousel' ref={carouselRef}>
            <div className='carousel-cell' onClick={()=> handleCellClick(0)}>
                <ButtonTableComparison title='1' currency='Bs' amount='100'/>
            </div>
            <div className='carousel-cell' onClick={()=> handleCellClick(1)}>
                <ButtonTableComparison title='2' currency='Bs' amount='100'/>
            </div>
            <div className='carousel-cell' onClick={()=> handleCellClick(2)}>
                <ButtonTableComparison title='3' currency='Bs' amount='100'/>
            </div>
            <div className='carousel-cell' onClick={()=> handleCellClick(3)}>
                <ButtonTableComparison title='4' currency='Bs' amount='100'/>
            </div>
            <div className='carousel-cell' onClick={()=> handleCellClick(4)}>
                <ButtonTableComparison title='5' currency='Bs' amount='100'/>
            </div>
            <div className='carousel-cell' onClick={()=> handleCellClick(5)}>
                <ButtonTableComparison title='6' currency='Bs' amount='100'/>
            </div>
        </div>
        <div className='table-container'>
          <ColumnTextBenefit/>
          {displayCells[0]? (<ColumPrice title='Basico' currency='Bs' amount='200'/>) : null}
          {displayCells[1]? (<ColumPrice title='Intermedio' currency='Bs' amount='200'/>) : null}
          {displayCells[2]? (<ColumPrice title='Avanzado' currency='Bs' amount='200'/>) : null}
          {displayCells[3]? (<ColumPrice title='pro' currency='Bs' amount='200'/>) : null}
          {displayCells[4]? (<ColumPrice title='Master' currency='Bs' amount='200'/>) : null}
          {displayCells[5]? (<ColumPrice title='Thanos' currency='Bs' amount='200'/>) : null}
        </div>
    </div>
  )
}

export default TableComparePlans;