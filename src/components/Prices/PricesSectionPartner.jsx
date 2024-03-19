
import CardPrice from "./CardPrice";
import "../../styles/Prices/PricesSection.css";

const PricesSectionPartner= () => {

    return(
    <div className="price-container">
        <h2 className="tittle-section">DESCUBRE NUESTRAS OPCIONES DE SERVICIO PARA NUESTROS SOCIOS</h2>
        <div className="cards-container">
            <CardPrice idPlan={4}/>
            <CardPrice idPlan={5}/>
            <CardPrice idPlan={6}/>
        </div>
    </div>
    );
}

export default PricesSectionPartner;