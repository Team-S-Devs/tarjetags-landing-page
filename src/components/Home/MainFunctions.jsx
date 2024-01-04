import "../../styles/Home/MainFunctions.css";
import mainFunctionsJSON from '../../utils/MainFunctions.json'
import { MainFunction } from "./MainFunction";

const MainFunctions = () => {
  return (
    <div className="main-functions-container">
      <h2 className="subtitle-functions">TARJETAS DE CONTACTO</h2>
      {
        mainFunctionsJSON.map((mainFunction) => {
          return <MainFunction name={mainFunction.name} description={mainFunction.description} image={mainFunction.image} key={mainFunction.id} isLeft={mainFunction.isLeft} />
        })
      }
    </div>
  );
}

export default MainFunctions