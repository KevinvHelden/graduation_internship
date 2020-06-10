import React, { PureComponent } from "react";
import styles from "./App.module.css";
import classnames from "classnames";
import { Navigation, Hamburger } from "./components/elements";
import { Tablepage, NotFound } from "./components/pages";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import appData from "./appFixtures/data";
import tableData from "./components/collections/Table/Fixtures/data";

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      activeNavigation: false,
    };
  }

  toggleNav = () => {
    const {activeNavigation} = this.state;
    this.setState({
      activeNavigation: !activeNavigation
    });
  }

  render() {
    const { activeNavigation } = this.state;
    const { toggleNav } = this;
    return (
      <BrowserRouter>
        <div className={classnames(styles.App)}>
          <Navigation data={appData} active={activeNavigation} />
          <Hamburger animation={"spring"} activeColour={"light"} propsFunc={toggleNav} />
          <main className={classnames(styles.mainContent)}>
            <Switch>
              <Route exact path="/articles">
                <Tablepage title={"Articles"} data={tableData} />
              </Route>
              <Route exact path="*" component={NotFound} />
            </Switch>
          </main>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
