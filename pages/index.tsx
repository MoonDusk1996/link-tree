import ToogleThemeSwitch from "../components/ToogleThemeSwitch";
import styles from "../styles/Home.module.css";
import Avatar from "@mui/material/Avatar";
import BasicTabs from "../parts/Tabs";

function App() {
  return (
    <div className={styles.App}>
      <header className={styles.headerContainer}>
        <div className={styles.avatar}>
          <Avatar
            sx={{ width: 100, height: 100 }}
            alt="Washington Lopes"
            src="https://avatars.githubusercontent.com/u/91294230?v=4"
          />
        </div>
        <div className={styles.name}>Washington Lopes</div>
        <div className={styles.descriptrion}>
          Desenvolvedor e artista digital
        </div>
      </header>
      <div className={styles.options}>
        <ToogleThemeSwitch />
      </div>
      <div className={styles.linksContainer}>
        <BasicTabs />
      </div>
    </div>
  );
}

export default App;
