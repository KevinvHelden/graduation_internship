import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import styles from "./Textarea.module.css";
import classnames from "classnames";

import { Text } from "../../primitives";

class Textarea extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  static propTypes = {
    /**
     * The label and placeholder of the textarea
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
        <textarea placeholder={"Add " + title.toLowerCase()} />
      </div>
    );
  }
}

export default Textarea;
