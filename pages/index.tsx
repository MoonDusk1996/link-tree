import ToogleThemeSwitch from "../components/ToogleThemeSwitch";
import styles from "../styles/Home.module.css";

import BasicTabs from "../parts/Tabs";
import Profile from "../parts/Profile";

function App() {
  return (
    <div className={styles.App}>
      <header className={styles.headerContainer}>
        <Profile />
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
