import React from "react";
import styles from "./App.module.css";
import classnames from "classnames";
import { Text } from "./components/primitives";
import { Navigation } from "./components/elements";
import { Tableview } from "./components/templates";

import data from "./components/collections/Table/Fixtures/data";

function App() {
  return (
    <div className={classnames(styles.App)}>
      <Navigation />
      <div className={classnames(styles.mainContent)}>
        <Text text={"Articles"} variant={"h1"} />
        <Tableview data={data} searchbar/>
      </div>
    </div>
  );
}

export default App;
