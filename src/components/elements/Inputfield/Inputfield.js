import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import styles from "./Inputfield.module.css";
import classnames from "classnames";

import { Text } from "../../primitives";

class Inputfield extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  static propTypes = {
    /**
     * The label and placeholder of the inputfield
     */
    title: PropTypes.string.isRequired,
    /**
     * Wether the label is visible or not
     */
    hasLabel: PropTypes.bool,
  };

  static defaultProps = {
    hasLabel: true
  };

  render() {
    const { title, hasLabel } = this.props;

    return (
      <div className={classnames(styles.root)}>
        {hasLabel && <Text text={title} strong />}
        <input placeholder={"Add " + title.toLowerCase()} />
      </div>
    );
  }
}

export default Inputfield;
