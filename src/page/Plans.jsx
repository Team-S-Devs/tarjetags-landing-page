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
      <Box sx={{ width: "100%" }}>
        <TabContext value={value}>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "-48px",
                height: "auto",
              }}
            >
              <TabList
                onChange={handleChange}
                textColor="black"
                indicatorColor="none"
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  gap: "10px",
                  backgroundColor: "transparent",
                }}
              >
                <Tab
                  value="plans"
                  label="Planes Standard"
                  sx={{
                    flex: 1,
                    width: "300px",
                    backgroundColor:"white" ,
                    "&.Mui-selected": {
                      backgroundColor:  "#EDF0F7",
                      fontWeight: 'bold',
                    },
                  }}
                />
                <Tab
                  value="plansPartner"
                  label="Planes de Socios"
                  sx={{ flex: 1, width: "300px", backgroundColor:"white" ,
                  "&.Mui-selected": {
                    backgroundColor:  "#EDF0F7",
                    fontWeight: 'bold',
                  },
                }}
                />
              </TabList>
            </div>

            <TabPanel value="plans" sx={{ backgroundColor: "#EDF0F7", width: "100%"}}>
              <PricesSection />
              <TableComparePlans />
            </TabPanel>
            <TabPanel value="plansPartner" sx={{ backgroundColor: "#EDF0F7", width: "100%" }}>
              <PricesSection />
            </TabPanel>
          </Box>
        </TabContext>
      </Box>
    </>
  );
};

export default Plans;
