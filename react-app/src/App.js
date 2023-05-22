import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import RiskTable from "./components/RiskTable";
import axios from "axios";
import { DataGrid } from "@mui/x-data-grid";
import Report from "./components/Report";
import Deforestation from "./components/Deforestation";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function App() {
  const [value, setValue] = React.useState(0);
  const [riskTable, setRiskTable] = React.useState([]);
  const [report, setReport] = React.useState([]);
  const [animal, setAnimal] = React.useState([]);
  const [deforestation, setDeforestation] = React.useState([]);

  React.useEffect(() => {
    fetchReport();
  }, []);

  const fetchRisk = async () => {
    try {
      const res = await axios.get("http://0.0.0.0:8000/risk-assessment/");
      console.log(res);
      const data = res.data.map((row) => ({
        id: row.animal_id,
        risk: row.risk,
        owner: row.owner,
        latitude: row.latitude,
        longitude: row.longitude,
      }));
      setRiskTable(data);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchReport = async () => {
    try {
      const res = await axios.get(
        "http://0.0.0.0:8000/livestock-identification/"
      );
      console.log(res);
      const data = res.data.map((row) => ({
        id: row.id,
        owner: row.owner,
        latitude: row.latitude,
        longitude: row.longitude,
      }));
      setReport(data);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchAllData = async () => {
    try {
      const res = await axios.get("http://0.0.0.0:8000/api/animals/");
      console.log(res);
      const data = res.data.map((row) => ({
        id: row.id,
        owner: row.owner,
        latitude: row.latitude,
        longitude: row.longitude,
      }));
      setAnimal(data);

      const res2 = await axios.get("http://0.0.0.0:8000/api/deforestation/");
      console.log(res);
      const data2 = res.data.map((row) => ({
        id: row.id,
        coverage: row.coverage,
        latitude: row.latitude,
        longitude: row.longitude,
      }));
      setDeforestation(data2);
    } catch (err) {
      console.log(err);
    }
  };

  console.log(riskTable);
  const handleChange = (event, newValue) => {
    setValue(newValue);

    if (newValue === 0) {
      fetchReport();
    } else if (newValue === 1) {
      fetchRisk();
    } else if (newValue === 2) {
      fetchAllData();
    }
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        maxWidth: "60%",
        margin: "auto",
      }}
    >
      <Box sx={{ width: "100%", margin: "auto" }}>
        <Box
          sx={{
            borderBottom: 1,
            borderColor: "divider",
            background: "lightgreen",
            fontWeight: "bold",
          }}
        >
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="Affected Animals" {...a11yProps(0)} />
            <Tab label="Risk Analysis" {...a11yProps(1)} />
            <Tab label="All Data" {...a11yProps(2)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <h4>The following table shows all affected animals in Colombia</h4>
          <Report data={report} />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <h4>
            The following table shows the risk Analysis of all animals available
            in the database.
          </h4>
          <RiskTable data={riskTable} />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <h4>All Animal details</h4>
          <Report data={animal} />
          <h4>Deforestation details</h4>
          <Deforestation data={deforestation} />
        </TabPanel>
      </Box>
    </div>
  );
}
