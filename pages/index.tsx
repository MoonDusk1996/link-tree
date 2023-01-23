import ToogleThemeSwitch from "../components/ToogleThemeSwitch";
import styles from "../styles/Home.module.css";

import BasicTabs from "../parts/Tabs";
import Profile from "../parts/Profile";
import Footer from "../parts/foote";

function App() {
  return (
    <div className={styles.App}>
      <header className={styles.headerContainer}>
        <Profile />
      </header>
      <div className={styles.options}>
        <ToogleThemeSwitch />
      </div>
      <main className={styles.linksContainer}>
        <BasicTabs />
      </main>
      <footer className={styles.footerContainer}>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
