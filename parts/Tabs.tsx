import { useState, useEffect } from "react";

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
} from "./CustonIcons";

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
        <Box>
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
  const [value, setValue] = useState(0);
  const [visitedLinks, setVisitedLinks] = useState<any>([]);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  function handleButton(e: any) {
    setVisitedLinks((prev: []) => [...prev, e.nativeEvent.srcElement.href]);
  }
  useEffect(() => {
    localStorage.setItem("VL", JSON.stringify(visitedLinks));
  }, [visitedLinks]);

  return (
    <Box>
      <Box
        sx={{
          borderBottom: 2,
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
          <Tab label="Social" {...a11yProps(0)} />
          <Tab label="Portfolio " {...a11yProps(1)} />
        </Tabs>
      </Box>

      <TabPanel value={value} index={0}>
        <Button
          fullWidth
          sx={{
            height: "60px",
            marginTop: "20px",
            transition: "font-size 0.2s ease",

            ":hover ": {
              fontSize: "16px",
              transition: "font-size, background  .1s ease",
            },
            ":active": {
              position: "relative",
              top: "2px",
            },
          }}
          variant="outlined"
          href="https://www.instagram.com/moondusk1996/"
          target={"_blank"}
          startIcon={<Instagram />}
          onClick={handleButton}
        >
          Instagram
        </Button>
        <Button
          fullWidth
          sx={{
            height: "60px",
            marginTop: "20px",
            transition: "font-size 0.2s ease",

            ":hover ": {
              fontSize: "16px",
              transition: "font-size, background  .1s ease",
            },
            ":active": {
              position: "relative",
              top: "2px",
            },
          }}
          variant="outlined"
          href="https://discord.gg/AGfxJKmbKf"
          target={"_blank"}
          startIcon={<Discord />}
          onClick={handleButton}
        >
          Discord
        </Button>
        <Button
          fullWidth
          sx={{
            height: "60px",
            marginTop: "20px",
            transition: "font-size 0.2s ease",

            ":hover ": {
              fontSize: "16px",
              transition: "font-size, background  .1s ease",
            },
            ":active": {
              position: "relative",
              top: "2px",
            },
          }}
          variant="outlined"
          href="https://steamcommunity.com/id/TheDuskHue/"
          target={"_blank"}
          startIcon={<Steam />}
          onClick={handleButton}
        >
          Steam
        </Button>
        <Button
          fullWidth
          sx={{
            height: "60px",
            marginTop: "20px",
            transition: "font-size 0.2s ease",

            ":hover ": {
              fontSize: "16px",
              transition: "font-size, background  .1s ease",
            },
            ":active": {
              position: "relative",
              top: "2px",
            },
          }}
          variant="outlined"
          href="mailto:washington.lopesdasilvafilho@gmail.com"
          target={"_blank"}
          startIcon={<Gmail />}
          onClick={handleButton}
        >
          Email
        </Button>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Button
          fullWidth
          sx={{
            height: "60px",
            marginTop: "20px",
            transition: "font-size 0.2s ease",

            ":hover ": {
              fontSize: "16px",
              transition: "font-size, background  .1s ease",
            },
            ":active": {
              position: "relative",
              top: "2px",
            },
          }}
          variant="outlined"
          href="https://github.com/MoonDusk1996"
          target={"_blank"}
          startIcon={<GitHub />}
          onClick={handleButton}
        >
          Github
        </Button>
        <Button
          fullWidth
          sx={{
            height: "60px",
            marginTop: "20px",
            transition: "font-size 0.2s ease",

            ":hover ": {
              fontSize: "16px",
              transition: "font-size, background  .1s ease",
            },
            ":active": {
              position: "relative",
              top: "2px",
            },
          }}
          variant="outlined"
          href="https://www.artstation.com/duski"
          target={"_blank"}
          startIcon={<ArtStation />}
          onClick={handleButton}
        >
          ArtStation
        </Button>
        <Button
          fullWidth
          sx={{
            height: "60px",
            marginTop: "20px",
            transition: "font-size 0.2s ease",

            ":hover ": {
              fontSize: "16px",
              transition: "font-size, background  .1s ease",
            },
            ":active": {
              position: "relative",
              top: "2px",
            },
          }}
          variant="outlined"
          href="https://www.linkedin.com/in/washington-lopes-638836249/"
          target={"_blank"}
          startIcon={<Linkedin />}
          onClick={handleButton}
        >
          Linkedin
        </Button>
      </TabPanel>
    </Box>
  );
}
