import React, { PureComponent, Fragment } from "react";
import PropTypes from "prop-types";
import styles from "./Tablepage.module.css";
import classnames from "classnames";
import { Text } from "../../primitives";
import { Tableview } from "../../templates";

class Tablepage extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  static propTypes = {
    /**
     * The data shown in the table
     */
    data: PropTypes.object.isRequired,
  };

  static defaultProps = {
    // data: null
  };

  render() {
    const { title, data } = this.props;

    return (
      <Fragment>
        <div className={classnames(styles.mainTitle)}>
          <Text text={title} variant={"h2"} />
        </div>
        <div className={classnames(styles.mainContent)}>
          <Tableview data={data} searchbar />
        </div>
      </Fragment>
    );
  }
}

export default Tablepage;
