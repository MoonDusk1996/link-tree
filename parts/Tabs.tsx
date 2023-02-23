import { useState, useEffect } from "react";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import CustomizedButtons from "../components/CustomizedButtons";

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
    console.log(visitedLinks);
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
        >
          <Tab label="Social" {...a11yProps(0)} />
          <Tab label="Portfolio " {...a11yProps(1)} />
        </Tabs>
      </Box>

      <TabPanel value={value} index={0}>
        <CustomizedButtons
          text="instagram"
          href="https://www.instagram.com/moondusk1996/"
        />
        <CustomizedButtons
          text="Discord"
          href="https://discord.gg/AGfxJKmbKf"
        />


        <CustomizedButtons
          text="Email"
          href="mailto:washington.lopesdasilvafilho@gmail.com"
        />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <CustomizedButtons
          text="GitHub"
          href="https://github.com/MoonDusk1996"
        />
        <CustomizedButtons
          text="ArtStation"
          href="https://www.artstation.com/duski"
        />
        <CustomizedButtons
          text="Linkedin"
          href="https://www.linkedin.com/in/washington-lopes-638836249/"
        />
      </TabPanel>
    </Box>
  );
}
