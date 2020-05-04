import React, { PureComponent } from "react";
import styles from "./NotFound.module.css";
import classnames from "classnames";
import { Link } from "react-router-dom";

import { Text } from "../../primitives";
import { Button } from "../../elements";

class NotFound extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className={classnames(styles.root)}>
        <Text text={"I'm sorry, this page does not exist"} variant={"h3"} />
        <Link to={"/articles"}>
          <Button text={"Take me back"}/>
        </Link>
      </div>
    );
  }
}

export default NotFound;
