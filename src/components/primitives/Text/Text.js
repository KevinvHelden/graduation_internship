import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import "./Text.css";

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
     * The text strength
     */
    weight: PropTypes.oneOf(["light", "regular", "strong"]),
  };

  static defaultProps = {
    variant: "p",
    weight: "regular",
  };

  render() {
    const { text, variant, weight } = this.props;
    let ComponentType = variant;

    return (
      <ComponentType className={"text " + weight}>
        {text}
      </ComponentType>
    );
  }
}

export default Text;
