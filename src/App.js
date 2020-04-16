import React from "react";
import styles from "./App.module.css";
import classnames from "classnames";
// import { Text, Icon } from "./components/primitives";
import { Navigation, Tablerow } from "./components/elements";
// import { Button } from "./components/elements";

function App() {
  return (
    <div className={classnames(styles.App)}>
      <Navigation />
      <div className={classnames(styles.mainContent)}>
        <Tablerow />
        <Tablerow />
        <Tablerow />
        <Tablerow />
        <Tablerow />
        <Tablerow />
      </div>
    </div>
  );
}

export default App;
