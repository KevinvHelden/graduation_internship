import React from "react";
import styles from "./App.module.css";
import classnames from "classnames";
import { Text } from "./components/primitives";
import { Navigation, Searchbar, Tablerow } from "./components/elements";
import { Table } from "./components/collections";

function App() {
  return (
    <div className={classnames(styles.App)}>
      <Navigation />
      <div className={classnames(styles.mainContent)}>
        <Text text={"Articles"} variant={"h1"} />
        <Searchbar searchItems={["apples", "bananas"]} />
        <Table />
      </div>
    </div>
  );
}

export default App;
