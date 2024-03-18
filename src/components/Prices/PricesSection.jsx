
import "../../styles/Prices/PricesSection.css";
import CardPrice from "./CardPrice";
const PricesSection = () => {

    return(
    <div className="price-container">
        <h2 className="tittle-section">DESCUBRE NUESTRAS OPCIONES DE SERVICIO</h2>
        <div className="cards-container">
            <CardPrice idPlan={1}/>
            <CardPrice idPlan={2}/>
            <CardPrice idPlan={3}/>
        </div>
    </div>
    );
}

export default PricesSection;