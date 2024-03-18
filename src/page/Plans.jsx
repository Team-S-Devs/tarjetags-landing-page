import React, { useState } from "react";
import BannerTitle from "../components/Prices/BannerTittle";
import PricesSection from "../components/Prices/PricesSection";
import PricesSectionPartner from "../components/Prices/PricesSectionPartner";
import TableComparePlans from "../components/Prices/TableComparePlans";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import "../styles/Prices/Plans.css";

const Plans = () => {
  const [value, setValue] = useState("plans");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <BannerTitle />
      <Box className="box-Container">
        <TabContext value={value}>
          <Box className="tab-Container">
            <div className="tabList-Container">
              <TabList
                onChange={handleChange}
                textColor="black"
                indicatorColor="none"
              >
                <Tab
                  value="plans"
                  label="Planes Standard"
                  className="tab-Style"
                />
                <Tab
                  value="plansPartner"
                  label="Planes de Socios"
                  className="tab-Style"
                />
              </TabList>
            </div>
            <TabPanel value="plans" className="tabPanel-Style">
              <PricesSection />
              <TableComparePlans />
            </TabPanel>
            <TabPanel value="plansPartner" className="tabPanel-Style">
              <PricesSectionPartner />
            </TabPanel>
          </Box>
        </TabContext>
      </Box>
    </>
  );
};

export default Plans;
