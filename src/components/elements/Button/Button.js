import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import styles from "./Button.module.css";
import classnames from "classnames";
import { Text, Icon } from "../../primitives";

class Button extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
    this.buttonRef = React.createRef();
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
     * The button will be a small square with just the icon inside
     */
    square: PropTypes.bool,
    /**
     * The selected variant of the button
     */
    variant: PropTypes.oneOf([
      "primary",
      "secondary",
      "success",
      "edit",
      "destructive",
      "ghost",
      "word",
    ]),
    /**
     * An icon showed before the text in Button
     */
    iconBefore: PropTypes.node,
    /**
     * An icon showed after the text in Button
     */
    iconAfter: PropTypes.node,
    /**
     * The external function on the button
     */
    clickFunc: PropTypes.func,
  };

  static defaultProps = {
    text: "Button",
    variant: "primary",
    rounded: true,
    square: false,
  };

  componentDidMount() {
    const { clickFunc } = this.props;
    clickFunc && this.buttonRef.current.addEventListener("click", clickFunc);
  }

  render() {
    const {
      text,
      variant,
      disabled,
      rounded,
      square,
      iconBefore,
      iconAfter,
    } = this.props;
    const { buttonRef } = this;

    return (
      <button
        className={classnames(
          styles.root,
          { [styles.primary]: variant === "primary" },
          { [styles.secondary]: variant === "secondary" },
          { [styles.success]: variant === "success" },
          { [styles.edit]: variant === "edit" },
          { [styles.destructive]: variant === "destructive" },
          { [styles.ghost]: variant === "ghost" },
          { [styles.word]: variant === "word" },
          { [styles.rounded]: rounded },
          { [styles.square]: square },
          { [styles.hasIcon]: iconBefore || iconAfter }
        )}
        disabled={disabled}
        ref={buttonRef}
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
