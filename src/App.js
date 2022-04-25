import styles from "./assets/styles/global.module.scss";
import Main from "./containers/Main";

function App() {
  return (
    <div className={styles["app"]}>
      <Main />
    </div>
  );
}

export default App;
