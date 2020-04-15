import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import styles from "./Text.module.css";
import classnames from "classnames";

class Text extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  static propTypes = {
    /**
     * The text shown on the page
     */
    text: PropTypes.node.isRequired,
    /**
     * The text variant
     */
    variant: PropTypes.oneOf(["h1", "h2", "h3", "h4", "h5", "h6", "p"]),
    /**
     * Wether the text is bold
     */
    strong: PropTypes.bool,
    /**
     * Wether the text is mono
     */
    mono: PropTypes.bool,
    /**
     * Wether the text is white
     */
    light: PropTypes.bool,
    /**
     * The alignment of the text if it's not left
     */
    align: PropTypes.oneOf(["center", "right"]),
  };

  static defaultProps = {
    variant: "p",
    strong: false,
    mono: false,
    light: false,
  };

  render() {
    const { text, variant, strong, mono, align, light } = this.props;
    let ComponentType = variant;

    return (
      <ComponentType
        className={classnames(
          styles.root,
          { [styles.strong]: strong },
          { [styles.mono]: mono },
          { [styles.light]: light },
          { [styles.center]: align === "center" },
          { [styles.right]: align === "right" }
        )}
      >
        {mono ? text.toUpperCase() : text}
      </ComponentType>
    );
  }
}

export default Text;
