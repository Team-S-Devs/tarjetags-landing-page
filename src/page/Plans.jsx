import * as React from "react";
import BannerTittle from "../components/Prices/BannerTittle";
import PricesSection from "../components/Prices/PricesSection";
import TableComparePlans from "../components/Prices/TableComparePlans";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";

const Plans = () => {
  const [value, setValue] = React.useState("plans");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <BannerTittle />
      <Box sx={{ width: "100%", margin: "10px 0" }}>
        <TabContext value={value}>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <div style={{ display: "flex", width:'100%', justifyContent:'center'}}>
              <TabList
                onChange={handleChange}
                textColor="secondary"
                indicatorColor="secondary"
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  gap: "10px",
                  marginBottom: "10px",
                }}
              >
                <Tab
                  value="plans"
                  label="Planes Standard"
                  sx={{ flex: 1, width: "100%" }}
                />
                <Tab
                  value="plansPartner"
                  label="Planes de Socios"
                  sx={{ flex: 1, width: "100%" }}
                />
              </TabList>
            </div>

            <TabPanel value="plans">
              <PricesSection />
              <TableComparePlans />
            </TabPanel>
            <TabPanel value="plansPartner">
              <PricesSection />
            </TabPanel>
          </Box>
        </TabContext>
      </Box>
    </>
  );
};

export default Plans;
