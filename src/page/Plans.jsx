import { Tab } from "@mui/material";
import Loader from "../components/General/Loader";
import BannerTittle from "../components/Prices/BannerTittle";
import PricesSection from "../components/Prices/PricesSection";
import TableComparePlans from "../components/Prices/TableComparePlans";

const Plans = () => {
  return (
    <>
      <BannerTittle/>
      <PricesSection/>
      <TableComparePlans/>
      <div>Planes juas</div>
    </>
  );
}

export default Plans