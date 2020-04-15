import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import styles from "./Button.module.css";
import classnames from "classnames";
import { Text } from "../../primitives";

class Button extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  static propTypes = {
    /**
     * The content in the button
     */
    text: PropTypes.node,
    /**
     * The selected variant of the button
     */
    variant: PropTypes.oneOf([
      "primary",
      "secondary",
      "success",
      "destructive",
      "ghost",
    ]),
  };

  static defaultProps = {
    text: "Button",
    variant: "primary",
  };

  render() {
    const { text, variant } = this.props;

    return (
      <button
        className={classnames(
          styles.root,
          { [styles.primary]: variant === "primary" },
          { [styles.secondary]: variant === "secondary" },
          { [styles.success]: variant === "success" },
          { [styles.destructive]: variant === "destructive" },
          { [styles.ghost]: variant === "ghost" }
        )}
      >
        <Text text={text} align={"center"} light strong />
      </button>
    );
  }
}

export default Button;
