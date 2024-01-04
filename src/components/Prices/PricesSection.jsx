
import "../../styles/Prices/PricesSection.css";
import CardPrice from "./CardPrice";
const PricesSection = () => {

    return(
    <div className="price-container">
        <h2 className="tittle-section">DESCUBRE NUESTRAS OPCIONES DE SERVICIO</h2>
        <div className="cards-container">
            <CardPrice tittle="Basic Plan" price="100" currency="$us"/>
            <CardPrice tittle="Basic Plan" price="100" currency="$us"/>
            <CardPrice tittle="Basic Plan" price="100" currency="$us"/>
            <CardPrice tittle="Basic Plan" price="100" currency="$us"/>
            <CardPrice tittle="Basic Plan" price="100" currency="$us"/>
            <CardPrice tittle="Basic Plan" price="100" currency="$us"/>
        </div>
    </div>
    );
}

export default PricesSection;