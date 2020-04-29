import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import styles from "./Button.module.css";
import classnames from "classnames";
import { Text, Icon } from "../../primitives";

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
     * The content in the button
     */
    rounded: PropTypes.bool,
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
    /**
     * An icon showed before the text in Button
     */
    iconBefore: PropTypes.node,
    /**
     * An icon showed after the text in Button
     */
    iconAfter: PropTypes.node,
  };

  static defaultProps = {
    text: "Button",
    variant: "primary",
    rounded: true,
  };

  render() {
    const { text, variant, disabled, rounded, iconBefore, iconAfter } = this.props;

    return (
      <button
        className={classnames(
          styles.root,
          { [styles.primary]: variant === "primary" },
          { [styles.secondary]: variant === "secondary" },
          { [styles.success]: variant === "success" },
          { [styles.destructive]: variant === "destructive" },
          { [styles.ghost]: variant === "ghost" },
          { [styles.rounded]: rounded },
          { [styles.hasIcon]: iconBefore || iconAfter }
        )}
        disabled={disabled}
      >
        {iconBefore && <Icon icon={iconBefore} />}
        <div className={classnames(styles.textContainer)}>
          <Text text={text} align={"center"} light strong />
        </div>
        {iconAfter && <Icon icon={iconAfter} />}
      </button>
    );
  }
}

export default Button;
