import * as React from "react";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
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

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box
        sx={{
          borderBottom: 1,
          borderColor: "divider",
          borderRadius: "3px",
          bgcolor: "background.paper",
        }}
      >
        <Tabs
          textColor="primary"
          variant="fullWidth"
          value={value}
          onChange={handleChange}
          aria-label="basic tabs"
        >
          <Tab label="Contato" {...a11yProps(0)} />
          <Tab label="Portfólio" {...a11yProps(1)} />
        </Tabs>
      </Box>

      <TabPanel value={value} index={0}>
        <Button
          fullWidth
          sx={{ height: "60px", marginBottom: "20px" }}
          variant="outlined"
        >
          Instagram
        </Button>
        <Button
          fullWidth
          sx={{ height: "60px", marginBottom: "20px" }}
          variant="outlined"
        >
          Discord
        </Button>
        <Button
          fullWidth
          sx={{ height: "60px", marginBottom: "20px" }}
          variant="outlined"
        >
          Steam
        </Button>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Button
          fullWidth
          sx={{ height: "60px", marginBottom: "20px" }}
          variant="outlined"
        >
          Github
        </Button>
        <Button
          fullWidth
          sx={{ height: "60px", marginBottom: "20px" }}
          variant="outlined"
        >
          ArtStation
        </Button>
        <Button
          fullWidth
          sx={{ height: "60px", marginBottom: "20px" }}
          variant="outlined"
        >
          Linkedin
        </Button>
      </TabPanel>
    </Box>
  );
}
