import { useState } from "react"
import "../../styles/Home/MainFunctions.css";
import mainFunctionsJSON from '../../utils/MainFunctions.json'
import { MainFunction } from "./MainFunction";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";

const MainFunctions = () => {

  const [currentPosition, setCurrentPosition] = useState(1)

  const [leftIsDisable, setLeftIsDisable] = useState(true)
  const [rightIsDisable, setRightIsDisable] = useState(false)

  const handleLeftPosition = () => {
    let newCurrentPosition = currentPosition - 1

    if (newCurrentPosition > 1) {
      setCurrentPosition(newCurrentPosition)
      if (rightIsDisable) {
        setRightIsDisable(false)
      }
    } else {
      setCurrentPosition(1)
      setLeftIsDisable(true)
    }
  }

  const handleRightPosition = () => {
    let newCurrentPosition = currentPosition + 1

    if (newCurrentPosition < mainFunctionsJSON.length) {
      setCurrentPosition(newCurrentPosition)
      if (leftIsDisable) {
        setLeftIsDisable(false)
      }
    } else {
      setCurrentPosition(mainFunctionsJSON.length)
      setRightIsDisable(true)
    }
  }

  return (
    <div className="main-functions-container">
      <button className={`left-button-m-f ${leftIsDisable ? 'disable-button-m-f' : ''}`} onClick={handleLeftPosition}>
        <SlArrowLeft />
      </button>
      <button className={`right-button-m-f ${rightIsDisable ? 'disable-button-m-f' : ''}`} onClick={handleRightPosition}>
        <SlArrowRight />
      </button>
      <h2 className="subtitle-functions">TARJETAS DE CONTACTO</h2>
      <div className="main-functions-section">
        {
          mainFunctionsJSON.map((mainFunction) => {
            return <MainFunction name={mainFunction.name} description={mainFunction.description} image={mainFunction.image} key={mainFunction.id} isLeft={mainFunction.isLeft} currentPosition={currentPosition} id={mainFunction.id} />
          })
        }
      </div>
    </div>
  );
}

export default MainFunctions