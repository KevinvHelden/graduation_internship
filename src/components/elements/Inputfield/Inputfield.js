import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import styles from "./Inputfield.module.css";
import classnames from "classnames";

import { Text } from "../../primitives";

class Inputfield extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value,
    };
    this.handleChange = this.handleChange.bind(this);
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
    /**
     * The value of the inputfield
     */
    value: PropTypes.string,
  };

  static defaultProps = {
    hasLabel: true,
    value: "",
  };

  //This function makes the inputfield editable after value is set by prop
  handleChange = (event) => {
    this.setState({ value: event.target.value });
  };

  render() {
    const { title, hasLabel, reference } = this.props;
    const { value } = this.state;

    return (
      <div className={classnames(styles.root)}>
        {hasLabel && <Text text={title} strong />}
        <input
          ref={reference}
          placeholder={"Add " + title.toLowerCase()}
          value={value}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default Inputfield;
