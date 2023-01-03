import * as React from "react";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import {
  Discord,
  Instagram,
  Steam,
  Gmail,
  GitHub,
  ArtStation,
  Linkedin,
} from "./CustomSvg";

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
          <Tab label="Redes" {...a11yProps(0)} />
          <Tab label="Portfólio" {...a11yProps(1)} />
        </Tabs>
      </Box>

      <TabPanel value={value} index={0}>
        <Button
          fullWidth
          sx={{ height: "60px", marginBottom: "20px" }}
          variant="outlined"
          href="https://www.instagram.com/__moondusk/"
          startIcon={<Instagram />}
        >
          Instagram
        </Button>
        <Button
          fullWidth
          sx={{ height: "60px", marginBottom: "20px" }}
          variant="outlined"
          href="https://discord.gg/AGfxJKmbKf"
          startIcon={<Discord />}
        >
          Discord
        </Button>
        <Button
          fullWidth
          sx={{ height: "60px", marginBottom: "20px" }}
          variant="outlined"
          href="https://steamcommunity.com/id/TheDuskHue/"
          startIcon={<Steam />}
        >
          Steam
        </Button>
        <Button
          fullWidth
          sx={{ height: "60px", marginBottom: "20px" }}
          variant="outlined"
          href="https://steamcommunity.com/id/TheDuskHue/"
          startIcon={<Gmail />}
        >
          Email
        </Button>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Button
          fullWidth
          sx={{ height: "60px", marginBottom: "20px" }}
          variant="outlined"
          href="https://github.com/MoonDusk1996"
          startIcon={<GitHub />}
        >
          Github
        </Button>
        <Button
          fullWidth
          sx={{ height: "60px", marginBottom: "20px" }}
          variant="outlined"
          href="https://www.artstation.com/duski"
          startIcon={<ArtStation />}
        >
          ArtStation
        </Button>
        <Button
          fullWidth
          sx={{ height: "60px", marginBottom: "20px" }}
          variant="outlined"
          href="https://www.linkedin.com/in/washington-lopes-638836249/"
          startIcon={<Linkedin />}
        >
          Linkedin
        </Button>
      </TabPanel>
    </Box>
  );
}
