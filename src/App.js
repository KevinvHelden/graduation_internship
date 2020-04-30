import React from "react";
import styles from "./App.module.css";
import classnames from "classnames";
import { Navigation, Hamburger } from "./components/elements";
import { Tablepage } from "./components/pages";

import data from "./components/collections/Table/Fixtures/data";

function App() {
  return (
    <div className={classnames(styles.App)}>
      <Navigation />
      <Hamburger animation={"spring"} activeColour={"light"} />
      <main className={classnames(styles.mainContent)}>
        <Tablepage title={"Articles"} data={data}/>
      </main>
    </div>
  );
}

export default App;
